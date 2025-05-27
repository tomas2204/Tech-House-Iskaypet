import React from 'react';
import './styles.scss';

import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`btn__default ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;