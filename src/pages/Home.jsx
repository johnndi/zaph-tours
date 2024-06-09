import "./Home.css";
import Testimonials from "./Testimonials/Testimonials";
import diani from "../assets/diani.jpg";
import zaph from "../assets/about.jpeg";
import mtkenya from "../assets/mt kenya.jpg";
import lnakuru from "../assets/lake nakuru national park.jpg";
import ruwenzori from "../assets/place.jpg";
import tsavo from "../assets/tsavo.jpg";
import nairobi from "../assets/nairobi.jpg";
const Home = () => {
  return (
    <div className="homep">
      <section className="hero">
        <div className="heroTxt">
          <h2 className="herotxt1">best safaris and adventures </h2>
          <p className="herotxt1">about your vacation</p>
        </div>
      </section>

      <section className="aboutus">
        <div>
          <h2 className="abouttitle">about us</h2>
        </div>
        <div className="aboutcontainer">
          <div className="about">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              corporis blanditiis id odit corrupti eaque culpa facilis harum
              suscipit qui et error similique iure maxime maiores officia rem
              
            </p>
            <img src={zaph} alt="about us image" className="aboutimg" />
          </div>
        </div>
      </section>

      <section className="featureddestination">
        <div>
          <h2 className="ourdestination">popular destinations</h2>
        </div>
        <div className="featurecontainer">
          <div className="destinationitem">
            <img src={mtkenya} alt="" className="destinationimg" />
            <h2>mt kenya</h2>
            <p>
              Spread over a vast area of 715 square km, Mount Kenya National
              Park was established in 1949, to protect Mount Kenya and its
              surrounding biodiversity.
            </p>
            <h3 className="price">price:30000 </h3>
          </div>

          <div className="destinationitem">
            <img src={ruwenzori} alt="" className="destinationimg" />
            <h2>mt ruwenzori</h2>
            <p>
              Spread over a vast area of 715 square km, Mount Kenya National
              Park was established in 1949, to protect Mount Kenya and its
              surrounding biodiversity.
            </p>

            <h3 className="price"> price:30000 </h3>
          </div>

          <div className="destinationitem">
            <img src={tsavo} alt="" className="destinationimg" />
            <h2>tsavo</h2>
            <p>
              Tsavo National Park is one of the oldest and largest parks in
              Kenya, covering an area of 13,747 square km. This park was
              established in 1948. A large part of this park is covered by
              semi-arid grassland and savannah.
            </p>

            <h3 className="price">price:30000 </h3>
          </div>

          <div className="destinationitem">
            <img
              src={nairobi}
              alt="about us image"
              className="destinationimg"
            />
            <h2>nairobi national park</h2>
            <p>facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio</p>

            <h3 className="price"> price:30000 </h3>
          </div>

          <div className="destinationitem">
            <img src={diani} alt="about us image" className="destinationimg" />
            <h2>coastal kenya</h2>
            <p>
              The picturesque Diani Beach is amongst the most scenic places to
              visit in Kenya, where you can relax and unwind and take in the
              serenity of nature. Surrounded by the vast Indian Ocean, this
              mesmerising beach
            </p>

            <h3 className="price"> price:30000 </h3>
          </div>

          <div className="destinationitem">
            <img
              src={lnakuru}
              alt="about us image"
              className="destinationimg"
            />
            <h2>lake nakuru</h2>
            <p>
              Lake Nakuru is a beautiful lake of Kenya that is largely known for
              its humongous variety of pink flamingos. A large number of birds’
              throng on the lake every day.
            </p>

            <h3 className="price"> price:30000 </h3>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <Testimonials />
      </section>

      <section className="newsletter">
        <div className="newstitle">
          <h2 className="newsletter">sign up to recieve our newsletter</h2>
          <div className="registerform">
            <form>
              <div className="formtitle">
                <h3>sign up </h3>
              </div>
              <div className="register">
                <label htmlFor="name">fullname </label>
                <input
                  type="text"
                  id="name"
                  className="register"
                  placeholder="full name"
                />
              </div>
              <div className="register">
                <label htmlFor="email">email address</label>
                <input
                  id="email"
                  placeholder="your email"
                  className="register"
                />
              </div>
              <button className="submit">sign up</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
