const p = new Promise(function(resolve, reject)  {
    //Kick off an async work
    setTimeout(() => {
        resolve(1);
    },2000);
   
    // reject(new Error('error'));
});

p
    // .then(result => console.log('Result', result));
    .catch(err => console.log('Error', err.message));