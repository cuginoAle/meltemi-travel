import style from './style.module.css';

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}
const TextArea = ({ label, ...rest }: TextAreaProps) => {
  return (
    <label className={style.root}>
      <span>{label}</span>
      <textarea {...rest} />
    </label>
  );
};

export { TextArea };
