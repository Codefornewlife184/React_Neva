/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const [formStatus, setFormStatus] = useState({ success: null, message: '' });

    const toggleNav = () => {
        setExpanded(!expanded);
    };

    const handleClick = () => {
        window.scrollTo(0, 0);
        setExpanded(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            console.log('Sending request to:', '/api/contact_handler.php');
            
            const response = await fetch('/api/contact_handler.php', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            console.log('Response status:', response.status);
            console.log('Response headers:', Object.fromEntries(response.headers.entries()));
            
            // Response'u text olarak al
            const text = await response.text();
            console.log('Raw response:', text);
            
            let result;
            try {
                result = JSON.parse(text);
                console.log('Parsed response:', result);
            } catch (error) {
                console.error('JSON parse error:', error);
                throw new Error(t('contactForm.invalidResponse'));
            }
            
            if (result.status === 'success') {
                setFormStatus({
                    status: 'success',
                    message: result.message || t('contactForm.success')
                });
                e.target.reset();
            } else {
                setFormStatus({
                    status: 'error',
                    message: result.message || t('contactForm.error')
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setFormStatus({
                status: 'error',
                message: t('contactForm.errorTryAgain')
            });
        }
    };

    return (
        <>
            <section className="contact-section contact-two">
                <div className="auto-container" style={{ padding: '0 15px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-two__content" style={{ padding: '30px 15px' }}>
                                <div className="sec-title-twelev">
                                    <div className="sec-title-twelev__tagline">
                                        <span className="sec-title-twelev__tagline__bar"></span>
                                        {t("contactForm.contactInfo")}
                                    </div>
                                    <h2 className="sec-title-twelev__title">{t("contactForm.title")}</h2>
                                </div>
                                <p className="contact-two__text">{t("contactForm.infoText")}</p>
                                <div className="footer-twelev__socials">
                                    <a href="https://www.facebook.com/profile.php?id=61569515864445" target="_blank">
                                        <span className="fab fa-facebook-f"></span>
                                    </a>
                                    <a href="https://www.instagram.com/webcenter.office/" target="_blank">
                                        <span className="fab fa-instagram"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="form-box" style={{ padding: '30px 15px' }}>
                                <div className="default-form">
                                    <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                                        {formStatus.message && (
                                            <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'}`}>
                                                {formStatus.message}
                                            </div>
                                        )}
                                        <div className="row clearfix">
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <div className="field-inner">
                                                    <input type="text" name="name" placeholder={t("contactForm.name")} required
                                                        minLength="2" maxLength="50"/>
                                                </div>
                                            </div>

                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <div className="field-inner">
                                                    <input type="email" name="email" placeholder={t("contactForm.email")}
                                                        required/>
                                                </div>
                                            </div>

                                            <div className="form-group col-lg-12 col-md-6 col-sm-12">
                                                <div className="field-inner">
                                                    <input type="text" name="subject" placeholder={t("contactForm.subject")} required
                                                        minLength="3" maxLength="100"/>
                                                </div>
                                            </div>

                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <div className="field-inner">
                                                    <textarea name="message" placeholder={t("contactForm.message")} required minLength="10"
                                                        maxLength="1000"></textarea>
                                                </div>
                                            </div>

                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <button type="submit" className="theme-btn btn-style-one">
                                                    <i className="btn-curve"></i>
                                                    <span className="btn-title text-white">{t("contactForm.send")}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;
