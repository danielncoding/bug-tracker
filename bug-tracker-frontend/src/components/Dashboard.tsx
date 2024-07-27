const Dashboard = () => {
    return(
        <div id="div_dashboard_container">
            
            <div id="div_dashboard_upper">

                <div className="div_dashboard_upper_box">
                    Your team's tickets
                </div>
                <div className="div_dashboard_upper_box">
                    Project tickets
                </div>
                <div className="div_dashboard_upper_box">
                    Your tickets
                    <table className="table_generic">
                        <tr>
                            <th className="th_100px">Ticket ID</th>
                            <th className="th_100px">Project</th>
                            <th className="th_100px">Priority</th>
                            <th className="th_100px">Due Date</th>   
                        </tr>
                        <tr>
                            <td className="th_100px">1</td>
                            <td className="th_100px">OpenAI</td>
                            <td className="th_100px">Prio 1</td>
                            <td className="th_100px">2024-08-21</td>
                        </tr>
                    </table>
                </div>

            </div>

        </div>
    );
}

export default Dashboard