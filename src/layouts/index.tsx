import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/table">Search Table</Link>
        </li>
        <li>
          <Link to="/form">Form Page</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
