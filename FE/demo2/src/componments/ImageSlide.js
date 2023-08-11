import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, {useEffect} from "react";
export  function ImageSlide() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>

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
                                <Link to="/card" href="#book-a-table" className="btn btn-success" style={{borderRadius:"30px"}}>
                                  Xem thêm các sản phẩm khác
                                </Link>
                                <a
                                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                    className="glightbox btn-watch-video d-flex align-items-center"
                                >
                                    <i className="fa-sharp fa-solid fa-circle-play" style={{color:"#00833e"}}></i>

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
        </>
    )
}