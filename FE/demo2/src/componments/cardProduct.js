import '../css/card.css'
import React, {useEffect, useState} from "react";
import * as card from '../service/Product'
import {Image} from "react-bootstrap";
import {FormattedNumber} from "react-intl";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


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
            {/*<div style={{marginTop: "10%", marginRight: "7.8%",backgroundColor:"#DDDDDD"}}>*/}
            {/*    <form className="d-flex m-1">*/}
            {/*        <select name="orderby" className=" form-select" aria-label="Đơn hàng của cửa hàng"*/}
            {/*                style={{marginRight: "4%", border: "1px solid #03964c"}}*/}
            {/*                fdprocessedid="9rbb3g">*/}
            {/*            <option>Chọn giá</option>*/}
            {/*            <option>100 đến 200</option>*/}
            {/*            <option>Chọn giá</option>*/}
            {/*            <option>Chọn giá</option>*/}
            {/*            <option>Chọn giá</option>*/}
            {/*        </select>*/}
            {/*        <input*/}
            {/*            style={{width: "18vw", height: "38px", border: "1px solid #03964c"}}*/}
            {/*            className="form-control me-1"*/}
            {/*            type="text"*/}
            {/*            name="name"*/}
            {/*            placeholder="Nhập tên sản phẩm"*/}
            {/*            aria-label="Search"*/}
            {/*        />*/}
            {/*        /!*<button className="btn btn-outline-success" type="submit">*!/*/}
            {/*        /!*    <i className="bi bi-search"/>*!/*/}
            {/*        /!*</button>*!/*/}

            {/*    </form>*/}
            {/*</div>*/}
            <div className="container-fluid mb-4 " style={{marginTop: "10%"}}>
                <div className="row">
                    <div className="col-lg-2 " style={{backgroundColor: "rgba(199,148,148,0.5)"}}>
                        <div className="ms-4" style={{padding:"10px 10px"}}>
                            <div style={{padding:"5px"}}>
                                <a href=""><span>Trái cây việt</span></a>
                            </div>
                            <div style={{padding:"5px"}}>
                                <a href=""><span>Trái cây nhập khẩu</span></a>
                            </div>
                            <div className="dropdown" style={{padding:"5px"}}>
                                <a href="#"><span>Giỏ trái cây</span>
                                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                                </a>
                                <ul style={{marginLeft: "9%", backgroundColor: "#DDDDDD"}}>
                                    <li><a href="#">Giỏ trái cây</a></li>
                                    <li><a href="#">Giỏ trái cây + hoa tươi</a></li>
                                    <li><a href="#">Hộp trái cây</a></li>
                                    <li><a href="#">Khuy trái cây</a></li>
                                    <li><a href="#">Sweet box</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 ">
                        <div className="row">
                            {cardProduct.map((list) => (
                                <div
                                    className="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-0 my-2">
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
                                            <div className="d-flex justify-content-between">
                                                <button className="btn btn-success">Thêm vào giỏ</button>
                                                <button  className="btn btn-success">Mua ngay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}