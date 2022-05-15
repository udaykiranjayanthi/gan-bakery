import { Image, Badge, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, incrementCount, decrementCount } from './../store/reducers/productsSlice';


function CartProductCard(props){
    const dispatch = useDispatch();

    return (
        <div className="cart-product-card">
            <Button className="remove-cart" variant="danger" size="sm" onClick={(e) => dispatch(removeFromCart({productid: props.data.productid}))}>
                <i className="fa fa-trash" style={{}} aria-hidden="true"></i>
            </Button>

            <div className="thumb">
                <Image rounded src={props.data.img} alt={props.data.productid} />
            </div>

            <div className="details">
                <div>
                    <h5>{props.data.name}</h5>
                    <p className="caption">
                        {props.data.caption}
                        <span className="grayout">...</span>
                    </p>
                </div>
                
                <div className="product-details">
                    <Badge bg={parseFloat(props.data.rating) >= 4.0 ? "success" : parseFloat(props.data.rating) < 3.0 ? "danger" : "warning"} style={{marginTop: "0.5rem"}}>
                        <i className="fa fa-star" aria-hidden="true"></i> {props.data.rating}
                    </Badge>
                    <span style={{flexGrow: "20"}}></span>

                    <div className="price">
                        <ButtonGroup className="counter">
                            <Button size="sm" variant="outline-danger" onClick={(e) => dispatch(decrementCount( {productid: props.data.productid} ))} disabled={props.data.count === "1"}>-</Button>
                            <Button size="sm" variant="outline-danger" disabled style={{color: "#222", width: "36px"}}>{props.data.count}</Button>
                            <Button size="sm" variant="outline-danger" onClick={(e) => dispatch(incrementCount( {productid: props.data.productid} ))}>+</Button>
                        </ButtonGroup>
                        <span style={{minWidth: "50px", textAlign: "right"}}>
                            ₹ {parseInt(props.data.count) * parseFloat(props.data.price)}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartProductCard;