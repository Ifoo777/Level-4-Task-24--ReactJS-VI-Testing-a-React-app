// Fetch data from API and update
export const getDefinitionFromApi = (search) =>{
    
    return fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${search}?key=${process.env.REACT_APP_DICTIONARY_API_KEY}`)
    .then(res => res.json())
};