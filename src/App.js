import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextInput,PasswordInput,ButtonInput,SelectInput} from './common-ui';
import {Form,Label} from 'semantic-ui-react'
function App() {
  const onChangeHandler = (e)=>{
    console.log(e.target.value)
  }
  const onClickHandler = (e)=>{
    console.log(e)
  }
  
  const onSubmitHandler = (e)=>{
    console.log(e)
  } 
  let depts =[{key:'1',text:"Admin",value:"1"},
                {key:'2',text:"Pharmacy",value:"2"},
                {key:'3',text:"Finance",value:"3"}
              ]
  return (
    <Form>
    <Form.Field>
      <Label>Username/Email</Label>
      <TextInput placeholder='Username/Email' name="username" type="text" onChangeHandler={onChangeHandler}/>
    </Form.Field>
    <Form.Field>
      <Label>Password</Label>
      <PasswordInput placeholder='Password' name="password" onChangeHandler={onChangeHandler}/>
    </Form.Field>
    <Form.Field>
      <Label>Department</Label>
      <SelectInput placeholder='Select DepartMent' name="department" selection={true} onChangeHandler={onChangeHandler} options={depts}/>
     </Form.Field>
    <ButtonInput type='submit' onClickHandler={onSubmitHandler}>Submit</ButtonInput>
  </Form>
  );
}

export default App;
