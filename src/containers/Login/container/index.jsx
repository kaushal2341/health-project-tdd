import React from 'react';
import Login from '../../';
import {connect} from 'react-redux';
import {authenticate} from '../action'
class LoginContainer extends React.PureComponent {
 render(){
     return(
         <Login></Login>
      )
 }
}
const mapStateToProps = state => ({
token:state.token
})
const mapDispatchToProps = dispatch => ({
  login:(data) => authenticate(data)
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)