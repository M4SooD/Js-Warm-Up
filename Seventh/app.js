//What is Call Stack? Show it with a small example.

function firstFunction(){
    throw new Error('Stack Trace Error');
  }
  
  function secondFunction(){
    firstFunction();
  }
  
  function thirdFunction(){
    secondFunction();
  }
  
  thirdFunction();