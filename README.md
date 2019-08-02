# 5-simple-steps-to-wrap-a-rest-service-with-a-nice-ui5.-
This is the companion of the blog https://blogs.sap.com/2019/08/01/5-simple-steps-to-wrap-a-rest-service-with-a-nice-ui5./

Purpose of this repository is to demonstrate how to build a simple UI5 that posts a POST to the http://dummy.restapiexample.com/api/v1/create and that show the result of that POST within the UI.

For more details about that public example REST Service see http://dummy.restapiexample.com/create

Basically, this project provides a UI that executes the equivalent of

`````
curl -X POST \
  http://dummy.restapiexample.com/api/v1/create \
  -d '{"name":"AUniqueName","salary":"123","age":"23"}'
`````
This project has been created following the 5 step approach above.

In order to use it simply clone it and then simply execute

````
npm run deploy:cf
````

This will deliver you a UI on cloudfoundry in your org and space and a URL you can access that will POST to the 
dummy.restapyexample.com

Enjoy !
