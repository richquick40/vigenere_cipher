function vigenere(key,msg,type){
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	init = [],
	res = [],
	j=0,
	ptr = /^(?!\d\s)[a-zA-Z]+$/;
	
// check if there is non-alpha characters. . .
if(ptr.test(key) && ptr.test(msg)){

function Cipher(enc){
	// choosing the encrypt or the decrypt method. . .
	return (enc === "dec") ? this.dec() : (enc === "enc") ?  this.enc():false 
}


//encrypt message
Cipher.prototype.enc = function (){

		 init.forEach(function(a,k){
			(alpha.indexOf(init[k]) + init[k+1] >= alpha.length) ? 
				res.push(alpha[((alpha.indexOf(init[k])+init[k+1])-alpha.length)]) : false
			alpha[alpha.indexOf(init[k])+init[k+1]] === undefined ?
			false:res.push(alpha[alpha.indexOf(init[k])+init[k+1]])
})};

//decrypt message
Cipher.prototype.dec = function (){

		init.forEach(function(a,k){
			(alpha.indexOf(init[k]) - init[k+1] <= alpha.length) ? 
				res.push(alpha[((alpha.indexOf(init[k])-init[k+1])+alpha.length)]) : false
			alpha[alpha.indexOf(init[k])-init[k+1]] === undefined ?
			false:res.push(alpha[alpha.indexOf(init[k])-init[k+1]])
})};

//change all font style to uppercase
msg.toUpperCase().split('').forEach(function(a,i){
		(j >= key.toUpperCase().length) ? j = 0 : false
			init.push(msg.toUpperCase()[i])
 			init.push(alpha.indexOf(key.toUpperCase()[j]))
		j+=1

});
	new Cipher(type)
	return document.getElementById("result").textContent = res.join("")
	// clean all the result to start again. . .
	init = []; 
	res = [];
        }else{
		throw new Error("Invalid input");
    }			
}