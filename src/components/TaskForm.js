import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (<div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Add task
                    <span className="fa fa-times-circle text-right"></span>
                </h3>
            </div>
            <div className="panel-body">

                <form>
                    <div class="form-group">
                        <label>Title: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtTitle" />
                    </div>
                    <label>Status: </label>
                    <select
                        className="form-control"
                        name="status"
                    >
                        <option value={true}>Enable</option>
                        <option value={false}>Disable</option>
                    </select><br />

                    <div className="text-center">
                    <button type="submit" className="btn btn-warning">Save</button> &nbsp;
                    <button type="button" className="btn btn-danger">Cancel</button>
                    </div>
                    

                </form>

            </div>
        </div>
        )
    };

}

export default App;