import React, { Component } from 'react';

import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
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
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter((counter) => counter.value > 0).length} />
                <main className='container'>
                    <Counters onDelete={this.handleDelete} onReset={this.handleReset} onIncrement={this.handleIncrement} counters={this.state.counters} />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
