const product_count = function(value=50) {
	let proCount=value;
  
	return {
	  increase: function(newCount) {
		if(newCount === undefined){
		  proCount +=1;
		}
		else if(newCount>proCount){
		  proCount=newCount;
		}
		else{
		   proCount=proCount;
		}
	  },
	  decrease: function(newCount) {
		if(newCount === undefined){
		  if(proCount>0){
		  proCount -=1;
		  }
		  else
		  proCount=0;
		}
		else if(newCount<proCount && newCount>=0){
		  proCount=newCount;
		}
		else{
		  proCount=proCount;
		}
	  },
	  value:function(){
		return proCount;
	  }  
	}
  };
  
  var product = product_count();
  product.increase(60); 
  console.log('10- product count: '+ product.value());         
  product.increase();
  console.log('10- product count: '+ product.value());  
  product.decrease(30);      
  console.log('10- product count: '+ product.value()); 
  product.decrease(); 
  console.log('10- product count: '+ product.value()); 