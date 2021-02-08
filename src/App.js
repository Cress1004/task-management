import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Task Management</h1>
        </div>

        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

            {/* task form  */}

          </div>

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5"></span>Add task</button>

            <div className="row mt-15">
              {/* Search */}
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeholder="Input key"
                  />

                  <span className="input-group-btn">
                    <button type="button" className="btn btn-primary">
                      <span className="fa fa-search mr-5"></span>Find
                    </button>
                  </span>
                </div>
              </div>

              {/* Sort */}
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="dropdown">

                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >Sort<span className="fa fa-caret-square-o-down mt-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li>
                        <a role="button" className="sort_selected">
                          <span className="fa fa-sort-alpha-asc pr-5">
                            Sort by A-Z
                          </span>
                        </a>
                        <a role="button">
                          <span className="fa fa-sort-alpha-desc pr-5">
                            Sort By Z-A
                          </span>
                        </a>
                      </li>
                      <li role="seperator" className="divider"></li>
                      <li>
                        <a role="button">
                          Status
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Title</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>
                          <input
                            type="text"
                            name="filterName"
                            className="form-control" />
                        </td>
                        <td>

                          <select
                            name="filterStatus"
                            className="form-control"
                          >
                            <option value={-1}>All</option>
                            <option value={0}>Disable</option>
                            <option value={-1}>Enable</option>
                          </select>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Hoc tieng nhat</td>
                        <td className="text-center">
                          <span className="label label-danger">Enable</span>
                        </td>
                        <td className="text-center">
                          <button type="button" className="btn btn-warning">Edit</button> &ensp;
                          <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>  
    )};

}

export default App;
