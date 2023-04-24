// Q.  Suppose we have an excel file where millions of records are present such as email, mobile, name etc. we have to insert that records with help of node js to mongodb in the json document and also check if the unique email is duplicate then throw an error. They asked me handle it in a optimize way

//   without Optimization:
const MongoClient = require('mongodb').MongoClient;
const XLSX = require('xlsx');

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log("Error connecting to MongoDB:", err);
    return;
  }

  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection('mycollection');

  // Read the Excel file   ------- from here
  const workbook = XLSX.readFile('data.xlsx');
  const sheetName = workbook.SheetNames[0];
  const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  // Loop through the JSON data and insert records into MongoDB
  jsonData.forEach((record) => {
    const email = record.email;

    // Check if the email address is already present in the collection
    collection.findOne({ email: email }, (err, result) => {
      if (err) {
        console.log("Error checking for duplicate email:", err);
        return;
      }

      if (result) {
        console.log(`Duplicate email found: ${email}`);
        return;
      }

      // Insert the record into the collection
      collection.insertOne(record, (err, result) => {
        if (err) {
          console.log("Error inserting record:", err);
          return;
        }

        console.log(`Record inserted with ID: ${result.insertedId}`);
      });
    });
  });

  // Close the MongoDB connection
  client.close();
});

/*
Handling the insertion of millions of records in an optimized way can significantly improve the performance of the code. Here are some ways you can optimize the insertion of data into MongoDB:

1. Use bulk inserts: Instead of inserting each record one by one, you can use bulk inserts to insert multiple records in a single operation. This can reduce the number of round trips to the database, improving the overall performance. You can use the bulkWrite() method of the Collection object to perform bulk inserts.

2. Use indexing: Indexing can improve the performance of queries and inserts. You can create an index on the email field to speed up the lookup of duplicate emails. You can use the createIndex() method of the Collection object to create an index.

3. Use a worker pool: Handling millions of records in a single thread can cause the code to become unresponsive. You can use a worker pool to distribute the workload across multiple threads, making the code more responsive. You can use the worker_threads module in Node.js to create a worker pool.
 */

// const MongoClient = require('mongodb').MongoClient;
// const XLSX = require('xlsx');
// const { Worker, isMainThread, parentPort } = require('worker_threads');

// // Connection URL and database name
// const url = 'mongodb://localhost:27017';
// const dbName = 'mydb';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   if (err) {
//     console.log("Error connecting to MongoDB:", err);
//     return;
//   }

//   console.log("Connected successfully to server");

//   const db = client.db(dbName);
//   const collection = db.collection('mycollection');

//   // Create an index on the email field
//   collection.createIndex({ email: 1 }, { unique: true }, (err, result) => {
//     if (err) {
//       console.log("Error creating index:", err);
//       return;
//     }

//     console.log("Index created successfully");

//     // Read the Excel file
//     const workbook = XLSX.readFile('data.xlsx');
//     const sheetName = workbook.SheetNames[0];
//     const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // Split the JSON data into chunks of 1000 records each
//     const chunkSize = 1000;
//     const chunks = [];
//     for (let i = 0; i < jsonData.length; i += chunkSize) {
//       chunks.push(jsonData.slice(i, i + chunkSize));
//     }

//     // Define a function to insert a chunk of data into MongoDB
//     const insertChunk = (chunk) => {
//       const requests = chunk.map((record) => ({
//         insertOne: { document: record }
//       }));

//       collection.bulkWrite(requests, { ordered: false }, (err, result) => {
//         if (err) {
//           console.log("Error inserting chunk:", err);
//         } else {
//           console.log(`Chunk inserted successfully with ${result.insertedCount} records`);
//         }
//       });
//     };

//     // Insert the data using a worker pool
//     if (isMainThread) {
//       const workerPool = [];
//       for (let i = 0; i < chunks.length; i++) {
//         const worker = new Worker(__filename);
//         worker.on('message', (message) => {
//           console.log(message);
//         });
//         worker.on('error', (err) => {
//           console.log("Error in worker:", err);
//         });
//         workerPool.push(worker);
//       }

//       for (let i = 0; i < chunks.length; i++) {
//         workerPool[i].postMessage(chunks[i]);
//       }
//     } else {
//       // Worker code
//       parentPort.on('message', (chunk) => {
//         chunk.forEach((record) => {
//           collection.insertOne(record, (err, result) => {
//             if (err) {
//               if (err.code === 11000 && err.keyPattern.email) {
//                 console.log(`Duplicate email found: ${record.email}`);
//               } else {
//                 console.log("Error inserting record:", err);
//               }
//             } else {
//               console.log(`Record inserted successfully with _id: ${result.insertedId}`);
//             }
//           });
//         });
//       });
//     }
//   });
// });