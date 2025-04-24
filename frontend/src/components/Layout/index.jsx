import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Layout = ()=> {
    const handleLogout = () => {
        localStorage.removeItem('authToken'); 
        window.location.href = '/login';
    }

    return (
        <div className="app-container">
        <header>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <button onClick={handleLogout}>Sair</button>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <span>creative journey</span>
        </footer>
    </div>
    )
}

export default Layout;