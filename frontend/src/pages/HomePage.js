import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import bannerImg from '../images/banner3.jpeg';

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/categories`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length)
      filterProduct();
  }, [checked, radio]);

  // get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filter`, {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Layout title={"Solistice - shop now"}>
      <img src={bannerImg} className="d-block w-100" height={"600px"} alt="banner 1" />

      <div className="row p-5">
  <div className="col-md-2">
    <h5>Category</h5>
    <div className="list-group mb-3">
      {categories?.map((c) => (
        <label key={c._id} className="list-group-item d-flex justify-content-between align-items-center">
          <input
            type="checkbox"
            onChange={(e) => handleFilter(e.target.checked, c._id)}
          />
          {c.name}
          <span className="badge bg-primary rounded-pill">{/* Count (optional) */}</span>
        </label>
      ))}
    </div>

    <h5 className="mt-4">Price</h5>
    <div className="list-group mb-3">
      <Radio.Group onChange={(e) => setRadio(e.target.value)}>
        {Prices?.map((p) => (
          <label key={p._id} className="list-group-item d-flex justify-content-between align-items-center">
            <Radio value={p.array}>{p.name}</Radio>
          </label>
        ))}
      </Radio.Group>
    </div>
          <div className="d-flex flex-column pt-4">
            <button className="btn btn-danger reset-button mb-3" onClick={() => window.location.reload()}>Reset</button>
          </div>

        </div>

        <div className="col-md-9 ">
          <h1 className="text-center fw-bold">Our Products</h1>
          <h6 className="text-center ">New Collection Designs</h6>
          <div className="d-flex flex-wrap mt-3">
            {products?.map((p) => (
              <div key={p._id} className="card m-3 border-0" style={{ width: "15rem" }}>
                <div className="card-img-container">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top zoom-on-hover"
                    alt={p.name}
                    style={{ height: "200px", width: "100%" }}
                  />
                </div>
                <div className="card-body bg-light" onClick={() => navigate(`/product/${p.slug}`)}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text text-muted small">Rs. {p.price}</p>
                  </div>
                  <p className="card-text">{p.description.substring(0, 25)}...</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-dark btn-rounded " onClick={() => {
                      setCart([...cart, p])
                      localStorage.setItem('cart', JSON.stringify([...cart, p]))
                      toast.success("Item Added on Cart");
                    }}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="m-2 p-3">
            {products && products.length < total && (
              <button className="btn btn-warning text-white" onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}>
                {loading ? "Loading..." : "Load More.."}
              </button>
            )}
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default HomePage