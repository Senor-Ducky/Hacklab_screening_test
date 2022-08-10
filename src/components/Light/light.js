import React from 'react';
import './light.css';
import Circle from '../Circle/circle';

const colors = {
  red: {
    backgroundColor: "#cc3232"
  },
  yellow: {
    backgroundColor: "#e7b416"
  },
  green: {
    backgroundColor: "#2dc937"
  },
  grey: {
    backgroundColor: "grey"
  }
};

var redDone = false;
var greenDone = false;
var yellowDone = false;

class Light extends React.Component {
  state = {
      red: colors.red,
      yellow: colors.grey,
      green: colors.grey,
      next: 'green'
    }

    


    handeLightChange = () => {
      switch (this.state.next) {
        case "red":
          this.setState({
            red: colors.grey,
            yellow: colors.grey,
            green: colors.green,
            next: 'green'
          });
          break;
        case "yellow":
          this.setState({
            red: colors.grey,
            yellow: colors.yellow,
            green: colors.grey,
            next: 'red'
          });
          break;
        case "green":
          this.setState({
            red: colors.red,
            yellow: colors.grey,
            green: colors.grey,
            next: 'yellow'
          });
          break;
      }
    }

    greenClick = () => {
      this.setState({
        red: colors.grey,
        yellow: colors.grey,
        green: colors.green,
        
      });
      redDone = true;
    }

    yellowClick = () => {
      this.setState({
        red: colors.grey,
        yellow: colors.yellow,
        green: colors.grey,
        
      });

      greenDone = true;

    }
    
    redClick = () => {
      this.setState({
        red: colors.red,
        yellow: colors.grey,
        green: colors.grey,
        
      });

      greenDone = true;
      yellowDone = true
    }

   

    componentDidMount() {
 

      if( redDone === false) {
        setInterval(()=>{
          this.handeLightChange()
          redDone = true;
        }, 20000)
      } 

      if( redDone === true && greenDone === false) {
        setInterval(()=>{
          this.handeLightChange()
          greenDone = true;
        }, 5000)
      }

      if( redDone === true && greenDone === true && yellowDone === false) {
        setInterval(()=>{
          this.handeLightChange()
          yellowDone = true;
        }, 15000)
      }

      redDone = false;
      greenDone = false;
      yellowDone = false;
      
      }
    

    
    


  render() {
    return (
      <div>
      <div class="light">
        <Circle color={this.state.red}/>
        <Circle color={this.state.yellow}/>
        <Circle color={this.state.green}/>
      </div>
      <button onClick={this.greenClick} className='greenBtn'>green</button>
      <button onClick={this.yellowClick} className='yellowBtn'>yellow</button>
      <button onClick={this.redClick} className='redBtn'>red</button>
      </div>

      
    )
  }
}

export default Light;