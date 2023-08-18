import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useEffect, useState} from "react";
import * as historyService from '../../service/OrderAndOrderDetail'
import {FormattedNumber} from "react-intl";
import moment from "moment";

export function History() {
    const [historyList, setHistory] = useState([])

    const getAllHistory = async () => {
        const res = await historyService.listHistory()
        setHistory(res)
    }
    useEffect(() => {
        getAllHistory()
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // if (!historyList){
    //     return null;
    // }
    return (
        <>
        <div>
            <div><h1 className="text-center mt-5">DANH SÁCH LỊCH SỬ ĐÃ GIAO DỊCH</h1></div>
            <div className="table-responsive mt-5 mb-5"
                 style={{width: '80%', marginLeft: "10%", border: "1px solid black "}}>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Ngày giao dịch</th>
                        <th>Tổng tiền</th>
                    </tr>
                    </thead>
                    <tbody>
                    {historyList.map((list,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{list.productFruit.nameFruit}</td>
                            <td>{list.quantity}</td>
                            <td>{list.createDate===""?"":
                                moment(list.createDate, 'YYYY/MM/DD').format('DD/MM/YYYY')
                            } </td>
                            <td>
                                <FormattedNumber
                                    value={list.orders.totalPrice}>
                                    thousandSeparator={true} currency="VND"
                                    minimumFractionDigits={0}
                                </FormattedNumber> đ</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}