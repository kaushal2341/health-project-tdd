import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextInput} from './common-ui';
import PasswordInput from './common-ui/PasswordInput';
//import ButtonInput from './common-ui/ButtonInput';
import SelectInput from './common-ui/SelectInput';

function App() {
  const onChangeHandler = (e)=>{
    console.log(e)
  }
  const onClickHandler = (e)=>{
    console.log(e)
  }
  return (
    <div>
      <TextInput type="text" onChangeHandler={onChangeHandler}/>
      <br/>
      <PasswordInput onChangeHandler={onChangeHandler}/>
      <br/>
      {/* <ButtonInput type="button" variant="contained" onClickHandler={onClickHandler} buttonName="Reset"></ButtonInput>
       <br></br> */}
      <SelectInput></SelectInput>
    </div>
  );
}

export default App;
