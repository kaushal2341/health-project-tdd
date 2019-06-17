import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextInput} from './common-ui';
import PasswordInput from './common-ui/PasswordInput';
//import ButtonInput from './common-ui/ButtonInput';
import SelectInput from './common-ui/SelectInput';

function App() {
  const onChangeHandler = (e)=>{
    console.log(e.target.value)
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
      <SelectInput name='nameSelect' multiple={true} search={true} fluid={true} selection={true} options={[{key:'1',text:'Chi',value:'Cha'},{key:'2',text:'ass',value:'Chssa'}]} onChangeHandler={onChangeHandler}></SelectInput>
    </div>
  );
}

export default App;
