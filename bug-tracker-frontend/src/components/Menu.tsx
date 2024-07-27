interface Props {
    switchMenu: string
  }

const Menu = () => {
    return(
        <div id="div_menu_container">

            <div id="div_menu_layout">

                <div id="div_title">
                    <img id="img_bug" src="/src/assets/bug.svg" alt="Description of image"/>
                    <span id="span_menu_title">BUG TRACKER</span>
                </div>

                <button className="menu_button">Dashboard</button>
                <button className="menu_button">Bug List</button>
                <button className="menu_button">Add New Bug</button>
                <button className="menu_button">Placeholder3</button>
                <button className="menu_button">Placeholder4</button>

            </div>

            <hr id="hr_menu"></hr>

        </div>
    );
}

export default Menu