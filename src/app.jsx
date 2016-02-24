var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire'); //ReactFire is the bridge between react and Firebase.
var Firebase = require('firebase');
var Header = require('./header');
var rootURL = 'https://blistering-torch-8543.firebaseio.com/';

var App = React.createClass({
                // a mixin copies code from object (ReactFire) to component(App)
  mixins: [ ReactFire ],
                //any code written inside componentWillMount will run one time when the component is mounted on the DOM.

  componentWillMount: function(){
                // bindAsObject is a method given to us by ReactFire it is not a react method. It takes react component and bind us to the firebase set of data here.
    this.bindAsObject(new Firebase(rootURL + 'items/'), 'items');
  },

  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To Do List
        </h2>
        <Header />
      </div>
    </div>

  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
