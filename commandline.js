var sum=new Number();
process.argv.forEach(function(value,index){
	if(index>1){
		sum+=parseInt(value);
	}	

})
console.log(sum);

