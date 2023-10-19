import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.attribution}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
      Coded by{" "}
      <a href="https://www.frontendmentor.io/profile/ashkan-zs">
        {" "}
        Ashkan Zarifian
      </a>
      .
    </div>
  );
};

export default Footer;
