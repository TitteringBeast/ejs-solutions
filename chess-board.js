/*Eloquent Javascript, 3rd Edition;
Chapter 2: Program Structure;
Chess Board;*/

//This feels needlessly complicated.

alt = true;

function chessBoard(size) {
	if ((size <= 0) || (Boolean((Number(size) === false)))) { //verify valid size
		console.log("Size must be a positive non-zero integer");
		return;
	}
	else {
	//let alt = true;
	let rows = size;
	let columns = size;
	let rowCounter = 0;
	/* test
	console.log("Size:", size);
	console.log("Rows:", rows);
	console.log("Columns:", columns);*/
	while ((rowCounter != rows) && (rowCounter <= rows))		{
		constructRow(columns, alt);	
		rowCounter++;
		//console.log(rowCounter);
		if (alt === true) {
		alt = false;}
		else {
		alt = true}
	}
	}
}

function constructRow(columns, alt) {
	let count = 0;
	let string = "";
	while (count < columns) {
		if (alt === true) {
			string += "#";
			count++;
			alt = false;
		}
		else {
			string += " ";
			count++;
			alt = true;
		}
	}
	console.log(string);
	//leaving these two lines in here as a reminder for what I tried
	/*if (columns % 2 === 0) {alt != alt
	console.log(alt);} */
}