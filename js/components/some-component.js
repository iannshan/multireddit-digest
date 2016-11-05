var React = require('react');

var SomeComponent = function(props) {
    return (
        <div className="some-component">
          {props.text}
        </div>
    );
};

module.exports = SomeComponent;
