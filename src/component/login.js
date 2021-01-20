import React from 'react'
import { Button,Modal } from 'react-bootstrap'
import './login.styles.scss'

class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            showHide : false,
            email:'',
            password:'',
            
        }
    }
       
    emailHandler = (event) =>{
      this.setState({
        email:event.target.value
      })
    }

    passwordHandler =(event)  =>{
      this.setState({
        password:event.target.value
      })
    }
   
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        return(
            <div className="login">
                <Button className="button" onClick={() => this.handleModalShowHide()}>
                    Login
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="body">
                      <p className="text-center">Login to your account to continue</p>
                      <form>
                      <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Email" aria-label="Email" onChange={this.emailHandler} value={this.state.email}aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              <i class="fa fa-lock"></i>
            </span>
          </div>
          <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={this.passwordHandler} value={this.state.password}/>
        </div>
             <p className="text-right">Don't have an account?<a href="sign-up" >Signup</a></p>
                      </form>
                      
                      </Modal.Body>
                    <Modal.Footer>
                      <div className=" col-md-12 text-center ">
                      <Button variant="success" onClick={() => this.handleModalShowHide()}>
                        Submit
                    </Button>
                      </div>
                    
                    </Modal.Footer>
                    <p className="text-center">Login to your social media account</p>
                   
                </Modal>

            </div>
        )
    }
    
}

export default Login;