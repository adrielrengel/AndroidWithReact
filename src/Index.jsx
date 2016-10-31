import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login' ;

var Message = React.createClass({
  render: function(){
    return <div><Login /></div>;
  }
});

ReactDOM.render(<Message/>, document.getElementById('root'));
