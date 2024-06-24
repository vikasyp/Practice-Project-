import React, {Component} from "react";
class NavBar extends Component {
    render () {
        let {count,qty}=this.props;
        return (
            <nav className=" navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Library</a>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Books
                            <span className="badge badge-pill badge-secondary">
                                {count}
                            </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Issued
                                <span className="badge badge-pill badge-secondary">{qty}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar;