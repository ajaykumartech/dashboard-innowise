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
  Table,
} from "react-bootstrap";
import Logo from "../Images/Logo.png";
import { SidebarData } from "./sidebarData";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import axios from "axios";
import { Grid } from "@mui/material";

function Dashboard() {
  const [data, setData] = useState([]);
  const [poli, setPoli] = useState(true);
  const [task, setTask] = useState(false);
  const [activ, setActiv] = useState(false);
  const [lim, setLim] = useState(false);
  const [intelli, setIntelli] = useState(false);
  const [claims, setClaims] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/policies")
      .then((res) => setData(res.data), console.log(data));
  }, [data]);

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

  return (
    <Container fluid style={{ backgroundColor: "#f2f2f2", marginTop: "20px" }}>
     
        <Row>
          <Col md="2"
            
            style={{
              backgroundColor: "#fff",
              boxShadow:"2px 2px  5px 5px 0.1px gray",
              borderRadius: "15px",
              margin: "10px 15px 0px 50px ",
            }}
          >
            <div className="Sidebar">
              <div style={{ padding: "15px", display: "flex" }}>
                {` `}
                <Image
                  style={{
                    borderRadius: "5px",
                    border: "1px solid black",
                    padding: "5px",
                  }}
                  src={Logo}
                  alt="InnoWise"
                  width="40px"
                  height="40px"
                />
                <div style={{ paddingLeft: "10px" }}>
                  <h6>
                    InnoWise LLC <br />
                    Katy,TX
                  </h6>
                </div>
              </div>
              <p
                style={{
                  padding: "5px",
                  fontFamily: "arial",
                  fontSize: "15px",
                }}
              >
                MAIN MENU
              </p>

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
                      style={{ width: "auto", margin: "5px",display:"flex" }}
                    >
                      <div style={{display:"flex"}}>
                      <div id="icon"> {val.icon}</div>
                      <div id="title">{val.title}</div>
                      </div>
                      
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
          <Col md="8"
            style={{
              backgroundColor: "#fff",
              boxShadow:"2px 2px  5px 5px 0.1px gray",
              borderRadius: "15px",
              margin: "10px 0px 0px 5px ",
            }}
          >
            <div>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Row style={{ marginTop: "10px" }}>
                <Col>
                <NotificationsSharpIcon sx={{ fontSize: 40 }}/>
              </Col>
              <Col>
                <AccountCircleSharpIcon sx={{ fontSize: 40 }}/>
              </Col>
                  <Col>
                    <DropdownButton
                      id="dropdown-button-dark-example2"
                      variant="secondary"
                      menuVariant="dark"
                      className="mt"
                      title="James"
                    >
                      <Dropdown.ItemText
                        style={{ backgroundColor: "GrayText" }}
                      >
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
                  <h3 style={{ padding: "0px", margin: "0px" }}>
                    Customer Details
                  </h3>
                  <p style={{ color: "gray", padding: "0px" }}>
                    View or edit customer data
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <AccountCircleSharpIcon sx={{ fontSize: 50 }} />

                  <span style={{ fontFamily: "arial", fontSize: "25px" }}>
                    Ralph Edwards
                  </span>
                </Col>
                <Col>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Row>
                      <Col>
                        <Button>AddPolicy</Button>
                      </Col>
                      <Col>
                        Account balance:
                        {` `}
                        <span style={{ textAlign: "end" }}>$2794.00</span>
                      </Col>
                      <Col>
                        <Button
                          style={{
                            border: "1px solid black",
                            borderRadius: "15px",
                            textAlign: "center",
                            justifyContent: "center",
                            display: "flex",
                            backgroundColor: "white",
                            color: "black",
                          }}
                        >
                          ...
                        </Button>
                      </Col>
                    </Row>
                  </Grid>
                </Col>
              </Row>
              <Row>
                <Nav className="text-center mt-4 mb-4">
                  <NavLink onClick={TooglePoli}>Policies</NavLink>
                  <NavLink onClick={ToogleTasks}>Tasks</NavLink>
                  <NavLink onClick={ToogleActivities}>Activities</NavLink>
                  <NavLink onClick={ToogleLimits}>Limits/Coverage</NavLink>
                  <NavLink onClick={ToogleIntelli}>Intelligence</NavLink>
                  <NavLink onClick={ToogleClaims}>Claims</NavLink>
                </Nav>
                <hr />
              </Row>
              {/* Policies */}
              {poli && (
                <>
                  <Row>
                    <Col>
                      <Row>
                        <Col md="4">
                          <DropdownButton
                            as={ButtonGroup}
                            size="sm"
                            variant="secondary"
                            title="Last 5 Years"
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
                        <Col md="4">
                          <DropdownButton
                            as={ButtonGroup}
                            size="sm"
                            variant="secondary"
                            title="Filter by"
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
                          <Button variant="primary">Export Details</Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Table responsive style={{ padding: "10px" }}>
                      <thead>
                        <tr>
                          <th>Policy</th>
                          <th>Insurer</th>
                          <th>Description</th>
                          <th>Cost/Billed</th>
                          <th>Term</th>
                          <th>Status</th>
                          <th>Action</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((itms, val) => {
                          return (
                            <tr>
                              <td>{itms.polnum}</td>

                              <td>{itms.insurer}</td>
                              <td>{itms.description}</td>
                              <td style={{ color: "red" }}>
                                ${itms.cost}
                                <span></span>
                              </td>
                              <td>{itms.term}</td>
                              <td>{itms.status}</td>
                              <td>
                                <ButtonGroup>
                                  <DropdownButton
                                    as={ButtonGroup}
                                    title="..."
                                    id="bg-nested-dropdown"
                                  >
                                    <Dropdown.Item eventKey="1">
                                      Endorse
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="2">
                                      Rewrite
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="3">
                                      Cancel
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="4">
                                      Compare
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="5">
                                      Details
                                    </Dropdown.Item>
                                  </DropdownButton>
                                </ButtonGroup>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
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
            </div>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Dashboard;
