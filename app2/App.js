import React from 'react';

class App extends React.Component {
	constructor(props) {
		
          super(props);
         this.state = {
         color: props.initialColor
        };
		 console.log("constructor()");
     }

	 componentWillMount(){
        console.log("componentWillMount()");
	 }
     componentDidMount(){
       console.log("componentDidMount()");
	 }
	 componentWillReceiveProps(nextProps){
       console.log("componentWillReceiveProps()");
	 }

	 componentDidUpdate(prevProps, prevState)
	 {
      console.log("componentDidUpdate()");
	 }
  render() {
	   console.log("render()");
    return (
      <div>Helloworld From App Component</div>
    );
  }
}

export default App;
