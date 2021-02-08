import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
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
                                    Enable
                                </a>
                            </li>
                            <li>
                                <a role="button">
                                    Disable
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort;