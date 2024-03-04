import { ReactNode } from 'react';
import style from './style.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={`${style.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export { Button };
