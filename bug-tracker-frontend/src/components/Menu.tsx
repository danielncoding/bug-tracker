import React from 'react';

interface MenuProps {
    onMenuClick: (component: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onMenuClick }) => {
    return(
        <div id="div_menu_container">

            <div id="div_menu_layout">

                <div id="div_title">
                    <img className="img_bug" src="/src/assets/bug.svg" alt="Description of image"/>
                    <span id="span_menu_title">BUG TRACKER</span>
                </div>
                <div id="div_menu_buttons">
                    <button className="menu_button" onClick={() => onMenuClick('Dashboard')}>Dashboard</button>
                    <button className="menu_button" onClick={() => onMenuClick('BugList')}>Bug List</button>
                    <button className="menu_button" onClick={() => onMenuClick('NewBug')}>Add New Bug</button>
                    <button className="menu_button" onClick={() => onMenuClick('Ticket')}>Bug Info</button>
                    <button className="menu_button">Placeholder4</button>
                    <button className="menu_button" onClick={() => onMenuClick('Profile')}>Profile</button>
                </div>


            </div>

            <hr id="hr_menu"></hr>

        </div>
    );
}

export default Menu