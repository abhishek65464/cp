import classes from "./ImageScroll.module.css";

const ImgScroll = (props) => {
  return (
    <div className="container">
      <div className="slider">
        <div className="slide">
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <div className="slide">
          <img src={props.imgSrc} alt={props.imgAlt}/>
        </div>
        <div className="slide">
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <div className="slide">
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
      </div>
    </div>
  );
};

export default ImgScroll;
