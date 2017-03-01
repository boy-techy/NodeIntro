function ageCalc(dobx){
	var cur_date=new Date();
	var dobString=dobx.split("/");
	var dob=new Date(dobString[0],dobString[1],dobString[2]);
	console.log("Day "+Math.abs(cur_date.getDate()-dob.getDate())+" Month "+Math.abs(cur_date.getMonth()-dob.getMonth())+" Years "+(cur_date.getFullYear()-dob.getFullYear()))

}
module.exports.ageCalc=ageCalc;
