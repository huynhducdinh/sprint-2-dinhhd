import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/shoping_cart.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, {useEffect} from "react";
import {Image} from "react-bootstrap";
import {Headers} from "./headers";
import {Footer} from "./footer";

export function ProductDetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Headers/>
            <main id="main">
                <section className="layout_padding" style={{marginTop: "10%"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="row">
                                        <div className="col-md-7 p-relative r-left">
                                            <div className="full back_blog text_align_center padding_right_left_15">
                                                <img
                                                    src="/img/11.jpg"
                                                    alt="#" style={{width: "80%"}}/>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="full heading_s1">
                                                <h1 style={{color: "#00833e"}}>Hồng New Zealand</h1>
                                                <h3 style={{color: "#d0a20b"}}> 200.000 đ</h3>
                                                <hr/>
                                                <p>
                                                    <span style={{color: "#f14e05", fontWeight: "bold"}}> Hồng giòn New Zealand </span> được
                                                    trồng ở Walkato, Northland thuộc phía bắc thành phố Auckland, New
                                                    Zealand.
                                                    Trái Hồng New Zealand to, màu vàng sẫm, trọng lượng từ 200 đến gần
                                                    400gram/trái
                                                    Hồng giòn New Zealand có vị ngọt đậm và giòn tan, có mùi thơm dịu
                                                    nhẹ, đặc trưng.
                                                    Chứa nhiều chất dinh dưỡng bổ ích cho cơ thể
                                                    100% nói không với chất bảo quản & nói không với trái cây Trung Quốc
                                                    Đổi trả sản phẩm trong vòng 24h
                                                </p>

                                                <form action="">
                                                    <div className="d-flex ">
                                                        <select style={{width: "50%", border: "1px solid #03964c"}}
                                                                name="contractType"
                                                                className=" form-select">
                                                            <option value={""}>Chọn một tuỳ chọn</option>
                                                            <option value={""}>0.5 kg</option>
                                                            <option value={""}>1 kg</option>
                                                            <option value={""}>2 kg</option>
                                                            <option value={""}>3 kg</option>

                                                        </select>

                                                        <div style={{marginLeft: "5%"}}>
                                                            <button type="button" style={{height: "40px",borderRadius:"5px 0 0 5px"}}
                                                                    className="minus"><span>-</span></button>
                                                            <input type="number" style={{height: "40px", width: "20%"}}
                                                                   className="input" step="1" min="0" max
                                                            />
                                                            <button style={{height: "40px",borderRadius:" 0 5px  5px 0"}} type="button" value="+"
                                                                    className="plus"><span>+</span></button>
                                                        </div>

                                                    </div>
                                                    <button className="btn btn-outline-success mt-3 mb-5 " type="submit"
                                                            style={{width: "100%"}}><span style={{fontWeight: "bold"}}>
                                                  <i className='fa fa-shopping-basket'></i> Thêm vào giỏ hàng</span>
                                                    </button>
                                                </form>


                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ======= Portfolio Section ======= */}
                <section id="portfolio" className="portfolio mb-5">
                    <div className="container  ">
                        <div className="section-title mt-4 mb-5" data-aos="fade-up">
                            <h2>Các sản phẩm khác</h2>
                        </div>

                        <section id="chefs" className="chefs section-bg justify-content-center mb-5"
                                 style={{marginTop: "2%"}}>
                            <div className="container justify-content-center" data-aos="fade-up">
                                <div className="row gy-4 justify-content-center ">
                                    <div
                                        className="col-lg-3 col-md-6 d-flex align-items-stretch mb-3 justify-content-center"
                                        data-aos="fade-up"
                                        data-aos-delay={100}>
                                        <div className="chef-member">
                                            <div className="member-img">
                                                <img
                                                    src="/img/11.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="member-info">
                                                <h4>Hồng New Zealand</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-md-6 d-flex align-items-stretch mb-3 justify-content-center"
                                        data-aos="fade-up"
                                        data-aos-delay={100}>
                                        <div className="chef-member">
                                            <div className="member-img">
                                                <img
                                                    src="/img/11.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="member-info">
                                                <h4>Hồng New Zealand</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-md-6 d-flex align-items-stretch mb-3 justify-content-center"
                                        data-aos="fade-up"
                                        data-aos-delay={100}>
                                        <div className="chef-member">
                                            <div className="member-img">
                                                <img
                                                    src="/img/11.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="member-info">
                                                <h4>Hồng New Zealand</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Chefs Member */}
                                    <div
                                        className="col-lg-3 col-md-6 d-flex align-items-stretch mb-3 justify-content-center"
                                        data-aos="fade-up"
                                        data-aos-delay={200}>
                                        <div className="chef-member">
                                            <div className="member-img">
                                                <img
                                                    src="/img/6.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="member-info">
                                                <h4>Lựu Peru</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}