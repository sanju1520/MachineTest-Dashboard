import React from 'react';
import "./Dashboard.css";
import Adinsight from '../Images/Adinsight.png';

const Dashboard = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Campaigns</th>
            <th>Clicks</th>
            <th>Cost</th>
            <th>Conversions</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cosmetics</td>
            <td>712</td>
            <td>USD 4,272</td>
            <td>8</td>
            <td>USD 16,568</td>
          </tr>
          <tr>
            <td>Serums</td>
            <td>3,961</td>
            <td>USD 27,331</td>
            <td>115</td>
            <td>USD 362,526</td>
          </tr>
          <tr>
            <td>Facewash</td>
            <td>9,462</td>
            <td>USD 76,831</td>
            <td>123</td>
            <td>USD 266,800</td>
          </tr>
          <tr>
            <td>Shampoos</td>
            <td>439</td>
            <td>USD 2,151</td>
            <td>5</td>
            <td>USD 11,029</td>
          </tr>
          <tr>
            <td>Conditioners</td>
            <td>1,680</td>
            <td>USD 3,864</td>
            <td>49</td>
            <td>USD 175,245</td>
          </tr>
          <tr>
            <td>Facewash2</td>
            <td>4,978</td>
            <td>USD 29,370</td>
            <td>189</td>
            <td>USD 623,106</td>
          </tr>
          <tr>
            <td>Total</td>
                  <td>26,510</td>
                  <td>USD 1,43,819</td>
                  <td>489</td>
                  <td>USD 15,73,563</td>
                </tr>
              </tbody>
            </table>
            <img src={Adinsight} className="App-logo" alt="logo" />
      </div>
  );
};

export default Dashboard;
