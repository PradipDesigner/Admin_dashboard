import React from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import RecentOrder from "../components/RecentOrder";
import CustomerFeedback from "../components/CustomerFeedback";
import BarChart from "../components/ActivityChart";
import DoughnutChart from "../components/RevenueGoalChart";
import RevenueGoalChart from "../components/RevenueGoalChart";
import ActivityChart from "../components/ActivityChart";

const HomePage = () => {
  const title = "Dashboard";
  const goalPercentage = 75; // Example percentage
  return (
    <Container>
      <h3>{title}</h3>
      <div className="row">
        <div className="col-md-8">
        <div className="top-card-group">
            <Card>
              <div className="mini-card">
                <div className="icon-lg bg-primary">
                  <i className="bi bi-basket"></i>
                </div>
                <span className="title">Total Orders</span>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">75</h5>
                  <span className="text-success" style={{ fontSize: "12px"}}>
                    <i className="bi bi-caret-up-fill"></i>
                    <small className="ms-1">3%</small>
                  </span>
                </div>
              </div>
            </Card>
            <Card>
              <div className="mini-card">
                <div className="icon-lg bg-success">
                  <i className="bi bi-bag-heart-fill"></i>
                </div>
                <span className="title">Total Delivered</span>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">70</h5>
                  <span className="text-danger" style={{ fontSize: "12px" }}>
                    <i className="bi bi-caret-down-fill"></i>
                    <small className="ms-1">3%</small>
                  </span>
                </div>
              </div>
            </Card>
            <Card>
              <div className="mini-card">
                <div className="icon-lg bg-danger">
                <i className="bi bi-bag-x-fill"></i>                
                </div>
                <span className="title">Total Cancelled</span>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">05</h5>
                  <span className="text-success" style={{ fontSize: "12px" }}>
                    <i className="bi bi-caret-up-fill"></i>
                    <small className="ms-1">5%</small>
                  </span>
                </div>
              </div>
            </Card>
            <Card>
              <div className="mini-card">
                <div className="icon-lg bg-violet">
                  <i className="bi bi-basket"></i>
                </div>
                <span className="title">Total Revenue</span>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">$12k</h5>
                  <span className="text-danger" style={{ fontSize: "12px" }}>
                    <i className="bi bi-caret-down-fill"></i>
                    <small className="ms-1">3%</small>
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-md-4 d-flex">
        <Card>
            <RevenueGoalChart goalPercentage={goalPercentage} />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <Card>
            <ActivityChart/>
          </Card>
          <Card>
            <RecentOrder header="Recent Orders" />
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <div className="d-flex mb-3 custom-list">
              <span className="icon-lg rounded-circle me-2 bg-danger">
                <i className="bi bi-crosshair"></i>
              </span>
              <span className="title">Goals</span>
              <a href="#" className="icon-sm ms-auto ">
                <i className="bi bi-chevron-right"></i>
              </a>
            </div>

            <div className="d-flex mb-3 custom-list">
              <span className="icon-lg rounded-circle me-2 bg-primary">
                <i className="bi bi-crosshair"></i>
              </span>
              <span className="title">Popular Dishes</span>
              <a href="#" className="icon-sm ms-auto ">
                <i className="bi bi-chevron-right"></i>
              </a>
            </div>

            <div className="d-flex mb-3 custom-list">
              <span className="icon-lg rounded-circle me-2 bg-dark-blue">
                <i className="bi bi-crosshair"></i>
              </span>
              <span className="title">Menu</span>
              <a href="#" className="icon-sm ms-auto ">
                <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          </Card>
          <Card>
            <CustomerFeedback header="Customer's feedback" />
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
