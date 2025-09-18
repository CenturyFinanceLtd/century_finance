import React from "react";
import { connect } from "react-redux";
import Logo from "../../assets/images/logo-white.svg";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  componentDidMount() {
    document.body.classList.remove("theme-cyan");
    document.body.classList.remove("theme-purple");
    document.body.classList.remove("theme-blue");
    document.body.classList.remove("theme-green");
    document.body.classList.remove("theme-orange");
    document.body.classList.remove("theme-blush");
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration successful");
        this.props.history.push("login");
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (err) {
      alert("Registration request failed");
    }
  };

  render() {
     const { email, password } = this.state;
    return (
      <div className="theme-cyan">
        <div>
          <div className="vertical-align-wrap">
            <div className="vertical-align-middle auth-main">
              <div className="auth-box">
                <div className="top">
                  <img
                    src={Logo}
                    alt="Lucid"
                    style={{ height: "40px", margin: "10px" }}
                  />{" "}
                </div>{" "}
                <div className="card">
                  <div className="header">
                    <p className="lead"> Create an account </p>{" "}
                  </div>{" "}
                  <div className="body">
                    <form className="form-auth-small ng-untouched ng-pristine ng-valid"  onSubmit={this.handleSubmit}>
                      <div className="form-group">
                          <label className="control-label sr-only">Email</label>
                        <input
                          className="form-control"
                          id="signup-email"
                          placeholder="Your email"
                          type="email"
                          value={email}
                          onChange={(e) => this.setState({ email: e.target.value })}
                        />
                      </div>{" "}
                      <div className="form-group">
                        <label className="control-label sr-only">Password</label>
                        <input
                          className="form-control"
                          id="signup-password"
                          placeholder="Password"
                          type="password"
                          value={password}
                          onChange={(e) => this.setState({ password: e.target.value })}
                        />
                      </div>{" "}
                       <button className="btn btn-primary btn-lg btn-block" type="submit">
                        REGISTER
                      </button>
                      <div className="bottom">
                        <span className="helper-text">
                         Already have an account? <a href="login">Login</a>
                        </span>{" "}
                      </div>{" "}
                    </form>{" "}
                    <div className="separator-linethrough">
                      <span> OR </span>{" "}
                    </div>{" "}
                    <button className="btn btn-signin-social">
                      <i className="fa fa-facebook-official facebook-color">
                        {" "}
                      </i>{" "}
                      Sign in with Facebook
                    </button>
                    <button className="btn btn-signin-social">
                      <i className="fa fa-twitter twitter-color"> </i> Sign in
                      with Twitter{" "}
                    </button>
                  </div>{" "}
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

Registration.propTypes = {};

const mapStateToProps = ({ loginReducer }) => ({
  email: loginReducer.email,
  password: loginReducer.password,
});

export default connect(mapStateToProps, {})(Registration);
