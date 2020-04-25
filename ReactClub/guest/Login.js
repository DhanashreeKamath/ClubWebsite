import React from "react";
import ReactDOM from "react-dom";


class Login extends React.Component {
  constructor(props)
  {
    super(props)
    {
        this.roleChange = props.roleChange;
        this.loginParse = this.loginParse.bind(this);
    }
  }

 loginParse() {
    let that = this;
    fetch('/login', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email.value,
                        password: password.value
                    })
                }).then(function(response) {
                    // console.log('Request status code: ', response.statusText, response.status, response.type);
                    if (response.status == 200) {
                        return response.json();
                    }
                }).then(function(data) {
                    if (data) {
                    that.roleChange(data.role, data);
                }
                });
}

render()
{
    return <div><main className ="box">
        <header>
            <h1 className="fh-custom-font">Login</h1>
        </header>
        <section id="loginForm">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" required placeholder="email" />
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" placeholder="password"/>
            <button type="button" id = "loginBtn" onClick={this.loginParse}>Login</button>
        </section>
    </main>
    <footer>&#127926;&copy; Copyright Union City Music Club 2019 &#127925; </footer>
    </div>;
}
    
}

export default Login;