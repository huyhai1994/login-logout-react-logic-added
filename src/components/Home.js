import React, {Component} from 'react';

/*TODO:
    Import React, { Component } from ‘react’;
    Tạo class Home bằng class Home extends Component
        Gọi hàm render, trả về là element JSX thể hiện các element gồm lời chào và nút Logout gọi function onLogOut từ props
    Trả class Home về làm giá trị mặc định của component
*/

class Home extends Component {
    render() {
        return (<div className="container d-flex align-items-center text-center">
            <div className="form-signin">
                <h1 className="h3 mb-3 fw-normal">Welcome</h1>
                <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.props.onLogOut}>Log out
                </button>
            </div>
        </div>);
    }
}

export default Home