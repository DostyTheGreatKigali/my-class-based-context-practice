import React, { Component } from "react";
import { MyConsumner } from '../context';

export default class Details extends Component {

    render() {
        return (
            <MyConsumner>
                {value => {
                    console.log(value)
                    const { name, count } = value;
                    // const { increaseCount } = value.
                    return(
                      <>
                      <h2>Hello {name}</h2>
                      {/* <div style={counterContainer}> */}
                      <div style={styles.counterContainer}>
                      <button onClick={() => { value.decreaseCount() }}>-</button> 
                      {/* { value.decreaseCount() } use this syntax only for nested functions */}
                      <h1>{count}</h1>
                      <button onClick={() => value.increaseCount() }>+</button>
                      </div>
                      </>
                    );
                }

                }

            </MyConsumner>
        );
    }

}


// const counterContainer = {
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'center'
// }

const styles = {
    counterContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }
}

