import * as React from 'react'


export default function Modeldetails(props) {


  return (<div>


    <ul>
      {props.model.map(modelKey =>
        <> <li key={Math.ceil(Math.random() * 100000)}>Manufacturer: {modelKey.manufacturer}</li>
          <li key={Math.ceil(Math.random() * 100000)}>Year: {modelKey.year}</li>
          <li key={Math.ceil(Math.random() * 100000)}>Origin: {modelKey.origin}</li>
          <p> </p>
        </>


      )}
    </ul>

  </div>)
}
