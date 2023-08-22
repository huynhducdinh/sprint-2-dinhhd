import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useEffect, useState} from "react";
import * as historyService from '../../service/OrderAndOrderDetail'
import {FormattedNumber} from "react-intl";
import moment from "moment";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";

export function History() {
    const [historyList, setHistory] = useState([])
    const [historyDetail, setHistoryDetail] = useState([])
    const [showModal, setShowModal] = useState(false);
    const token = localStorage.getItem("token");
    const nav = useNavigate()
    const getAllHistory = async () => {
        const res = await historyService.listHistory()
        setHistory(res)


    }
    const handleModalClose = () => {
        setShowModal(false);
    };
    const handleModalOpen = async (id) => {
        const res = await historyService.historyDetail(id)
        setHistoryDetail(res)
        setShowModal(true);
    };
    useEffect(() => {
        getAllHistory()
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    if (!historyDetail) {
        return null;
    }
    return (
        <>

            {token ==null ? nav("/") :
                <>
                    <div>
                        <div><h1 className="text-center mt-5">DANH SÁCH LỊCH SỬ ĐÃ GIAO DỊCH</h1></div>
                        <div className="table-responsive mt-5 mb-5"
                             style={{width: '80%', marginLeft: "10%", border: "1px solid black "}}>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên khách hàng</th>
                                    <th>Ngày giao dịch</th>
                                    <th>Tổng tiền</th>
                                    <th>&nbsp;</th>
                                </tr>
                                </thead>
                                {historyList == '' ?
                                    <tr>
                                        <td colSpan={4} className="text-center">
                                            <h4 className="text-danger mt-4">Bạn chưa có đơn giao dịch nào</h4>
                                        </td>
                                    </tr>
                                    :
                                    <tbody>
                                    {historyList.map((list, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{list.customers.nameCustomer}</td>
                                            <td>{list.createDate === "" ? "" :
                                                moment(list.createDate, 'YYYY/MM/DD').format('DD/MM/YYYY')
                                            } </td>
                                            <td>
                                                <FormattedNumber
                                                    value={list.totalPrice}>
                                                    thousandSeparator={true} currency="VND"
                                                    minimumFractionDigits={0}
                                                </FormattedNumber> đ
                                            </td>
                                            <td>
                                                <i style={{color: "orange", cursor: "pointer"}}
                                                   className="text-black fa-solid fa-circle-info"
                                                   data-bs-target="#static"
                                                   onClick={async () => {
                                                       await handleModalOpen(list.id)
                                                   }}></i>
                                            </td>
                                        </tr>
                                    ))}

                                    </tbody>
                                }
                            </table>
                        </div>
                    </div>
                    <>
                        <div className="text-center mt-4 btn-group p-3 m-l-2">
                            <div className="text-center m-auto">
                                <Modal
                                    className="modal-lg"
                                    show={showModal}
                                    onHide={handleModalClose}
                                    keyboard={false}
                                    centered
                                >

                                    <Modal.Body>
                                        <div className="d-flex justify-content-between">
                                            <h2>Chi tiết đơn hàng</h2>
                                            <Link onClick={() => handleModalClose()}> <span
                                                className="btn btn-success">Đóng</span></Link>
                                        </div>
                                        <table className="table table-striped">
                                            <thead>
                                            <tr style={{textAlign: "start"}}>
                                                <th className="">STT</th>
                                                <th colSpan={2} className="">Tên sản phẩm</th>
                                                <th className="">Giá tiền</th>
                                                <th className="">Số lượng</th>
                                                <th className="">Ngày Mua</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {historyDetail.map((list, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img className="pic"
                                                             src={list.productFruit.image}
                                                             alt=""/>
                                                    </td>
                                                    <td>{list?.productFruit.nameFruit}</td>
                                                    <td>
                                                        <FormattedNumber
                                                            value={list?.orders.totalPrice}>
                                                            thousandSeparator={true} currency="VND"
                                                            minimumFractionDigits={0}
                                                        </FormattedNumber> đ
                                                    </td>
                                                    <td>{list?.quantity}</td>
                                                    <td>{list?.createDate === "" ? "" :
                                                        moment(list?.createDate, 'YYYY/MM/DD').format('DD/MM/YYYY')
                                                    } </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </>
                </>
            }
                </>
                )
            }