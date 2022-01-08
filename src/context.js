import React, { Component } from 'react'

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        name: 'Musah'
    }

    // componentDidMount() {

    // }

    render() {
        return(
         <MyContext.Provider
         value={
             {
                 ...this.state
             }
         }
         >
          { this.props.children }
         </MyContext.Provider>
        );
    }

}

const MyConsumner = MyContext.Consumer;

export { MyProvider, MyConsumner }
