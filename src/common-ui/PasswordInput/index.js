import React from 'react';
import Proptypes from 'prop-types';
import {Icon, Input} from 'semantic-ui-react';
import ButtonInput from '../ButtonInput';
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
    onChangeHandler = e => {
      let shouldCall=true;
      const {value} = e.target
      shouldCall=this.checkValidLength(value);
      this.checkPasswordPolicy(value,shouldCall);
      this.props.onChangeHandler(e);
    }

    onSeePassword = e => {
     this.setState((prevState)=>({
       showPassword:!prevState.showPassword 
     }))
    }
    render(){
      const iconInput=<Icon className={!this.state.showPassword ? 'eye' : 'eye slash'}/>
     return(<>
            <Input 
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
            children={this.props.children}
            error={this.props.error}
            fluid={this.props.fluid}
            focus={this.props.focus}
            icon={this.props.icon}
            disabled={this.props.disabled}
            iconPosition={this.props.iconPosition}
            inverted={this.props.inverted}
            label={this.props.label}
            labelPosition={this.props.labelPosition}
            loading={this.props.loading}
            size={this.props.size}
            transparent={this.props.transparent}
            tabIndex={this.props.tabIndex}
            action={this.props.action}
            actionPosition={this.props.actionPosition}
            value ={this.props.value}
            />
            &nbsp;
            <ButtonInput id="btn_error" size="tiny" onClickHandler={this.onSeePassword} children={iconInput}/>
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
    readOnly:Proptypes.bool,
    value:Proptypes.string
    }

export default PasswordInput;