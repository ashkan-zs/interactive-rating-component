
import Footer from "./components/Footer";
import { useState } from "react";


import ThankYouBox from "./components/ThankYouBox";
import RateForm from "./components/RateForm";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rate, setRate] = useState(null);

  const submitHandler = (rate) => {
    setIsSubmitted(true);
    setRate(rate);
  };

  return (
    <>
      {!isSubmitted && <RateForm onSubmit={submitHandler} />}
      {isSubmitted && <ThankYouBox rate={rate} />}
      <Footer />
    </>
  );
};

export default App;
