import elasticsearch from 'elasticsearch';
export const DISPLAY_PRODUCTS = 'DISPLAY_PRODUCTS';
export const FETCH_CATEGORY='FETCH_CATEGORY';
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

export function fetchCategory(value) {
    const item=value
    return function (dispatch) {
        client.search({ 
            body:{
               query:{
                match:{
                    tags: item
                }
            } 
        }
            })
            .then(function (body) {
                dispatch({
                    type: FETCH_CATEGORY,
                    payload: body.hits.hits})
            })
            .catch(function (error) {
                console.trace(error.message)
            })
    }
}

