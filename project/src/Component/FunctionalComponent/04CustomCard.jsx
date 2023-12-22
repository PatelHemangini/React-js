import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

const CustomCard = (props) => {
    return (
        <>
            <MDBCard>
                <MDBCardImage src={props.image} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>{props.title}</MDBCardTitle>
                    <MDBCardText>
                        {props.description}
                    </MDBCardText>
                    <MDBCardText>
                       price= {props.price}$
                    </MDBCardText>
                      <p>Rating={props.rating}</p>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </>
    );
};

export default CustomCard;