import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/shoping_cart.css'

import '@fortawesome/fontawesome-free/css/all.min.css';
import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import * as card from "../service/Product";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as type from '../service/Type'
import {FormattedNumber} from "react-intl";
import * as shoppingCart from "../service/ShoppingCart";
import {toast} from "react-toastify";

export function ProductDetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [productDetail, setProductDetail] = useState()
    const [size, setSize] = useState([])
    const [description, setDescription] = useState([])
    const params = useParams();
    const [productList, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const nav = useNavigate();


    const addCart = async () => {
        await shoppingCart.addShoppingCart(quantity, productDetail.id);
        nav("/card")
        toast.success('Thêm vào giỏ hàng thành công')
    }

    const detailProduct = async () => {
        const res = await card.detail(params.id)
        setProductDetail(res)
        await setDescription(res.note.split("."))
    }
    const listGetAll = async () => {
        const res = await card.listAll()
        setProduct(res)
    }

    const sizePro = async () => {
        const res = await type.sizeProduct()
        setSize(res)
    }
    const onCilck1 = async (value) => {
        if (value === 1) {
            if (quantity<productDetail.quantity){
                setQuantity(quantity + 1)
            }
        }
        else {
            if (quantity>0)
                setQuantity(quantity - 1)

        }
    }


    useEffect(() => {
        detailProduct()
        sizePro()
        listGetAll()

    }, [params.id])
    if (!productDetail) {
        return null;
    }

    return (
        <>
            <main id="main">
                <section className="layout_padding" style={{marginTop: "-1%"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="row">
                                        <div className="col-md-7 p-relative r-left">
                                            <div className="full back_blog text_align_center padding_right_left_15">
                                                <Image
                                                    src={productDetail?.image}
                                                    alt="#" style={{width: "80%"}}/>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="full heading_s1">
                                                <h1 style={{color: "#00833e"}}>{productDetail?.nameFruit}</h1>
                                                <h3 style={{color: "#d0a20b"}}><FormattedNumber
                                                    value={productDetail?.price}>
                                                    thousandSeparator={true} currency="VND"
                                                    minimumFractionDigits={0}
                                                </FormattedNumber> đ</h3>
                                                <hr/>

                                                {/*<ul>*/}
                                                {description.map((val, index) => (
                                                    <p key={index}><i className="bi bi-dot"></i> {val}<br/></p>
                                                ))}

                                                {/*    <li className="li-item" key={index}>{val}</li>*/}
                                                {/*</ul>*/}
                                                <div className="d-flex ">
                                                    {/*<select style={{width: "50%", border: "1px solid #03964c"}}*/}
                                                    {/*        name="contractType"*/}
                                                    {/*        as="select"*/}
                                                    {/*        className=" form-select">*/}
                                                    {/*    <option value={""}>Chọn size</option>*/}
                                                    {/*    {size.map((list, index) => (*/}
                                                    {/*        <option key={index}*/}
                                                    {/*                value={list.id}>{list.size} kg</option>*/}
                                                    {/*    ))}*/}
                                                    {/*</select>*/}
                                                    <h6>Chọn kg:</h6>
                                                    <div style={{marginLeft: "5%"}}>
                                                        <button type="button" style={{
                                                            height: "40px",
                                                            borderRadius: "5px 0 0 5px"
                                                        }}
                                                                onClick={() => onCilck1(0)} className="minus"><span
                                                        >-</span></button>
                                                        <input type="number" style={{height: "40px", width: "20%"}}
                                                               className="input" min={1} value={quantity}
                                                        />
                                                        <button onClick={() => onCilck1(1)}
                                                                style={{
                                                                    height: "40px",
                                                                    borderRadius: " 0 5px  5px 0"
                                                                }}
                                                                type="button" value="+"
                                                                className="plus"><span
                                                        >+</span></button>
                                                    </div>
                                                </div>
                                                <button className="btn btn-outline-success mt-3 mb-5 " type="submit"
                                                        style={{width: "100%"}}><span style={{fontWeight: "bold"}}
                                                                                      onClick={() => addCart()}>
                                                  <i className='fa fa-shopping-basket'></i> Thêm vào giỏ hàng</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ======= Portfolio Section ======= */}
                <section id="portfolio" className="portfolio mb-1">
                    <div className="container  ">
                        <div className="section-title " style={{marginTop: "-6%"}} data-aos="fade-up">
                            <h2>Các sản phẩm khác</h2>
                        </div>

                        <section id="chefs" className="chefs section-bg justify-content-center "
                                 style={{marginTop: "2%"}}>
                            <div className="container justify-content-center" data-aos="fade-up">
                                <div className="row gy-4 justify-content-center ">
                                    {productList.map((list, index) => (
                                        <div key={index}
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
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}