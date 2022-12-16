import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
from 'mdb-react-ui-kit';
import "./Register.css";
import IconFLightgo from '../assets/Icon.png';


function Register() {
    return (
        <body>
        <MDBContainer fluid className='bg-image'>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>

            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                <img id="icon" src={IconFLightgo} className="mb-4 mx-auto" alt="logo flightgo" style={{ maxWidth: '150px' }}/>
                <h2 className="fw-bold mb-2">Sign Up</h2>
                <p className="text-black-50 mb-3">Please enter your email and password!</p>

                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                <MDBBtn size='lg' >
                    Sign Up
                </MDBBtn>

                <hr className="my-4" />

                <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                    <MDBIcon fab icon="google" className="mx-2"/>
                    Sign Up with Google
                </MDBBtn>
                <p className="text-center mt-3">Already Have a Flightgo member? <a href="/login"><u>Login Now</u></a></p>

                </MDBCardBody>
            </MDBCard>

            </MDBCol>
        </MDBRow>

        </MDBContainer>
        </body>
    );
}

export default Register;