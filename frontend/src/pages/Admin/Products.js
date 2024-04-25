import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    //getall products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            toast.error("Someething Went Wrong");
        }
    };

    //lifecycle method
    useEffect(() => {
        getAllProducts();
    }, []);


    return (
        <Layout>
            <div className="row dashboard pt-5">
                <div className="col-md-3 ">
                    <AdminMenu />
                </div>
                <div className="col-md-9 p-3">
                    <h1 className="text-center">All Products List</h1>
                    <div className="d-flex flex-wrap">
                    {products?.map((p) => (
                        <Link
                            key={p._id}
                            to={`/dashboard/admin/product/${p.slug}`}
                            className="product-link"
                        >
                            <div className="card m-2 border-0" style={{ width: "15rem", height: "300px" }}>
                                <img
                                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top"
                                    alt={p.name}
                                    style={{ height: "200px", width: "100%" }}
                                />
                                <div className="card-body bg-light">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Products