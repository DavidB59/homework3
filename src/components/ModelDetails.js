import * as React from 'react'
import PropTypes from 'prop-types'


export default function Modeldetails(props) {

  Modeldetails.propTypes = {
    model: PropTypes.arrayOf(
      PropTypes.shape({
        manufacturer : PropTypes.string,
        year : PropTypes.number,
        origin : PropTypes.string


      })
    )
  }
  return (<div>

      <ul>


      
      {props.model.map(modelKey =>
        <>             <li key={Math.ceil(Math.random() * 100000)}>Name: {props.name}</li> 

        <li key={Math.ceil(Math.random() * 100000)}>Manufacturer: {modelKey.manufacturer}</li>
          <li key={Math.ceil(Math.random() * 100000)}>Year: {modelKey.year}</li>
          <li key={Math.ceil(Math.random() * 100000)}>Origin: {modelKey.origin}</li>
          <p> </p>
        </>

      )}
    </ul>

  </div>)
}
