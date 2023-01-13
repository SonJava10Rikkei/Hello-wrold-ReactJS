import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/css/Users.css';

export default function Users() {
    const [cardDetail, setcardDetail] = useState([
        {
            id: 1,
            img: require("../assets/image/products/0-BE-LV0913.png"),
            name: 'Đầm xẻ màu be',
            price: 100000,
        },
        {
            id: 2,
            img: require("../assets/image/products/0-DO-AC12045.png"),
            name: 'Váy cổ tròn',
            price: 200000,
        },
        {
            id: 3,
            img: require("../assets/image/products/0-gach-dc07055.png"),
            name: 'Váy xuông cam',
            price: 300000,
        },
        {
            id: 4,
            img: "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QC12048/1-TRANG-QC12048.png",
            name: 'Quần ống đứng lai xéo',
            price: 400000,
        },
        {
            id: 5,
            img: require("../assets/image/products/0-BE-AC12022.png"),
            name: 'Váy trắng làm anh lo lắng ',
            price: 500000,
        },
    ]);
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: "currency",
        currency: "VND"
    })

    function hover(element) {
        element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
    }

    function unhover(element) {
        element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
    }
    const elementCard = cardDetail.map((element, index) => {
        return (
            <div className='product' key={index}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={element.img} onmouseover='hover(this)' onmouseout="unhover(this)" />
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                            {formatter.format(element.price)}
                        </Card.Text>
                        <div className='productBtn'>
                            <Button className='productBtnView' variant="primary">Xem</Button>
                            <Button className='productBtnBuy' variant="primary">Mua</Button>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        )
    })
    return (
        <div>
            <div className='d-flex justify-content-around listproducts'>
                {elementCard}
            </div>
        </div>
    )
}
