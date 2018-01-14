import elasticsearch from 'elasticsearch';

const client = new elasticsearch.Client({
    
    host:'http://localhost:9200',
    log: 'trace'
})

export function performQuery(values){
    console.log ('values in action', values.searchBar)
    const value=values.searchBar;
    console.log ('value', value)
    return function(dispatch){
    client.search({
        q: value
    }).then(function(body){
            dispatch({
            payload: body.hits.hits
         }) 
         
         }  
    )
    .catch(function(error){
        console.trace(error.message)
    })
}}

