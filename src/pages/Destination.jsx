import "./destination.css";
import diani from "../assets/diani.jpg";
import lvictoria from "../assets/lavic.jpg";
import hellsgate from "../assets/hells.jpg";
import kariandusi from "../assets/meuseum.jpg";
import images from "../assets/images.jpg";
import zanzibar from "../assets/zanzibar.jpg";
import southafrica from "../assets/southafrica.jpg";
import barbados from "../assets/barbados.jpg";
import venice from "../assets/venice.jpg";
import paris from "../assets/paris.jpg";
//import destination from "../assets/destination.mp4";

const Destination = () => {
  return (
    <div className="destinationp">
    <section className="destinationpage">
      <div className="destinationh">
        <div className="txtdes">
          <h2> welcome to our </h2>
          <p>destinations</p>
        </div>
        </div>
    </section>
      <section className="destinations">
        <div className="one">
          <h2 className="ourdestination">our destinations</h2>
        </div>
        <div className="featurecontainers">
          <div className="destinationitem2">
            <img src={diani} alt="diani" className="img" />
            <div className="destinationtext">
              <h2>diani</h2>
              <p>
              The picturesque Diani Beach is amongst the most scenic places to visit in Kenya, where you can relax and unwind and take in the serenity of nature. Surrounded by the vast Indian Ocean, this mesmerising beach
              </p>
              <p> individual price:25,000</p>
              <p> price:50,000 </p>
              <button className="learnmore">learn more</button>
            </div>
          </div>

          <div className="destinationitem1">
            <img src={lvictoria} alt="lake victoria" className="img" />
            <div className="destinationtext">
              <h2>lake victoria</h2>
              <p>
              Lake Victoria is also known as Victoria Nyanza and is the largest lake in Africa making it one of the best places to visit in Kenya. It was named Lake Victoria, by British explorer John Hanning Speke. The vast lake is spread over an area of 69,484 km and preserves over 200 species of fish.
              </p>
              <p> individual price:22,000 </p>
              <p> price:45000 </p>
              <button className="learnmore">learn more</button>
            </div>
          </div>

          <div className="destinationitem2">
            <img src={hellsgate} alt="hells gate" className="img" />
            <div className="destinationtext">
            <h2 className="ht">hells gate</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              corporis blanditiis id odit corrupti eaque culpa facilis harum
              suscipit qui
            </p>
            <p>individual price:15,000</p>
            <p>group price:30000 </p>
            <button className="learnmore">learn more</button>
          </div>
          </div>

          <div className="destinationitem1">
            <img src={kariandusi} alt="kariandusi meuseum" className="img" />
            <div className="destinationtext">
              <h2>kariandusi meuseum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                corporis blanditiis id odit corrupti eaque culpa facilis harum
                suscipit qui
              </p>
              <p>individual price: 20,000</p>
              <p>group price:40,000 </p>
              <button className="learnmore">learn more</button>
            </div>
          </div>

          <div className="destinationitem2">
            <img src={images} alt="dubai" className="img" />
            <div className="destinationtext">
              <h2>dubai</h2>
              <p>
                one of our most popular international destinations .take a trip to the desert
              </p>
              <p>individual price: 350,000 </p>
              <p>group price:600,000 </p>
              <button className="learnmore">learn more</button>
            </div>
          </div>

          <div className="destinationitem1">
            <img src={paris} alt="paris" className="img" />
            <div className="destinationtext">
              <h2>paris</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                corporis blanditiis id odit corrupti eaque culpa facilis harum
                suscipit qui
              </p>
                <p>individual price: 250,000</p>
              <p>group price:700,000 </p>
              <button className="learnmore">learn more</button>
            </div>
          </div>

          <div className="destinationitem2">
            <img src={venice} alt="venice" className="img" />
            <div className="destinationtext">
              <h2>venice</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                corporis blanditiis id odit corrupti eaque culpa facilis harum
                suscipit qui
              </p>
              <p> individual price:350,000 </p>
              <p>group price:800,000 </p>
              <button className="learnmore">learn more</button>
            </div>
          </div>

          <div className="destinationitem1">
            <img src={barbados} alt="" className="img" />
            <div className="destinationtext">
            <h2>barbados</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                corporis blanditiis id odit corrupti eaque culpa facilis harum
                suscipit qui
              </p>
              <p> individual price:300,000</p>
              <p>group price: 900,000 </p>
              <button className="learnmore">learn more</button>
            </div>
          </div>

          <div className="destinationitem2">
            <img src={southafrica} alt="" className="img" />
            <div className="destinationtext">
              <h2>south africa</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                corporis blanditiis id odit corrupti eaque culpa facilis harum
                suscipit qui
              </p>
              <p> individual price:200,000</p>
              <p>group price:400,000 </p>
              <button className="learnmore">learn more</button>
            </div>
          </div>

          <div className="destinationitem1">
            <img src={zanzibar} alt="" className="img" />
            <div className="destinationtext">
              <h2>zanzibar</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                corporis blanditiis id odit corrupti eaque culpa facilis harum
                suscipit qui
              </p>
              <p> individual price:70,000 </p>
              <p>group price:150,000 </p>
              <button className="learnmore">learn more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
