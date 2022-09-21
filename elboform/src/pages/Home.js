import React from "react";
import ElboEntryForm from "../Components/ElboEntryForm";

const Home = () => {
  return (
    <div
      id="home"
      style={{
        background: `url(${process.env.PUBLIC_URL}/images/promocontent.png) center center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <ElboEntryForm />
    </div>
  );
};

export default Home;
