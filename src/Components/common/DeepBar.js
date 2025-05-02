/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const DeepBar = () => {
  return (
    <>
        <div class="mobile-nav__wrapper">
	        <div class="mobile-nav__overlay mobile-nav__toggler"></div>

	        <div class="mobile-nav__content">
	            <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

	            <div class="logo-box">
	                <a href="index.html" aria-label="logo image"><img src="assets/images/logo-light.png" width="155" alt="logo drivschol"/></a>
	            </div>
	            <div class="mobile-nav__container"></div>

	            <ul class="mobile-nav__contact list-unstyled">
	                <li>
	                    <i class="fa fa-envelope"></i>
	                    <a href="mailto:needhelp@drivschol.com">needhelp@drivschol.com</a>
	                </li>
	                <li>
	                    <i class="fa fa-phone-alt"></i>
	                    <a href="tel:666-888-0000">666 888 0000</a>
	                </li>
	            </ul>
	            <div class="mobile-nav__social">

	                <a href="../index.htm"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
	                <a href="https://twitter.com"><i class="icon-twitter" aria-hidden="true"></i></a>
	                <a href="../index-1.htm"><i class="icon-pinterest" aria-hidden="true"></i></a>
	                <a href="../index-2.htm"><i class="icon-Instagram" aria-hidden="true"></i></a>
	            </div>
	        </div>

	    </div>

	    <div class="search-popup">
	        <div class="search-popup__overlay search-toggler"></div>
	        <div class="search-popup__content">
	            <form role="search" method="get" class="search-popup__form" action="#">
	                <input type="text" id="search" placeholder="Search Here..."/>
	                <button type="submit" aria-label="search submit" class="drivschol-btn drivschol-btn--base2">
	                    <span><i class="icon-search"></i></span>
	                </button>
	            </form>
	        </div>

	    </div>
    </>
  )
}

export default DeepBar