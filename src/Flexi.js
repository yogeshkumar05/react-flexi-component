import React from 'react';
import FlexiTextBox from '../src/FlexiTextbox';
import FlexiDropdown from '../src/FlexiDropdown';
import FlexiLabel from '../src/FlexiLabel';
import CONSTS from './consts';

class Flexi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onSubmit = () => {
    const data = this.state
    alert(JSON.stringify(data));
    this.props.onSubmit(data); // dont edit this line
  };

  textboxChangeHander = (e) => this.setState({[e.target.name]: e.target.value});

  dropdownHandler = (e) => this.setState({[e.target.name]: e.target.value});

  generateTextbox = (info, index) => <div key={index} className='field-container'>
      <FlexiLabel value={info.label}/>
      <FlexiTextBox index={index} onChangeHandler = {this.textboxChangeHander} value = {this.state[info.name]}/>
    </div>


  generateDropdown = (info, index) => <div key={index} className='field-container'>
    <FlexiLabel value={info.label} index={index}/>
    <FlexiDropdown index={index} value ={this.state[info.name]} onChangeHandler={this.dropdownHandler} options={info.values}/>
    </div>;

  generateUI = (data, ui=[]) => {
    const updatedUi = ui;
    const updatedChildren =[];
    for(let item of data) {

        // generate ui for the first level of fields
        if(item.type === CONSTS.TEXTFIELD) {
          updatedUi.push(this.generateTextbox(item, item.name));
        } else if(item.type === CONSTS.DROPDOWN) {
          updatedUi.push(this.generateDropdown(item, item.name));
        }

        // push children fields into an array
        if(item.children && item.children.length>0) {
          updatedChildren.push(...item.children); 
        }
      };

      // recursively generate ui for the children fields
      if(updatedChildren.length > 0) {
        this.generateUI(updatedChildren, updatedUi); 
      }
      
    return updatedUi;   
  }

  render() {
    return (
      <form className='flexi-form'>
        {
          (this.props.config && this.props.config.items && this.props.config.items.length > 0) ? this.generateUI(this.props.config.items) : null
        }
        <button className='flexi-btn' onClick={this.onSubmit}>SUBMIT</button>
      </form>
    );
  }
}

export default Flexi;