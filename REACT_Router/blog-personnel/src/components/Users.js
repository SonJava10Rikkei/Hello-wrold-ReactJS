import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/css/Users.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Users() {
    return (
        <div className='listproducts'>
            <div className="d-flex justify-content-around">
               
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QC12048/1-TRANG-QC12048.png" />
                    <Card.Body>
                        <Card.Title>Quần ống đứng lai xéo</Card.Title>
                        <Card.Text>
                            477.000 đ
                        </Card.Text>
                        <Button className='productInfo' variant="primary">Chi tiết sản phẩm</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/ATC12047/1-DEN-ATC12047.png" />
                    <Card.Body>
                        <Card.Title>Áo 2 dây countdown</Card.Title>
                        <Card.Text>
                            184.000 đ
                        </Card.Text>
                        <Button className='productInfo' variant="primary">Chi tiết sản phẩm</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/VC12043/1-NAU-VC12043.png" />
                    <Card.Body>
                        <Card.Title>Váy A xòe lưng kiểu</Card.Title>
                        <Card.Text>
                            355.500 đ
                        </Card.Text>
                        <Button className='productInfo' variant="primary">Chi tiết sản phẩm</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QC12080/1-DO-QC12080.png" />
                    <Card.Body>
                        <Card.Title>Quần ống rộng chiết ly</Card.Title>
                        <Card.Text>
                            495.000 đ
                        </Card.Text>
                        <Button className='productInfo' variant="primary">Chi tiết sản phẩm</Button>
                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}
