import React, { useEffect, useState } from "react";
import "../App.css";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Image,
  Nav,
  NavLink,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import Logo from "../Images/Logo.png";
import drop from "../Images/drop.png";
import image from "../Images/image.png";
import { SidebarData } from "./sidebarData";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import axios from "axios";
import { Badge, Grid, Pagination, TablePagination } from "@mui/material";
import { NotificationAddOutlined } from "@mui/icons-material";

function Customer() {
  const [data, setData] = useState([]);
  const [poli, setPoli] = useState(true);
  const [task, setTask] = useState(false);
  const [activ, setActiv] = useState(false);
  const [lim, setLim] = useState(false);
  const [intelli, setIntelli] = useState(false);
  const [claims, setClaims] = useState(false);
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
 const [modal,setModal]=useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/policies")
      .then((res) => setData(res.data), console.log(data));
  }, [data.length]);

  function ToogleTasks() {
    setTask(true);
    setPoli(false);
    setActiv(false);
    setLim(false);
    setIntelli(false);
    setClaims(false);
  }
  function TooglePoli() {
    setTask(false);
    setPoli(true);
    setActiv(false);
    setLim(false);
    setIntelli(false);
    setClaims(false);
  }
  function ToogleIntelli() {
    setTask(false);
    setPoli(false);
    setActiv(false);
    setLim(false);
    setIntelli(true);
    setClaims(false);
  }

  function ToogleLimits() {
    setTask(false);
    setPoli(false);
    setActiv(false);
    setLim(true);
    setIntelli(false);
    setClaims(false);
  }
  function ToogleClaims() {
    setTask(false);
    setPoli(false);
    setActiv(false);
    setLim(false);
    setIntelli(false);
    setClaims(true);
  }
  function ToogleActivities() {
    setTask(false);
    setPoli(false);
    setActiv(true);
    setLim(false);
    setIntelli(false);
    setClaims(false);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container fluid style={{ backgroundColor: "#f2f2f2" ,height:"auto"}}>
      <Row>
        <Col
          md="2"
          style={{
            backgroundColor: "#fff",
            boxShadow: "5px 15px 5px 0.2px gray",
            borderRadius: "15px",
            margin: "20px 0px 80px 30px ",
          }}
        >
          <div className="Sidebar">
            <div style={{ padding: "15px", display: "flex", margin: "20px" }}>
              {` `}
              <Image
                style={{
                  borderRadius: "5px",
                  border: "1px solid gray",
                  padding: "8px",
                }}
                src={Logo}
                alt="InnoWise"
                width="40px"
                height="50px"
              />
              <div style={{ paddingLeft: "10px" }}>
                <h6>
                  InnoWise LLC <br />
                  Katy,TX
                </h6>
              </div>
            </div>
            <ul className="SidebarList">
              {SidebarData.map((val, key) => {
                return (
                  <li
                    className="row"
                    key={key}
                    id={window.location.pathname === val.link ? "active" : ""}
                    onClick={() => {
                      window.location.pathname = val.link;
                    }}
                    style={{ width: "auto", margin: "5px" }}
                  >
                    {val.id === 111 &&(
                      <div>
                         <p className="sideHeadings" style={{color:"gray",fontSize:"12px",fontStyle:"arial"}}>MAIN MENU</p>
                      </div>
                        
                      ) }
                    {val.id === 112 &&(
                      <div>
                         <p  className="sideHeadings" style={{color:"gray",fontSize:"12px",fontStyle:"arial"}}>WORK FLOWS</p>
                      </div>
                        
                      ) }
                       {val.id === 113 &&(
                      <div>
                         <p className="sideHeadings" style={{color:"gray",fontSize:"12px",fontStyle:"arial"}}>GENERAL</p>
                      </div>
                        
                      ) }
                      
                    
                    <div style={{ display: "flex" }}>
                      <div id="icon"> {val.icon}</div>
                      <div id="title">{val.title}</div>
                      <div>
                        {val.id === 12 && (
                          <div>
                            {/* <Badge style={{height:"55px",color:"blue"}} overlap="circular" badgeContent={453}>
            
                          </Badge>  */}

                            <span
                              className="badge badge-pill badge-primary"
                              id="mail-badge"
                              style={{
                                border: "1px solid gray",
                                borderRadius: "10px",
                                backGroundColor: "blue",
                                color: "blue",
                              }}
                            >
                              453
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col
          md="8"
          style={{
            backgroundColor: "#fff",
            boxShadow: "5px 2px 5px 0.2px gray",
            borderRadius: "15px",
            margin: "20px 0px 80px 12px ",
          }}
        >
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <Badge
                    badgeContent={2}
                    Color="warning"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    <NotificationsSharpIcon
                      color="action"
                      sx={{ fontSize: 20 }}
                    />
                  </Badge>
                </Col>
                <Col>
                  <AccountCircleSharpIcon sx={{ fontSize: 20 }} />
                </Col>

                <Col>
                  <DropdownButton
                    id="dropdown-button-dark-example2"
                    variant="light"
                    menuVariant="dark"
                    className="mt"
                    title="James"
                  >
                    <Dropdown.ItemText style={{ backgroundColor: "GrayText" }}>
                      Account
                    </Dropdown.ItemText>
                    <Dropdown.Item as="button">Logout</Dropdown.Item>
                    <Dropdown.Item as="button">Change Password</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Grid>
            <Row>
              <Col>
                <h1
                  style={{ padding: "0px", margin: "0px", fontFamily: "arial" }}
                >
                  Customer Details
                </h1>
                <p style={{ color: "gray", padding: "5px", fontSize: "18px" }}>
                  View or edit customer data
                </p>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Col>
                  <AccountCircleSharpIcon sx={{ fontSize: 50 }} />
                  {` `}
                  <span
                    style={{
                      fontFamily: "arial",
                      fontSize: "25px",
                      verticalAlign: "center",
                    }}
                  >
                    Ralph Edwards
                  </span>
                </Col>
              </Col>
              <Col md="2"></Col>
              <Col md="4">
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                
                  <Col>
                    <Button>AddPolicy</Button>
                  </Col>
                 
                
                
                   <Col>
                    <section>Account balance:</section>
                   <p>$ 2,794.00</p>
                  </Col>
                  
                 <center>
                  <Col>
                    <Button
                      style={{
                        border: "1px solid black",
                        borderRadius: "25px",
                        backgroundColor: "white",
                        color: "black",
                        float:"left",verticalAlign:"center",paddingBottom:"5px"
                      }}
                    >
                      ...
                    </Button>
                  </Col>
                  </center>
                 
                </Grid>
              </Col>
            </Row>
            <Row>
              <Nav className="text-center mt-4 mb-1">
                <NavLink onClick={TooglePoli} style={{color:"black",fontFamily:"arial"}}>Policies</NavLink>
                <NavLink onClick={ToogleTasks} style={{color:"black",fontFamily:"arial"}}>Tasks</NavLink>
                <NavLink onClick={ToogleActivities} style={{color:"black",fontFamily:"arial"}}>Activities</NavLink>
                <NavLink onClick={ToogleLimits} style={{color:"black",fontFamily:"arial"}}>Limits/Coverage</NavLink>
                <NavLink onClick={ToogleIntelli} style={{color:"black",fontFamily:"arial"}}>Intelligence</NavLink>
                <NavLink onClick={ToogleClaims} style={{color:"black",fontFamily:"arial"}}>Claims</NavLink>
              </Nav>
              <hr style={{ padding: "5px", marginBottom: "20px" }} />
            </Row>
            {/* Policies */}
            {poli && (
              <>
                <Row>
                  <Col md="9">
                    <Row>
                      <Col md="3">
                        <DropdownButton
                          as={ButtonGroup}
                          size="sm"
                          variant="light"
                          title="Last 5 Years"
                          style={{ border: "2px solid gray" }}
                        >
                          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                          <Dropdown.Item eventKey="2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3" active>
                            Active Item
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">
                            Separated link
                          </Dropdown.Item>
                        </DropdownButton>
                      </Col>
                      <Col md="3">
                        <DropdownButton
                          as={ButtonGroup}
                          size="sm"
                          variant="light"
                          title="Filter by"
                          style={{ border: "2px solid gray" }}
                        >
                          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                          <Dropdown.Item eventKey="2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3" active>
                            Active Item
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">
                            Separated link
                          </Dropdown.Item>
                        </DropdownButton>
                      </Col>
                      <Col md="3">
                        <Button
                          variant="primary"
                          style={{ display: "inline-block" }}
                        >
                          Export Details
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="3">
                  <Col> 
                    <span style={{fontFamily:"arial",}}>Page 1 of 4</span>
                    <Button variant="light" style={{margin:"0px 5px"}}>&lt;</Button>
                    <Button variant="light" style={{margin:"0px 5px"}}>&gt;</Button>
                    </Col>
                  
                  </Col>
                </Row>
                <Row style={{ paddingTop: "20px" }}>
                  <Table responsive style={{ paddingTop: "20px" }}>
                    <thead>
                      <tr>
                        <td style={{ fontStyle: "arial",fontSize:"xlarge" }}> <center>Policy</center></td>
                        <td style={{ fontStyle: "arial",fontSize:"xlarge" }}><center>Insurer</center></td>
                        <td style={{ fontStyle: "arial",fontSize:"xlarge" }}><center>Description</center></td>
                        <td style={{ fontStyle: "arial",fontSize:"xlarge" }}><center>Cost/Billed</center></td>
                        <td style={{ fontStyle: "arial",fontSize:"xlarge" }}><center>Term</center></td>
                        <td style={{ fontStyle: "arial",fontSize:"xlarge" }}><center>Status</center></td>
                        <td style={{ fontStyle: "arial",fontSize:"xlarge" }}><center>Action</center></td>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((itms, val) => {
                        return (
                          <tr>
                            <td>
                              <center>

                              
                              {
                                itms.poltype ==="home" &&(
                                   <HomeIcon sx={{ fontSize: 35 }} /> 
                                )
                              }
                              {
                                itms.poltype ==="car" &&(
                                   <DirectionsCarIcon sx={{ fontSize: 35 }} /> 
                                )
                              }
                              <span style={{ verticalAlign: "middle",paddingLeft:"15px" }}>{itms.polnum}</span>
                              </center>
                             
                            </td>

                            <td>
                              <center>
                                {
                                  itms.poltype ==="home" &&(
                                    <Image
                                    fluid
                                    src={drop}
                                    alt="..."
                                    width="35"
                                    style={{ padding: "0px" }}
                                  />
                                  )
                                }
                                 {
                                  itms.poltype ==="car" &&(
                                    <Image
                                    fluid
                                    src={image}
                                    alt="..."
                                    width="35"
                                    style={{ padding: "0px" }}
                                  />
                                  )
                                }
                             
                              {` `}
                              <span style={{ verticalAlign: "middle",paddingLeft:"15px" }}>
                                {itms.insurer}
                              </span>
                              </center>
                              
                            </td>
                            <td><center>{itms.description}</center></td>
                            <td style={{ color: "red" }}>
                              <center>
                              <Stack>
                                <div> ${itms.cost}</div>
                                <div> ${itms.cost1}</div>
                              </Stack>
                              </center>
                             
                            </td>
                            <td>
                              <center>
                              <Stack>
                                <div>{itms.term}</div>
                                <div>{itms.term2}</div>
                              </Stack>
                              </center>
                              
                            </td>
                            <td>
                              <center>
                                {
                                  itms.status ==="green" &&(
                                    <Brightness1Icon style={{ color: "green" }} />
                                  )
                                }
                                  {
                                  itms.status ==="red" &&(
                                    <Brightness1Icon style={{ color: "red" }} />
                                  )
                                }

                              
                              </center>
                             
                            </td>
                            <td>
                              <center>
                                <DropdownButton
                                  as={ButtonGroup}
                                  title="..."
                                  id="bg-nested"
                                  variant="light"
                                >
                                  <Dropdown.Item  eventKey="1">
                                    Endorse
                                  </Dropdown.Item>
                                  <Dropdown.Item  eventKey="2">
                                    Rewrite
                                  </Dropdown.Item>
                                  <Dropdown.Item  eventKey="3">
                                    Cancel
                                  </Dropdown.Item>
                                  <Dropdown.Item  eventKey="4">
                                    Compare
                                  </Dropdown.Item>
                                  <Dropdown.Item  eventKey="5">
                                    Details
                                  </Dropdown.Item>
                                </DropdownButton>
                             
                              </center>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>

                  <TablePagination
                    component="div"
                    count={data.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Row>
              </>
            )}
            {/* Policies Ends Here*/}
            {/* Tasks */}
            {task && (
              <div>
                <h2>Theses are tasks</h2>
              </div>
            )}
            {/* Tasks Ends Here */}

            {/* activities */}
            {activ && (
              <div>
                <h3>Theses are activities</h3>
              </div>
            )}
            {/* Activities Ends Here */}
            {/* limits */}
            {lim && (
              <div>
                <h3>Theses are limits</h3>
              </div>
            )}
            {/* limitsEnds Here */}
            {/* Intelligence Starts */}
            {intelli && (
              <div>
                <h3>These are Intelligence</h3>
              </div>
            )}
            {/* Intelligence Ends Here */}

            {/* Claims Start */}
            {claims && (
              <div>
                <h3>These are claims</h3>
              </div>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Customer;
