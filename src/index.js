import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render(){
    return (
      <div>hi!</div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


