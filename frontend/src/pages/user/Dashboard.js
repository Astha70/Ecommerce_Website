import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Solistice"}>
      <div className="container-flui m-3 p-3 dashboard pt-5">
        <div className="row pt-3">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h1>User Details</h1>
              <p>UserName: {auth?.user?.name}</p>
              <p>Email: {auth?.user?.email}</p>
              <p>Address: {auth?.user?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;