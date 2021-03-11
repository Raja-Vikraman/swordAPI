import React, {Component} from 'react'
import {connect} from 'react-redux'
import {listUserMiddleWare} from '../redux/actions.js'
import {Link} from 'react-router-dom'
class Listuser extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.propsListUser()
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">First Name</div>
                    <div className="col-md-3">Last Name</div>
                    <div className="col-md-3">Age</div>
                    <div className="col-md-3"></div>
                </div>
                {
                this.props.propsAllUser.map((item, index)=> {
                    return (
                        <div className="row" key={item.userId}>
                            <div className="col-md-3">
                                {item.firstName}
                            </div>
                            <div className="col-md-3">
                                {item.lastName}
                            </div>
                            <div className="col-md-3">
                                {item.age}
                            </div>
                            <div className="col-md-3">
                                <Link to={`/view-user/${item.userId}`}> <i className="fa fa-pencil-square-o" aria-hidden="true"></i> </Link>
                            </div>
                        </div>
                )})
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        propsAllUser: state.apiStore.allUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        propsListUser: () => dispatch(listUserMiddleWare())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listuser)