import Image from 'next/image';
import styles from './style.module.css';
import logo from '@/assets/logo.webp';
const Hero = () => {
  return (
    <div className="relative flex justify-center items-center">
      <Image
        src="https://source.unsplash.com/random/1580x600/?greece&20islands?sig=19"
        width={1280}
        height={600}
        alt=""
      />

      <div className={styles.copyWrapper}>
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="Meltemi travel"
            width={80}
            height={80}
            className="shadow-ale rounded-full"
          />
          <h1 className={styles.title}>Meltemi travel</h1>
        </div>
        <p className={styles.subTitle}>...la tua prossima vacanza in Grecia.</p>
      </div>
    </div>
  );
};

export { Hero };
