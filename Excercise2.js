var myNum = 32;

function radomiser(ceiling) {
	var myNum = Math.floor(Math.random() * ceiling);

	console.log("myNum is " + myNum);

	return myNum;
}
	console.log("myNum Global is " + myNum);

radomiser(10);
function double(i) {
	return i*2;

}
 console.log("myNum is " + myNum);
 myNum = radomiser(10);
console.log(double(myNum));
 console.log("myNum is " + myNum)
