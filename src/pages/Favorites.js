import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Favorites(){
    const productsState = useSelector((state) => state.productsReducer);
    const dispatch = useDispatch();
    const products = productsState.products;
    const favoriteProducts = products.filter((product) => {
        return product.isFavorite === true
    });
    return(
        <div>
            <Container>
                <h5 className="category-heading">
                    <span>Favorites</span>
                </h5>
                <Row className="products-grid">
                    {favoriteProducts.map((product) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={product.productid}>
                            <ProductCard data={product} />
                        </Col>
                    ))}
                   
                    
                </Row>
            </Container>
        </div>
    )
}

export default Favorites;