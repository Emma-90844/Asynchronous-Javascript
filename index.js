console.log('Before');
//This an example of a non blocking function
getUser(1, (user) =>{
    console.log('User', user);
});
//Get repositories function
getRepositories("clan", (repositories) => {
    console.log('Repositories',repositories );
});

console.log('After');



//SOLVING THE CALL BACK HELL
//Creating a function out of the anonimpous function and passing
// it as a parameter
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repo, displayCommits);
    });
});
function User(user){

}

function displayCommits(commits){
    console.log(commits);
}













//Callbacks

//Promisses

//async and await

function getUser (id, callback){
    setTimeout(() => {
        console.log('Reading a user from the data base');
        callback({id: id, gitHubUsername: "Allen" }); // Call back and give it this user object
        }, 2000);
} 


function getRepositories(username, callback){
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
   
}


//NOTE
/*Whenever you are running an operation that involves disk and 
network access you are dealing with asynchronous programing

A callback is a function that is called when the results of 
asynchronious function is ready.
*/










