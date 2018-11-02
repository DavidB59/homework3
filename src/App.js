import React, { Component } from 'react';
import './App.css';


const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}
const dataKeys = Object.keys(data)
const insideSelect = dataKeys.map((dataKey) => <option key={data[dataKey].year} value={dataKey}> {dataKey} ({data[dataKey].year})</option>)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.updateSelection = this.updateSelection.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

updateSelection(event) {
  this.setState({value: event.target.value});
  console.log(this.state)
}

  render() {
    return (
      <div className="App">

          <select value={this.state.value} onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          <option value="re">-- raeredel --</option>

          <option value="rea">-- pickrezrzeodel --</option>

          {insideSelect}
        </select>


      </div>
    );
  }
}

export default App;
