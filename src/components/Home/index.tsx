'use client'
import React, { useMemo } from 'react';
import "./styles.scss"
import Navbar from '../Common/Navbar';
import Sections from '../Common/Sections'
import { useSearchParams } from 'next/navigation';
import UserData from './components/userData';
import UserTasks from './components/userTasks';
import { ComponentType } from './interface';


export const steps: Record<string, ComponentType> = {
  'Mis datos': UserData,
  'Mis tareas': UserTasks,
  'Mis devoluciones': () => <h1>Mis devoluciones</h1>,
  'Mis comunicaciones': () => <h1>Mis comunicaciones</h1>,
  'Mis mejores amigos': () => <h1>Mis mejores amigos</h1>
};

const Home: React.FC = () => {
  const stepKeys = useMemo(() => Object.keys(steps), []);
  const defaultSection = useMemo(() => stepKeys[0], [stepKeys]);
  const searchParams = useSearchParams();

  const sectionParam = searchParams.get('section');
  const activeSection = sectionParam && stepKeys.includes(sectionParam)
    ? sectionParam
    : defaultSection;

  const ActiveComponent = steps[activeSection];

  return (
    <div className='home'>
      <Navbar />
      <Sections steps={stepKeys} />
      {typeof ActiveComponent === 'string' ? ActiveComponent : <ActiveComponent />}
    </div>
  );
};

export default Home;
