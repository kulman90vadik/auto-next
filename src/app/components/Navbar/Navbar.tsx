'use client'
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';
import { navigationLinks } from '../../data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {navigationLinks.map(link => {
            return (
              <li className={styles.item} key={link.href}>
                <Link className={`${styles.link} ${link.href === pathName ? styles.active : styles.link
                  }`}
                  href={link.href}
                >
                  {link.lebel}
                </Link>
              </li> 
            )
          })}
      </ul>
    </nav>
  );
}
 
export default Navbar;