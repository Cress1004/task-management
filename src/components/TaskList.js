import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
        var { tasks } = this.props;
        var elmTask = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onUpdateStatus={this.props.onUpdateStatus} 
                onDelete={ this.props.onDelete }/>
        })
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
                        {elmTask}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskList;