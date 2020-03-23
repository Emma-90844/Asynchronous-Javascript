//SOLVING THE CHRISTMASS TREE PROBLEM
/*This is done by simply replacing anoymous functions-mostly passed in the second parameter 
as a name function*/

//1
console.log('Before');
//2
getUser(1, getRepositories); 
 
//4
console.log('After'); 
function getRepositories(user){
    getRepositories(user.gitHubUsername, getCommits);
} 

function getCommits(repos){
    getCommits(repo,displayCommits);
}

//solving callback hell
function displayCommits(commits){
    console.log(commits);
}

//Callbacks
//Promisses 
//Aync and await


//SYNCHRONOUS
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUsername);
// const commit = getCommits(repos[0]);
// console.log('After');

//PROMISSES
//A promise holds ther results of asynchronous operation
//Promisses to give the result
//It can be in a pending state----->async operation

function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {          
            console.log('Reading a user from the data base');
            resolve({id: id, gitHubUsername: 'mosh'}) ;
        }, 2000);
    });
    
}

//Async function to rerturn the list of repositories.
function getRepositories(username) {
    return new Promise ((resolvge, reject) => {
        setTimeout(() => {
            console.log('Calling gitHub API....');
            resolve( ['repo1', 'repo2', 'repo3']);
        }, 2000);
    });  
}



function getCommits(repo){
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Calling GitHub API ....');
        resolve('[commit]');
    }, 2000);
   });
   
}










