const Loader = () => {
  return (
    <div id="overlay">
      <div className="custom-loader">
        <div className="custom-loader__dot"> </div>
        <div className="custom-loader__dot"> </div>
        <div className="custom-loader__dot"> </div>
        <div className="custom-loader__dot"> </div>
        <div className="custom-loader__dot"> </div>
        <div className="custom-loader__dot"> </div>
        <div className="custom-loader__dot"> </div>
        <div className="custom-loader__dot"> </div>
      </div>
      <label className="custom-loader__label"> Please wait...</label>
    </div>
  );
};

export default Loader;

