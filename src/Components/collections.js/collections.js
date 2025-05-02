/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

// ScrollToTop bileşeni
const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const collections = () => {
	const { t } = useTranslation();
	
	// Projeleri bir dizi olarak tanımlayalım
	const Projects = [
		{
			id: 1,
			title: "BOSS KOLTUK TAKIMI",
			description: t("Endüstriyel Ted. Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/1702.png",
			url: "/Milas"
		},
		{
			id: 2,
			title: "ZEN KOLTUK TAKIMI",
			description: t("İş Makineleri Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/1701.png",
			url: "/Milas"
		},
		{
			id: 3,
			title: "CLASS KÖŞE TAKIMI",
			description: t("PVC Cam Balkon Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/1700.png",
			url: "/Milas"
		}
	];

	return (
		<>
			<ScrollToTop />
			<section className="news-section mb-0">
				<div className="auto-container">
					<div className="sec-title-twelev text-center">
						<div className="sec-title-twelev__tagline" style={{ color: "#908f91" }}>
							<span className="sec-title-twelev__tagline__bar"></span>{t("KOLEKSİYONLARIMIZ")}
						</div>
						<h2 className="sec-title-twelev__title">{t("KOLEKSİYONLARIMIZ")}</h2>
					</div>
					<div className="row clearfix">
						{Projects.map((project) => (
							<div 
								key={project.id} 
								className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" 
								data-wow-delay="0ms"
								data-wow-duration="1500ms"
							>
								<div className="inner-box">
									<div className="image-box" style={{ overflow: 'hidden' }}>
										<Link to={project.url} onClick={() => window.scrollTo(0, 0)}>
											<img 
												src={project.image} 
												alt={project.title} 
												style={{ 
													transition: 'transform 0.3s ease',
													width: '100%',
													height: 'auto'
												}}
												onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
												onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
											/>
										</Link>
									</div>
									<div className="lower-box mt-3">
										<h5>
											<Link to={project.url} onClick={() => window.scrollTo(0, 0)}>
												{project.title}
											</Link>
										</h5>
										{/* <div className="text">{project.description}</div> */}
										<div className="more-box">
											<Link 
												className="theme-btn btn-style-one" 
												to={project.url}
												onClick={() => window.scrollTo(0, 0)}
											>
												<i className="btn-curve"></i>
												<span className="btn-title">{t("Detaylar")}</span>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default collections;