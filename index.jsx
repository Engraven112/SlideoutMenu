import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

export default class App extends React.Component {
    render() {
        return <div className='hello'>Hello world</div>;
    }
}

ReactDOM.render(<App />, document.getElementById('container'));