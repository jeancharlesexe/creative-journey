import styles from './styles.module.css';

import GithubLogo from '../../../assets/icons/github-black-logo.svg';
import GoogleLogo from '../../../assets/icons/google-original-logo.svg';
import MicrosoftLogo from '../../../assets/icons/microsoft-original-logo.svg';


const SocialLoginButtons = (props)=>{

    const handleSocialAuth = (provider)=>{
        alert(`${props.actionType} with ${provider}`)
    }
    
    return(
        <div className={styles.socialLoginButtons}>
            <a href="#" onClick={() => handleSocialAuth("github")}>
                <img src={GithubLogo} alt={`${props.actionType} with GitHub`}/>
            </a>
            <a href="#" onClick={() => handleSocialAuth("google")}>
                <img src={GoogleLogo} alt={`${props.actionType} with GitHub`}/>
            </a>
            <a href="#" onClick={() => handleSocialAuth("microsoft")}>
                <img src={MicrosoftLogo} alt={`${props.actionType} with GitHub`}/>
            </a>
        </div>
    )
}

export default SocialLoginButtons;