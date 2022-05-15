import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Home(){
    const productsState = useSelector((state) => state.productsReducer);
    const dispatch = useDispatch();
    const products = productsState.products;

    const topProducts = products.filter((product) => {
        return product.category.find((cat) => {
            return cat === "toppick";
        })
    });

    const cakeProducts = products.filter((product) => {
        return product.category.find((cat) => {
            return cat === "cake";
        })
    });

    const snackProducts = products.filter((product) => {
        return product.category.find((cat) => {
            return cat === "snack";
        })
    });

    console.log(cakeProducts);

    return(
        <div>
            <Container >
                <h5 className="category-heading">
                    <span>TOP PICKS</span>
                </h5>
                <Row className="products-grid">
                    {topProducts.map((product) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={product.productid}>
                            <ProductCard data={product} />
                        </Col>
                    ))}
                </Row>

                <h5 className="category-heading">
                    <span>CAKES</span>
                </h5>
                <Row className="products-grid">
                    {cakeProducts.map((product) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={product.productid}>
                            <ProductCard data={product} />
                        </Col>
                    ))}
                </Row>

                <h5 className="category-heading">
                    <span>SNACKS</span>
                </h5>
                <Row className="products-grid">
                    {snackProducts.map((product) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={product.productid}>
                            <ProductCard data={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Home;