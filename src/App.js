import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Project from './components/Project';
import axios from 'axios';
import LoaderImg from './assets/loader.gif';

class App extends Component {

  state = {
    jenkinsUrl: "",
    login: "",
    password: "",
    messageValue: "Type your jenkins url",
    jobs: [{}]
  }

  render() {

    const saveJenkinsUrl = (e) => {
      const url = e.target.value;
        this.setState({
          jenkinsUrl: url
        })
    }

    const saveJenkinsLogin = (e) => {
      const login = e.target.value;
        this.setState({
          login: login
        })
    }

    const saveJenkinsPassword = (e) => {
      const password = e.target.value;
        this.setState({
          password: password
        })
    }

    const updateJenkinsValue = (e) => {
      e.preventDefault();
      if(this.state.jenkinsUrl && this.state.login && this.state.password) {
        this.setState({
          messageValue: `Your url is: ${this.state.jenkinsUrl}`
        })

        axios.get(`https://cors-anywhere.herokuapp.com/${this.state.jenkinsUrl}/api/json`,{method: "get",  
        headers: {'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Content-Type': 'application/json',},
        auth:
        {
          username: `${this.state.login}`,
          password: `${this.state.password}`
        }
      
      }).then(res => {
        this.setState({
          jobs: res.data.jobs
        })
        })
      }

      else {
        this.setState({
          messageValue: `Type your jenkins url`
        })
      }
    }


    const projectRender = 
      this.state.jobs && this.state.jobs ? this.state.jobs.map((job) => {
         return (<Project key={job.url} projectName={job.name} color={job.color} url={job.url} />)
      }) : (<div className="loader">
      <img src={LoaderImg} alt="Loader" />
      </div>);
    
    

    return (
      <div className="App">
        <Header />
        <div className="container-form">
            <form>
              <input id="url-jenkins-input" onKeyUp={(e) => saveJenkinsUrl(e)} placeholder="http://jenkinsurl" type="text" required />
              <input id="login-jenkins-input" onKeyUp={(e) => saveJenkinsLogin(e)} placeholder="Login" type="text" required />
              <input id="password-jenkins-input" onKeyUp={(e) => saveJenkinsPassword(e)} placeholder="Password" type="password" required />
              <button onClick={(e) => updateJenkinsValue(e)} type="submit">SAVE</button>
            </form>
         </div>
  
         <div className="desc">
              <p>{this.state.messageValue && this.state.messageValue}</p>
         </div>
        <div className="main-project-container" >
          {projectRender && projectRender}
        </div>
      </div>
    );
  }
}

export default App;
