import React from "react";
class Clock extends React.Component {
  /* constructor(props) {
        super(props);
        this.state = {date:new Date()}
   };
   */

  //shortcut used
  state = { date: new Date(),local:'bn-BD' };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick() {
      //console.log('the button is Click');
      this.setState({
          local:'en-US'
      })
  }

  render() {
      const {date,local}=this.state;
    return (
      <div>
          <h1 className="heading">
        <span className="text">
          Time: {date.toLocaleTimeString(local)}
        </span>
      </h1>
      <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}
export default Clock;
