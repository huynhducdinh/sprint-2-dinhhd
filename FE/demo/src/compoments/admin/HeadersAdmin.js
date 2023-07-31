import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/header.css'

export function HeadersAdmin() {
    return (
        <>
            <header className="header-item container-fluid d-flex">
                <div className="d-flex">
                    <img src="/image/fruit%20shop.png" className="hea-image" width="60" height="60"/>
                    <div className="">
                        <ul className="d-flex hea-items-ul">
                            <li className="hea-li">
                                <a className="hea-a" href="">Trang chủ</a>
                            </li>
                            <li className="hea-li">
                                <a className="hea-a" href="">Trang chủ</a>
                            </li>
                            <li className="hea-li">
                                <a className="hea-a" href="">Trang chủ</a>
                            </li>
                            <li className="hea-li">
                                <a className="hea-a" href="">Trang chủ</a>
                            </li>
                            <li className="hea-li">
                                <a className="hea-a" href="">Trang chủ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    )
}