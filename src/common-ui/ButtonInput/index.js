import React from 'react';
import {Button} from 'semantic-ui-react'
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
        active={this.props.active}
        animated={this.props.animated}
        as={this.props.as}
        attached={this.props.attached}
        basic={this.props.basic}
        circular={this.props.circular}
        className={this.props.className} 
        color={this.props.color}
        compact={this.props.compact}
        content={this.props.content}
        disabled={this.props.disabled}
        floated={this.props.floated}
        fluid={this.props.fluid}
        icon={this.props.icon}
        inverted={this.props.inverted}
        label={this.props.label}
        labelPosition={this.props.labelPosition}
        loading={this.props.loading}
        negative={this.props.negative}
        onClick={this.onClickHandler}
        positive={this.props.positive}
        primary={this.props.primary}
        role={this.props.role}
        secondary={this.props.secondary}
        size={this.props.size}
        tabIndex={this.props.tabIndex}
        toggle={this.props.toggle}
        >
        {this.props.buttonName}
        {this.props.children}
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