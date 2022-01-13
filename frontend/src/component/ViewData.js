import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Table } from "reactstrap";

const ViewData = () => {
    return (
        <div className="app-container">
            <Navbar
                color="light"
                light
            >
                <NavbarBrand
                    className="me-auto fw-bold text-danger"
                    href="/"
                >
                    USER DATA
                </NavbarBrand>



                <Link className="btn btn-primary m-2" to="/">Add</Link>
                <Link className="btn btn-primary" to="/search">Search</Link>

            </Navbar>
            <Table className="table table-bordered mt-2">
                <thead className="table-danger">
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-secondary">
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>

                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default ViewData;