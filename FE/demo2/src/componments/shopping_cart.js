import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/shoping_cart.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, {useEffect} from "react";



export function Shopping_cart() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>

            <nav
                className="breadcrumbs text-center h2 d-flex justify-content-center" >
                <a href="" className="current" style={{color:"#03964c"}}> Giỏ hàng </a>
                <span >
                   <i className="fa-solid fa-angle-right"></i>
                </span>
                <a href="" className="current" style={{color:"#03964c"}}>&nbsp; Chi tiết đơn hàng </a>
                <span >
                   <i className="fa-solid fa-angle-right"></i>
                </span>
                <a href="" className="current" style={{color:"#03964c"}}>&nbsp; Đặt hàng thành công </a>
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
                                        <th>Số lượng</th>
                                        <th>Tạm tính</th>
                                        <th>&ensp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <img className="pic"
                                                 src="/img/11.jpg"
                                                 alt=""/>
                                        </td>
                                        <td>Nho Rượu Hàn Quốc</td>
                                        <td>200.000 đ</td>
                                        <td>
                                            <div className="d-flex">
                                                <button type="button"  className="minus" style={{borderRadius:"5px 0 0 5px"}}><span>-</span></button>
                                                <input type="number"
                                                       className="input" step="1" min="0" max
                                                       />
                                                <button type="button" value="+" className="plus" style={{borderRadius:" 0 5px 5px 0"}}><span>+</span></button>
                                            </div>
                                        </td>
                                        <td>200.000 đ</td>
                                        <td>
                                            <div className="btn" data-bs-dismiss="alert">
                                                <span className="fas fa-times"></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="pic"
                                                 src="/img/12.png"
                                                 alt=""/>
                                        </td>
                                        <td>Nho Rượu Hàn Quốc</td>
                                        <td>200.000 đ</td>
                                        <td>
                                            <div className="d-flex">
                                                <button type="button"  className="minus" style={{borderRadius:"5px 0 0 5px"}} ><span>-</span></button>
                                                <input type="number" id="quantity_64c88c2c676ec"
                                                       className="input" step="1" min="0" max
                                                       name="cart[9c994526d37b56cd609f904822ffbe53][qty]"
                                                       title="SL" size="4" placeholder inputMode="numeric"
                                                       fdprocessedid="pr6xgp"/>
                                                <button type="button" value="+" className="plus" tyle={{borderRadius:" 0 5px 5px 0"}}><span>+</span></button>
                                            </div>
                                        </td>
                                        <td>200.000 đ</td>
                                        <td>
                                            <div className="btn" data-bs-dismiss="alert">
                                                <span className="fas fa-times"></span>
                                            </div>
                                        </td>
                                    </tr>
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
                                            <td className="justify-content-end d-flex">200.000 đ</td>
                                        </tr>
                                        <tr>
                                            <th>Giao hàng</th>
                                            <td className="justify-content-end d-flex">Giao hàng tận nơi</td>
                                        </tr>
                                        <tr>
                                            <th>Tổng tiền</th>
                                            <td className="justify-content-end d-flex">200.000 đ</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn btn-success " type="submit" style={{width:"100%"}}> Tiến hành thanh toán</button>
                                <div className="mt-3">
                                <h5 ><i className="fa-solid fa-tag"></i> Phiếu ưu đãi</h5>
                                <hr/>
                                </div>
                                <form action="" className="mb-3 ">
                                    <div className="col-lg-12 col-xl-12 col-md-5">
                                        <input style={{borderColor: "black"}} type="text"
                                               className="form-control" placeholder="Mã ưu đãi nếu có"
                                               name="mauudai"/>
                                    </div>
                                    <button className="btn btn-secondary mt-3 mb-5 " type="submit" style={{width:"100%"}}> Áp dụng mã ưu đãi</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}