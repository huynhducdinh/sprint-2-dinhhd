import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {Dropdown, Image} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import {toast} from "react-toastify";


export function HeadersPhu() {
    const [isLogin, setIsLogin] = useState();
    const token = localStorage.getItem('token');
    const currentUserName = localStorage.getItem('username');
    // const [userName, setUserName] = useState(currentUserName);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const nav = useNavigate();
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        if (token) {
            setIsLogin(true);
        } else {
// Xử lý khi không có token trong localStorage
        }
    }, [token])
    useEffect(() => {
        if (token) {
            setIsLogin(true)
            // setUserName(currentUserName)
        } else {
// Xử lý khi không có token trong localStorage
        }
    }, [token])
    const handlerLogout = async () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("role")
        setIsLogin(false)
        toast.success("Đăng xuất thành công")
        nav("/login")
    }
    return (
        <>
            <header id="header" className="header  d-flex align-items-center" style={{position: "sticky", top: 0, zIndex: 200}}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div id="header-nav-logo " className="col-md-2 img logo">
                        <Link to="/">
                            <img src="/img/image.png" alt=""/>
                        </Link>
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul style={{marginLeft: "-35%"}}>
                            <li>
                                <NavLink to="/" style={{justifyContent: "center"}} className="text-white "
                                         href="#hero">Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/card" style={{justifyContent: "center"}} className="text-white "
                                         href="#about">Sản phẩm </NavLink>
                            </li>
                            <li>
                                <a to="" className="text-white " style={{justifyContent: "center"}}
                                         href="#events">Tin tức</a>
                            </li>
                            <li>
                                <a className="text-white " style={{justifyContent: "center"}} href="#chefs">Liên hệ</a>
                            </li>
                            <li>
                                <a className="text-white " style={{justifyContent: "center"}} href="#chefs">Câu
                                    chuyện</a>
                            </li>

                            <div style={{marginLeft: "20%", borderRadius: "30px"}}>
                                <li>
                                    {isLogin ? (
                                            <>
                                                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}
                                                          className="nav-info-user" style={{zIndex:1000}}>

                                                    <DropdownToggle
                                                        style={{
                                                            backgroundColor:"#03964CFF",
                                                            color: "white",
                                                            borderColor: "white",
                                                            fontWeight: "700",
                                                            fontSize: "20px",
                                                            fontFamily: "var(--font-secondary)"
                                                        }}
                                                        className="nav-link"
                                                    >
                                                        <i className="fa-solid fa-circle-user"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu className="abc">
                                                        <Link className="dropdown-item "
                                                              style={{color: "black"}}>
                                                            <span>  {currentUserName} <i
                                                                className="fa-solid fa-user"></i></span>
                                                        </Link>
                                                        <Link to="/nav/info-store" className="dropdown-item "
                                                              style={{color: "black"}}>Quản lý cửa hàng<i
                                                            className="fa-solid fa-list-check"></i></Link>
                                                        <Link className="dropdown-item " onClick={() => handlerLogout()}
                                                              style={{color: "black"}}>Đăng xuất<i
                                                            className="fa-solid fa-right-from-bracket"></i></Link>
                                                    </DropdownMenu>
                                                </Dropdown>
                                                {/*<i style={{marginLeft: "0.5rem"}} className="fa-regular fa-user"></i>*/}
                                            </>
                                        )
                                        :
                                        <NavLink to="/login" className="text-white btn btn-outline-success "
                                                 style={{justifyContent: "center" ,border:"1px solid #00CC33",borderRadius:"30px"}}>Đăng nhập
                                            <i className="fa-solid fa-user"></i></NavLink>
                                    }
                                </li>
                            </div>
                            <div style={{marginLeft: "5%"}}>
                                <li>
                                    <NavLink to="/cart" className="text-white " style={{justifyContent: "center"}}>
                                        Giỏ hàng <i className='fa fa-shopping-basket'></i>
                                    </NavLink>
                                </li>
                            </div>
                        </ul>
                    </nav>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"/>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"/>
                </div>
            </header>


        </>
    )
}