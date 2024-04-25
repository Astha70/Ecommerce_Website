import React from 'react'
import Layout from '../components/Layout/Layout'
import { useSearch } from '../context/search'

const SearchProduct = () => {
    const [values, setValues] = useSearch();

  return (
    <Layout title={'Search results'}>
        <div className='container m-20 pt-5'>
            <div className='text-center pt-3'>
                <h1>Search Results</h1>
                <h6>{values?.results.length < 1 ? "No Product Found" : `Found ${values?.results.length}`}</h6>
                <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "16rem" }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="card-body bg-light">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">Rs. {p.price}</p>
                  <button className="btn btn-outline-primary btn-rounded btn-sm ms-1">More Details</button>
                  <button className="btn btn-dark btn-rounded btn-sm ms-3">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
            </div>
        </div>
    </Layout>
  )
}

export default SearchProduct