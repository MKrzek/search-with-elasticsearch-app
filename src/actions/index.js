import elasticsearch from 'elasticsearch';
export const DISPLAY_PRODUCTS = 'DISPLAY_PRODUCTS';
export const FETCH_CATEGORY='FETCH_CATEGORY';


const client = new elasticsearch.Client({
    host:'http://localhost:9200',
    log: 'trace'
})

export function performQuery(value,selected_page){

    const term=value.searchBar
    const page_size=5;
    const page_number = Number(selected_page)
    const from=(page_size * (page_number))
    
    return function(dispatch){
    client.search({
        size: page_size,
        from: from,
        body:{
            query:{
                match:{
                    name: term
                }
            }
        }
    
    }).then(function(body){
       const data={data: body.hits, name:term}
        //callback()
            dispatch({
            type: DISPLAY_PRODUCTS,
            payload: data
         }) 
         
         }  
    )
    .catch(function(error){
        console.trace(error.message)
    })
}}
export function fetchCategory(value,selected_page) {
    const item=value;
    const page_size = 5;
    const page_number = Number(selected_page)
    const from = (page_size * (page_number))
    return function (dispatch) {
        client.search({ 
            size: page_size,
            from: from,
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
                    payload: body.hits})   
            })
            .catch(function (error) {
                console.trace(error.message)
            })   
    }
}

