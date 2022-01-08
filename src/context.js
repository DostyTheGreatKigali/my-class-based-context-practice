import React, { Component } from 'react'

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        name: 'Musah',
        count: 0
    }

    increment = () => {
        console.log("In increment")
        this.setState(() => {
            return {
                count: this.state.count + 1
            }
        })
    }

    decrement = () => {
        console.log("In decrement")
        this.setState(() => {
            return {
                count: this.state.count - 1
            }
        })
    }


    // componentDidMount() {

    // }

    render() {
        return(
         <MyContext.Provider
         value={
             {
                 ...this.state,
                 increaseCount: this.increment,
                 decreaseCount: this.decrement
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
