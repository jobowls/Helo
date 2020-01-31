import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            loginToggle: true
        };
    }
    handleUsernameChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        });
    }
    handleLogin = (username, password) => {
        axios.post('/auth/login', {username, password})
        .then(res => {
            console.log(res)
            this.props.history.push('./dashboard')
        });
    }
    handleRegister = (username, password) => {
        axios.post('/auth/form', {username, password})
        .then(res => {
            this.props.history.push('/dashboard')
        });
    }
    render() {
        const {username, password} = this.state;
        return (
            <div>
                <div className="landing-box" id="home-header">
                        <div>

                        </div>
                        <input name="'username" value={this.state.username} onChange={e => this.handleUsernameChange(e.target.value)} />
                        <button onClick={() => this.login(username, password)}> Login </button>
                        
                </div>
            </div>
        )
    }
}
export default Auth;