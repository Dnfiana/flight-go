import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBadge,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBTable, 
  MDBTableHead, 
  MDBTableBody,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#FBFBFB' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4 mt-5">
              <MDBBreadcrumbItem>
                <a href='/landing'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="/profile">Profile</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle mx-auto"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1 mt-3">Ely Yuniar Pertiwi</p>
                <p className="text-muted mb-4">Kudus, Indonesia</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="envelope fa-lg text-warning" />
                    <MDBCardText>ellyyuniar@gmail.com</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Ely Yuniar Pertiwi</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">085123456789</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Jati, Kudus, Indonesia</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardBody>
              <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">History</span> Transaction</MDBCardText>
              <MDBTable hover>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Transaction ID</th>
                        <th scope='col'>Status</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <th scope='row'>1</th>
                            <td>01/12/2022</td>
                            <td>12345678</td>
                            <td>
                            <MDBBadge color='success' pill>
                            Completed
                            </MDBBadge>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>2</th>
                            <td>29/11/2022</td>
                            <td>12345678</td>
                            <td>
                            <MDBBadge color='primary' pill>
                            Onboarding
                            </MDBBadge>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>2</th>
                            <td>04/12/2022</td>
                            <td>12345678</td>
                            <td>
                            <MDBBadge color='warning' pill>
                            Awaiting
                            </MDBBadge>
                            </td>
                        </tr>
                    </MDBTableBody>
                    </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}