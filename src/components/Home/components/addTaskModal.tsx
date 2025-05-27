'use client'
import React, { useState } from 'react';
import Button from '@/components/Common/Button';
import Modal from '@/components/Common/Modal';
import { AddTaskModalProps } from '../interface';

const AddTaskModal: React.FC<AddTaskModalProps> = ({ modalTaskCreationState, setModalTaskCreationState, tasks, setTasks }) => {
  const [data, setData] = useState({
    name: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      userId: tasks.length + 1,
      title: data.name,
      description: data.description,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setModalTaskCreationState(false);
    setData({ name: '', description: '' });
  };

  return (
    <Modal isOpen={modalTaskCreationState} onClose={() => setModalTaskCreationState(false)}>
      <form onSubmit={handleSubmit}>
        <h3 className='form-title'>Añadir tarea</h3>
        <div>
          <div className="form-floating">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nombre"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="form-floating">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              placeholder="Description"
              required
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
            />
          </div>
        </div>
        <div className='form-buttons'>
          <Button type='submit' className='cancel-button' onClick={() => setModalTaskCreationState(false)}>
            Cancelar
          </Button>
          <Button type='submit'>
            Guardar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
