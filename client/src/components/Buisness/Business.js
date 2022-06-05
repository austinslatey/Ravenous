import React, { Component } from "react";
import './Business.css';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

class Business extends React.Component {
    render(){
        return (
            <div classname="Business">
            <div classname="image-container">
              <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
            </div>
            <h2>{business.name}</h2>
            <div classname="Business-information">
              <div classname="Business-address">
                <p>{ business.address }</p>
                <p>{ business.city }</p>
                <p>{ business.state}  , {business.zipCode }</p>
              </div>
              <div classname="Business-reviews">
                <h3>ITALIAN</h3>
                <h3 classname="rating">{business.rating}</h3>
                <p> { business.reviewCount }</p>
              </div>
            </div>
          </div>



        );
    }

}

export default Business;