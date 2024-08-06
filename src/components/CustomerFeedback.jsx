import React from "react";
import Star from "./Star";
import { INISTIAL_CUSTOMERFEEDBACK } from "../data";
const CustomerFeedback = ({header}) => {
  const initial_data = INISTIAL_CUSTOMERFEEDBACK
  return (
    <>
    <h6 className="card-header-title">{header}</h6>
    <div className="list-group list-group-flush customer-feedback-group">
      {initial_data.map((data) => (
        <a href="#" className="list-group-item list-group-item-action px-0 py-2 py-md-3" key={data.id}>
          <div className="d-flex w-100 mb-1">
            <span className="avtar">
              <img src={data.customerImg} alt={data.id} className="avtar" />
            </span>
            <h6 className="m-0 customer-name">{data.name}</h6>
          </div>
          <div className="rating">
            {[...Array(5)].map((star, index) => (
              <Star key={index} filled={index < data.rating} />
            ))}
          </div>
          <p>{data.discription}</p>
        </a>
      ))}
    </div>
    </>
  );
};

export default CustomerFeedback;
