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

const Berjerler = () => {
	const { t } = useTranslation();
	
	// Projeleri bir dizi olarak tanımlayalım
	const Projects = [
		{
			id: 1,
			title: t("casaBerjer.title"),
			image: "assets/images/products/berjer/casa-berjer-1.webp",
			url: "/casa-berjer"
		},
		{
			id: 2,
			title: t("bossBerjer.title"),
			image: "assets/images/products/berjer/boss-berjer-1.webp",
			url: "/boss-berjer"
		},
		{
			id: 3,
			title: t("odessaBerjer.title"),
			image: "assets/images/products/berjer/odessa-berjer-1.webp",
			url: "/odessa-berjer"
		},
		{
			id: 4,
			title: t("brahmaBerjer.title"),
			image: "assets/images/products/berjer/brahma-berjer-1.webp",
			url: "/brahma-berjer"
		},
		{
			id: 5,
			title: t("woodBerjer.title"),
			image: "assets/images/products/berjer/wood-berjer-1.webp",
			url: "/wood-berjer"
		},
		{
			id: 6,
			title: t("zenBerjer.title"),
			image: "assets/images/products/berjer/zen-berjer-1.webp",
			url: "/zen-berjer"
		},
		
		{
			id: 7,
			title: t("bellaBerjer.title"),
			image: "assets/images/products/berjer/bella-berjer-1.webp",
			url: "/bella-berjer"
		},
		{
			id: 8,
			title: t("pianoBerjer.title"),
			image: "assets/images/products/berjer/piano-berjer-1.webp",
			url: "/piano-berjer"
		},
		{
			id: 9,
			title: t("golfBerjer.title"),
			image: "assets/images/products/berjer/golf-berjer-1.webp",
			url: "/golf-berjer"
		},
		{
			id: 10,
			title: t("turkuazBerjer.title"),
			image: "assets/images/products/berjer/turkuaz-berjer-1.webp",
			url: "/turkuaz-berjer"
		}
	];

	return (
		<>
			<ScrollToTop />
			<section className="news-section mb-0">
				<div className="auto-container">
					<div className="sec-title-twelev text-center">
						<div className="sec-title-twelev__tagline" style={{ color: "#908f91" }}>
							<span className="sec-title-twelev__tagline__bar"></span>{t("pages.bergere")}
						</div>
						<h2 className="sec-title-twelev__title">{t("pages.bergere")}</h2>
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

export default Berjerler;