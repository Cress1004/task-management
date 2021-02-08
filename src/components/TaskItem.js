import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
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
        )
    }
}

export default TaskItem;