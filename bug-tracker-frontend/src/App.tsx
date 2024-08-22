import {FC, useState} from 'react'

import Menu from './components/Menu.tsx'
import BugList from './components/BugList.tsx';
import Dashboard from './components/Dashboard.tsx';
import Ticket from './components/Ticket.tsx';
import NewBug from './components/NewBug.tsx';
import Profile from './components/Profile.tsx';
import Login from './components/Login.tsx';

const App: React.FC = () => {

    const [activeComponent, setActiveComponent] = useState<string>('Dashboard');
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const handleMenuClick = (component: string) => {
        setActiveComponent(component);
    };

    const handleLoginClick = (username: string, password: string) => {
        if (username == "admin" && password == "admin") {
            setLoggedIn(true);
        }
        else {
            console.log('Login failed')
        }
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Dashboard':
                return <Dashboard />;
            case 'BugList':
                return <BugList />;
            case 'NewBug':
                return <NewBug />;
            case 'Ticket':
                return <Ticket />;
            case 'Profile':
                return <Profile />;
            default:
                return <Dashboard />;
        }
    };



    return(
        <div id="div_main_container">
            { !loggedIn ? <Login onLoginClick={handleLoginClick}/> : 
                <>
                    <Menu onMenuClick={handleMenuClick} />
                    {renderComponent()}
                </>
            }
        </div>
    );
}

export default App