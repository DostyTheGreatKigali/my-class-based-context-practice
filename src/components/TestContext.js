import React, { Component } from "react";
import { MyConsumner } from '../context';

export default class Details extends Component {
    render() {
        return (
            <MyConsumner>
                {value => {
                    console.log(value)
                    const { name } = value
                    return(
                      <h2>Hello {name}</h2>
                    );
                }

                }

            </MyConsumner>
        );
    }

}