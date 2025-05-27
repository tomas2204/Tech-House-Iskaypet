'use client'
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { fetchUserTasks } from '@/utils/requests/userTasks';
import trashIcon from '@/assets/icons/trash_icon.svg';
import Button from '@/components/Common/Button';
import AddTaskModal from './addTaskModal';
import Loader from '@/components/Common/Loader';

const PAGE_SIZE = 10;

const UserTasks: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalTaskCreationState, setModalTaskCreationState] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Array<{ id: number; userId: number; title: string; description?: string; completed: boolean }>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleDeleteTask = useCallback((taskId: number) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  }, [setTasks, tasks]);

  const getData = useCallback(async () => {
    try {
      const response = await fetchUserTasks();
      setTasks(response);
    } catch (error) {
      console.error('Error fetching user tasks:', error);
    } finally {
      setIsLoading(false);
    }
  }, [setTasks]);

  const totalPages = useMemo(() => Math.ceil(tasks.length / PAGE_SIZE), [tasks]);
  const paginatedTasks = useMemo(
    () => tasks.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [tasks, currentPage]
  );

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (currentPage > 1 && paginatedTasks.length === 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [tasks, currentPage, paginatedTasks.length]);

  return (
    <div className='home__content'>
      <AddTaskModal
        modalTaskCreationState={modalTaskCreationState}
        setModalTaskCreationState={setModalTaskCreationState}
        tasks={tasks}
        setTasks={setTasks}
      />
      <p className='home__title'>Mis tareas</p>
      <div className='component'>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ul>
              {paginatedTasks.map((task) => (
                <li key={task.id} className="user-task">
                  <div className='user-task__content'>
                    <p className='user-task__title'>{task.title}</p>
                    <p className='user-task__subtitle'>{task.description || 'sin descripción'}</p>
                  </div>
                  <button
                    type="button"
                    className='user-task__delete-button'
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <Image src={trashIcon} alt="Delete Task" className='user-task__icon' />
                  </button>
                </li>
              ))}
            </ul>
            {totalPages > 1 && (
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`pagination__button ${(currentPage === i + 1 ? 'active' : '')}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
            <Button className='user-task__add-button' onClick={() => setModalTaskCreationState(true)}>
              Añadir tarea
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserTasks;
