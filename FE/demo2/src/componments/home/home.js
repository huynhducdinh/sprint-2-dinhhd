import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/main.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import {ImageSlide} from "./imageSlide";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Image} from "react-bootstrap";
import * as card from "../../service/Product";
import {getAllTypeProduct} from "../../service/Product";

export function Home() {
    const [typeList, setTypeList] = useState([])
    const [productList, setProduct] = useState([])


    const listGetAll = async () => {
        const res = await card.listAll()
        setProduct(res)
    }

    const handType1 = async (id) => {
        if (id === 1) {
            const res = await card.getAllTypeProduct(1);
            setTypeList(res)
        } else if (id === 2) {
            const res = await card.getAllTypeProduct(2);
            setTypeList(res)
        }

    }

    useEffect(() => {
        listGetAll()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <ImageSlide/>
            <main id="main">
                {/* ======= About Section ======= */}
                <section id="about" className="about ">
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
                                style={{backgroundImage: "url(/img/6.jpg)"}}
                                data-aos="fade-up"
                                data-aos-delay={150}
                            >
                                <div className="call-us position-absolute">
                                    <h4>Số điện thoại đặt hàng</h4>
                                    <p style={{color: "#00833e"}}>0555-777-666</p>
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

                                    <div className="position-relative mt-4">
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

                <section id="why-us" className="why-us  ">
                    <div className="container " data-aos="fade-up">
                        <div className="row gy-4">
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                                <div className="why-box">
                                    <h3>Lí do nên chọn Fruit Shop?</h3>
                                    <p>Bảo đảm nguồn gốc xuất xứ</p>
                                    <p>Sản phẩm đa dạng, phong phú</p>
                                    <p>Trái cây, thực phẩm đảm bảo vệ sinh an toàn thực phẩm</p>

                                    <div className="text-center">
                                        <Link to="/card" href="#" className="more-btn">
                                            Xem sản phẩm tại đây <i className="bx bx-chevron-right"/>
                                        </Link>
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
                            <li className="nav-item">
                                <Link onClick={() => {
                                    handType1(1)
                                }}
                                      value={2}
                                      className="nav-link"
                                      data-bs-toggle="tab"
                                      data-bs-target="#menu-breakfast"
                                >
                                    <h4>Trái cây nhập khẩu</h4>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link onClick={() => {
                                    handType1(2)
                                }}
                                      value={1}
                                      className="nav-link"
                                      data-bs-toggle="tab"
                                      data-bs-target="#menu-lunch"
                                >
                                    <h4>Trái cây nội địa</h4>
                                </Link>
                            </li>
                        </ul>
                        <section id="portfolio" className="portfolio ">
                            <div className="container  ">
                                <section id="chefs" className="chefs section-bg justify-content-center"
                                         style={{marginTop: "2%"}}>
                                    <div className="container justify-content-center" data-aos="fade-up">

                                        <div className="row gy-4 justify-content-center ">
                                            {typeList == '' ?
                                                <>
                                                    {productList.map((list) => (
                                                        <div
                                                            className="col-lg-3 col-md-6 d-flex align-items-stretch mb-3 justify-content-center"
                                                            data-aos="fade-up"
                                                            data-aos-delay={100}>
                                                            <div className="chef-member">
                                                                <Link to={`/detail/${list.id}/product`}>
                                                                    <div className="member-img">
                                                                        <Image
                                                                            src={list.image}
                                                                            className="img-fluid"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </Link>
                                                                <div className="member-info">
                                                                    <h4>{list.nameFruit}</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>

                                                :
                                                <>
                                                    {typeList.map((list) => (
                                                        <div
                                                            className="col-lg-3 col-md-6 d-flex align-items-stretch mb-3 justify-content-center"
                                                            data-aos="fade-up"
                                                            data-aos-delay={100}>
                                                            <div className="chef-member">
                                                                <Link to={`/detail/${list.id}/product`}>
                                                                    <div className="member-img">
                                                                        <Image
                                                                            src={list.image}
                                                                            className="img-fluid"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </Link>
                                                                <div className="member-info">
                                                                    <h4>{list.nameFruit}</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            }
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}