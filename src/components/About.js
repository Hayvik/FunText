import React from 'react';
import myImage from '../assets/myImage2.png';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  
} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default function About() {
  const handleEmail=()=>{
    window.location.href = 'mailto:shitlayadavvk@gmail.com';

  }
  return (
    <MDBCard>
      <div style={{ display: 'flex', alignItems: 'center',  }}>
        <MDBCardImage style={{borderBottomRightRadius:'20px'}} src={myImage} alt='...' position='relative' width='300px' height='400px'  />
        <MDBCardBody >
          <div style={{ marginLeft: '20px' }}>
            <MDBCardText>
              I used few of pre build resources
              Such as bootstrap Navbar and some CSS Elements<br/>
              Because my goal of this project was to learn more about states and hooks and CSV<br/>
                 conversion
              I was a great experience check my github for source code 
            </MDBCardText>
          </div>
        </MDBCardBody>
      </div>
      <MDBCardBody>
        <MDBCardText>
        
        <section className='mb-4 ' style={{fontSize:'20px' ,color:'black',marginLeft:'2em'}}>
          
        Contact Me :)
          
          <MDBBtn outline color="dark" floating className='m-1'  target='_blank' role='button ' onClick={handleEmail} style={{padding:'10px',alignContent:'center'}}>
          shitlayadavvk@gmail.com  
            <MDBIcon fas icon="envelope" />
          </MDBBtn>
        </section>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
