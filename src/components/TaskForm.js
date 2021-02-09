import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            status: false,
        }
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === "status") {
            if (value === "true") {
                value = true;
            } else {
                value = false;
            }

        }
        this.setState({
            [name]: value
        });
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onHandleClear = () => {
        this.setState({
            title: '',
            status: false
        })
        this.onCloseForm();
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.onHandleSubmit(this.state);
        // Clear & Close form
        this.onHandleClear();
        this.onCloseForm();
    }

    render() {
        return (<div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Add task</h3>
            </div>
            <div className="panel-body">

                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            onChange={this.onHandleChange}
                            value={this.state.title} />
                    </div>
                    <label>Status: </label>
                    <select
                        className="form-control"
                        name="status"
                        onChange={this.onHandleChange}
                        value={this.state.status}
                    >
                        <option value={true}>Enable</option>
                        <option value={false}>Disable</option>
                    </select><br />

                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Save</button> &nbsp;
                    <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.onHandleClear}
                        >Cancel</button> &nbsp;
                    <button
                            type="button"
                            className="btn btn-success"
                            onClick={this.onCloseForm}
                        >Close</button>
                    </div>
                </form>
            </div>
        </div>
        )
    };
}

export default TaskForm;
