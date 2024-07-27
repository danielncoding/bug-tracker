interface Props {
    switchMenu: string
  }

const Menu = ({switchMenu}: Props) => {
    return(
        <div id="div_menu_container">

            <div id="div_menu_layout">

                <div id="div_title">
                    <img id="img_bug" src="/src/assets/bug.svg" alt="Description of image"/>
                    <span id="span_menu_title">BUG TRACKER</span>
                </div>

                <button className="menu_button" onClick={switchMenu("menu_dashboard")}>Dashboard</button>
                <button className="menu_button">Placeholder1</button>
                <button className="menu_button">Placeholder2</button>
                <button className="menu_button">Placeholder3</button>
                <button className="menu_button">Placeholder4</button>

            </div>

            <hr id="hr_menu"></hr>

        </div>
    );
}

export default Menu