import React from "react";
import { NavLink } from "react-router-dom";
import product from "./book.png";

const AdList = ({ author, title, price, bookImage, category }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="product-item">
        <div className="pi-pic">
          <div className="fixedDiv">
            <img
              src={bookImage ? bookImage : product}
              alt=""
              className="fixedImg"
            />
          </div>
          <div className="sale pp-sale">{category}</div>
          <div className="icon">
            <i className="icon_heart_alt"></i>
          </div>
          <ul>
            <li className="w-icon active">
              <a href="#">
                <i className="icon_bag_alt"></i>
              </a>
            </li>
            <li className="quick-view">
              <NavLink to={{ pathname: "/movie", title: {title : title}}}>
               + Quick View
              </NavLink>
            </li>
            <li className="w-icon">
              <a href="#">
                <i className="fa fa-random"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="pi-text">
          <div className="catagory-name">{author}</div>
          <a href="#">
            <h5>{title}</h5>
          </a>
          <div className="product-price">&#8377;{price}.00</div>
        </div>
      </div>
    </div>
  );
};

export default AdList;
