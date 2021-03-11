import React, {Component} from 'react'
class HeaderSword extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Sword API</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default HeaderSword