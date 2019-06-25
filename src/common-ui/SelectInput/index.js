import React from 'react';
import  {Dropdown} from 'semantic-ui-react';
export default class SelectInput extends React.PureComponent {
   onChangeHandler = (e , data) => {
     const myEvent = {...e}
     myEvent.target.value = e.target.value ? e.target.value : data.value
     myEvent.target.name = data.name
     this.props.onChangeHandler( myEvent );
   }       
   render(){
     return(
      <>
      <Dropdown
       name={this.props.name}
       additionLabel={this.props.additionLabel}
       additionPosition={this.props.additionPosition}
       allowAdditions={this.props.allowAdditions}
       as={this.props.as}
       basic={this.props.basic}
       button={this.props.button}
       children={this.props.children}
       className={this.props.className}
       clearable={this.props.clearable}
       closeOnChange={this.props.closeOnChange}
       compact={this.props.compact}
       deburr={this.props.deburr}
       defaultOpen={this.props.defaultOpen}
       defaultUpward={this.props.defaultUpward}
       defaultValue={this.props.defaultValue}
       icon={this.props.icon}
       direction={this.props.icon}
       disabled={this.props.disabled}
       error={this.props.error}
       floating={this.props.floating}
       fluid= {this.props.flluid}
       header={this.props.header} 
       inline={this.props.inline}
       item={this.props.item}
       labeled={this.props.labeled}
       lazyLoad={this.props.lazyLoad}
       loading={this.props.loading}
       minCharacters={this.props.minCharacters}
       multiple={this.props.multiple}
       noResultsMessage={this.props.noResultsMessage}
       onAddItem={this.props.onAddItem}
       onBlur={this.props.onBlur}
       onChange={(event,data) => this.onChangeHandler(event,data)}
       onClick={this.props.onClick}
       onClose={this.props.onClose}
       onFocus={this.props.onFocus}
       onLabelClick={this.props.onLabelClick}
       onMouseDown={this.props.onMousedDown}
       onOpen={this.props.onOpen}
       onSearchChange={this.props.onSearchChange}
       open={this.props.open}
       openOnFocus={this.props.openOnFocus}
       options={this.props.options}
       placeholder={this.props.palceholder}
       pointing={this.props.pointing}
       renderLabel={this.props.renderLabel}
       scrolling ={this.props.scrolling}
       search={this.props.search}
       searchInput={this.props.searchInput}
       searchQuery={this.props.searchQuery}
       selectOnBlur={this.props.selectOnBlur}
       selectOnNavigation={this.props.selectOnNavigation}
       selectedLabel={this.props.selectedLabel}
       selection={this.props.selection}
       simple={this.props.simple}
       tabIndex={this.props.tabIndex}
       text={this.props.text}
       trigger={this.props.trigger}
       upward={this.props.upward}
       value={this.props.value}
       wrapSelection={this.props.wrapSelection}
       closeOnBlur={this.props.closeOnBlur}
      />
     </>
    )
    }
} 