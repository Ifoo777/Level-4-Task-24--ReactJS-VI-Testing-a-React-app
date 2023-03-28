import React, { Component } from 'react'
import { getDefinitionFromApi } from './DictionaryApi';

export class Dictionary extends Component {

  state = {
    error: null,
    isLoaded: false,
    items: ["tester"],
    searchWord:"example"
  };
  

    // Fetch the data from the API
    componentDidMount() {
      
      // If the user enters blank, then give example of the word example
      let search = this.state.searchWord;
      if(search === ""){
        search="example";
      }

      // Fetch data from API and update
      getDefinitionFromApi(search)
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result, 
        });
      },
      (error) => {
        this.setState({
        isLoaded: true,
        error
        });
      });  
    }

    // Update the search word state
    updateWord(input){
      this.setState({
        searchWord:input
      }
    )}



  //Render based on results
  render() {
    const { error, isLoaded, items} = this.state;
    
    if (error) { return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) { return <div>Loading...</div>;
    } 
    else {
      return(
        <div>

          <input value={this.state.searchWord.toUpperCase()}   name="searchWord" onChange={e => {this.updateWord(e.target.value)}} />
          <button onClick={() =>{ this.setState({isLoaded: false }); this.componentDidMount()}}>SEARCH</button>
        
          {items.map((element, main_index) => {
            return(
              <div key={main_index}>

                <h2><u>{element.fl}</u></h2>

                <div className="example_word">

                  <h3>
                    {element.meta.stems.map((element, index) => (
                      <span key={index} >{element}, </span>           
                    ))}
                  </h3>

                  <ul className='word_definition'>
                    {element.shortdef.map((element, index) => (
                      <li key={index}>{element}</li>           
                    ))}
                  </ul>

                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }
}

export default Dictionary