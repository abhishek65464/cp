import classes from "./LandingPage.module.css";
import React, { Fragment } from "react";
import Header from "./header/Header";
import Button from "./UI/Button";
import ImageScroll from './UI/ImgScroll';

const LandingPage = () => {
  return (
    <Fragment>
      <div className={classes.landBck}>
        <Header />
        <div className={classes.lanCont}>
          <div className={classes.midCont}>
            <h1>Product journey made transparent</h1>
            <p>
              Lorem ipsum dolor sit amett optio ratione sed porro nobis totam
              iste soluta quo fugit dolorem.
            </p>
            <form >
              <input type="text" placeholder="Speak with our expert team" />
              <Button type="button">Schedule a call</Button>
            </form>
            <ImageScroll ></ImageScroll>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
