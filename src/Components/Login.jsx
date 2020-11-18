import React from 'react'
import "./Login.css"
import { Button } from "reactstrap"

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            password: '',
            userName: ''
        }
    }

    render(){
        return(<div>
                    <span>Please login Here</span><br /><br />
                    <label>&nbsp;User Name</label><br />
                    <input 
                    type = "text" 
                    placeholder="please enter user name" 
                    onChange = {(e) => this.onUserNameChange(e.target.value)} 
                    value = {this.state.userName}/><br />
                    
                    
                    <label>Password</label><br />
                    <input 
                    type = "password" 
                    placeholder="please enter password" 
                    onChange = {(e) => this.onPasswordChange(e.target.value)} 
                    value = {this.state.password}/><br /><br />
                    <Button color="primary" onClick = {this.onLoginClick} >Login</Button>
                </div>)
    }

    onLoginClick = ()=>{
        this.props.history.push("/home", {userName: this.state.userName})
    }

    onUserNameChange =(e)=>{
        this.setState({
            userName: "jayakrishna"
        })
    }

    onPasswordChange =(e)=>{
        this.setState({
            password: "jayakrishna"
        })
    }
}

export default Login