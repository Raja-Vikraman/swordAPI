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
        this.props.propsGetAuthenticationResponse({loginEmail:this.state.loginEmail, loginPassword:this.state.logInPassword})
        // if(this.props.propsAuthenticationResponse.isAuthenticated == "Y") {
        //     this.showAuthFailAlert()
        // }
    }


    emailHandler(event) {
        this.setState({...this.state, loginEmail:event.target.value})
    }

    passwordHandler(event) {
        this.setState({...this.state, logInPassword:event.target.value})
    }

    showAuthFailAlert() {
        // var failAlertDiv = document.getElementById('authFailAlert')
        // if(failAlertDiv.classList.contains('d-none')) {
        //     failAlertDiv.classList.remove('d-none')
        //     failAlertDiv.classList.add('d-block')
        // }
        if(this.props.propsAuthenticationResponse.isAuthenticated == "N") {
            return (
                <div className="container" id="authFailAlert">
                    <div class="alert alert-danger">
                        <strong>Ooops!</strong> Wrong email or password !!
                    </div>
                </div>
            )
        }
        else {
            return <div></div>
        }
    }

    render() {
        console.log("render")
        if(this.props.propsAuthenticationResponse.isAuthenticated == "Y") {
            return <Redirect to='/list-user'/>;
        }
        return (
            <div className="container">
                {this.showAuthFailAlert()}
                <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={(e) => this.emailHandler(e)} required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="pwd" onChange={(e) => this.passwordHandler(e)} required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
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