import axios from "axios";
export const Cart = (props) => {
    let delete_cart = (ID) => {
        axios({
            url: "http://localhost:8000/api/xoa-gio-hang",
            method: 'delete',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json",
            },
            data: {
                id: ID,
            }
        })
            .then((response) => {
                if (response.data.status) {
                    console.log('xoa thanh cong')
                    props.showLargeDrawer()
                }

            })
    }
    return (
        <>

            <div className="the-sp-gio-hang">
                <img src={"/images/" + props.img} />
                <div className="content-left">
                    <p>Tên sản phẩm: {props.ten}</p>
                    <p>Giá: {props.gia}</p>
                    <p>Số lượng: {props.so_luong}</p>
                </div>

                <button onClick={() => delete_cart(props.id)}>X</button>
            </div>
        </>
    );
}
