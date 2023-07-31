export function Login() {
    return(
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    <div
                        className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                    >
                        <div className="featured-image mb-3">
                            <img src="/img/hinh.webp" className="img-fluid" style={{ width: 400 ,height:300}} />
                        </div>

                    </div>
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Đăng nhập Fruit Shop</h2>
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
                                <div className="input-group mb-5 d-flex justify-content-between">
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
                                            <small>Nhớ mật khẩu</small>
                                        </label>
                                    </div>
                                    <div className="forgot">
                                        <small>
                                            <a href="forgotPass.html">Quên mật khẩu?</a>
                                        </small>
                                    </div>
                                </div>
                                <div className="input-group mb-3 login">
                                    <button
                                        className="btn btn-success  w-100 fs-6"

                                        type="submit"
                                    >
                                        Đăng nhập ngay
                                    </button>
                                </div>
                                <div className="input-group mb-3">
                                    <button className="btn btn-lg btn-light w-100 fs-6">
                                        <img src="/img/gg.png" style={{ width: 50 }} className="me-2" />
                                        <small>Sign In with Google</small>
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