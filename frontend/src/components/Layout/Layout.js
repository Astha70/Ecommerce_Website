import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, decription, author, keywords }) => {
  // Layout.defaultProps = {
  //   title: "Solistice - shop now",
  //   description: "mern stack project",
  //   keywords: "mern,react,node,mongodb",
  //   author: "Astha Singh",
  // };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={decription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />

    </>

  );

};


export default Layout;
