import Image from 'next/image';
import styles from './style.module.css';
import logo from '@/assets/logo.webp';
import hero from '@/assets/hero.webp';
const Hero = () => {
  return (
    <div className="relative flex justify-center items-center max-w-screen-xl mx-auto ">
      <div className={styles.imageWrapper}>
        <Image
          src={hero}
          fill
          alt=""
          sizes="(max-width: 400px) 100vw, (max-width: 640px) 200vw, 1280px"
        />
      </div>

      <div className={styles.copyWrapper}>
        <div className="flex gap-3 lg:gap-4 items-center">
          <Image
            src={logo}
            className={styles.logo}
            alt="Meltemi travel"
            sizes="(max-width: 400px) 40px, (max-width: 768px) 80px, 80px"
          />
          <h1 className={styles.title}>Meltemi travel</h1>
        </div>
        <p className={styles.subTitle}>...la tua prossima vacanza in Grecia.</p>
      </div>
    </div>
  );
};

export { Hero };
