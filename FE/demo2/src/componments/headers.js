import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import {Footer} from "./footer";
import {Body} from "./body";


export function Headers() {
    return(
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div id="header-nav-logo" className="col-md-2">
                        <img src="/img/fruit%20shop.png" alt="" style={{height: "11vh", width: "11vh"}}/>
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <a className="text-white" href="#hero">Trang chủ</a>
                            </li>
                            <li>
                                <a  className="text-white" href="#about">Sản phẩm</a>
                            </li>
                            <li>
                                <a  className="text-white" href="#menu">Giới thiệu</a>
                            </li>
                            <li>
                                <a  className="text-white" href="#events">Tin tức</a>
                            </li>
                            <li>
                                <a  className="text-white" href="#chefs">Liên hệ</a>
                            </li>
                            <li>
                                <a  className="text-white" href="#gallery">Chính Sách & Quy định</a>
                            </li>
                            <li>
                                <a className="text-white" href="/login">Đăng nhập</a>
                            </li>
                        </ul>
                    </nav>
                    {/* .navbar */}
                    <a className=""   href="#book-a-table">
                        <i className='fa fa-shopping-basket'></i> <span>Giỏ hàng</span>
                    </a>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
                </div>
            </header>

            <section id="hero" className="hero d-flex align-items-center section-bg">
                <div className="container">
                    <div className="row justify-content-between gy-5">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <h2 data-aos="fade-up">
                               Tận hưởng  hương vị thơm ngon từ trái cây mang lại
                            </h2>
                            <p data-aos="fade-up" data-aos-delay={100}>
                                Bạn không nên bỏ lỡ, hãy nếm thử những hương vị đó!
                            </p>
                            <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                                <a href="#book-a-table" className="btn-book-a-table">
                                   Thêm vào giỏ hàng
                                </a>
                                <a
                                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                    className="glightbox btn-watch-video d-flex align-items-center"
                                >
                                    <i className="fa-sharp fa-solid fa-circle-play"></i>

                                    <span>Xem Video</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                            <img
                                src="/img/34.png"
                                className="img-fluid"
                                alt=""
                                data-aos="zoom-out"
                                data-aos-delay={300}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Body/>
            <Footer/>
        </>
    )
}