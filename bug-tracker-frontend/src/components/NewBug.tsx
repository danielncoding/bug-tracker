const NewBug = () => {
    return(
        <>
        <div id="div_new_bug_menu_container">
            <div id="div_new_bug_options_container">
                <div className="div_new_bug_options">
                    <label>Priority</label>
                    <select id="priority">
                        <option >Priority 1</option>
                        <option >Priority 2</option>
                        <option >Priority 3</option>
                        <option selected>Priority 4</option>
                    </select>
                </div>
                <div className="div_new_bug_options">
                    <label>Due Date</label>
                    <input type="date" id="due_date" value="2024-08-25"/>
                </div>
            </div>
            <div id="div_bug_description_container">
                    <h3>Add the bug's description</h3>
                    <div id="input_bug_description" contentEditable="true"/>
            </div>
            <div>
                <button id="create_bug">Create item</button>
            </div>
        </div>
        </>
    )
}

export default NewBug