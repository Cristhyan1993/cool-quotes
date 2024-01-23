import React from "react";
import Feed from '../components/Feed'

const Home = () => {
  return (
  <>
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center" >
        Discover & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center"> Quotes</span>
      </h1>
      <p className="desc text-center">
        Cool Quotes is online environment where users can
        discover, create and share their favourite quotes
      </p>
      <Feed/>
    </section>
   </>
  );
};

export default Home;
