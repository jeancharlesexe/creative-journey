import styles from './styles.module.css';

import { Link } from 'react-router-dom';
import ToggleTheme from '../../components/ThemeToggle';

const Home = ()=>{
    return(
        <div className={styles.home}>
            <h1 className={styles.title}>Here it is home page</h1>
            <Link to="/login" className={styles.link}>Login</Link>
            <ToggleTheme/>
        </div>
    )
}

export default Home;