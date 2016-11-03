var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var SomeComponent = require('../js/some-component');

describe('Some component', function() {
    it('Renders some component',  function() {
        var testText = "test text";

        var renderer = TestUtils.createRenderer();
        renderer.render(<SomeComponent text={testText} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('some-component');

        var text = result.props.children;
        text.should.equal('test text');
    });
});
