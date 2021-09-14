/* Define a function to accept a javascript object literal as follow and create 
a log message to the console with date and time of the print */

let messageBag={
    exceptions:{
      1:{
        num: 1009,
        message: "Network Connection Error!"
      },
      2:{
        num: 1002,
        message: "User is not logged-in."
      }
    }  
  };
  function prettyPrintMessageLog(obj){
    var date= new Date();
    
    for(let item in obj.exceptions){
      console.log('11- '+ date.toString() +' Error Number: '+ obj.exceptions[item].num+' '+obj.exceptions[item].message); 
    }
  }
  
  prettyPrintMessageLog(messageBag);