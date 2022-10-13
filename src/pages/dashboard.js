import React, { Component } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link } from "react-router-dom";
import edit from "../pages/edit";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th> Student Name</th>
                  <th>lastname</th>
                  <th>Gender</th>
                  <th>Date of join</th>
                  <th>Date of birth</th>
                </tr>
                {<edit />}
              </thead>
              <tfoot></tfoot>
              <tbody>
                <tr>
                  <td>Jeetu </td>
                  <td>Kumar</td>
                  <td>male</td>
                  <td>03-08-2022</td>
                  <td>01/07/2001</td>
                </tr>
                <tr>
                  <td>vijit </td>
                  <td>nagpure</td>
                  <td>male</td>
                  <td>03-08-2022</td>
                  <td>01/07/2002</td>
                </tr>
                <tr>
                  <td>Rahul </td>
                  <td>rajak</td>
                  <td>male</td>
                  <td>03-08-2022</td>
                  <td>01/07/2002</td>
                </tr>
                <tr>
                  <td>Vikash</td>
                  <td>sharma</td>
                  <td>male</td>
                  <td>03-08-2022</td>
                  <td>01/07/2003</td>
                </tr>

                <tr>
                  <td>Priya </td>
                  <td>Kumari</td>
                  <td>Female</td>
                  <td>03-07-2022</td>
                  <td>01/07/2003</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    );
  }
}
