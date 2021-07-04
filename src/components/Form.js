import React from "react";

export default class Form extends React.Component {
  state = {
    title: "Alam",
    text: "javaScript is Awesome",
    library: "React js",
  };
  handleChange = (event) => {
    if (event.target.type === "text") {
      this.setState({ title: event.target.value });
    } else if (event.target.type === "textarea") {
      this.setState({ text: event.target.value });
    } else if (event.target.type === "select-one") {
      this.setState({ text: event.target.value });
    } else {
      console.log(event.target.type);
      console.log("nothing");
    }
  };
  submitHandler=(e)=>{
      e.preventDefault();
      const { title, text, library } = this.state;
      console.log(title,text,library);

  }

  render() {
    const { title, text, library } = this.state;
    return (
      <div style={{ padding: "20px" }}>
        <form onSubmit={this.submitHandler}>
          <label>
            firstName:
            <input type="text" placeholder="Enter Your firstName" />
          </label>
          <br />
          <br />
          <label>
            lastName:
            <input
              type="text"
              value={title}
              placeholder="Enter Your lastName"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />

          <label>
            Email:
            <input type="email" placeholder="Enter your Email" />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input type="password" placeholder="Enter Your Password" />
          </label>

          <br />
          <br />
          <textarea
            name="text"
            value={text}
            onChange={this.handleChange}
          ></textarea>
          <br />
        <br />
          <select
          value={library}
          onChange={this.handleChange}
          style={{ padding: "10px" }}
        >
          <option value="React js">React Js</option>
          <option value="Vue">Vue</option>
          <option value="Angular">Angular</option>
          <option value="Node js">Node js</option>
        </select>
        <br /><br />
        <input type="submit" value="submit"/>
        </form>
        
        
        
      </div>
    );
  }
}
