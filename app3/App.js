import React from 'react';

import App2 from './App2';

class App extends React.Component {
  render() {
    return (
      <div>Helloworld From App Component
	       <App2 p1='p1-value' p2='p2-value'/>	
	  </div>
    );
  }
}

export default App;
