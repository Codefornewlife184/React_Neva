/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [experience, setExperience] = useState(0);
  const [tonsOfMeat, setTonsOfMeat] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [meatProducts, setMeatProducts] = useState(0);

  useEffect(() => {
    const maxCount1 = 23;
    const maxCount2 = 450;
    const maxCount3 = 350;
    const maxCount4 = 32;

    const interval = setInterval(() => {
      setExperience((prevExperience) =>
        prevExperience < maxCount1 ? prevExperience + 5 : maxCount1
      );
      setTonsOfMeat((prevTons) =>
        prevTons < maxCount2 ? prevTons + 50 : maxCount2
      );
      setHappyCustomers((prevCustomers) =>
        prevCustomers < maxCount3 ? prevCustomers + 50 : maxCount3
      );
      setMeatProducts((prevProducts) =>
        prevProducts < maxCount4 ? prevProducts + 5 : maxCount4
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="counter-one section-space">
        <div
          className="counter-one__bg boskery-jarallax"
          data-jarallax=""
          data-speed="0.8"
          style={{
            backgroundImage: "url(assets/images/fact.png)",
          }}
        ></div>
        <div className="container">
          <div className="counter-one__wrapper">
            <div
              className="counter-one__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="counter-one__item__inner">
                <div className="counter-one__box count-box">
                  <h3
                    className="counter-one__count-text count-text"
                    data-stop={experience}
                    data-speed="500"
                  >
                    {experience}
                  </h3>
                </div>
                <h4 className="counter-one__title">Yıllık Tecrübe</h4>
              </div>
            </div>

            <div
              className="counter-one__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="counter-one__item__inner">
                <div className="counter-one__box count-box">
                  <h3
                    className="counter-one__count-text count-text"
                    data-stop="19"
                    data-speed="500"
                  >
                    {tonsOfMeat}
                  </h3>
                  <h3 className="counter-one__count-text"></h3>
                </div>

                <h4 className="counter-one__title">Farklı Firma</h4>
              </div>
            </div>

            <div
              className="counter-one__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="counter-one__item__inner">
                <div className="counter-one__box count-box">
                  <h3
                    className="counter-one__count-text count-text"
                    data-stop={happyCustomers}
                    data-speed="500"
                  >
                    {happyCustomers}
                  </h3>
                  <h3 className="counter-one__count-text"></h3>
                </div>
                <h4 className="counter-one__title">Müşteri Memnuniyeti</h4>
              </div>
            </div>

            <div
              className="counter-one__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="counter-one__item__inner">
                <div className="counter-one__box count-box">
                  <h3
                    className="counter-one__count-text count-text"
                    data-stop={meatProducts}
                    data-speed="500"
                  >
                    {meatProducts}
                  </h3>
                </div>
                <h4 className="counter-one__title">Yeni Tasarımlar</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
