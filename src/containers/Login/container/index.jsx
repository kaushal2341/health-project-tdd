import React from 'react';
import Login from '../';
import {connect} from 'react-redux';
import {authenticate} from '../action'
class LoginContainer extends React.PureComponent {
getTokenAfterLogin = (data) => {
  console.log('hello')
  this.props.login(data);
}
 render(){
     return(
         <Login token={this.props.token} getTokenAfterLogin={this.getTokenAfterLogin}></Login>
      )
 }
}
const mapStateToProps = state => ({
token:state.token
});

const mapDispatchToProps = {
  login:data => authenticate(data)
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)