import React from 'react';
import axios from 'axios';

class App extends React.Component {

   constructor(props) {
      super(props);		
      this.state = {
         userinfo: [ {"id":1,"name":"Sajeev","email":"sajeev@email.com"},
		             {"id":2,"name":"Sarath","email":"sarath@email.com"},
					 {"id":3,"name":"Arun","email":"arun@email.com"},
					 {"id":4,"name":"Deepak","email":"deepak@email.com"},
					 {"id":5,"name":"Kanna","email":"kanna@email.com"},
					 {"id":6,"name":"Pooja","email":"pooja@email.com"},
					 {"id":7,"name":"Bibu","email":"bibu@email.com"}
					 ]
      };
   }

  render() {

    return (
      <div>

	         <table width="15%">
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

export default App;
