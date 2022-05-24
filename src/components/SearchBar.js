import React from 'react';

class SearchBar extends React.Component{

  state = { term: ''};

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log();
  }


  render(){
    return(
        <div className="ui segement">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className='field'>
                    <label>Photo Search</label>
                    <input
                      type="text"
                      value={this.state.term}
                      onChange={ e => this.setState({ term: e.target.value})}
                    />
                </div>
            </form>
        </div>
    );
  }
}

export default SearchBar;