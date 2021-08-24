import React from "react";
import Card from "./common/Card";

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img
          className="homeImage"
          src="https://lh3.googleusercontent.com/proxy/ffuCNMIqt4N_lbvL9s4Jib8mHYHy2LKqVbMRddqXxT0zhT5OZU8_5_lju83zp1qcJyJw1i3tq4DyQS0xMg2Pszd7_NDX26y7_BsLN2PuJoZZuPyj3WdBIaRYqhEuQgaJIa8c3PHxaBhSPAU"
          alt=""
        />
      </div>
      <div className="d-flex justify-content-center gap-4">
        <Card
          category="tech"
          image="https://m.media-amazon.com/images/I/41UcDmmR7jL.jpg"
          price="190"
          title="New Phone"
          key="1"
        />
        <Card
          category="tech"
          image="https://m.media-amazon.com/images/I/41UcDmmR7jL.jpg"
          price="190"
          title="New Phone"
          key="1"
        />
        <Card
          category="tech"
          image="https://m.media-amazon.com/images/I/41UcDmmR7jL.jpg"
          price="190"
          title="New Phone"
          key="1"
        />
        <Card
          category="tech"
          image="https://m.media-amazon.com/images/I/41UcDmmR7jL.jpg"
          price="190"
          title="New Phone"
          key="1"
        />
        <Card
          category="tech"
          image="https://m.media-amazon.com/images/I/41UcDmmR7jL.jpg"
          price="190"
          title="New Phone"
          key="1"
        />
      </div>
    </div>
  );
};

export default Home;
