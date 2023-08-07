import '../css/card.css'
import React, {useEffect, useState} from "react";
import * as card from '../service/Product'
import {DropdownButton, Image} from "react-bootstrap";
import {FormattedNumber} from "react-intl";
import {Link, NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


export function CardProduct() {
    const [cardProduct, setCardProduct] = useState([])

    const findAllProduct = async () => {
        const res = await card.getAllProduct()
        setCardProduct(res.content)
    }

    useEffect(() => {
        findAllProduct()

    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const dropDownOption = (options) => {
        let ulElement;
        let ulIcon;
        switch (options) {
            case "fullface":
                ulElement = document.getElementById('fullface')
                ulIcon = document.getElementById('fullface-icon')
                break;
            case "armor":
                ulElement = document.getElementById('armor')
                ulIcon = document.getElementById('armor-icon')
                break;
            case "different":
                ulElement = document.getElementById('different')
                ulIcon = document.getElementById('different-icon')
                break;
        }
        ulIcon.style.transition = "transform 0.5s";
        if (ulElement.style.display === 'none') {
            ulElement.style.display = 'block';
            ulIcon.style.transform = 'rotate(180deg)';
        } else {
            ulElement.style.display = 'none';
            ulIcon.style.transform = 'rotate(0deg)';
        }
    }
    return (
        <>
            <nav className="breadcrumbs text-center h2 from-d" style={{position: "sticky", top: 90, zIndex: 1000}}>
                <div style={{marginRight: "2.5%"}} className="d-flex justify-content-between ">
                    <div style={{marginLeft: "6.6%"}} className="d-flex  ">
                        <div style={{padding: " 0px 15px 0px"}}>
                            <Link style={{marginTop: "15%"}}><span className="text-black">Trang chủ</span></Link>
                        </div>
                        <div style={{padding: " 0px 15px 0px"}}>
                            <button className="btn btn-success" type="submit">
                                <span>Trái cây việt</span>
                            </button>
                        </div>
                        <div style={{padding: " 0px 15px 0px"}}>
                            <button className="btn btn-success " type="submit">
                                <span>Trái cây nhập khẩu</span>
                            </button>
                        </div>
                        <div style={{padding: " 0px 15px 0px"}}>
                            <button className="btn btn-success dropdown" type="submit">
                                <span>Giỏ trái cây &nbsp; <i className="fa-solid fa-chevron-down"></i></span>
                                <ul style={{backgroundColor: "#077039"}}>
                                    <li><a href="#">Giỏ trái cây</a></li>
                                    <li><a href="#">Giỏ trái cây + hoa tươi</a></li>
                                    <li><a href="#">Hộp trái cây</a></li>
                                    <li><a href="#">Khuy trái cây</a></li>
                                    <li><a href="#">Sweet box</a></li>
                                </ul>
                            </button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end" style={{marginRight:"6.4%"}}>
                        <form className="from-d  d-flex justify-content-between" >
                            <select name="orderby" className=" form-select select-d "
                                    style={{border: "1px solid #03964c" ,marginRight:"3%"}}>
                                <option>Chọn giá (đ)</option>
                                <option>1 trăm đến 2 trăm</option>
                                <option>2 trăm đến 5 trăm</option>
                                <option>5 trăm đến 1 triệu</option>
                                <option>Trên 1 triệu</option>
                            </select>
                            <input
                                style={{border: "1px solid #03964c"}}
                                className="form-control me-1 input-d "
                                type="text"
                                name="name"
                                placeholder="Nhập tên sản phẩm"
                                aria-label="Search"
                            />
                        </form>
                    </div>
                </div>

            </nav>
            <div className="container mb-4 justify-content-center d-flex">
                <div className="row">
                    {cardProduct.map((list) => (
                        <div
                            className=" col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-0 my-2">
                            <div className="card mt-4" style={{width: "92%", borderRadius: "10px"}}>
                                <Link to={`/detail/${list.id}/product`}>
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
                                        <button className="btn btn-success">Mua ngay</button>
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