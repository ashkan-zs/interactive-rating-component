import { useState } from "react";
import classes from "./Ratings.module.css";

const Ratings = ({ onChoose }) => {
  const [selectedRate, setSelectedRate] = useState(null);

  const rateClickHandler = (rate) => {
    setSelectedRate(rate);
    onChoose(rate);
  };

  return (
    <div className={classes.ratings}>
      {[1, 2, 3, 4, 5].map((rate) => (
        <button
          onClick={() => rateClickHandler(rate)}
          className={`${classes["rate-btn"]} ${
            selectedRate === rate ? classes.selected : ""
          }`}
        >
          {rate}
        </button>
      ))}
    </div>
  );
};

export default Ratings;
