import styles from './styles.module.css';

import Logo from '../../assets/icons/logo-original.svg'
import LoginForm from '../../components/form/LoginForm';
import SocialLoginButtons from '../../components/auth/SocialLoginButtons';

const Login = () => {
    return(
        <div className={styles.loginContainer}>
            <img className={styles.loginLogo} src={Logo} alt="Logo"/>
            <h1 className={styles.loginTitle}>Sign in to CJourney</h1>
            <div className={styles.loginBox}>
                <LoginForm/>
                <div className={styles.loginSeparator}>
                    <span>or</span>
                </div>
                <footer className={styles.loginFooter}>
                    <SocialLoginButtons actionType="Login"/>
                    <span>
                        Don't have an account? <a href="/signup">Sign up</a>
                    </span>
                </footer>
            </div>
        </div>
    )
}

export default Login;