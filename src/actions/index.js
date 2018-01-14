import elasticsearch from 'elasticsearch';
export const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS";
const client = new elasticsearch.Client({
    
    host:'http://localhost:9200',
    log: 'trace'
})

export function performQuery(values ,callback){
    console.log ('values in action', values.searchBar)
    const value=values.searchBar;
    console.log ('value', value)
    return function(dispatch){
    client.search({
        q: value
    }).then(function(body){
        callback()
            dispatch({
            type: DISPLAY_PRODUCTS,
            payload: body.hits.hits
         }) 
         
         }  
    )
    .catch(function(error){
        console.trace(error.message)
    })
}}

