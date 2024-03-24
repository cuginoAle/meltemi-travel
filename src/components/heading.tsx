// import { Grandstander } from 'next/font/google';

interface Props {
  children: React.ReactNode;
  className?: string;
}

// const titleFont = Grandstander({
//   variable: '--font-grandstander',
//   subsets: ['latin'],
// });

const Heading = ({ children, className = '' }: Props) => {
  return (
    <h3
      className={`${className}  text-3xl md:text-5xl  mt-8 font-bold text-primary-500`}
    >
      {children}
    </h3>
  );
};

export { Heading };
