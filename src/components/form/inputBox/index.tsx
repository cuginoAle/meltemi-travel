import style from './style.module.css';

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
}
const InputBox = ({ label, ...rest }: InputBoxProps) => {
  return (
    <label className={style.root}>
      <span>{label}</span>
      <input {...rest} />
    </label>
  );
};

export { InputBox };
