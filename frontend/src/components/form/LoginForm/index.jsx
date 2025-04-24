import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

import styles from './styles.module.css';

const LoginForm = () =>{

    const navigate = useNavigate(); 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const tokenString = localStorage.getItem("authToken");
        if (tokenString) {
            try {
                const token = JSON.parse(tokenString);
                if (token.exp > new Date().getTime()) {
                    navigate("/dashboard");
                } else {
                    localStorage.removeItem("authToken");
                }
            } catch(e) {
                console.log("Invalid token format:", e);
                localStorage.removeItem("authToken");
            }
        }
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        // SIMULATING A LOGIN REQUEST
        if(email == "jean@gmail.com" && password == "123456"){
            alert("Login successful");
        } else {
            alert("Invalid credentials");
            return;
        }

        const token = {
            user: email,
            exp: new Date().getTime() + 60 * 60 * 1000, // Token expires in 1 hour
            iat: new Date().getTime() // Issued at time
        };

        localStorage.setItem('authToken', JSON.stringify(token));

        const data = { email, password };
        console.log(data);
        
        navigate('/dashboard');
    }

    return(
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <label className={styles.loginLabel} htmlFor="email">Email</label>
            <input className={styles.loginInput} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="user@example.com" required/>
            <label className={styles.loginLabel} htmlFor="password">Password</label>
            <input className={styles.loginInput} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="∗∗∗∗∗∗∗∗∗" required/>
            <button className={styles.loginButton} type="submit">Login</button>
        </form>
    )
}

export default LoginForm;