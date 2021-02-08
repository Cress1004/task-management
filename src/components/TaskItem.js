import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td className="text-center">
                    <span className={task.status === true ?
                        'label label-danger' : 'label label-success'}>
                        {task.status === true ? 'Enable' : 'Disable'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">Edit</button> &ensp;
                          <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default TaskItem;