import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";


class Nav extends Component {    
    render(){
        console.log(this.props);
        if (this.props.location.pathname === "/") {
            return <></>;
        } else {
            return (
                <div className="navbar">
                    <div className="welcome"> HELO {this.props.username} </div>
                    <div>
                        <button className="home-button" onClick={() => this.props.history.push("/dashboard")} > Home </button>
                        <button className="new-button" onClick={() => this.props.history.push("/new")} > New Post </button>
                        <button className="logout-button" onClick={() => this.props.history.push("/")} > Logout </button>
                    </div>
                </div>
            );
        }
    }
// }
function mapStateToProps(state) {
	return { user: state.reducer.user };
}
export default connect(mapStateToProps)(withRouter(Nav));
