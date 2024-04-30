const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://localhost:27017/";

// Database Name
const dbName = 'mydatabase'; // Change "mydatabase" to your desired database name

// Collection Name
const collectionName = 'mycollection'; // Change "mycollection" to your desired collection name

// Sample data
const tableData = [
    { name: "John", age: 30, city: "New York" },
    { name: "Emma", age: 25, city: "Los Angeles" },
    { name: "Michael", age: 35, city: "Chicago" }
];

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        // Connect to the database
        const db = client.db(dbName);

        // Get the collection
        const collection = db.collection(collectionName);

        // Insert data into MongoDB collection
        await collection.insertMany(tableData);

        console.log("Data inserted successfully.");
    } finally {
        // Close the connection
        await client.close();
    }
}

// Call the main function
main().catch(console.error);




// Import Mongoose
// const mongoose = require('mongoose');
 
// // Define the schema
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });
 
// // Create the model
// const User = mongoose.model('User', userSchema);
 
// // Export the model
// module.exports = User;
 
// // Import the User model
// const User = require('./models/user');
 
// // Create a new user
// const newUser = new User({
//   name: 'rahul',
//   email: 'abc@gmail.com',
//   password: 'password_123'
// });
 
// // Save the user to the database
// newUser.save()
//   .then(() => console.log('User created'))
//   .catch(err => console.log(err));