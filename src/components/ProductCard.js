import { Card, Button, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorites, addToCart, removeFromCart } from './../store/reducers/productsSlice';


function ProductCard(props){
    const productsState = useSelector((state) => state.productsReducer);
    const dispatch = useDispatch();
    const mycart = productsState.mycart;


    const isInCart = (productid) => {

        var item = mycart.products.find((product) => {
            return product.productid === productid
        });
        if (typeof item !== 'undefined') {
            return true;
        }
        return false;
    }

    return (
        <div>
            <Card className="product-card">
                

                <Card.Img variant="top" src={props.data.img} />
                <button 
                    className="favorites"
                    onClick={() => dispatch( toggleFavorites({productid: props.data.productid}) )}
                >
                    {props.data.isFavorite ? 
                        <i className="fa fa-heart" aria-hidden="true" style={{color: "#f54266"}}></i> :
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        
                    }
                </button>
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <Card.Text style={{fontSize: "12px", color: "gray"}}>
                    {props.data.caption}
                    </Card.Text>
                    <div className="product-details">
                        <Badge bg={parseFloat(props.data.rating) >= 4.0 ? "success" : parseFloat(props.data.rating) < 3.0 ? "danger" : "warning"}>
                            <i className="fa fa-star" aria-hidden="true"></i> {props.data.rating}
                        </Badge>
                        <span className="price">
                            ₹ {props.data.price}
                        </span>
                    </div>
                    {
                        isInCart(props.data.productid) ?
                            <Button variant="outline-secondary" size="sm" style={{width: "100%"}} onClick={(e) => dispatch(removeFromCart({productid: props.data.productid}))}>
                                <i className="fa fa-trash" style={{marginRight: "8px"}} aria-hidden="true"></i>Remove from cart
                            </Button> :
                            <Button variant="danger" size="sm" style={{width: "100%"}} onClick={(e) => dispatch(addToCart({productid: props.data.productid}))}>
                                <i className="fa fa-cart-plus" style={{marginRight: "8px"}} aria-hidden="true"></i>Add to cart
                            </Button>
                            
                    }
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard;