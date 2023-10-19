import Card from "./Card";
import Ratings from "./Ratings";

import starIcon from "../assets/images/icon-star.svg";
import classes from "./RateForm.module.css";
import { useState } from "react";

const RateForm = ({ onSubmit }) => {
  const [rate, setRate] = useState(null);

  const submitHandler = () => {
    onSubmit(rate);
  };

  const onChooseHandler = (rate) => {
    setRate(rate);
  };

  return (
    <Card>
      <div className={classes.star}>
        <img src={starIcon} alt="star icon" />
      </div>
      <h2 className={classes.card__header}>How did we do?</h2>

      <div className={classes.card__desc}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>

      <Ratings onChoose={onChooseHandler} />

      <button onClick={submitHandler} className={classes.card__btn}>
        Submit
      </button>
    </Card>
  );
};

export default RateForm;
