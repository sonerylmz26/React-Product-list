import axios from "axios";
import { useEffect, useState } from "react";
import  Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card';


const Electronics = () => {
  const [data, setData] = useState([])

  const getProduts = async () => {
      const BASE_URL = "https://fakestoreapi.com/products/category/electronics";
      const {data} = await axios(BASE_URL);
      setData(data)

  

  };

  useEffect(() => {
      getProduts();
  }, []);


  return (

    <Container className="justify-content-center mt-5 cont">

  
            <Row className="justify-content-center g-3">

       
            {data.map((item, id) => {
           
                return (


                    <Col key={id} className=" " sm={12} md={6} lg={4} xl={3}>
      <Card className="cards mx-auto" style={{ width: '18rem', height:"400px"}}>
      <Card.Img  className="card-img" variant="top" src={item?.image} />
      <Card.Body>
        <Card.Title className="price">{item?.price} $</Card.Title>
        <Card.Text className="title">
        {item?.title}
        </Card.Text>
      </Card.Body>
    </Card>
                    </Col>
                );
            })}    
            
             </Row>
             </Container>


 
  )
}

export default Electronics