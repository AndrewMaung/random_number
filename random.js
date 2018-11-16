
function twodFunction(){
	
	var x = Math.floor((Math.random() * 100)+1);

	if (x<10) {

		x = "0"+x
	}

    document.getElementById("twoNumber").innerHTML = x;

};

function clearTwoD(){

	var y = "";
	document.getElementById("twoNumber").innerHTML = y;
};

//3D
function threedFunction(){

	var z = Math.floor((Math.random() * 1000)+1);

	if (z<100) {

		z = "0"+z
	}
	document.getElementById("threeNumber").innerHTML = z;
};

function clearThreeD(){

	var t = "";
	document.getElementById("threeNumber").innerHTML = t;
};

