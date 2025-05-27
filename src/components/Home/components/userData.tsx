'use client'
import Button from '@/components/Common/Button';
import React, { useEffect, useState } from 'react';

const UserData: React.FC = () => {
  const [userSaved, setUserSaved] = useState<{name: string, email: string, phone: string} | null>(null);
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(data));
    console.log('Datos guardados:', data);
    setUserSaved(data);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('userData');
      if (savedData) {
        setUserSaved(JSON.parse(savedData));
      }
    }
  }, []);

  return (
    <>
      {userSaved ?
        <div className='user__form__data'>
          <h2 className='user__form__title'>Usuario</h2>
          <div>
            <p><strong>Nombre:</strong> {userSaved?.name}</p>
            <p><strong>Email:</strong> {userSaved?.email}</p>
            <p><strong>Teléfono:</strong> {userSaved?.phone}</p>
          </div>
        </div>
      : <form className='user__form' onSubmit={handleSubmit}>
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
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                required
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="form-floating">
              <label htmlFor="name">Teléfono</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Teléfono"
                required
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </div>
          </div>
          <Button type='submit'>
            Guardar
          </Button>
        </form>
      }
    </>
  );
};

export default UserData;