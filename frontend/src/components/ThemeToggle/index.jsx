import { useState } from "react";

const ToggleTheme = ()=>{
    
    const [theme, setTheme] = useState('light');

    const handleToggleTheme = ()=>{
        console.log("Toggle clicked")
        const themeChoosen = theme === 'light'? 'dark' : 'light'; 
        setTheme(themeChoosen);
        document.documentElement.setAttribute('data-theme', themeChoosen);
    }

    return( 
        <button onClick={handleToggleTheme}>
            Toggle Theme
        </button>
    )
}

export default ToggleTheme;