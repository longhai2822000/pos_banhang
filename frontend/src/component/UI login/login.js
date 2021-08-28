import React, { Component } from 'react';
import '../../style/UIlogin.css';
// import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            showForm: true,
            email: "",
            inputPassword: "",
            inputPasswordAgain: ""
        }
    }
    showHidePass = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }
    showForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }
    valueInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    validation = () => {
        if(this.state.email.includes("@gmail.com") == false) {
            alert("Định dạng Email không hợp lệ!!")
        }
        else if(this.state.inputPassword.length < 6) {
            alert("Vui lòng nhập mật khẩu lớn hơn 6 kí tự!!")
        }
        else if(this.state.inputPassword != this.state.inputPasswordAgain){
            alert("Nhập lại mật khẩu không đúng!!")
        }
    }
    form = () => {
        if(this.state.showForm === true){
            return (
                <div className="form">
                    <div className="loginTittle">
                        <h5>Xin Chào</h5>
                        <p>Vui lòng đăng nhập để vào cửa hàng của bạn</p>
                    </div>
                    <div className="form__username">
                        <div className="form__username--text form__text">
                            <input type="text" placeholder="Email" name="username" />
                        </div>
                    </div>
                    <div className="form__password">
                        <div className="form__password--text form__text">
                            <input type={this.state.showPassword ? "text" : "password"} placeholder="Mật khẩu" name="password"/>
                        </div>
                        <span onClick={() => this.showHidePass()} className={this.state.showPassword ? "fas fa-eye" : "fas fa-eye-slash"} id="changeType" />
                    </div>
                    <div className="form__submit">
                        <button type="submit">
                            Đăng nhập
                        </button>
                    </div>
                    <div className="form_fp">
                        <a className="forgotPassword">Quên mật khẩu ?</a>
                        <p>
                            Bạn chưa có tài khoản ? 
                            <a onClick={() => this.showForm()} className="signup">  Đăng ký</a>
                        </p>
                    </div>
                </div>
            )
        }
        if(this.state.showForm === false) {
            return (
                <div className="form">
                    <div className="loginTittle">
                        <h5>Tạo Tài Khoản</h5>
                        <p>Tạo một tài khoản để quản lý cửa hàng của bạn</p>
                    </div>
                    <div className="form__username">
                        <div className="form__username--text form__text">
                            <input onChange={(event) => this.valueInput(event)} type="text" placeholder="Họ và tên" name="name" />
                        </div>
                    </div>
                    <div className="form__username">
                        <div className="form__username--text form__text">
                            <input onChange={(event) => this.valueInput(event)} type="text" placeholder="Email" name="email" />
                        </div>
                    </div>
                    <div className="form__password">
                        <div className="form__password--text form__text">
                            <input onChange={(event) => this.valueInput(event)} type={this.state.showPassword ? "text" : "password"} placeholder="Mật khẩu" name="inputPassword"/>
                        </div>
                        <span onClick={() => this.showHidePass()} className={this.state.showPassword ? "fas fa-eye" : "fas fa-eye-slash"} id="changeType" />
                    </div>
                    <div className="form__password">
                        <div className="form__password--text form__text">
                            <input onChange={(event) => this.valueInput(event)} type={this.state.showPassword ? "text" : "password"} placeholder="Nhập lại mật khẩu" name="inputPasswordAgain"/>
                        </div>
                        <span onClick={() => this.showHidePass()} className={this.state.showPassword ? "fas fa-eye" : "fas fa-eye-slash"} id="changeType" />
                    </div>
                    <div className="form__submit">
                        <button onClick={this.validation} type="submit">
                            Đăng ký
                        </button>
                    </div>
                    <div className="form_fp">
                        <p>
                            Đã có tài khoản ? 
                            <a onClick={() => this.showForm()} className="signup">  Đăng nhập</a>
                        </p>
                    </div>
                </div>
            )
        }
    }
    
    render() {
        return (
            <div className="UILogin" style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'img/anhnen.png'})`}}>
                <div className="container">
                    {
                        this.form()
                    }
                </div>
            </div>
        );
    }
}

export default login;