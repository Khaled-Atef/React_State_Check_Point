import logo from './logo.svg';
import './App.css';
import React from "react" ;
import Display from './display_person_profile';


class App extends React.Component {

  render (){

    return (
      <div className="App">
        
        <Display />
      </div>
    );
  }
    
}

export default App;
