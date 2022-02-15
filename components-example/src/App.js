import React from 'react';
import './App.css';
import CounterClass from './components/class/CounterClass';
import GreetingsClass from './components/class/GreetingsClass';
import CounterFunction from './components/function/CounterFunction';
import GreetingsFunction from './components/function/GreetingsFunction';
import StudentList from './components/function/StudentList/StudentList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true,
      componentType: true,
      myComponents: {
        Greetings: GreetingsFunction,
        Counter: CounterFunction,
        StudentList: StudentList
      }
    };
  }
  toggleCounter() {
    this.setState({ showCounter: !this.state.showCounter });
  }
  toggleComponentType() {
    if (this.state.componentType) {
      this.setState({
        ...this.state, componentType: false, myComponents: {
          ...this.state.myComponents,
          Greetings: GreetingsClass,
          Counter: CounterClass,
        }
      })
    }
    else {
      this.setState({
        ...this.state, componentType: true, myComponents: {
          ...this.state.myComponents,
          Greetings: GreetingsFunction,
          Counter: CounterFunction,
        }
      })
    }
    this.setState({ showCounter: !this.state.showCounter });
  }
  toggleCounter() {
    this.setState({ showCounter: !this.state.showCounter });
  }
  render() {
    const { showCounter } = this.state;
    const CounterProps = {
      time: 100
    };
    const { myComponents } = this.state;

    return (
      <div className="App">
        <button onClick={() => this.toggleComponentType()}>Toggle Component Type</button>
        {/* <GreetingsClass name={userName} /> */}
        <myComponents.Greetings></myComponents.Greetings>
        <hr />
        <button onClick={() => this.toggleCounter()}>Toggle Counter</button>
        <p>showCounter: {showCounter ? "true" : "false"}</p>

        {/* {showCounter && <CounterClass time={500} />} */}
        <myComponents.Counter {...CounterProps} className={showCounter ? 'hide' : ''} />
        <hr />
        <myComponents.StudentList />
      </div>
    );
  }
}

export default App;
