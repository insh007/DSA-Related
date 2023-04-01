// 4. How to call 1000 apis simultaneously or one by one with the help of Promise?

// For example, to call APIs one by one, you can use a loop like this:
const apiUrls = [/* array of API endpoint URLs */];

for (let i = 0; i < apiUrls.length; i++) {
  fetch(apiUrls[i])
    .then(response => response.json())
    .then(data => {
      // process data here
    })
    .catch(error => {
      // handle error here
    });
}

// To call APIs simultaneously, you can use Promise.all method like this:

const apiUrl = [/* array of API endpoint URLs */];
const promises = [];

for (let i = 0; i < apiUrl.length; i++) {
  promises.push(fetch(apiUrl[i])
    .then(response => response.json())
    .then(data => {
      // process data here
    })
    .catch(error => {
      // handle error here
    })
  );
}

Promise.all(promises)
  .then(results => {
    // process results here
  })
  .catch(error => {
    // handle error here
  });
