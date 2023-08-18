import {Image} from "react-bootstrap";
import React, {useEffect} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


export function Story() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="container mb-5">
                         <h2 className="section-title">
                <b className="ok"></b>
                <span className="text-center mt-4 ok-la d-flex"> FRUIT SHOP - QUÀ TẶNG TỪ SỰ TỬ TẾ</span>
                <b className="ok"></b>
                         </h2>
                <div className="container mt-3">
                    <p>Thực phẩm xanh – sạch – ngon vẫn luôn là những tiêu chí hàng đầu giúp người tiêu dùng chọn lựa
                        thực phẩm mỗi ngày. Thế nhưng khoảng thời gian gần đây lại có rất nhiều thương lái lợi dụng lòng
                        tin
                        của người tiêu dùng tráo các thực phẩm bẩn, kém chất lượng gây ảnh hưởng nghiêm trọng đến sức
                        khỏe
                        của mọi người.</p>
                    <p>Đặc biệt với thị trường trái cây nhập khẩu thì tình trạng này lại tràn lan gây hoang mang cho
                        người tiêu dùng. Nhận thấy những điều này, Vinfruits đã ra đời với sứ mệnh mang đến sức khỏe cho
                        mọi nhà qua những loại trái cây ngoại nhập thượng hạng, chất lượng với tiêu chuẩn 3C: CHUẨN TƯƠI
                        – CHUẨN NGON – CHUẨN SẠCH.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <Image src="https://vinfruits.com/wp-content/uploads/2023/02/sp-09-2-2048x2048.png"
                               width="530"/>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <div className="mt-3">
                                <strong className="" style={{fontStyle: "italic", color: "", fontWeight: "bolder"}}><i
                                    className="fa-solid fa-caret-up fa-rotate-90"></i> TỪ SỰ CHÂN THÀNH</strong>
                                <p className="mt-3">Fruit Shop mong rằng sự chân thành và thấu hiểu nhu cầu khách hàng
                                    sẽ mang đến cho Quý
                                    khách những loại trái cây tươi ngon và chất lượng hạng nhất đạt tiêu chuẩn 3C: CHUẨN
                                    TƯƠI – CHUẨN NGON – CHUẨN SẠCH.
                                </p>
                            </div>
                            <div className="mt-4">
                                <strong className="" style={{fontStyle: "italic", color: "", fontWeight: "bolder"}}><i
                                    className="fa-solid fa-caret-up fa-rotate-90"></i> SÁNG TẠO TRONG YÊU
                                    THƯƠNG</strong>
                                <p className="mt-3">Từ những loại trái cây nhập khẩu đến những món quà từ trái cây đều
                                    được team
                                    Fruit Shop
                                    nâng niu, tỉ mẩn thực hiện… với mong muốn lan tỏa sự yêu thương đến tất cả mọi
                                    người.</p>
                            </div>
                            <div className="mt-4">
                                <strong className="" style={{fontStyle: "italic", color: "", fontWeight: "bolder"}}><i
                                    className="fa-solid fa-caret-up fa-rotate-90"></i> KẾT NỐI MỌI KHOẢNG CÁCH</strong>
                                <p className="mt-3">Fruit Shop hy vọng sẽ trở thành cầu nối bền vững mang đến sự gắn kết
                                    hài hòa giữa
                                    Fruit Shop với Quý khách, giữa Quý khách với gia đình, bạn bè, đồng nghiệp và đối
                                    tác
                                    của
                                    mình thông qua những sản phẩm quà tặng trái cây cao cấp – ý nghĩa.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div >
                            <h4>FRUIT SHOP CHI NHÁNH QUẢNG NAM</h4>
                            <div className="mt-4">
                            <p><i className="fa-solid fa-caret-up fa-rotate-90"></i> Địa chỉ: Thị Trấn Ái Nghĩa,Đại Lộc, Quảng Nam </p>
                            <p><i className="fa-solid fa-caret-up fa-rotate-90"></i> Số điện thoại: (+84) 0555-777-666</p>
                            <p>Quy tụ hơn 30+ loại trái cây ngoại nhập và nội địa chất lượng loại 1 trên thị trường,
                                mang đến vị ngon trọn tự nhiên.</p>
                            <p>Bên cạnh đó, Fruit Shop cung cấp quà tặng trái cây với sự kết hợp hoàn hảo từ những loại
                                trái cây ngon ngọt & hoa tươi nhập quý hiếm, mẫu mã hiện đại, tối giản và phù hợp những
                                dịp quan trọng như:</p>
                            <p><i className="fa-solid fa-caret-up fa-rotate-90"></i> Chúc mừng: khai trương, sinh nhật,…
                            </p>
                            <p><i className="fa-solid fa-caret-up fa-rotate-90"></i> Biếu tặng: khách hàng, đối tác, người
                                thân,…</p>
                            <p><i className="fa-solid fa-caret-up fa-rotate-90"></i> Thăm bệnh, hỏi thăm sức khỏe </p>
                            <p><i className="fa-solid fa-caret-up fa-rotate-90"></i> Dâng hương: chùa, đền, tổ nghề,… </p>
                            <p><i className="fa-solid fa-caret-up fa-rotate-90"></i> Cúng kiếng: giỗ tổ nghề, đám giỗ,…
                            </p>
                            <p><i className="fa-solid fa-caret-up fa-rotate-90"></i> Các dịp lễ lớn khác: quốc tế Phụ Nữ,
                                ngày Nhà giáo Việt Nam, lễ tình nhân,… </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Image src="https://vinfruits.com/wp-content/uploads/2023/02/sp-13.png"
                               width="530"/>
                    </div>
                </div>
            </div>
        </>
    )
}