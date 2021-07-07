import React from "react";
import Counter from "../Counter";
import HoverCount from "../HoverCount";
import ThemeContext from '../ContextApi/ThemeContext';




export default function Content() {
  return (
    <div>
      <h1>This is a Content </h1>
      <Counter>
        {(counter, incrementCount) => {
          return <ThemeContext.Consumer>
              {({theme,switchTheme}) => (

                    <HoverCount
                    count={counter}
                    incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}
                    
                    ></HoverCount>
              )}     
              
              
            </ThemeContext.Consumer> 
          
        }
    }
      </Counter>
    </div>
  );
}




