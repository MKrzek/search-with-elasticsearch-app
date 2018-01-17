import elasticsearch from "elasticsearch";
export const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS";
export const FETCH_CATEGORY = "FETCH_CATEGORY";

const client = new elasticsearch.Client({
  host: "http://localhost:9200",
  log: "trace"
});

export function performQuery(value, page_selected) {
  const term = value.searchBar;
  const page_size = 5;
  const page_number = Number(page_selected);
  const from = page_size * page_number;

  return function(dispatch) {
    client
      .search({
        size: page_size,
        from: from,
        body: {
          query: {
            multi_match: {
              query: term,
              fields: ["name", "tags", "description"]
            }
          }
        }
      })
      .then(function(body) {
        const data = {
          data: body.hits,
          name: term
        };
        dispatch({
          type: DISPLAY_PRODUCTS,
          payload: data
        });
      })
      .catch(function(error) {
        console.trace(error.message);
      });
  };
}
export function fetchCategory(value, page_selected) {
  const term = value;
  const page_size = 5;
  const page_number = Number(page_selected);
  const from = page_size * page_number;
  return function(dispatch) {
    client
      .search({
        size: page_size,
        from: from,
        body: {
          query: {
            match: {
              tags: term
            }
          },
          sort: [
            {
              price: "asc"
            }
          ]
        }
      })
      .then(function(body) {
        dispatch({
          type: FETCH_CATEGORY,
          payload: body.hits
        });
      })
      .catch(function(error) {
        console.trace(error.message);
      });
  };
}

export function sortByPrice(value, page_selected) {
  const term = value;
  const page_size = 5;
  const page_number = Number(page_selected);
  const from = page_size * page_number;
  return function(dispatch) {
    client
      .search({
        size: page_size,
        from: from,
        body: {
          query: {
            match: {
              tags: term
            }
          },
          sort: [
            {
              price: "desc"
            }
          ]
        }
      })
      .then(function(body) {
        dispatch({
          type: FETCH_CATEGORY,
          payload: body.hits
        });
      })
      .catch(function(error) {
        console.trace(error.message);
      });
  };
}
