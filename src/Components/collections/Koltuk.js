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

const Koltuk = () => {
	const { t } = useTranslation();
	
	// Projeleri bir dizi olarak tanımlayalım
	const Projects = [
		{
			id: 1,
			title: "BELLA KOLTUK TAKIMI",
			image: "assets/images/products/koltuk/bella-1.webp",
			url: "/bella"
		},
		{
			id: 2,
			title: "BOSS KOLTUK TAKIMI",
			image: "assets/images/products/koltuk/boss-1.webp",
			url: "/boss"
		},
		{
			id: 3,
			title: "BRAHMA KOLTUK TAKIMI",
			image: "assets/images/products/koltuk/brahma-1.webp",
			url: "/brahma"
		},
		{
			id: 4,
			title: "CASA KOLTUK TAKIMI",
			image: "assets/images/products/koltuk/casa-1.webp",
			url: "/casa"
		},
		{
			id: 5,
			title: "GOLF KOLTUK TAKIMI",
			image: "assets/images/products/koltuk/golf-1.webp",
			url: "/golf"
		},
		{
			id: 6,
			title: "ODESSA KOLTUK TAKIMI",
			image: "assets/images/products/koltuk/odessa-1.webp",
			url: "/odessa"
		},
		{
			id: 7,
			title: "PİANO KOLTUK TAKIMI",
			image: "assets/images/products/koltuk/piano-1.webp",
			url: "/piano"
		},
		{
			id: 8,
			title: "TURKUAZ KOLTUK TAKIMI",
			image: "assets/images/products/koltuk/turkuaz-1.webp",
			url: "/turkuaz"
		},
		{
			id: 9,
			title: "ZEN KOLTUK TAKIMI",
			image: "assets/images/products/koltuk/zen-1.webp",
			url: "/zen"
		}
	];

	return (
		<>
			<ScrollToTop />
			<section className="news-section mb-0">
				<div className="auto-container">
					<div className="sec-title-twelev text-center">
						<div className="sec-title-twelev__tagline" style={{ color: "#908f91" }}>
							<span className="sec-title-twelev__tagline__bar"></span>{t("KOLTUK TAKIMI")}
						</div>
						<h2 className="sec-title-twelev__title">{t("KOLTUK TAKIMI")}</h2>
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

export default Koltuk;