import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useEffect, useState} from "react";
import * as customerService from "../../service/Customer";
import '../../css/info.css'

export function Information() {
    const [info, setInfo] = useState([])
    const viewInfoCustomer = async () => {
        const res = await customerService.getAllCustomer()
        setInfo(res)
    }
    useEffect(() => {
        viewInfoCustomer()
    }, [])
    return (
        <>
            <div>
                <div><h1 className="text-center mt-5 mb-5">THÔNG TIN CÁ NHÂN</h1></div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card p-2 text-center">
                            <div className="row">
                                <div className="col-md-7 border-right no-gutters">
                                    <div className="py-3">
                                        <img
                                            src="/img/hinhanh.jpg"
                                            width={100}
                                            className="rounded-circle"
                                        />
                                        <h4 className="text-black">{info.nameCustomer}</h4>
                                        <div className="stats">
                                            <table className="table table-borderless">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex flex-column">
                                                            <span className="text-left head" style={{fontSize:"1em"}}>Ngày sinh</span>{" "}
                                                            <span className="text-black bottom" style={{fontSize:"1em"}}>{info.birthday}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex flex-column">
                                                            <span className="text-left head" style={{fontSize:"1em"}}>Giới tính</span>{" "}
                                                            <span className="text-black bottom" style={{fontSize:"1em"}}>{info.gender === 0 ? "Nữ" : "Nam"}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/*<div className="px-3">*/}
                                        {/*    <button type="button" className="btn btn-outline-success btn-block">*/}
                                        {/*       Đổi ảnh đại diện*/}
                                        {/*    </button>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="py-3">
                                        <div>
                                            <span className="d-block head" style={{fontSize:"1em"}}>Địa chỉ</span>{" "}
                                            <span className="bottom text-black" style={{fontSize:"1em"}}>{info.address}</span>
                                        </div>
                                        <div className="mt-4">
                                            <span className="d-block head" style={{fontSize:"1em"}}>Số điện thoại</span>{" "}
                                            <span className="bottom text-black" style={{fontSize:"1em"}}>{info.phoneNumber}</span>
                                        </div>

                                        <div className="mt-4">
                                            <span className="d-block head" style={{fontSize:"1em"}}>Email</span>{" "}
                                            <span className="bottom text-black" style={{fontSize:"1em"}}>{info.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}