import React from 'react';

class App2 extends React.Component {

	constructor(props) {
      super(props);		
      this.state = {
         s1: "s1 value",
         s2: "s2 value"
      }
   }
  render() {
	  this.state.s2 = "s3";
    return (
      <div>Helloworld From App2 Component
		<br/>p1:{this.props.p1}
     	<br/>p2:{this.props.p2}
		<br/>s1:{this.state.s1}
     	<br/>s2:{this.state.s2}
	   </div>
    );
  }
}

export default App2;
