var x = 8;
var y = 3;
var z = v = 8;
var stop = 0;
var onlyButton = document.querySelector("button");
var resetButton = document.querySelector(".reset");

onlyButton.addEventListener("click", function(){
	total = x*y;
	if(x>y){
		alert(total*total);

		
		 stop = setInterval(change, 3000);
	}

	alert(total);



});



	resetButton.addEventListener("click", function(){
		clearInterval(stop);
	});
	




clearInterval(stop);


function change(){
	add = v + z;
	alert(add);
}