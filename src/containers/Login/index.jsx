import React from 'react';
import {Form} from 'semantic-ui-react';
import {TextInput,PasswordInput, SelectInput,ButtonInput} from '../../common-ui'
export default class Login extends React.PureComponent {
state = {
   username:'',
   password:'',
   subDepartmentId:'',
   errorMsg:''
}    

removeStateOtherThanDept = (name) => {
  name !== 'subDepartmentId' ? ''
                             :this.setState((prevState)=>({
                               username:'',
                               password:''
                             }));
}

setTheState = (name , value) => {
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
  let errorMsg = [];
  let formStatus = false ;
  Object.keys(this.state).map((s , i) => {
    if(! Object.values(this.state)[i] && s!='errorMsg'){
        errorMsg[i] = {[s]:` ${s.toUpperCase()} should not be empty`};
        formStatus = false;
    }    
    else
        formStatus = true;    
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
     
    return(
   
        <>
        <Form>
           <TextInput placeholder="Username/Email" name="username" type="text" onChangeHandler={this.onChangeHandler}></TextInput>
           <PasswordInput placeholder="Password" name="password" onChangeHandler={this.onChangeHandler}></PasswordInput>
           <SelectInput placeholder='Select Department' name="subDepartmentId" selection={true} onChangeHandler={this.onChangeHandler} options={depts}></SelectInput>
           <ButtonInput type='submit' buttonName="Submit" onClickHandler={this.submitFormHandler}></ButtonInput>
        </Form>
        </>
    )
}
}