//single source of truth
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

    handleReset = () => {
        this.setState({
            counters: this.state.counters.map((counter) => {
                counter.value = 0;
                return counter;
            }),
        });
    };

    handleIncrement = (counterId) => {
        this.setState({
            counters: this.state.counters.map((counter) => {
                if (counter.id === counterId) counter.value += 1;
                return counter;
            }),
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleReset} className='btn btn-primary btn-sm m-2'>
                    Reset
                </button>
                {this.state.counters.map((counter) => (
                    <Counter key={counter.id} onDelete={this.handleDelete} onReset={this.handleReset} onIncrement={this.handleIncrement} counter={counter} />
                ))}
            </div>
        );
    }
}

export default Counters;
