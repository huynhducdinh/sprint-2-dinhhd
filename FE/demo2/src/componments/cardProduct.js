import '../css/card.css'
import React, {useEffect, useState} from "react";

import * as card from '../service/Product'
import {Image} from "react-bootstrap";
import {FormattedNumber} from "react-intl";
import {Link} from "react-router-dom";


export function CardProduct() {
    const [cardProduct, setCardProduct] = useState([])
    const findAll = async () => {
        const res = await card.getAllProduct()
        setCardProduct(res.content)
    }
    useEffect(() => {
        findAll()
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <nav id="navbar" className="navbar-cart justify-content-sm-between d-flex"
                 style={{
                     backgroundColor: "#DDDDDD",
                     marginTop: "5.9%",
                     height: 65,
                     position: "fixed",
                     top: 0,
                     width: "100%",
                     zIndex: 500
                 }}>
                <ul className="justify-content-center d-flex" style={{marginLeft: "6.3%"}}>
                    <li className="dropdown" style={{marginTop: "0.6%"}}><a href="#">
                        <span style={{color: "black"}}>Giỏ trái cây <i className="fa-solid fa-chevron-down"></i></span>
                    </a>
                        <ul style={{backgroundColor: "#0cb661", color: "white",}}>
                            <li><a href="#">Giỏ trái cây</a></li>
                            <li><a href="#">Giỏ trái cây + Hoa tươi</a></li>
                            <li><a href="#">Hộp trái cây</a></li>
                            <li><a href="#">Khay trái cây</a></li>
                            <li><a href="#">Sweet box</a></li>
                        </ul>
                    </li>
                    <li style={{marginTop: "0.6%"}}>
                        <a href="" style={{color: "black"}} className="current"> Trái cây việt </a>
                    </li>
                    <li style={{marginTop: "0.6%"}}>
                        <a href="" style={{color: "black"}} className="current"> Trái cây nhập khẩu </a>
                    </li>
                </ul>
                <div style={{marginTop: "0.5%", marginRight: "7.8%"}}>
                    <form className="d-flex m-1">
                        <select name="orderby" className=" form-select" aria-label="Đơn hàng của cửa hàng"
                                style={{marginRight: "4%", border: "1px solid #03964c"}}
                                fdprocessedid="9rbb3g">
                            <option>Chọn giá</option>
                            <option>100 đến 200</option>
                            <option>Chọn giá</option>
                            <option>Chọn giá</option>
                            <option>Chọn giá</option>
                        </select>
                        <input
                            style={{width: "18vw", height: "38px", border: "1px solid #03964c"}}
                            className="form-control me-1"
                            type="text"
                            name="name"
                            placeholder="Nhập tên sản phẩm"
                            aria-label="Search"
                        />
                        {/*<button className="btn btn-outline-success" type="submit">*/}
                        {/*    <i className="bi bi-search"/>*/}
                        {/*</button>*/}

                    </form>
                </div>
            </nav>
            <div className="container mb-4 navbar-cart" style={{marginTop: "10%"}}>
                <div className="row">
                    {cardProduct.map((list) => (
                        <div className="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-0 my-2">
                            <div className="card mt-4" style={{width: "90%", borderRadius: "10px"}}>
                                <Link to="/detail">
                                    <Image className="img-fluid" style={{borderRadius: " 10px 10px 0 0"}}
                                           src={list.image}/>
                                </Link>
                                <div className="card-body">
                                    <div className=" mb-2 d-flex justify-content-between">
                                <span className=""
                                      style={{color: "#131817", fontSize: "1.05em"}}>{list.nameFruit}</span>
                                        <span style={{fontWeight: "bold"}}>
                                                    <FormattedNumber
                                                        value={list.price} disabled
                                                        thousandSeparator={true} currency="VND"
                                                        minimumFractionDigits={0}
                                                    >
                                                    </FormattedNumber>&nbsp;đ</span>
                                    </div>
                                    <div className=" d-flex justify-content-between">
                                        <a className="btn btn-success">Thêm vào giỏ</a>
                                        <a className="btn btn-success">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}