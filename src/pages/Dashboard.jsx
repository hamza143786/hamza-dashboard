import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reusable/SingleCard";
import MileChart from "../components/charts/MileChart";
import { Tooltip, PieChart as RechartsPieChart, Pie, Cell } from "recharts";


const Dashboard = () => {

  const cardObj = {
    title: "Earning",
    totalNumber: "$750k",
    icon: "ri-bar-chart-line",
    sideIcon: "ri-refund-2-fill",
    color: "#22DD22",
    gain: "↑37.8%",
    time: "this month",
  };
  const randomObj = {
    title: "Orders",
    totalNumber: "$550k",
    icon: "ri-bar-chart-line",
    sideIcon: "ri-article-line",
    color: "#FF0000",
    gain: "↓37.8%",
    time: "this month",
  };
  const niceObj = {
    title: "Balance",
    totalNumber: "$999k",
    icon: "ri-bar-chart-line",
    sideIcon: "ri-wallet-2-fill",
    color: "#22DD22",
    gain: "↑40%",
    time: "this month",
  };
  const heilObj = {
    title: "Total Sales",
    totalNumber: "$100k",
    icon: "ri-bar-chart-line",
    sideIcon: "ri-shopping-cart-2-fill",
    color: "#FF0000",
    gain: "↓11.9%",
    time: "this week",
  };

  //Pie Chart Data
  const data = [
    { name: "Customers", value: 200 },
    { name: "Non-Using Customers", value: 800 },
    { name: "Customers", value: 900 },
  ];
  const COLORS = ["#725cff", "#dadada", "#01d293"];

  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <div className="dashboard_cards">
          <SingleCard item={cardObj} />
          <SingleCard item={randomObj} />
          <SingleCard item={niceObj} />
          <SingleCard item={heilObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h2 className="chart_head">Overview</h2>
            <p className="chart_para">Monthly Earning</p>
            <MileChart />
          </div>

          <div className="customer">
            <div className="customer_data">
              <RechartsPieChart width={300} height={400}>
                <Tooltip cursor={false} />
                <Pie
                  data={data}
                  cx={120}
                  cy={200}
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
               
              </RechartsPieChart>
            </div>
          </div>
        </div>

        <div className="products-wrapper">
          <div className="products-card">
            <div className="products-top">
              <div className="top-left">
                <h5 className="products-head">Products Sell</h5>
              </div>
              <div className="top-right">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>

            <div className="products-right">
              <div className="products-catg">
                <div className="products-items">
                <h4>Product Name</h4>
                <img src="https://www.patanjaliayurved.net/assets/product_images/400x500/1690005727SmallCardamom25g1.png" alt="" width="50" height="50"/>
                </div>
                <div className="products-stock">
                  <h4>Stock</h4>
                  <p>60 in stock</p>
                </div>
                <div className="products-price">
                  <h4>Price</h4>
                  <p>$70</p>
                </div>
                <div  className="products-sales">
                  <h4>Total Sales</h4>
                  <p>20</p>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;


