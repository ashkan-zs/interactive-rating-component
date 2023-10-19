import image from "../assets/images/illustration-thank-you.svg";
import Card from "./Card";

import classes from "./ThankYouBox.module.css";

const ThankYouBox = ({rate}) => {
  return (
    <Card content='center'>
      <img className={classes.image} src={image} alt="thank you" />
      <div className={classes.rate}>You selected {rate} out of 5</div>
      <h2 className={classes.header}>Thank you!</h2>
      <div className={classes.text}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </div>
    </Card>
  );
};

export default ThankYouBox;
