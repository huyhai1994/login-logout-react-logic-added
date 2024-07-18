import './App.css';
import {Component} from 'react';
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '', password: '', isRemember: false
            }, isValid: false, isLoggedIn: false
        };
    }

    handleChange = (event) => {

        /*TODO: Khởi tạo hàm handleChange nhận event làm param truyền vào, hàm này sẽ gọi hàm setState để cập nhật giá trị mới cho form và sau gọi hàm checkValidForm*/

        this.setState((state) => {
            const {form} = state
            form[event.target.name] = event.target.value
            return {form}
        }, () => this.checkValidForm())
    }

    handleChangeCheckbox = () => {
        /*TODO: Khởi tạo hàm handleChangeCheckbox, hàm này sẽ gọi hàm setState để cập nhật giá trị mới cho isRemember của form và sau gọi hàm checkValidForm */
        this.setState((state) => {
            const {form} = state
            form.isRemember = !form.isRemember
            return {form}
        }, () => this.checkValidForm())
    }

    checkValidForm = () => {

        /*TODO: Khởi tạo hàm checkValidForm, hàm này sẽ kiểm tra form đã được nhập hay chưa và sau đó gọi hàm setState để cập nhật giá trị mới cho isValid */

        const {email, password} = this.state.form
        const value = email && password
        this.setState({isValid: value})
    }

    handleSubmit = () => {

        /*TODO: Khởi tạo hàm handleSubmit, hàm này sẽ kiểm tra isValid đã đúng hay chưa, nếu đúng cập nhật lại giá trị mới cho isLoggedIn bằng true*/

        if (this.state.isValid) {
            this.setState({isLoggedIn: true})
        }
    }

    handleLogOut = () => {
        /*TODO: Khởi tạo hàm handleLogout, hàm này sẽ cập nhật lại giá trị mới cho isLoggedIn bằng false*/
        this.setState({isLoggedIn: false})
    }

    render() {
        /*TODO: Gọi hàm render, trả về là element JSX thể hiện các element
                Khai báo các biến isLoggedIn và form từ state
                Dùng hàm if để kiểm tra isLoggedIn có bằng true không
                Nếu đúng gọi hàm return trả về component Home, component này được props function onLogout={this.handleLogOut}
                  Nếu đúng gọi hàm return trả về các element của form Login
*/
        console.log(this.state)
        const {isLoggedIn, form} = this.state
        if (isLoggedIn) return (<Home onLogOut={this.handleLogOut}/>)
        return (<div className="container d-flex align-items-center text-center">
            <div className="form-signin">
                <form className='border p-3 m-0 rounded-3 shadow shadow-md'>
                    <img className="mb-4"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                         alt="" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input className="form-control email" type="email" name="email"
                               placeholder="name@example.com" value={form.email} onChange={this.handleChange}/>
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input className="form-control password" type="password" name="password"
                               placeholder="Password" value={form.password} onChange={this.handleChange}/>
                        <label>Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value={form.isRemember}
                                   onChange={this.handleChangeCheckbox}/> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.handleSubmit}>Sign
                        in
                    </button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                </form>
            </div>
        </div>)
    }
}

export default App;
