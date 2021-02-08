import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
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
                        <TaskItem />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskList;