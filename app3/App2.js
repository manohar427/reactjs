import React from 'react';

class App2 extends React.Component {

	constructor(props) {
      super(props);		
      this.state = {
         s1: "s1 value",
         s2: "s2 value"
      };
	  this.updateState = this.updateState.bind(this);
	  this.showState = this.showState.bind(this);
   }
   updateState(e) {
	  this.setState({
         s2: e.target.value
      });
   }
   showState(){
     alert("Updated State:"+JSON.stringify(this.state));
     console.log("Updated State:"+JSON.stringify(this.state));
   }
  render() {
    return (
      <div>Helloworld From App2 Component
		<br/>p1 111:{this.props.p1}
     	<br/>p2:{this.props.p2}
		<br/>s1:{this.state.s1}
     	<br/>s2:{this.state.s2}
		<br/>s2 Value:<input type="text" value={this.state.s2} onChange = {this.updateState}/>
		<br/><input type="button" value='Check' onClick={this.showState}/>
	   </div>
    );
  }
}

export default App2;
