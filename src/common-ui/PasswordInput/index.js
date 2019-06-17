import React from 'react';
import Proptypes from 'prop-types';
import {Icon} from 'semantic-ui-react'
class PasswordInput extends React.PureComponent{
    state={
          errorMsg:"",
          showPassword:true
          };
    setTheState = msg =>{
        this.setState({errorMsg:msg});
    }
    checkValidLength = value =>{
        let errorMsg="";
        let valueToBeReturned=false
        if(value.length > 5)
        valueToBeReturned = true; 
        else if(value.length === 0)
        errorMsg=""
        else
        errorMsg="Sorry the length Of password must be greater than 5"
        this.setTheState(errorMsg);
        return valueToBeReturned; 
    }
    checkPasswordPolicy = (value , check) => {
        let errorValueToBeSet = "";
        if(check)
        { 
        const weakPasswordPolicy=/^[a-zA-Z]+$/;
        const strongPasswordPolicy = new 
                RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
          
        errorValueToBeSet = value.match(weakPasswordPolicy) 
                            ? "WEAK"
                            : value.match(strongPasswordPolicy)
                            ? "STRONG"
                            : "MEDIUM"    
        }
        if(errorValueToBeSet)
           this.setTheState(errorValueToBeSet);
    }
    onChangeHandler = (e)=>{
      let shouldCall=true;
      const {value} = e.target
      shouldCall=this.checkValidLength(value);
      this.checkPasswordPolicy(value,shouldCall);
      if(shouldCall)
      this.props.onChangeHandler(e);
    }
    onSeePassword = (e) => {
     this.setState((prevState)=>({
       showPassword:!prevState.showPassword 
     }))
    }
    render(){
     return(<>
            <input 
            id={this.props.id}
            name={this.props.name}
            type={this.state.showPassword ? "password" : "text"}
            minLength={this.props.min}
            maxLength={this.props.max}
            onChange={this.onChangeHandler}
            onBlur={this.props.onBlur}
            onFocus={this.props.onFocus}
            className={this.props.classes}
            placeholder={this.props.placeholder}
            required={this.props.required}
            readOnly={this.props.readonly}
            />
            <button className="btn btn-sm" onClick={this.onSeePassword}><Icon className={!this.state.showPassword ? 'eye' : 'eye slash'}/></button>
            <span id="error">{this.state.errorMsg}</span>
            </>
            )
 } 
}
React.propTypes ={
    id:Proptypes.string||Proptypes.number,
    name:Proptypes.string.isRequired,
    min:Proptypes.number,
    max:Proptypes.number,
    onChange:Proptypes.func.isRequired,
    onBlur:Proptypes.func,
    onFocus:Proptypes.func,
    classes:Proptypes.string,
    placeholder:Proptypes.string,
    required:Proptypes.bool,
    readOnly:Proptypes.bool
}
export default PasswordInput;