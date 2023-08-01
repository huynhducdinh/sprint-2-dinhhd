import {Headers} from "./headers";
import {Footer} from "./footer";
import {useEffect} from "react";

export function Login() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
            <div className=" d-flex justify-content-center align-items-center min-vh-100"  style={{backgroundImage: "url(/img/login.jpg)",backgroundSize:"100vw"}}>
                <div className="row border rounded-5 p-3  shadow box-area" style={{backgroundColor:"rgba(236,230,230,0.5)",marginTop:"6%"}}>
                    <div
                        className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                    >
                        <div className="featured-image mb-3">
                            <img src="/img/fruit%20shop.png" className="img-fluid" style={{ width: 270 ,height:270}} />
                        </div>

                    </div>
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Đăng nhập vào Fruit Shop</h2>
                            </div>
                            <form>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Tài khoản"
                                    />
                                </div>
                                <div className="input-group mb-1">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Mật khẩu"
                                    />
                                </div>
                                <div className="input-group mb-4 d-flex justify-content-between">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="formCheck"
                                        />
                                        <label
                                            htmlFor="formCheck"
                                            className="form-check-label text-secondary"
                                        >
                                            <small style={{color:"black"}}>Nhớ mật khẩu</small>
                                        </label>
                                    </div>
                                    <div className="forgot">
                                        <small >
                                            <a style={{color:"black"}} href="forgotPass.html">Quên mật khẩu?</a>
                                        </small>
                                    </div>
                                </div>
                                <div className="input-group mb-3 login" >
                                    <button
                                        className="btn btn-success  w-100 fs-6"
                                        type="submit"
                                    >
                                        Đăng nhập ngay
                                    </button>
                                </div>
                                <div className="input-group mb-3">
                                    <button className="btn btn-lg btn-light w-100 fs-6" style={{height:"37px"}}>
                                        <img src="/img/goo.png" style={{ width: 25,marginTop:"-2%"}} className="me-2" />
                                        <span >Sign In with Google</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}