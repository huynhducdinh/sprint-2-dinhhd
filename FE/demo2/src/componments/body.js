import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'

export function Body() {
    return (
        <>
            <main id="main">
                {/* ======= About Section ======= */}
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Hiểu hơn về chúng tôi</h2>
                            <p>
                                Tìm hiểu thêm về <span>của hàng chúng tôi</span>
                            </p>
                        </div>
                        <div className="row gy-4">
                            <div
                                className="col-lg-6 position-relative about-img"
                                style={{backgroundImage: "url(/img/6.jpg)",}}
                                data-aos="fade-up"
                                data-aos-delay={150}
                            >
                                <div className="call-us position-absolute">
                                    <h4>Số điện thoại đặt hàng</h4>
                                    <p style={{color:"#00833e"}}>0555-777-666</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 d-flex align-items-end"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="content ps-0 ps-lg-5">
                                    <span className="">
                                        Thực phẩm xanh – sạch – ngon vẫn luôn là những tiêu chí hàng đầu giúp người tiêu
                                        dùng chọn lựa thực phẩm mỗi ngày. Thế nhưng khoảng thời gian gần đây lại có rất
                                        nhiều thương lái lợi dụng lòng tin của người tiêu dùng tráo các thực phẩm bẩn,
                                        kém chất lượng gây ảnh hưởng nghiêm trọng đến sức khỏe của mọi người.

                                        Đặc biệt với thị trường trái cây nhập khẩu thì tình trạng này lại tràn lan gây
                                        hoang mang cho người tiêu dùng. Nhận thấy những điều này, Fruit Shop đã ra đời
                                        với sứ mệnh mang đến sức khỏe cho mọi nhà qua những loại trái cây ngoại nhập
                                        thượng hạng, chất lượng với tiêu chuẩn 3C: CHUẨN TƯƠI – CHUẨN NGON – CHUẨN SẠCH.
                                    </span>

                                    <div className="position-relative mt-4" >
                                        <img
                                            src="/img/11.jpg"
                                            className="img-fluid"
                                            alt="" style={{height: "45vh", width: "100vw"}}
                                        />
                                        <a
                                            className="glightbox play-btn btn-success"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="why-us" className="why-us section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="row gy-4">
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                                <div className="why-box">
                                    <h3>Lí do nên chọn Fruit Shop?</h3>
                                    <p>Bảo đảm nguồn gốc xuất xứ</p>
                                    <p>Sản phẩm đa dạng, phong phú</p>
                                    <p>Trái cây, thực phẩm đảm bảo vệ sinh an toàn thực phẩm</p>

                                    <div className="text-center">
                                        <a href="#" className="more-btn">
                                            Xem sản phẩm tại đây <i className="bx bx-chevron-right"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End Why Box */}
                            <div className="col-lg-8 d-flex align-items-center">
                                <div className="row gy-4">
                                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
                                        <div
                                            className="icon-box d-flex flex-column justify-content-center align-items-center">

                                            <i className="fa-solid fa-users"></i>
                                            <h4>TỪ SỰ CHÂN THÀNH</h4>
                                            <p>
                                                Fruit Shop đem đấy sự chân thành và thấu hiểu nhu cầu khách hàng sẽ
                                                mang đến
                                                cho Quý khách những loại trái cây tươi ngon và chất lượng hạng nhất
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}
                                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                                        <div
                                            className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="fa-solid fa-medal"></i>
                                            <h4>SÁNG TẠO TRONG YÊU THƯƠNG</h4>
                                            <p>
                                                Từ những loại trái cây nhập khẩu đến những món quà từ trái cây đều được
                                                team Fruit Shop nâng niu, tỉ mẩn thực hiện, luôn bảo đảm bảo chất lượng
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}
                                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                                        <div
                                            className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="fa-solid fa-link"></i>
                                            <h4>KẾT NỐI MỌI KHOẢNG CÁCH</h4>
                                            <p>
                                                Fruit Shop hy vọng sẽ trở thành cầu nối bền vững mang đến sự tin tưởng
                                                giữa Fruit Shop với khách hàng và đối tác
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="menu" className="menu">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Sản phẩm của chúng tôi</h2>
                            <p>
                                CHUẨN TƯƠI – <span>CHUẨN NGON – CHUẨN SẠCH.</span>
                            </p>
                        </div>
                        <ul
                            className="nav nav-tabs d-flex justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            {/* End tab nav item */}
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#menu-breakfast"
                                >
                                    <h4>Trái cây nhập khẩu</h4>
                                </a>
                                {/* End tab nav item */}
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#menu-lunch"
                                >
                                    <h4>Trái cây nội</h4>
                                </a>
                            </li>
                            {/* End tab nav item */}

                        </ul>
                        <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
                            <div className="tab-pane fade active show" id="menu-starters">
                                <div className="tab-header text-center">
                                    <p>Sản phẩm</p>
                                    <h3>Tất cả các loại sản phẩm</h3>
                                </div>
                                <div className="row gy-5">
                                    <div className="col-lg-4 menu-item">
                                        <a href="/img/6.jpg" className="glightbox">
                                            <img
                                                src="/img/6.jpg"
                                                className="menu-img img-fluid"
                                                alt=""
                                            />
                                        </a>
                                        <h4>Lựu Peru</h4>

                                        <p className="price">150.000 đ</p>
                                    </div>
                                    {/* Menu Item */}
                                    <div className="col-lg-4 menu-item">
                                        <a href="/img/11.jpg" className="glightbox">
                                            <img
                                                src="/img/11.jpg"
                                                className="menu-img img-fluid"
                                                alt=""
                                            />
                                        </a>
                                        <h4>Hồng New Zealand</h4>
                                        <p className="price">200.000 đ</p>
                                    </div>
                                    {/* Menu Item */}
                                    <div className="col-lg-4 menu-item">
                                        <a href="../../public/img/menu-item-3.png" className="glightbox">
                                            <img
                                                src="/img/12.png"
                                                className="menu-img img-fluid"
                                                alt=""
                                            />
                                        </a>
                                        <h4>Xoài Cát Chu</h4>


                                        <p className="price">90.000 đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="chefs" className="chefs section-bg justify-content-center">
                    <div className="container justify-content-center" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Các sản phẩm</h2>
                            <p>
                                Có <span>đa dạng</span> sản phẩm
                            </p>
                        </div>
                        <div className="row gy-4 justify-content-center">
                            <div
                                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="chef-member">
                                    <div className="member-img">
                                        <img
                                            src="../../public/img/chefs/chefs-1.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="member-info">
                                        <h4>Trái cây việt</h4>

                                        <p>
                                            Với hàng nội địa, trái cây nước ta đang dạng phong phú
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Chefs Member */}
                            <div
                                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="chef-member">
                                    <div className="member-img">
                                        <img
                                            src="../../public/img/chefs/chefs-2.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />

                                    </div>
                                    <div className="member-info">
                                        <h4>Trái cây nhập khẩu</h4>
                                        <span></span>
                                        <p>
                                            Với những loại trái cây mới lại cho ta những sự hấp dẫn riêng biệt
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}