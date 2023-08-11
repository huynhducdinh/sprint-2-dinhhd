import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/shoping_cart.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, {useEffect, useState} from "react";

import * as shoppingCart from "../service/ShoppingCart"
import {FormattedNumber} from "react-intl";

export function Shopping_cart() {
    const [totalPrice, setTotalPrice] = useState(0)
    const [cart, setCart] = useState([])

    const getAll = async () => {
        const res = await shoppingCart.listShoppingCart();
        setTotalPrice(0)
        if (res !== null){
            {res.map((list)=>(
                setTotalPrice((prevState)=>(prevState+list.productFruit.price))
            ))}
        }
        setCart(res)
    }
    useEffect(() => {
        getAll()
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const quantityProduct = async (value) => {
    //     if (value === 1) {
    //         setQuantity(quantity + 1)
    //     } else {
    //         setQuantity(quantity - 1)
    //
    //     }
    // }
    return (
        <>

            <nav
                className="breadcrumbs text-center h2 d-flex justify-content-center" style={{marginTop: "-0%"}}>
                <a href="" className="current" style={{color: "#03964c"}}> Giỏ hàng </a>
                <span>
                   <i className="fa-solid fa-angle-right"></i>
                </span>
                <a href="" className="current" style={{color: "#03964c"}}>&nbsp; Chi tiết đơn hàng </a>
                <span>
                   <i className="fa-solid fa-angle-right"></i>
                </span>
                <a href="" className="current" style={{color: "#03964c"}}>&nbsp; Đặt hàng thành công </a>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-7 mb-3 mt-3 ">
                        <div className="">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th colSpan="2">Sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Số lượng(Kg)</th>
                                        <th>Tạm tính</th>
                                        <th>&ensp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cart.map((list, index) => (
                                        <tr>
                                            <td>
                                                <img className="pic"
                                                     src={list.productFruit.image}
                                                     alt=""/>
                                            </td>
                                            <td>{list.productFruit.nameFruit}</td>
                                            <td>  <FormattedNumber
                                                value={list.productFruit.price}>
                                                thousandSeparator={true} currency="VND"
                                                minimumFractionDigits={0}
                                            </FormattedNumber> đ</td>
                                            <td>
                                                <div className="d-flex">
                                                    <button  type="button"
                                                            className="minus" style={{borderRadius: "5px 0 0 5px"}}>
                                                        <span>-</span></button>
                                                    <input type="number"
                                                           className="input" step="1" min="0" max value={list.quantity}
                                                    />
                                                    <button  type="button" value="+"
                                                            className="plus" style={{borderRadius: " 0 5px 5px 0"}}>
                                                        <span>+</span></button>
                                                </div>
                                            </td>
                                            <td>
                                                <FormattedNumber
                                                    value={list.productFruit.price * list.quantity}>
                                                    thousandSeparator={true} currency="VND"
                                                    minimumFractionDigits={0}
                                                </FormattedNumber> đ
                                            </td>
                                            <td>
                                                <div className="btn" data-bs-dismiss="alert">
                                                    <span className="fas fa-times"></span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 mt-3">
                        <div className="">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th colSpan="2">Cộng giỏ hàng</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th>Tạm tính</th>
                                        <td className="justify-content-end d-flex"> <FormattedNumber
                                            value={totalPrice}>
                                            thousandSeparator={true} currency="VND"
                                            minimumFractionDigits={0}
                                        </FormattedNumber> đ</td>
                                    </tr>
                                    <tr>
                                        <th>Giao hàng</th>
                                        <td className="justify-content-end d-flex">Giao hàng tận nơi</td>
                                    </tr>
                                    <tr>
                                        <th>Tổng tiền</th>
                                        <td className="justify-content-end d-flex">
                                            <FormattedNumber
                                                value={totalPrice}>
                                                thousandSeparator={true} currency="VND"
                                                minimumFractionDigits={0}
                                            </FormattedNumber> đ</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <button className="btn btn-success " type="submit" style={{width: "100%"}}> Tiến hành
                                    thanh toán
                                </button>
                                <div className="mt-3">
                                    <h5><i className="fa-solid fa-tag"></i> Phiếu ưu đãi</h5>
                                    <hr/>
                                </div>
                                <form action="" className="mb-3 ">
                                    <div className="col-lg-12 col-xl-12 col-md-5">
                                        <input style={{borderColor: "black"}} type="text"
                                               className="form-control" placeholder="Mã ưu đãi nếu có"
                                               name="mauudai"/>
                                    </div>
                                    <button className="btn btn-secondary mt-3 mb-5 " type="submit"
                                            style={{width: "100%"}}> Áp dụng mã ưu đãi
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}