/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    [
        {
          "_id": {
            "$oid": "662a9339124f174c914c450c"
          },
          "name": "java",
          "price": 2000,
          "Instructor": "Shrishail"
        },
        {
          "_id": {
            "$oid": "662a9339124f174c914c450d"
          },
          "name": "python",
          "price": 2500,
          "Instructor": "John Doe"
        },
        {
          "_id": {
            "$oid": "662a9339124f174c914c450e"
          },
          "name": "javascript",
          "price": 1800,
          "Instructor": "Jane Smith"
        }
      ]
      
]);

 console.log('Done inserting data')

 
