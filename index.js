// https://jsonplaceholder.typicode.com/users.  -use this link

// Create an Async Function:
// Create a function named fetchUsers.
// Use fetch() to get a list of users from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users).
// Use await to wait for the response and convert it to JSON.

// Log the Data as Objects:
// After fetching the data, iterate through the list of users.
// For each user object, log the user's name and email to the console.
async function fetchUsers() {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await request.json();
  console.log(response);
  console.log(`\n using for loop \n `);
  for (let i = 0; i < response.length; i++) {
    console.log(`Name: ${response[i].name} \nemail: ${response[i].email} `);
  }
  console.log(`\n using for each \n `);
  response.forEach((response) => {
    console.log(`Name: ${response.name} \n email: ${response.email} `);
  });
}

fetchUsers();
