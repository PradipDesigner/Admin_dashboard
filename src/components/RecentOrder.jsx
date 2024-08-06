import React from "react";
import RECENT_ORDERS from "../data";

const RecentOrder = ({ header }) => {
  const RecentData = RECENT_ORDERS;
  return (
    <>
      <h6 className="card-header-title">{header}</h6>
      <div className="table-responsive">
      <table className="table custom-table m-0">
        <thead>
          <tr>
            <th scope="col">Customer</th>
            <th scope="col">Order No.</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {RecentData.map((item) => (
            <tr key={item.id}>
              <td>
                <span className="avtar">
                  {item.userImg !== "" ? (
                    <img
                      src={item.userImg}
                      alt={item.id}
                      className="img-fluid"
                    />
                  ) : (
                    <i className="bi bi-person"></i>
                  )}
                </span>
                {item.name}
              </td>
              <td>{item.orderNo}</td>
              <td>${item.finalAmount}</td>
              <td>
                <span
                  className={`badge ${
                    item.status === "success" ? "bg-success" : "bg-danger"
                  }`}
                >
                  {item.status === "success" ? "Success" : "Pending"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default RecentOrder;
