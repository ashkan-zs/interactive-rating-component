import classes from "./Card.module.css";

const Card = ({ content, children }) => {
  const cardClasses = `${classes.card} ${ content === 'center' ? classes.center : ''}`;
  return <div className={cardClasses}>{children}</div>;
};

export default Card;
