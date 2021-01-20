import React, { Component } from 'react'
import { Button,Modal } from 'react-bootstrap'
import './signup.styles.scss'

 class Signup extends Component {

  constructor(){
    super();
    this.state = {
        showHide : false,
        email:'',
        password:'',
        passwordConfirmation:''
        
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

passwordConfirmationHandler =(event)  =>{
  this.setState({
    passwordConfirmation:event.target.value
  })
}

handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
}



  render() {
    return (
      <div>
        <Button className="button" onClick={() => this.handleModalShowHide()}>
                    Signup
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Sign-Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>sdfghjkl</p>
                      <form>
                      <div class="input-group mb-3">
                        
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={this.state.email} onChange={this.emailHandler}/>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              <i class="fa fa-lock"></i>
            </span>
          </div>
          <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" value={this.state.password} onChange={this.passwordHandler}/>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              <i class="fa fa-lock"></i>
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Password confirmation" aria-label="Password confirmation" aria-describedby="basic-addon1" value={this.state.passwordConfirmation} onChange={this.passwordConfirmationHandler}/>
        </div>

                      </form>
                      
                      </Modal.Body>
                    <Modal.Footer>
                    <Button variant="success" onClick={() => this.handleModalShowHide()}>
                        Submit
                    </Button>
                    
                    </Modal.Footer>
                </Modal>


      </div>
    )
  }
}
  

export default Signup