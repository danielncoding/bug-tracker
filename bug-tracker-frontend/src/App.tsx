import {FC, useState} from 'react'

import Menu from './components/Menu.tsx'

const App = () => {

    const [activeMenu, setActiveMenu] = useState("menu_dashboard");


    const switchMenu = (menu: string) => {
        setActiveMenu(menu);
    };

    return(
        <div id="div_main_container">
            <Menu switchMenu={switchMenu}></Menu>
            <div>
                Test
            </div>
        </div>
    );
}

export default App