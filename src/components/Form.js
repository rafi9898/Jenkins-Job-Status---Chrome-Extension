import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() {        
        return(
            <React.Fragment>
                <div className="container-form">
                    <form>
                        <input placeholder="http://jenkins" type="text" required />
                        <button type="submit">SAVE</button>
                    </form>
                </div>

                <div className="desc">
                    <p>Type your jenkins url adress</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Form;