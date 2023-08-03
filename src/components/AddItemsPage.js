import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./AddItemsPage.css";
import Rasgulla from "../images/rasgulla.png"
import SideBar from "./SideBar";

const AddItemsPage = () => {
  // Dummy data for items
  const items = [
    {
      id: 1,
      name: "sweet",
      price: 10.99,
      image: "item1.jpg",
    },
    {
      id: 2,
      name: "rasgulla",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 3,
      name: "jamun",
      price: 7.99,
      image: "item3.jpg",
    },
    {
      id: 1,
      name: "sweet",
      price: 10.99,
      image: "item1.jpg",
    },
    {
      id: 2,
      name: "rasgulla",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 3,
      name: "jamun",
      price: 7.99,
      image: "item3.jpg",
    },
    {
      id: 1,
      name: "sweet",
      price: 10.99,
      image: "item1.jpg",
    },
    {
      id: 2,
      name: "rasgulla",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 3,
      name: "jamun",
      price: 7.99,
      image: "item3.jpg",
    },
    {
      id: 1,
      name: "sweet",
      price: 10.99,
      image: "item1.jpg",
    },
    {
      id: 2,
      name: "rasgulla",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 3,
      name: "jamun",
      price: 7.99,
      image: "item3.jpg",
    },
    // Add more items as needed
  ];

  return (
    <div className="itemlist-page">
      <div className="shopping-sidenav">
        <SideBar/>
        {/* Sidebar content */}
        {/* You can add shopping cart, categories, filters, etc. */}
      </div>
      <div className="itemlist-container">
        {items.map((item) => (
          <div key={item.id} className="itemlist-item">
            <img src={Rasgulla} alt={item.name}/>
            <div className="itemlist-item-details">
              <div className="itemlist-item-name">{item.name}</div>
              <div className="itemlist-item-price">${item.price.toFixed(2)}</div>
            <div className="itemlist-item-quantity">Qty : 10kg</div>
            </div>
            <i class="fa-light fa-circle-plus"/>
          </div>
        ))}
      </div>
      {/* Show more button */}
      {/* <button className="show-more-button">Show More</button> */}
    </div>
  );
};

export default AddItemsPage;
