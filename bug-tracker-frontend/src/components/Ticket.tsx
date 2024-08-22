const Ticket = () => {

    return(
        <>
        <div id="ticket_interface">
            <div id="left_section">
                <div className="left_block">
                    <label>Ticket ID</label>
                    <input type="text" id="ticket_id" value="0000001" readOnly/>
                </div>
                <div className="left_block">
                    <label>Assigned to</label>
                    <select id="assigned_to">
                        <option selected>Daniel Tester</option>
                        <option >Daniel Tester2</option>
                        <option >Daniel Tester3</option>
                        <option >Daniel Tester4</option>
                        <option >Daniel Tester5</option>
                        <option >Daniel Tester6</option>
                    </select>
                </div>
                <div className="left_block">
                    <label>Project(s)</label>
                    <select id="projects"></select>
                </div>
                <div className="left_block">
                    <label>Status</label>
                    <select id="status">
                        <option selected>In progress</option>
                        <option >Awaiting feedback</option>
                        <option >Postponed</option>
                        <option >Resolved</option>
                        <option >Closed</option>
                    </select>
                </div>
                <div className="left_block">
                    <label>Priority</label>
                    <select id="priority">
                        <option >Priority 1</option>
                        <option >Priority 2</option>
                        <option >Priority 3</option>
                        <option selected>Priority 4</option>
                    </select>
                </div>
                <div className="left_block">
                    <label>Due Date</label>
                    <input type="date" id="due_date" value="2024-08-25"/>
                </div>
                <div className="left_block" id="tags_section">
                    <label>Tags</label>
                    <div id="tags_list">
                        <div className="tag_item">Tag1 <span className="remove_tag">X</span></div>
                        <div className="tag_item">Tag2 <span className="remove_tag">X</span></div>
                        <div className="tag_item">Tag3 <span className="remove_tag">X</span></div>
                    </div>
                    <div id="tags_menu">
                        <select id="priority">
                            <option selected>Select tag</option>
                        </select>
                        <button id="add_tag">+Add</button>
                    </div>
                    <button id="save_ticket">Save</button>
                </div>
            </div>
            <div id="right_section">
                <div id="description_section">
                    <h3 id="description_title">Description</h3>
                    <p id="description_text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                    </p>
                </div>
                <div id="communication_response_section">
                    <h3>Your Response</h3>
                    <textarea id="communication_response_input"></textarea>
                    <button>Send</button>
                </div>
                <div id="communication_previous_responses_section">
                    <h3>Previous comments</h3>
                    <div id="communication_previous_responses">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eveniet? Fugit nostrum ea deleniti natus voluptatum corrupti repellendus minus repudiandae commodi neque aliquid minima aperiam a officiis, placeat animi distinctio!

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Ticket