import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
          <img src={igniteLogo} alt="Green logo with a slight transparency composed of 2 connected triangles" />    
      <p>Ignite Feed</p>
    </header>
  );
}