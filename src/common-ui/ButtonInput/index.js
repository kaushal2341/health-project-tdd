import React from 'react';
import {Button} from '@material-ui/core'
import Proptypes from 'prop-types'
export default class ButtonInput extends React.PureComponent {
onClickHandler = ()=>{
    this.props.onClickHandler();
}
render() {
    return(
        <>
        <Button
        id={this.props.id}
        type={this.props.type}
        children={this.props.children}
        classes={this.props.classes}
        onClick={this.onClickHandler}
        fullWidth={this.props.fullWidth}
        size={this.props.size}
        disabled={this.props.disabled}
        href={this.props.href}
        variant={this.props.variant}
        component={this.props.component}
        disableFocusRipple={this.props.disableFocusRipple}
        disableRipple={this.props.disableRipple}
        color={this.props.color}
        >
        {this.props.buttonName}
        </Button>
        </>
    )
}
}
React.propTypes ={
    id:Proptypes.string||Proptypes.number,
    type:Proptypes.string.isRequired,
    children:Proptypes.node,
    classes:Proptypes.object,
    onClick:Proptypes.func.isRequired,
    fullWidth:Proptypes.bool,
    size:Proptypes.string,
    disabled:Proptypes.bool,
    href:Proptypes.string,
    variant:Proptypes.variant,
    component:Proptypes.elementType,
    disableFocusRipple:Proptypes.bool,
    disableRipple:Proptypes.bool,
    color:Proptypes.string,
    buttonName:Proptypes.string.isRequired
}