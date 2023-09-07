import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as userService from '../../service/UserService'
import {Image} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import {getAllCart} from "../redux/actions/cart";
import {useDispatch} from "react-redux";

export function Login() {
    const nav = useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem('token');
        if (token){
            nav("/")
        }
    })
    useEffect(() => {
        window.scrollTo(100,0)
    }, [])
    return (
        <>
            <div className=" d-flex justify-content-center align-items-center min-vh-100"
                 style={{backgroundImage: "url(/img/login.jpg)", backgroundSize: "100vw"}}>
                <div className="row border rounded-5 p-3  shadow box-area"
                     style={{backgroundColor: "rgba(236,230,230,0.5)", marginTop: "-5%", width: "60%"}}>
                    <div
                        className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                    >
                        <div className="featured-image mb-3">
                            <Image src="/img/image.png" className="img-fluid" style={{width: 300, height: 300}}/>
                        </div>

                    </div>
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Đăng nhập vào Fruit Shop</h2>
                            </div>
                            <Formik initialValues={{
                                username: '',
                                password: ''
                            }}
                                    onSubmit={async (value, {resetForm}) => {

                                        const res = await userService.login(value)
                                        if (res.token) {
                                            await localStorage.setItem("token", res.token)
                                            await localStorage.setItem("username", res.username)
                                            await localStorage.setItem("role", res.role)
                                            nav("/")
                                            // window.location.reload()
                                            await toast.success('Đăng nhập thành công')

                                        }

                                    }}>
                                <Form>
                                    <div className="input-group mb-3">
                                        <Field
                                            type="text"
                                            name="username"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder="Tài khoản"
                                        />
                                    </div>
                                    <div className="input-group mb-1">
                                        <Field
                                            type="password"
                                            name="password"
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
                                                <small style={{color: "black"}}>Nhớ mật khẩu</small>
                                            </label>
                                        </div>
                                        <div className="forgot">
                                            <small>
                                                <Link style={{color: "black"}} href="forgotPass.html">Quên mật
                                                    khẩu?</Link>
                                            </small>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 login">
                                        <button
                                            className="btn btn-success  w-100 fs-6"
                                            type="submit"
                                        >Đăng nhập ngay
                                        </button>
                                    </div>

                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <ToastContainer/>
                </div>
            </div>
        </>
    )
}