import {FC, useState} from 'react'

import Menu from './components/Menu.tsx'
import BugList from './components/BugList.tsx';
import Dashboard from './components/Dashboard.tsx';


const App = () => {

    const [activeMenu, setActiveMenu] = useState("menu_dashboard");


    const switchMenu = (menu: string) => {
        setActiveMenu(menu);
    };

    return(
        <div id="div_main_container">
            <Menu></Menu>
            <Dashboard></Dashboard>
        </div>
    );
}

export default App