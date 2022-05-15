import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CartProductCard from "../components/CartProductCard";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { checkout } from './../store/reducers/productsSlice';

function MyCart(){
    const productsState = useSelector((state) => state.productsReducer);
    const dispatch = useDispatch();
    const products = productsState.products;
    const mycart = productsState.mycart;

    const cartProducts = mycart.products.map((item, i) => {
        var productDetails = products.find((product) => {
            return item.productid === product.productid
        })
        return {...productDetails, ...item}
    });

    var totalAmount = 0;
    cartProducts.forEach((item) => {
        totalAmount += parseInt(item.count)*parseFloat(item.price);
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            address: e.target.address.value,
            paymentmode: e.target.paymentmode.value,
        }
        dispatch( checkout(data) );
    }
    return(
        <div>
            <Container >
                <h5 className="category-heading">
                    <span>My Cart</span>
                </h5>
                <Row className="products-grid">
                    <Col xs={12} md={8}>

                        {cartProducts.map((product) => (
                            <CartProductCard data={product} key={product.productid}/>
                        ))}
                    
                    </Col>

                    <Col xs={12} md={4}>
                        <h6 style={{color: "#fc035e", fontWeight: "600"}}>DELIVERY DETAILS</h6>
                        <hr/>

                        <Form className="delivery" onSubmit={(e) => handleSubmit(e)}>
                            <p>Total amount: <span style={{fontWeight: "600"}}>₹ {totalAmount}/-</span></p>
                            <Form.Group className="mb-2" controlId="">
                                <Form.Label >Payment Mode</Form.Label>
                                <Form.Select name="paymentmode" style={{fontSize: "0.875rem"}}>
                                    <option value="cod">Cash on delivery</option>
                                    <option value="online">Online Payment</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="">
                                <Form.Label >Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" required/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" name="phone" required/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="email" required/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="">
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" placeholder="Address" name="address" rows="3" required/>
                            </Form.Group>
                            <Button variant="danger" type="submit" size="sm" style={{width: "100%", padding: ".5rem"}}>
                                Pay & Checkout <i className="fa fa-chevron-circle-right fa-fw"></i>
                            </Button>
                        </Form>
                    </Col>
                   
                    
                </Row>
            </Container>
        </div>
    )
}

export default MyCart;