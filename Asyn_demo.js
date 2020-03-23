//1
console.log('Before');
//2
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) =>{
        getCommits(repo, (commits) => {

        });
    });
}); 

//4
console.log('After'); 

//Callbacks
//Promisses
//Aync and await


//SYNCHRONOUS
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUsername);
// const commit = getCommits(repos[0]);
// console.log('After');


function getUser(id, callback){
    setTimeout(() => {          
        console.log('Reading a user from the data base');
        callback({id: id, gitHubUsername: 'mosh'}) ;
    }, 2000);
}

//Async function to rerturn the list of repositories.
function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling gitHub API....');
        callback( ['repo1', 'repo2', 'repo3']);
    }, 2000);
   
}














