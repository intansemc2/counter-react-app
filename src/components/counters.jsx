//update the state after handle events
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 1 },
            { id: 4, value: 0 },
        ],
    };

    handleDelete = (counterId) => {
        this.setState({ counters: this.state.counters.filter((counter) => counter.id !== counterId) });
    };

    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter key={counter.id} onDelete={this.handleDelete} counter={counter} />
                ))}
            </div>
        );
    }
}

export default Counters;
