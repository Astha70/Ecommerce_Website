import Layout from './../components/Layout/Layout'
import React from 'react'
import { useCart } from '../context/cart'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
    const [cart, setCart] = useCart();
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

     //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
    //   return total.toLocaleString("en-IN", {
    //     style: "currency",
    //     currency: "INR",
    //   });
      return total;
    } catch (error) {
      console.log(error);
    }
  };

     //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <Layout>
            <div className='container  pt-5'>
                <div className='row p-4'>
                    <div className='col-md-12'>
                        <h1 className='text-center bg-dark text-light p-2 mb-1'>
                            {`Hello ${auth?.token && auth?.user?.name}`}
                        </h1>
                        <h4 className='text-center'>
                            {cart?.length ? `You have ${cart.length} items in your cart ${auth?.token ? "" : "please login to checkout"}` : "Your Cart is Empty"}
                        </h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='row'>
                            {
                                cart?.map(p => (
                                    <div className='row mb-2 p-3 card flex-row'>
                                        <div className='col-md-4'>
                                        <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  width={"150px"}
                  height={"150px"}
                />
                                        </div>
                                        <div className='col-md-8'>
                                            <p className='fw-bold'>{p.name}</p>
                                            <p>{p.description.substring(0,30)}</p>
                                            <p>Price: Rs. {p.price}</p>
                                            <button className='btn btn-danger' onClick={() => removeCartItem(p._id)}>Remove</button>
                                        </div>

                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h2>Cart Summary</h2>
                        <p>Total | Checkout | Payment</p>
                        <hr/>
                        <h4>Total: Rs. {totalPrice()} </h4>
                        {auth?.user?.address ? (
                <>
                  <div className="mb-3">
                    <h6>Current Address: {auth?.user?.address}</h6>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() =>
                        navigate("/login", {
                          state: "/cart",
                        })
                      }
                    >
                      Please Login to checkout
                    </button>
                  )}
                </div>
              )}

              <div >
                <button className='btn btn-dark'>Order Now</button>
              </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage