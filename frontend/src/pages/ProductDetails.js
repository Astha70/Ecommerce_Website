import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';

const ProductDetails = () => {
    // const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = useState([]);
    const [relatedProduct, setRelatedProduct] = useState([]);

    // intial details
    useEffect(() => {
        if (params?.slug)
            getProduct()
    }, [params?.slug]);

    //getProduct
    const getProduct = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/single-product/${params.slug}`
            );
            setProduct(data?.product);
              getSimilarProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
            console.log(error);
        }
    };

    //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <Layout>
            <div className="row container product-details mt-2 p-3 pt-5">
                <div className="col-md-6 pt-4">
                    <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                        className="card-img-top"
                        alt={product.name}
                        height="350"
                        width="100%"
                    />
                </div>
                <div className="col-md-6 product-details-info pt-4 ">
                    <h1 className="text-center fw-bold">Product Details</h1>
                    <hr />
                    <h3 className='fw-bold'>{product.name}</h3>
                    <h5 className='fw-light'> {product.description}</h5>
                    <p className='fw-bold fs-5'>
                        Current Price :
                        Rs. {product?.price}
                    </p>
                    <h6 className=''>Category : {product?.category?.name}</h6>
                    <button class="btn btn-outline-primary ms-1 pt-2 mt-2 mb-4">ADD TO CART</button>
                </div>
            <hr />
        </div>
        <div className='row p-3' >
            <h2>Similar Products</h2>
            {relatedProduct.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProduct?.map((p) => (
            <div className="card m-2 border-0" style={{ width: "15rem" }} key={p._id} >
               <div className="card-img-container">
              <img
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name} style={{ height: "200px", width: "100%" }}
              />
              </div>
              <div className="card-body bg-light">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-title card-price">
                    Rs. {p.price}
                  </p>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  {/* <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button> */}
                  <button
                  className="btn btn-dark ms-1">
                  ADD TO CART
                </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
    </Layout >
  );
};

export default ProductDetails