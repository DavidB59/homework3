import React, { Component } from 'react';
import './App.css';
import {addModel} from './actions/addModel'
import {modelName} from './actions/modelName'

import { connect } from 'react-redux'
import {Provider} from 'react-redux'
import store from './store'
import ModelDetails from './components/ModelDetails'



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
const insideSelect = dataKeys.map((dataKey) => <option key={Math.ceil(Math.random()*100)} value={dataKey}> {dataKey} ({data[dataKey].year})</option>)

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.functionAddModel = this.functionAddModel.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }

updateSelection(event) {
  this.setState({value: event.target.value});
}
functionAddModel(){
  this.props.modelName(this.state.value)
  this.props.addModel(data[this.state.value])
  console.log('props')
  console.log(this.props)
  console.log('state')
  console.log(this.state)
}
  render() {
    return (
      <Provider store={store}>
      <div className="App">
    <ModelDetails model={this.props.model} name={this.props.name}/> 

          <select value={this.state.value} onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {insideSelect}
        </select>

      <button onClick={this.functionAddModel}> Add </button>

      </div>
      </Provider>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    model: state.addModel,
    name : state.modelName,
  }
}

export default connect(mapStateToProps,{addModel, modelName})(App)
