import React from "react";
import "./App.css";
import Button from '@material-ui/core/Button';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className='section1' >
          <h1>Guttenberg Project</h1>
        </div>
        <div className="section2">
          <Button variant="contained" color="primary">
            Fiction
          </Button>
          <Button variant="contained" color="primary" >
            Drama
          </Button>
          <Button variant="contained" color="primary" >
            Humor
          </Button>
          <Button variant="contained" color="primary" >
            Politics
          </Button>
          <Button variant="contained" color="primary" >
            Philosophy
          </Button>
          <Button variant="contained" color="primary" >
            History
          </Button>
          <Button variant="contained" color="primary" >
            Adventure
          </Button>
        </div>
      </div>
    )
  }
}

export default App;