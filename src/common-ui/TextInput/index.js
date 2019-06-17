import React from 'react';
import Proptypes from 'prop-types'
 class TextInput extends React.PureComponent {
   constructor(){
      super();
      this.state={errorMsg:""};
   }
   checkType = type => type !== 'text' ? false :true

   setStateOfComponent = value => {
     this.setState({errorMsg:value})
   }
   checkValidityOfEmail = value => 
   {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let shouldCall =false;
    let errValue = "";
    if(value.includes('@'))
     if (value.match(emailPattern))
      shouldCall = true;     
     else
      errValue = "Email Was Not Matched"; 
     else
      shouldCall=true;
    
   this.setStateOfComponent(errValue);
   return shouldCall; 
       
   }
    
   shouldCallChangeHandlerOfAnotherComp =  value =>
   {
        if(this.checkType(this.props.type)) 
         return this.checkValidityOfEmail(value);   
        return false; 
    }    
    
    onChangeHandler = e =>
    {
     let value = e.target.value;   
     let shouldCall = false;
     shouldCall = this.shouldCallChangeHandlerOfAnotherComp(value);
     if(shouldCall)
       this.props.onChangeHandler(e);
    }
    
 render(){ 
        return(
        <>
        <input 
           id={this.props.id}
           name={this.props.name}
           type={this.props.type} 
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
        <span id="error">{this.state.errorMsg}</span>
        </>
        )
 }
}
React.propTypes ={
    id:Proptypes.string||Proptypes.number,
    name:Proptypes.string.isRequired,
    type:Proptypes.string.isRequired,
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
export default TextInput;

