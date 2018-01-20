The app has been created using React (Create React App), Redux, and ElasticSearch as a search engine;

To run the app,  clone or download this repository and follow  the instructions below:

1. Download and install Java ( http://www.oracle.com/technetwork/java/javase/downloads/index.html);

2. Download and extract Elasticsearch ( https://www.elastic.co/downloads/elasticsearch);

3. From the command line navigate to the directory of downloaded file,  type: 'bin/elasticsearch', and hit Enter to run the this file;

4. To enable CORS, add the following line to Elasticsearch's config file:

      http.cors: enabled: true allow-origin: /https?://localhost(:[0-9]+)?/

5. Download and extract Kibana ( https://www.elastic.co/downloads/kibana); 
6. Navigate to the file directory from the command line,  type: 'bin/kibana' and press Enter to run the file (this will start a web server on localhost (at port 5601) and connect with an Elasticsearch cluster on localhost(port 9200)
Kibana will appear in the browser on localhost at port 5601;

7. Go to the browser and in Kibana's Consol create an index with the following instruction: 
       PUT /product
    ( where 'product' is the name of index used in this App)

8. In order to add a document to the index, import json file with data. To do this, access the directory of the         directory of test-data.json (attached to the repository), and type in the following instruction: 

    curl -H 'Content-Type: application/json' -XPOST 'http://localhost:9200/product/default/_bulk?pretty' --data-binary '@test-data.json',

and press enter.
9. To run this app, navigate to the repository from the command line  and type in the following commands:

      (a) npm i

      (b) npm start

