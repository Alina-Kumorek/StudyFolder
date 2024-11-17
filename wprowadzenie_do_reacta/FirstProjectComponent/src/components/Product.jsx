import React from 'react';

// export default function Product(title, price, description) {}
// ==> wtedy bez tych props w nazwach zmiennych wewnątrz funkjci

export default function Product(props) {
    return (
        <div>
            <h2> {props.title} </h2>
            <p className="price"> ${props.price} </p>
            <p> {props.description} </p>
        </div>
    );
}
