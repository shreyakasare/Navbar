import { useScrollTrigger } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { CenterGrid } from "../../proj-ui/GridLayout";
import { Button, Card } from "react-bootstrap";

const Product = () => {

    const [products, getProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProducts(result))
    }, []);

    const cards = products.map(product => {
        debugger
        return (

            <div className="col-md-3" style={{ marginBottom: '15px' }}>
                <Card key={product.id} className="h-100">
                    <div className="text-center">
                        <Card.Img
                            variant="top"
                            src={product.image}
                            style={{ width: '90px', height: '100px' }}
                        />
                    </div>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            INR: {product.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center" style={{ background: 'white' }}>
                        <Button variant="primary">Add To Cart</Button>
                    </Card.Footer>
                </Card>
            </div >
        )
    })
    return (
        // <CenterGrid>
        <>
            <h1>Product</h1>
            {/* {JSON.stringify(products)} */}

            <div className="row">
                {cards}
            </div>
        </>
        // </CenterGrid>
    )
}

export default Product;