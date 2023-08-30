import {Link} from "react-router-dom";
import {useState} from "react";
import {storage} from "../../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {Field} from "formik";



export function CreateProductFruit() {
    const [imgErr, setImgErr] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [firebaseImg, setImg] = useState(null);
    const [progress, setProgress] = useState(0);
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        setImgErr("");
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleSubmitAsync = async () => {
        return new Promise((resolve, reject) => {
            const file = selectedFile;
            if (!file) return reject("Chưa có file nào được chọn ");
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setImg(downloadURL);
                    resolve(downloadURL);
                }
            );
        });
    };
    return(
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center " style={{minHeight: "80vh"}}>
                    <div className="col-md-6">
                        <div className="card px-5 py-4">
                            <div style={{textAlign: "center"}}>
                                <h1>Thêm mới sản phẩm </h1>
                            </div>
            <form>
                <div className="row mt-2  ">
                    <div className="col-md-6 inputs">
                        <label>Tên sản phẩm</label>
                        <input
                            name="customers"
                            type='text'
                            className="form-control"
                            data-error="Please specify your need."
                            style={{height: 35}}
                        />
                    </div>
                    <div className="col-md-6 inputs"><label>Số lượng</label>
                        <input type="text" className="form-control" name="contractCode"
                               aria-label="Small"
                               style={{height: "35px"}}
                        />
                    </div>
                </div>
                <div className="row mt-2  ">
                    <div className="col-md-6 inputs">
                        <label>Giá tiền</label>
                        <input
                            name="customers"
                            type='text'
                            className="form-control"
                            data-error="Please specify your need."
                            style={{height: 35}}
                        />
                    </div>
                    <div className="col-md-6 inputs"><label>Loại trái cây</label>
                        <input type="text" className="form-control" name="contractCode"
                               aria-label="Small"
                               style={{height: "35px"}}
                        />
                    </div>
                </div>
                <div className="row mt-2  ">
                    <div className="col-md-6 inputs">
                        <label>Hình ảnh</label>
                        <input
                            name="file"
                            type='file'
                            className="form-control"
                            data-error="Please specify your need."
                            style={{height: 35}}
                            onChange={(event) => {
                                handleFileSelect(event);
                            }}
                        />
                    </div>
                    <div className="col-md-6 inputs"><label>Mô toả</label>
                        <input type="text" className="form-control" name="contractCode"
                               aria-label="Small"
                               style={{height: "35px"}}
                        />
                    </div>
                </div>
                <div className="d-flex mt-4 justify-content-between">
                    <div className="text-center" style={{marginLeft: "23.6%"}}>
                        <Link to="/nav/info-store/transaction-history"
                              className="btn btn-secondary ">
                            <b className="text-center">Quay lại</b>
                        </Link>
                    </div>
                    <div className="text-center m-auto">
                        <div className="text-center">
                            <button type="submit"
                                    className="btn btn-success">
                                <b className="text-center">Thêm mới</b>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}