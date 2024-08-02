const Dashboard = () => {
    return(
        <div id="main_container">
            <div id="top_section">
                <div className="div_section" id="top_left_section">
                    <div className="stat_box" id="total_tickets">
                        <img src="/src/assets/total_tickets.png" alt="Total Tickets"/>
                        <p className="stat_text">Total Tickets:</p>
                        <span className="stat_counter" id="total_count">0</span>
                    </div>
                    <div className="stat_box" id="open_tickets">
                        <img src="/src/assets/open_tickets.png" alt="Open Tickets"/>
                        <p className="stat_text">Open Tickets:</p>
                        <span className="stat_counter" id="open_count">0</span>
                    </div>
                    <div className="stat_box" id="closed_tickets">
                        <img src="/src/assets/closed_tickets.png" alt="Closed Tickets"/>
                        <p className="stat_text">Closed Tickets:</p>
                        <span className="stat_counter" id="closed_count">0</span>
                    </div>
                </div>
                <div className="div_section" id="top_right_section">
                    <div className="div_dashboard_title">
                        <h3 className="dashboard_title">Tickets by Priority</h3>
                    </div>
                    <table id="table_tickets_by_priority">
                        <tbody>
                            <tr>
                                <td>High</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Medium</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Low</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="bottom_section">
                <div className="div_section" id="bottom_left_section">
                    <div className="div_dashboard_title">
                        <h3 className="dashboard_title">Tickets by Status</h3>
                    </div>
                    <div className="piecharts_container_top">
                        <div className="pie-chart-container">
                            <div className="pie-chart-inner">
                                <p>1%</p>
                            </div>
                        </div>
                        <div className="pie-chart-container">
                            <div className="pie-chart-inner">
                                <p>2%</p>
                            </div>
                        </div>
                    </div>
                    <div className="piecharts_container_bottom">
                        <div className="pie-chart-container">
                            <div className="pie-chart-inner">
                                <p>3%</p>
                            </div>
                        </div>
                        <div className="pie-chart-container">
                            <div className="pie-chart-inner">
                                <p>4%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div_section" id="bottom_right_section">
                    <div className="div_dashboard_title">
                        <h3 className="dashboard_title">Tickets by Owner</h3>
                    </div>
                    <ul id="owner_list">
                        <li><p className="p_tickets_by_owner_name">Alice</p><progress value="70" max="100"></progress> 70</li>
                        <li><p className="p_tickets_by_owner_name">Dave</p><progress value="50" max="100"></progress> 50</li>
                        <li><p className="p_tickets_by_owner_name">Tyler</p><progress value="30" max="100"></progress> 30</li>
                        <li><p className="p_tickets_by_owner_name">Luka</p><progress value="20" max="100"></progress> 20</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard