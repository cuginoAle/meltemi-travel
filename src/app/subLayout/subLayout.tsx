import logo from '@/assets/logo.webp';
import setting from 'content/settings.json';
import Image from 'next/image';
import Link from 'next/link';
import { BackButton } from './backButton';

interface SubLayoutProps {
  children: React.ReactNode;
}
const SubLayout = ({ children }: SubLayoutProps) => {
  return (
    <main>
      <div className=" bg-primary-900 border-b border-primary-800">
        <div className="max-w-screen-xl mx-auto">
          <Link
            href="/"
            className=" gap-3 lg:gap-4 items-center p-2 inline-flex"
          >
            <Image
              src={logo}
              className="w-8 shadow-logo_small rounded-full"
              alt="Meltemi travel"
              sizes="32px"
            />
            <h1 className={`text-primary-500 text-2xl font-bold`}>
              {setting.title}
            </h1>
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto bg-white">
        <BackButton />
      </div>
      {children}
    </main>
  );
};

export { SubLayout };
