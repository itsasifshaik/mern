const greetFn = (name) => {
         console.log(`Hello, ${name}!`);
     }
    
     function processName(callback) {
       const name = "mister";
       callback(name);
     }
    
     processName(greetFn);