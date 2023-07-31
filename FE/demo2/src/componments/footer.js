import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
 export function Footer() {
    return(
        <>
            {/* ======= Footer ======= */}
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-geo-alt icon" />
                            <div>
                                <h4>Địa chỉ</h4>
                                <p>
                                    Thị Trấn Ái Nghĩa <br />
                                   Đại Lộc, Quảng Nam
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links d-flex">
                            <i className="bi bi-telephone icon" />
                            <div>
                                <h4>Liên hệ</h4>
                                <p>
                                    <strong>SĐT:</strong> 0555-777-666
                                    <br />
                                    <strong>Email:</strong> fruitshop@gmail.com
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links d-flex">
                            <i className="bi bi-clock icon" />
                            <div>
                                <h4>Dịch vụ khách hàng</h4>
                                <p>
                                    <span>Khách hàng thân thiết</span>
                                    <br />
                                  <span>Chính sách vận chuyển</span>
                                    <br/>
                                    <span>Chính sách bảo mật</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Kết nối với chúng tôi</h4>
                            <div className="social-links d-flex">
                                <a href="#" className="twitter">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className="facebook">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="#" className="instagram">
                                    <i className="fa-brands fa-square-instagram"></i>
                                </a>
                                <a href="#" className="linkedin">
                                    <i className="fa-solid fa-g"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        © Người phát hành{" "}
                        <strong>
                            <span>DinhHD</span>
                        </strong>
                            .Đã đăng ký bản quyền
                    </div>
                    <div className="credits">
                        <p>Cảm ơn bạn!</p>
                    </div>
                </div>
            </footer>
            <a
                href="#"
                className="scroll-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </a>
            <div id="preloader" />
        </>
    )
}