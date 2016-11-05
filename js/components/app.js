var React = require('react');

var App = function(props) {
    return (
        <div className="app-container">
            <h1 className="main-heading text-center">
                Multireddit Digest
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};

module.exports = App;
