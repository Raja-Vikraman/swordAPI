import React, {Component} from 'react'
import {connect} from 'react-redux'
import {viewUserMiddleware} from '../redux/actions.js'
class Viewuser extends Component {
    constructor(props) {
        super(props)
        this.state = {userInfo:{}}
    }

    static getDerivedStateFromProps(props, state) {
        if(props.propsUserInfo.firstName != '') {
            return {...state, userInfo:props.propsUserInfo}
        }
        return null
    }
    componentDidMount() {
        console.log(this.props)
        this.props.propsViewUserMiddleWare({userId:this.props.match.params.userId})
    }

    render() {
        return (
            <div className="container">
               <div className="form-group">
                    <label for="firstname">First Name:</label>
                    <input type="text" className="form-control" placeholder="Enter First Name" id="firstname" value={this.state.userInfo.firstName}/>
                </div>
                <div className="form-group">
                    <label for="lastname">Last Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Last Name" id="lastname" value={this.state.userInfo.lastName}/>
                </div>
                <button className="btn btn-primary"> Update </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        propsUserInfo: state.apiStore.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        propsViewUserMiddleWare: () => dispatch(viewUserMiddleware())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Viewuser)