import React from 'react';
import axios from 'axios';

class App extends React.Component {

   constructor(props) {
      super(props);		
      this.state = {
         userinfo: [],
         status : "Loading"
      };
   }

	

  componentWillMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
            const persons = res.data;
	        this.setState({
                 userinfo: res.data,
				 status : "Success"
             });
				 console.log("Success...............................");
      }).catch(function (error) {
         console.log("Error...............................");
		 this.setState({
			     userinfo: [],
				 status : "Error"
             });
       });	  
  }

  render() {

	  if(this.state.status == "Error"){
         return ( <div>Error..... occured while  calling service</div>);
	  }else if(this.state.status == "Loading"){
         return ( <div><img src="https://media1.tenor.com/images/8ac12962c05648c55ca85771f4a69b2d/tenor.gif?itemid=9212724"></img></div>);
	  }else if(this.state.status == "Success"){
    return (
      <div>
	      <div>State:{this.state.status}</div>
	          <table width="30%">
				  <thead>
				  <tr >
						     <th>Id</th>
       						 <th>Name</th>
						     <th>Email</th>
					      </tr>
				 </thead>
				   <tbody> 
						{this.state.userinfo.map(function(record, index){
							return <tr key={record.id}>
									 <td>{record.id}</td>
									 <td>{record.name}</td>
									 <td>{record.email}</td>
								  </tr>;
						  })}
				  </tbody> 
            </table>
	</div>
    );
	  }
  }
}

export default App;
