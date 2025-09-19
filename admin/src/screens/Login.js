import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logo from "../assets/images/logo-white.svg";
import { updateEmail, updatePassword, onLoggedin } from "../actions";
import { buildApiUrl } from "../utils/api";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoad: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isLoad: false }), 500);
        [
            "theme-cyan",
            "theme-purple",
            "theme-blue",
            "theme-green",
            "theme-orange",
            "theme-blush",
        ].forEach((c) => document.body.classList.remove(c));
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await fetch(buildApiUrl("/api/login"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: this.props.email,
                    password: this.props.password,
                }),
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem("user", JSON.stringify(data.user));
                this.props.onLoggedin(true);
                window.location.href = "dashboard";
            } else {
                alert(data.error || "Login failed");
            }
        } catch (err) {
            alert("Login request failed");
        }
    };

    render() {
        const { email, password } = this.props;
        return ( <
            div className = "theme-cyan" >
            <
            div className = "page-loader-wrapper"
            style = {
                { display: this.state.isLoad ? "block" : "none" }
            } >
            <
            div className = "loader" >
            <
            div className = "m-t-30" >
            <
            img src = { require("../assets/images/logo-icon.svg") }
            width = "48"
            height = "48"
            alt = "Lucid" /
            >
            <
            /div>{" "} <
            p > Please wait... < /p>{" "} < /
            div > { " " } <
            /div>{" "} <
            div className = "hide-border" >
            <
            div className = "vertical-align-wrap" >
            <
            div className = "vertical-align-middle auth-main" >
            <
            div className = "auth-box" >
            <
            div className = "top" >
            <
            img src = { Logo }
            alt = "Lucid"
            style = {
                { height: "40px", margin: "10px" }
            }
            />{" "} < /
            div > { " " } <
            div className = "card" >
            <
            div className = "header" >
            <
            p className = "lead" > Login to your account < /p>{" "} < /
            div > { " " } <
            div className = "body" >
            <
            form className = "form-auth-small"
            onSubmit = { this.handleSubmit } >
            <
            div className = "form-group" >
            <
            label className = "control-label sr-only" > Email < /label>{" "} <
            input className = "form-control"
            id = "signin-email"
            placeholder = "Email"
            type = "email"
            value = { email }
            onChange = {
                (e) =>
                this.props.updateEmail(e.target.value)
            }
            />{" "} < /
            div > { " " } <
            div className = "form-group" >
            <
            label className = "control-label sr-only" > { " " }
            Password { " " } <
            /label>{" "} <
            input className = "form-control"
            id = "signin-password"
            placeholder = "Password"
            type = "password"
            value = { password }
            onChange = {
                (e) =>
                this.props.updatePassword(e.target.value)
            }
            />{" "} < /
            div > { " " } <
            div className = "form-group clearfix" >
            <
            label className = "fancy-checkbox element-left" >
            <
            input type = "checkbox" / >
            <
            span > Remember me < /span>{" "} < /
            label > { " " } <
            /div>{" "} <
            button type = "submit"
            className = "btn btn-primary btn-lg btn-block" >
            Login { " " } <
            /button>{" "} <
            div className = "bottom" >
            <
            span className = "helper-text m-b-10" >
            <
            i className = "fa fa-lock" > < /i>{" "} <
            a href = { `${process.env.PUBLIC_URL}/forgotpassword` } >
            Forgot password ?
            <
            /a>{" "} < /
            span > { " " } <
            span >
            Don 't have an account?{" "} <
            a href = "registration" > Register < /a>{" "} < /
            span > { " " } <
            /div>{" "} < /
            form > { " " } <
            /div>{" "} < /
            div > { " " } <
            /div>{" "} < /
            div > { " " } <
            /div>{" "} < /
            div > { " " } <
            /div>
        );
    }
}

Login.propTypes = {
    updateEmail: PropTypes.func.isRequired,
    updatePassword: PropTypes.func.isRequired,
    onLoggedin: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

const mapStateToProps = ({ loginReducer }) => ({
    email: loginReducer.email,
    password: loginReducer.password,
});

export default connect(mapStateToProps, {
    updateEmail,
    updatePassword,
    onLoggedin,
})(Login);
