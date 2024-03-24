'use client';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      className="text-primary-500 before:content-['\27BD'] before:text-xl before:rotate-180 gap-2 items-center p-2 inline-flex"
    >
      Indietro
    </button>
  );
};

export { BackButton };
