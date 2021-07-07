import React from "react";
import Clock from "./components/Clock";
import Form from "./components/Form";
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
import ClickCounter from "./components/ClickCounter";
import HoverCount from "./components/HoverCount";
import Counter from "./components/Counter";
import Section from "./components/ContextApi/section";
import ThemeContext from "./components/ContextApi/ThemeContext";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };
  switchTheme = () => {
    this.setState(({theme})=>{
      if(theme ==='dark'){
        return{
          theme:'light'
        }
      }
      return{
        theme:'dark'
      }

    })
  };
  render() {
    const { theme } = this.state;

    return (
      <div>
        <Clock />
        <Form />

        <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji}></Text>}</Emoji>

        <ClickCounter></ClickCounter>
        <HoverCount></HoverCount>
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider
          value={{ theme:theme, switchTheme:this.switchTheme }}
        >
          <Section></Section>
        </ThemeContext.Provider>
      </div>
    );
  }
}
