import React, { Component } from 'react';
import './App.css';
import Flexi from "./Flexi";

class App extends Component {
    
  render() {
    const flexiConfig = {
      items: [
        {
          "name": "person_name",
          "label": "Person's Name",
          "type": "TextField",
          "children": [{
            "name": "person_name_1",
            "label": "First Person's Name",
            "type": "TextField",
            'children': [{
              "name": "person_name_2",
            "label": "Second Person's Name",
            "type": "TextField"
            }]
          }]
        },
        {
          "name": "states",
                "label": "Person's state",
          "type": "DropDown",
                "values": [
                    "Maharashtra",
                    "Kerala",
                    "Tamil Nadu"
          ],
          'children': [{
            "name": "states_1",
          "label": "First Person's state",
          "type": "DropDown",
          "values": [
            "Karnataka",
            "Kerala",
            "Tamil Nadu"
  ]
          }]
        }
       ]
    };
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Domino</h1>
        </header>
          <Flexi
            config={flexiConfig}
          />
      </div>
    );
  }
}

export default App;
