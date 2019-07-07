import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import { TextInput, PasswordInput, ButtonInput } from '../../common-ui';
import { postRaw } from '../../axios';
export default class Login extends React.PureComponent {
  state = {
    userCredential: '',
    password: '',
    errorMsg: []
  }
  setTheState = (name, value) => {
    this.setState((prevState) => ({
      [name]: value
    }))
  }

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setTheState(name, value);
  }

  checkFormSubmitIsValid = () => {
    let errorMsg = [...this.state.errorMsg];
    let formStatus = false;
    Object.keys(this.state).map((s, i) => {
      if (!Object.values(this.state)[i] && s !== 'errorMsg') {
        errorMsg[i] = ` ${s.toUpperCase()} should not be empty`;
        formStatus = false;
      }
      else {
        const patt = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const value = Object.values(this.state)[i];
        if (s === 'password' && value.length <= 5) {
          errorMsg[i] = `${s.toUpperCase()} length should be equal or greater than 6`;
          formStatus = false;
        }
        else if (s === 'username' && value.includes('@') && !value.match(patt)) {
          errorMsg[i] = `Not a valid ${s.toUpperCase()}/EMAIL `;
          formStatus = false;
        }
        else {
          errorMsg[i] = '';
          formStatus = true;
        }
      }
    });

    this.setTheState('errorMsg', errorMsg);
    return formStatus;
  }

  apiCall = () => {
    const data = {
      userCredential: this.state.userCredential,
      password: this.state.password
    }
    
    if(this.props.getTokenAfterLogin){
       console.log(data)
       this.props.getTokenAfterLogin(data)
    }   
    // postRaw('/api/login', data).then(response =>{
    //   this.props.submitHandler(response.data);  
    //   console.log('helllo');
    // }).catch(e => {
    //   console.log('error');
    // })  
  }

  submitFormHandler = e => {
    e.preventDefault();
    let isFormValid = this.checkFormSubmitIsValid();
    if (isFormValid)
         this.apiCall();
  }

  render() {
    const depts = [
    { key: '1', text: "Admin", value: "1" },
    { key: '2', text: "Pharmacy", value: "2" },
    { key: '3', text: "Finance", value: "3" }
    ]
    const errorMsg = this.state.errorMsg;
    
    return (
      <>
        <Form>
          <TextInput placeholder="Username/Email" name="userCredential" type="text" onChangeHandler={this.onChangeHandler} value={this.state.userCredential}></TextInput>
          <PasswordInput placeholder="Password" name="password" onChangeHandler={this.onChangeHandler} value={this.state.password}></PasswordInput>
          <ButtonInput id="f-submitter" type='submit' buttonName="Submit" onClickHandler={this.submitFormHandler} ></ButtonInput>
          <Message negative>
            {errorMsg.map((msg, i) => {
              return msg ? <p key={i} >{msg}</p> : ""
            })}
          </Message>
        </Form>
      </>
    )
  }
}

