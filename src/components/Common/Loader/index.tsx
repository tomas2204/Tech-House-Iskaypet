import React from 'react';
import './styles.scss';

const Loader: React.FC = () => (
  <div className='container' aria-label="Loading" role="status">
    <div className='spinner' />
  </div>
);

export default Loader;