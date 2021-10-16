import React, {Component } from "react";

// const [counter, setCounter] = useState;
class Label extends Component{
  render(){
    return <p>Contador => {this.props.text}</p>
  }
}

class Button extends Component{
  render(){
    return <button onClick={()=>{this.props.handleClick(this.props.value)}}>{this.props.Label}</button>
  }
}

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      LabelValue: 0
    };

  }
  setLabelValue = (LabelValue) =>{
    LabelValue += this.state.LabelValue
    this.setState({LabelValue})
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Label text={this.state.LabelValue}/>
        <Button handleClick={this.setLabelValue} Label="Somar" value={5}/>
        <Button handleClick={this.setLabelValue} Label="Subtrair" value={-3}/>

        <h1>{this.state.LabelValue}</h1>
      </header>
    </div>
  );
}

}

export default App;
