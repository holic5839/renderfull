import React from 'react';
class Counter extends React.Component {
    state = {
            number: 0,
            fixed_number: 1
        };
    render() {
        let { fixed_number } = this.state;
        let number_b = this.state.number;
        return (
            <div>
                <h1>{number_b}</h1>
                <h2>fixed number: {fixed_number}</h2>
                <button
                    
                    onClick={ () => {
                        this.setState((prevState, props) => {
                            return {
                                number: (++number_b)
                            }
                        })
                    }}
                >
                    +n
                </button>
            </div>
        );
    }
}
export default Counter;