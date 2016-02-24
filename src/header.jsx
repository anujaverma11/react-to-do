var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return{
      text:''
    }
  },

  render: function(){
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handelInputChange}
        type="text"
        className="form-control" />

      <span className="input-group-btn">
        <button
        onClick={this.handleClick}
        className="btn btn-default"
        type="button">
          ADD
        </button>
      </span>
    </div>
  },

  handleClick: function(){

  },

  handelInputChange: function(){

  }

});