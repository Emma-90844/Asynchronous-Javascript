console.log('Before');
//This an example of a non blocking function
const user = getUser(1);
console.log(user);
console.log('After');

//Callbacks
//Promisses
//Sync and await



function getUser (id, callbacl){
    setTimeout(() => {
        console.log('Reading a user from the data base');
        return {id: id, gitHubUsername: "Allen" };
        }, 2000);
}

//NOTE
/*Whenever you are running an operation that involves disk and 
network access you are dealing with asynchronous programing

A callback is a function that is called when the results of 
asynchronious function is ready
*/










