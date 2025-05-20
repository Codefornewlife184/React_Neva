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
			title: t("casaKoltuk.title"),
			image: "assets/images/products/koltuk/casa-1.webp",
			url: "/casa"
		},
		{
			id: 2,
			title: t("bossKoltuk.title"),
			image: "assets/images/products/koltuk/boss-1.webp",
			url: "/boss"
		},
		{
			id: 3,
			title: t("odessaKoltuk.title"),
			image: "assets/images/products/koltuk/odessa-1.webp",
			url: "/odessa"
		},
		{
			id: 4,
			title: t("brahmaKoltuk.title"),
			image: "assets/images/products/koltuk/brahma-1.webp",
			url: "/brahma"
		},
		{
			id: 4,
			title: t("wood.title"),
			image: "assets/images/products/koltuk/wood-1.webp",
			url: "/wood"
		},
		{
			id: 6,
			title: t("zenKoltuk.title"),
			image: "assets/images/products/koltuk/zen-1.webp",
			url: "/zen"
		},
		{
			id: 7,
			title: t("bellaKoltuk.title"),
			image: "assets/images/products/koltuk/bella-1.webp",
			url: "/bella"
		},
		{
			id: 8,
			title: t("pianoKoltuk.title"),
			image: "assets/images/products/koltuk/piano-1.webp",
			url: "/piano"
		},
		{
			id: 9,
			title: t("golfKoltuk.title"),
			image: "assets/images/products/koltuk/golf-1.webp",
			url: "/golf"
		},
		{
			id: 10,
			title: t("turkuazKoltuk.title"),
			image: "assets/images/products/koltuk/turkuaz-1.webp",
			url: "/turkuaz"
		}
		
	];

	return (
		<>
			<ScrollToTop />
			<section className="news-section mb-0">
				<div className="auto-container">
					<div className="sec-title-twelev text-center">
						<div className="sec-title-twelev__tagline" style={{ color: "#908f91" }}>
							<span className="sec-title-twelev__tagline__bar"></span>{t("pages.armchairs")}
						</div>
						<h2 className="sec-title-twelev__title">{t("pages.armchairs")}</h2>
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
												<span className="btn-title">{t("common.details")}</span>
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