import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

export default function Dashboard() {
  const userImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp";

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        <section className="widgetcontainer">
          <WidgetItem percent={40} amount={true} value={3400000} heading="Revenue" color="rgb(0,115,255)"/>
          <WidgetItem percent={-14} amount={false} value={400} heading="Users" color="rgb(0,198,202)"/>
          <WidgetItem percent={80} amount={false} value={23000} heading="Transactions" color="rgb(255,196,0)"/>
          <WidgetItem percent={30} amount={false} value={1000} heading="Products" color="rgb(76,0,255)"/>
        </section>
      </main>
    </div>
  );
}

const WidgetItem = ({ heading, value, percent, color, amount }) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp /> + {percent}%{" "}
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {percent}%{" "}
          </span>
        )}
      </div>
      <div className="widgetCircle" style={{background: `conic-gradient(${color} ${Math.abs(percent)/100*360}deg, white 0)`}}>
        <span style={{color}}>{percent}%</span>
      </div>
    </article>
  );
};
