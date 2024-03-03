import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="left">
          <h5>HELLO $GUEST</h5>
          <p>
            I’m MuhammadYusuf. <br /> Software Engineer from Central Asia.
          </p>
        </div>
        <div className="right">
          <div className="text">
            <div className="inner-text">
              <p>
                I’m currently studying <span className="php">PHP</span> and
                <span className="js"> JavaScript</span> <br /> Still, feel free
                to reach out to see if we can
                <br /> collaborate in some capacity.
              </p>
            </div>
          </div>
          <div className="second">
            <div className="services">
              <h6>SERVICES</h6>
              <p>Web Development</p>
            </div>
            <div className="contact"></div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
