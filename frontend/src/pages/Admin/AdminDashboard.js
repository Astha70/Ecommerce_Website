import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from "../../context/auth"

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={'Dashboard - Solitice'}>
        <div className="container-fluid m-3 p-3 dashboard pt-5">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu/>
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h2>Admin Details</h2>
              <p> Admin Name : {auth?.user?.name}</p>
              <p> Admin Email : {auth?.user?.email}</p>
              <p> Admin Contact : {auth?.user?.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard