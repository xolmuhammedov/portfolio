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
            <div className="second-inner">
              <p>
                I am trying to learn new things everyday i also want to have
                more friends from foreign countries, I am a good friend with
                anyone <span id="contact">contact me.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="text">
          <h1 id="happines">Happines is in simpilicity.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
