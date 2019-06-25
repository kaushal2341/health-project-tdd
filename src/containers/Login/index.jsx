import React from 'react';
import {Form,Message} from 'semantic-ui-react';
import {TextInput,PasswordInput, SelectInput,ButtonInput} from '../../common-ui'
export default class Login extends React.PureComponent {
state = {
   username:'',
   password:'',
   subDepartmentId:'',
   errorMsg:[]
}    

removeStateOtherThanDept = (name) => {
 if (name === 'subDepartmentId') 
 this.setState((prevState)=>({
                username:'',
                password:''
  }));
}

setTheState = (name , value) => {
  console.log(value);
this.setState((prevState)=>({
    [name]:value
}))
}

onChangeHandler =  e => {
const {name,value} = e.target;
this.removeStateOtherThanDept(name);
this.setTheState(name , value);
}

checkFormSubmitIsValid = () => {
  let errorMsg = [...this.state.errorMsg];
  console.log("Error",errorMsg);
  let formStatus = false ;
  Object.keys(this.state).map((s , i) => {
    if(! Object.values(this.state)[i] && s !== 'errorMsg'){
        console.log(Object.values(this.state)[i]);
        errorMsg[i] =` ${s.toUpperCase()} should not be empty`;
        formStatus = false;
    }    
    else
    {
      const patt =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      const value = Object.values(this.state)[i];
      if(s === 'password' && value.length <= 5)
      {
        errorMsg[i] = `${s.toUpperCase()} length should be equal or greater than 6`;
        formStatus = false;
      } 
      else if(s === 'username' && value.includes('@') && !value.match(patt))
      {
        errorMsg[i] = `Not a valid ${s.toUpperCase()}/EMAIL `;
        formStatus = false; 
      }
      else
        errorMsg[i] = '';
        formStatus = true;
    }     
  });
  
  this.setTheState('errorMsg',errorMsg);
  return formStatus;
} 
submitFormHandler = e => {
  e.preventDefault();
  let isFormValid =this.checkFormSubmitIsValid()
}

render(){
    let depts =[{key:'1',text:"Admin",value:"1"},
    {key:'2',text:"Pharmacy",value:"2"},
    {key:'3',text:"Finance",value:"3"}
  ]
    const errorMsg=this.state.errorMsg;
    console.log(this.state.subDepartmentId);
     
    return(
        <>
        <Form>
           <TextInput placeholder="Username/Email" name="username" type="text" onChangeHandler={this.onChangeHandler} value={this.state.username}></TextInput>
           <PasswordInput placeholder="Password" name="password" onChangeHandler={this.onChangeHandler} value={this.state.password}></PasswordInput>
           <SelectInput placeholder='Select Department' name="subDepartmentId" selection={true} onChangeHandler={this.onChangeHandler} options={depts}></SelectInput>
           <ButtonInput type='submit' buttonName="Submit" onClickHandler={this.submitFormHandler}></ButtonInput>
           <Message negative>
           {errorMsg.map( (msg, i) => {
            return msg ?<p key={i} >{msg}</p>:""
           })}
           </Message>
        </Form>
        </>
    )
}
}