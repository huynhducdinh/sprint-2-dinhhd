import {useEffect, useState} from "react";
import * as product from "../../service/Product";
import {Link} from "react-router-dom";


export function HomePageAdmin() {
    const [fruit, setFruit] = useState([]);
    const homeAdmin = async () => {
        const res = await product.homePageAdmin();
        setFruit(res.content);
    }
    useEffect(() => {
        homeAdmin()
    }, [])
    return (
        <>
            <div><h1 className="text-center mt-5">DANH SÁCH TRÁI CÂY</h1></div>
            <div><Link to="/createFruit"><span className="btn btn-success">Thêm mới</span></Link></div>
            <div className="table-responsive mt-5 mb-5" style={{width: '80%',marginLeft:"10%",border:"1px solid black "}}>
            <table className="table  table-striped" >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên sản phẩm</th>
                    <th>Loại sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá tiền</th>
                    <th>Số lượng</th>
                </tr>
                </thead>
                <tbody>
                {fruit.map((list,index)=>(
                    <tr key={index}>
                        <td>{list.id}</td>
                        <td>{list.nameFruit}</td>
                        <td>{list.productType.nameType}</td>
                        <td><img style={{width:"4vw",marginLeft:"-0%"}} src={list.image}/></td>
                        <td >{list.price}</td>
                        <td>{list.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>
    )
}