import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/css/Users.css';

export default function Users() {
    const [cardDetail, setcardDetail] = useState([
        {
            id: 1,
            img: require("../assets/image/products/0-BE-LV0913.png"),
            name: 'Quần ống đứng lai xéo',
            price: 100,
        },
        {
            id: 2,
            img: require("../assets/image/products/0-do-la0701.png"),
            name: 'Quần ống đứng lai xéo',
            price: 200,
        },
        {
            id: 3,
            img: require("../assets/image/products/0-gach-dc07055.png"),
            name: 'Quần ống đứng lai xéo',
            price: 300,
        },
        {
            id: 4,
            img: "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QC12048/1-TRANG-QC12048.png",
            name: 'Quần ống đứng lai xéo',
            price: 400,
        },
        {
            id: 5,
            img: require("../assets/image/products/0-BE-AC12022.png"),
            name: 'Váy trắng có làm anh lo lắng ',
            price: 300,
        },
    ]);

    const elementCard = cardDetail.map((element, index) => {
        return (
            <div key={index}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={element.img} />
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                            {element.price}
                        </Card.Text>
                        <Button className='productBtn' variant="primary">Chi tiết sản phẩm</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    })

    return (
        <div className='listproducts'>
            <div className='d-flex justify-content-around product'>
                {elementCard}
            </div>
        </div>
    )
}
