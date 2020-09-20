import React, { Component } from 'react';
import './Project.css';
import LoaderImg from '../assets/loader.gif';

class Project extends Component {

    state = {
        projectName: '',
        url: '',
        color: '',
        valueTest: ''
    }

    componentDidMount() {
        const { projectName, url, color } = this.props;
        if(projectName && url && color) {
            let hexColor;
            let statusTest;
            if(color === 'blue') {
                hexColor = "#38ab59";
                statusTest = "SUCCESS"
            }
            else if(color === 'yellow') {
                hexColor = '#bd842f';
                statusTest = "UNSTABLE"
            } else {
                hexColor = '#d94434';
                statusTest = "FAILED"
            }
            this.setState({
                projectName,
                url,
                color: hexColor,
                valueTest: statusTest
            })
        }
    }

    render() {

        const displayContent = this.state.projectName && this.state.projectName ? (<div className="project-box">
        <div style={{background: `${this.state.color}`}} className="status">{this.state.valueTest}</div>

        <div className="project-name">
            <span>{this.state.projectName}</span>
        </div>
    
     
            <a className="navigate-url" target="_blank" href={`${this.state.url}`}>GO</a>
        
    </div>

        ) : ( <div className="loader">
        <img src={LoaderImg} alt="Loader" />
        </div>);


        return(
            <React.Fragment>
                <div className="container-project">
                    {displayContent}
                </div>
            </React.Fragment>
        )
    }
}

export default Project;