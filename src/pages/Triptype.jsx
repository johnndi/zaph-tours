import family from "../assets/family4.jpg";
import menengai from "../assets/adventure.jpg";
import luxury from "../assets/luxuryy.jpg";
import "./triptype.css";
import wellness from "../assets/wellness.jpg";
import safari from "../assets/safari.jpg";
import cultural from "../assets/culturalt.jpg";
import culinary from "../assets/culinary.jpg";
import beach from "../assets/beach.jpg";
import eco from "../assets/eco.jpg";
import honey from "../assets/honeymoon.jpg";
const Triptype = () => {
  return (
    <div className="tripp">
      <section className="triphero">
        <div className="triptitle">
          <h2>checkout our packages</h2>
          <p>get a trip that suits you</p>
        </div>
      </section>
      <section className="tripsec">
        <div className="sectitle">
          <h2>we offer the following packages</h2>
        </div>

        <div className="tripcontain">
          <div className="tripitem">
            <img src={family} />
            <div className="triptext">
              <h2>family trips</h2>
              <p>
              nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim soda fermentum iaculis
              </p>
              <p>price may vary with family size</p>
              <br />
              <h3 className="price">:kes 35000 for a family of 4</h3>
            </div>
          </div>

          <div className="tripitem">
            <img src={honey} />
            <div className="triptext">
              <h2>honeymoon</h2>
              <p>nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim soda fermentum iaculis</p>
              <h3 className="price">:kes 35000 </h3>
            </div>
          </div>

          <div className="tripitem">
            <img src={menengai} />
            <div className="triptext">
              <h2>adventure</h2>
              <p>nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim soda fermentum iaculis</p>
              <h3 className="price">:kes 35000</h3>
            </div>
          </div>

          <div className="tripitem">
            <img src={cultural} />
            <div className="triptext">
              <h2>cultural</h2>
              <p>nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim soda fermentum iaculis</p>
              <h3 className="price">:kes 35000 for a family of 4</h3>
            </div>
          </div>

          <div className="tripitem">
            <img src={safari} />
            <div className="triptext">
              <h2>wildlife safaris</h2>
              <p>nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim soda fermentum iaculis</p>
              <h3 className="price">:kes 35000 </h3>
            </div>
          </div>

          <div className="tripitem">
            <img src={eco} />
            <div className="triptext">
              <h2>eco-tours</h2>
              <p>nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim soda fermentum iaculis</p>
              <h3 className="price">:kes 35000</h3>
            </div>
          </div>

          <div className="tripitem">
            <img src={luxury} />
            <div className="triptext">
              <h2>luxury vacations</h2>
              <p>nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim soda fermentum iaculis</p>
              <h3 className="price">:kes 35000 </h3>
            </div>
          </div>

          <div className="tripitem">
            <img src={beach} />
            <div className="triptext">
              <h2>beach holidays</h2>
              <p>nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim soda fermentum iaculis</p>
              <h3 className="price">:kes 35000 for a family of 4</h3>
            </div>
          </div>

          <div className="tripitem">
            <img src={wellness} />
            <div className="triptext">
              <h2>wellnesss retreats</h2>
              <p>nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim soda fermentum iaculis</p>
            </div>
          </div>

          <div className="tripitem">
            <img src={culinary} />
            <div className="triptext">
              <h2>culinary tours</h2>
              <p>eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim soda fermentum iaculis</p>
              <h3 className="price">:kes 35000</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Triptype;
