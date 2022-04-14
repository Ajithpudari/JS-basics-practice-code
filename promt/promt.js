var prompt = require('prompt');
  
// Function call
prompt.start();
    
// Reading two properties from user ie. name & class
prompt.get(['Name', 'class'], function (err, result) {
      
  // Printing the result
  console.log('Command-line input received:');
  console.log('Name: ' + result.name);
  console.log('class: ' + result.class);
})