import React, {Component} from 'react'
import {connect} from 'react-redux'
import {checkLoginMiddleWare} from '../redux/actions.js'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {loginEmail:'', logInPassword:''}
    }

    loginHandler(event) {
        this.props.propsGetAuthenticationResponse({loginEmail:this.state.loginEmail, logInPassword:this.state.logInPassword})
    }

    emailHandler(event) {
        this.setState({...this.state, loginEmail:event.target.value})
    }

    passwordHandler(event) {
        this.setState({...this.state, logInPassword:event.target.value})
    }

    render() {
        
        if(this.props.propsAuthenticationResponse.isAuthenticated == "Y") {
            return <Redirect to='/list-user'/>;
        }
        return (
            <div className="container">
                <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={(e) => this.emailHandler(e)} />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="pwd" onChange={(e) => this.passwordHandler(e)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => this.loginHandler(e)}>Submit</button>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        propsAuthenticationResponse: state.apiStore.authenticationResponse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        propsGetAuthenticationResponse: (postData) => { dispatch(checkLoginMiddleWare(postData))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)