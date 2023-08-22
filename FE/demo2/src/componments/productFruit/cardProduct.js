import '../../css/card.css'
import React, {useEffect, useState, useContext, useRef} from "react";
import * as card from '../../service/Product'
import {Image} from "react-bootstrap";
import {FormattedNumber} from "react-intl";
import {Link, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import * as shoppingCart from "../../service/ShoppingCart";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";
import {QuantityContext} from "../context/quantityContext";
import {useDispatch} from "react-redux";
import {getAllCart} from "../redux/actions/cart";
import Swal from "sweetalert2";


export function CardProduct() {
    const [cardProduct, setCardProduct] = useState([])
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const [id, setId] = useState(0);

    const [pages, setPages] = useState(0);
    const [pageType, setPageType] = useState(0);
    const [totalPages, setTotalPages] = useState();
    const [typeList, setTypeList] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role');
    const dispatch = useDispatch();
    const nav = useNavigate()
    // sổ loại sản phẩm
    const productType = async (id) => {
        if (id == 1) {
            const res = await card.findAllProductType(1, 0, name, price);
            setId(id)
            setTypeList(res.content)
            setTotalPages(res.totalPages)
        } else if (id == 2) {
            const res = await card.findAllProductType(2, 0, name, price);
            setId(id)
            setTypeList(res.content)
            setTotalPages(res.totalPages)
        }
    }
    // sổ loại sản phẩm load
    const productType1 = async (id, page) => {
        if (id == 1) {
            const res = await card.findAllProductType(1, page, name, price);
            setTypeList(res.totalPages)
            setTotalPages(res.totalPages)
            setPages((prevState) => prevState + 1)
            setTypeList(() => [...typeList, ...res.content])
        } else if (id == 2) {
            const res = await card.findAllProductType(2, page, name, price);
            setTypeList(res.totalPages)
            setTotalPages(res.totalPages)
            setPageType((prevState) => prevState + 1)
            setTypeList(() => [...typeList, ...res.content])
        }
    }
    // sổ page sản phẩm
    const findAllProduct = async () => {
        const res = await card.getAllProduct(0, name, price)
        setCardProduct(res.content)
        setTotalPage(res.totalPages)
    }

    // load thêm sản phẩm
    const loadMore = async (page) => {
        const res = await card.getAllProduct(page, name, price)
        setCardProduct(res.totalPages)
        setTotalPage(res.totalPages)
        setPage((prevState) => prevState + 1)
        setCardProduct(() => [...cardProduct, ...res.content])
    }
    // thêm voà trong giỏ hàng
    const addCart = async (quantity, idFruit) => {
        try {
            if (token == null) {
                await Swal.fire({
                    icon: "warning",
                    text: "Bạn phải đăng nhập mới có thể thêm vào giỏ hàng",
                })
                nav("/login")
            } else {
                await shoppingCart.addShoppingCart(quantity, idFruit)

                await dispatch(getAllCart())
                await toast.success("Thêm vào giỏ hàng thành công")
            }

        } catch (e) {
            return toast.error(e.response.data)
        }
    }

const outOfStock =async () => {
  await  toast.error("Sản phẩm hết hàng")
}
    useEffect(() => {
        findAllProduct()
        productType()
    }, [pages, pageType, name, price])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!cardProduct) {
        return null;
    }
    if (!typeList) {
        return null;
    }
    return (
        <>
            <div style={{height: "auto"}} className="sweet-loading">
                <nav className="breadcrumbs text-center h2 from-d" style={{marginTop: "0%"}}>
                    <div style={{marginRight: "2.5%"}} className="d-flex justify-content-between ">
                        <div style={{marginLeft: "6.6%"}} className="d-flex  ">
                            <div style={{padding: " 0px 15px 0px"}}>
                                <Link onClick={() => {
                                    productType(1)
                                }}>
                                    <span className="btn btn-outline-success">Trái cây nội địa</span>
                                </Link>
                            </div>
                            <div style={{padding: " 0px 15px 0px"}}>
                                <Link onClick={() => {
                                    productType(2)
                                }}>
                                    <span className="btn btn-outline-success "> Trái cây nhập khẩu</span>
                                </Link>
                            </div>
                            {/*<div style={{padding: " 0px 15px 0px"}}>*/}
                            {/*    <button className="btn btn-success dropdown" type="submit">*/}
                            {/*        <span>Giỏ trái cây &nbsp; <i className="fa-solid fa-chevron-down"></i></span>*/}
                            {/*        <ul style={{backgroundColor: "#077039"}}>*/}
                            {/*            <li><a href="#">Giỏ trái cây</a></li>*/}
                            {/*            <li><a href="#">Giỏ trái cây + hoa tươi</a></li>*/}
                            {/*            <li><a href="#">Hộp trái cây</a></li>*/}
                            {/*            <li><a href="#">Khuy trái cây</a></li>*/}
                            {/*            <li><a href="#">Sweet box</a></li>*/}
                            {/*        </ul>*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                        <div className="d-flex justify-content-end" style={{marginRight: "5%"}}>
                            {typeList == '' ?
                                <Formik initialValues={{
                                    name: '',
                                    price: ''
                                }}
                                        onSubmit={async (values) => {
                                            const searchName = async () => {
                                                await setName(values.name);
                                                await setPrice(values.price)
                                                const res = await card.getAllProduct(0, values.name, values.price);
                                                await setCardProduct(res.content);
                                                await setPage(0)
                                            }
                                            searchName()
                                        }}>
                                    <Form className="from-d  d-flex justify-content-between">
                                        <Field name="price" className=" form-select select-d " as="select"
                                               style={{border: "1px solid #03964c", marginRight: "3%"}}>
                                            <option>Chọn giá (đ)</option>
                                            <option name="price" value={1}>50 nghìn đến 2 trăm</option>
                                            <option name="price" value={2}>2 trăm đến 5 trăm</option>
                                            <option name="price" value={3}>5 trăm đến 1 triệu</option>
                                            <option name="price" value={4}>Trên 1 triệu</option>
                                        </Field>
                                        <Field
                                            style={{border: "1px solid #03964c"}}
                                            className="form-control me-1 input-d "
                                            type="text"
                                            name="name"
                                            placeholder="Nhập tên sản phẩm"
                                            aria-label="Search"
                                        />
                                        <button className="btn btn-outline-success" type="submit">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </Form>
                                </Formik>
                                :
                                <Formik initialValues={{
                                    name: '',
                                    price: ''
                                }}
                                        onSubmit={async (values, {resetForm}) => {
                                            const searchName = async () => {
                                                setName(values.name);
                                                setPrice(values.price)
                                                if (id == 1) {
                                                    const res = await card.findAllProductType(1, pages, values.name, values.price);
                                                    setTypeList(res.content);
                                                    setPages(0)
                                                    resetForm();
                                                } else if (id == 2) {
                                                    const res = await card.findAllProductType(2, pageType, values.name, values.price);
                                                    setTypeList(res.content);
                                                    setPageType(0)
                                                    resetForm();
                                                }
                                            }
                                            searchName()
                                        }}>
                                    <Form className="from-d  d-flex justify-content-between">
                                        <Field name="price" className=" form-select select-d " as="select"
                                               style={{border: "1px solid #03964c", marginRight: "3%"}}>
                                            <option>Chọn giá (đ)</option>
                                            <option name="price" value={1}>50 nghìn đến 2 trăm</option>
                                            <option name="price" value={2}>2 trăm đến 5 trăm</option>
                                            <option name="price" value={3}>5 trăm đến 1 triệu</option>
                                            <option name="price" value={4}>Trên 1 triệu</option>
                                        </Field>
                                        <Field
                                            style={{border: "1px solid #03964c"}}
                                            className="form-control me-1 input-d "
                                            type="text"
                                            name="name"
                                            placeholder="Nhập tên sản phẩm"
                                            aria-label="Search"
                                        />
                                        <button className="btn btn-outline-success" type="submit">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </Form>

                                </Formik>
                            }

                        </div>
                    </div>
                </nav>

                <div className="container mb-5 justify-content-center d-flex">
                    <div className="row">

                        {typeList == '' ?
                            <>
                                {cardProduct.length === 0 ?
                                    <h3 style={{color: "red"}} className="text-center mt-4">Hiện tại sản phẩm không
                                        có </h3> :
                                    <>
                                        {cardProduct.map((list, index) => (
                                            <div key={index}
                                                 className=" col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-0 my-2">
                                                <div className="card mt-4"
                                                     style={{width: "auto", borderRadius: "10px"}}>
                                                    <Link to={`/detail/${list.id}/product`}>
                                                        <Image className="img-fluid"
                                                               style={{borderRadius: " 10px 10px 0 0"}}
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
                                                        {list.quantity == 0 ?
                                                            <div className="d-flex justify-content-between">
                                                                <button className="btn btn-danger"
                                                                        onClick={() => outOfStock()}>Tạm thời hết hàng
                                                                </button>
                                                            </div> :
                                                            <div>
                                                                {role == "ROLE_ADMIN" ? '' :
                                                                    <div className="d-flex justify-content-between">
                                                                        <button className="btn btn-success"
                                                                                onClick={() => addCart(quantity, list.id)}>Thêm
                                                                            vào giỏ hàng
                                                                        </button>
                                                                        {/*<button className="btn btn-success">Mua ngay</button>*/}
                                                                    </div>
                                                                }
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {page === totalPage - 1 ? ('') :
                                            (
                                                <div className="btn btn-success mb-4 mt-5"
                                                     style={{
                                                         borderRadius: "30px",
                                                         width: "21%",
                                                         marginLeft: "38%"
                                                     }}>
                <span className="" onClick={() => loadMore(page + 1)}>Xem thêm các sản phẩm khác &nbsp;
                    <i className="fa-solid fa-angle-up fa-rotate-180"></i></span>
                                                </div>
                                            )
                                        }
                                    </>
                                }
                            </>
                            :
                            <>
                                {typeList.length === 0 ?
                                    <h3 style={{color: "red"}} className="text-center mt-4">Hiện tại sản phẩm không
                                        có </h3> :
                                    <>
                                        {typeList.map((list, index) => (
                                            <div key={index}
                                                 className=" col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-0 my-2">
                                                <div className="card mt-4"
                                                     style={{width: "92%", borderRadius: "10px"}}>
                                                    <Link to={`/detail/${list.id}/product`}>
                                                        <Image className="img-fluid"
                                                               style={{borderRadius: " 10px 10px 0 0"}}
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
                                                        {list.quantity == 0 ?
                                                            <div className="d-flex justify-content-between">
                                                                <button className="btn btn-danger"
                                                                        onClick={() => outOfStock()}> Tạm thời hết hàng
                                                                </button>
                                                            </div> :
                                                            <div>
                                                                {role == "ROLE_ADMIN" ? '' :

                                                                    <div className="d-flex justify-content-between">
                                                                        <button className="btn btn-success"
                                                                                onClick={() => addCart()}>Thêm vào
                                                                            giỏ hàng
                                                                        </button>
                                                                        {/*<button className="btn btn-success">Mua ngay</button>*/}
                                                                    </div>
                                                                }
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {pages === totalPages - 1 ? ('') :
                                            <>
                                                {id === 1 ? <div className="btn btn-success mb-4 mt-5"
                                                                 style={{
                                                                     borderRadius: "30px",
                                                                     width: "21%",
                                                                     marginLeft: "38%"
                                                                 }}>
                <span className="" onClick={() => productType1(1, pages + 1)}>Xem thêm các sản phẩm khác &nbsp;
                    <i className="fa-solid fa-angle-up fa-rotate-180"></i></span>
                                                </div> : ""
                                                }
                                            </>
                                        }
                                        {pageType === totalPages - 1 ? ('') :
                                            <>
                                                {id === 2 ? <div className="btn btn-success mb-4 mt-5"
                                                                 style={{
                                                                     borderRadius: "30px",
                                                                     width: "21%",
                                                                     marginLeft: "38%"
                                                                 }}>
                <span className="" onClick={() => productType1(2, pageType + 1)}>Xem thêm các sản phẩm khác &nbsp;
                    <i className="fa-solid fa-angle-up fa-rotate-180"></i></span>
                                                </div> : ""
                                                }
                                            </>
                                        }
                                    </>
                                }

                            </>
                        }
                    </div>
                </div>

                {/*    </>*/}
                {/*}*/}
            </div>
        </>
    )
}