import React from "react";

const ContactThree = () => {
  return (
    <>
      <section className="contact-info-two mb-5">
			<div className="auto-container">
				<div className="row">
					<div className="col-md-12 col-lg-3">
						<div className="contact-info-two__card wow fadeInUp" data-wow-duration="1500ms">
							<i className="fa fa-map-marker-alt"></i>
							<a href="#">Mağaza : Davutkadı Mh. T. M. Ali Cd. No:1 Yıldırım/Bursa</a><br/>
						</div>
					</div>
					<div className="col-md-12 col-lg-3">
						<div className="contact-info-two__card wow fadeInUp" data-wow-duration="1500ms">
							<i className="fa fa-map-marker-alt"></i>
							<a href="#">Üretim : Ankara Yolu Cd. No:801 Yıldırım/Bursa</a><br/>
						</div>
					</div>
					<div className="col-md-12 col-lg-3">
						<div className="contact-info-two__card wow fadeInUp" data-wow-duration="1500ms"
							data-wow-delay="300ms">
							<i className="fa fa-envelope"></i>
							<a href="mailto:neva@neva.com.tr">neva@neva.com.tr</a><br/><br/>
						</div>
					</div>
					<div className="col-md-12 col-lg-3">
						<div className="contact-info-two__card wow fadeInUp" data-wow-delay="600ms"
							data-wow-duration="1500ms">
							<i className="fa fa-phone"></i>
							<a href="tel:+902242672424">+90 (224) 267-2424</a><br/><br/>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  );
};

export default ContactThree;
