import React from 'react';
import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li>Home</li>
          <li>Reports</li>
          <li>Analytics</li>
          {/* Add more sidebar links/icons here */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation Bar */}
        <div className="navbar">
          <input type="text" placeholder="Search..." />
          {/* Add more navbar items here */}
        </div>

        {/* Dashboard Widgets/Charts */}
        <div className="widgets">
          <div className="widget">
            <h3>Sales Overview</h3>
            <BarChartComponent />
          </div>
          <div className="widget">
            <h3>Monthly Trends</h3>
            <LineChartComponent />
          </div>
          <div className="widget">
            <h3>Customer Segments</h3>
            <div className="chart-container">
              <PieChartComponent />
              <div className="download-icon">
                <a href="#" download>
                  <p className='download'>Download</p>
                </a>
              </div>
            </div>
          </div>
          {/* Add more widgets as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
