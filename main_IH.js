const DATASET_AREA = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD"
const DATASET_SAFETY = "https://data.cityofnewyork.us/api/views/bydc-d8tj/rows.json?accessType=DOWNLOAD"
const DATASET_HOUSING = "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD"


var arrayDataSetArea = []
var arrayDataSetSafety = []
var arrayDataSetHousing = []

function getInfo_DATASETS(URL, array=[]){
	var data = $.get(URL, function(){
		console.log(URL)
	})
		.done( function(){
			for(var i=0;i<data.responseJSON.data.length;i++){
				array.push(data.responseJSON.data[i]);
			}
			console.log(data.responseJSON.data[0])
		})
		.fail( function(error){
			console.error(error);
		})
}


function getDATASETS(){
	getInfo_DATASETS(DATASET_AREA, arrayDataSetArea);
	getInfo_DATASETS(DATASET_SAFETY, arrayDataSetSafety);
	getInfo_DATASETS(DATASET_HOUSING, arrayDataSetHousing);
}

function updateTableAREA(){
	tableref = $("#mainTableBodyAREA")[0];
	var newRow, number, position, name, borough;
	
	for(var i=0;i<arrayDataSetArea.length;i++){
		newRow = tableref.insertRow(tableref.rows.length);
		
		number = newRow.insertCell(0);
		position = newRow.insertCell(1);
		name = newRow.insertCell(2);
		borough = newRow.insertCell(3);
		
		number.innerHTML = arrayDataSetArea[i][8];
		position.innerHTML = arrayDataSetArea[i][9];
		name.innerHTML = arrayDataSetArea[i][10];
		borough.innerHTML = arrayDataSetArea[i][16];
	}
}

function updateTableSAFETY(){
	tableref = $("#mainTableBodySAFETY")[0];
	var newRow, date, time, descrip, type, borough, position;
	
	for(var i=0;i<arrayDataSetSafety.length;i++){
		newRow = tableref.insertRow(tableref.rows.length);
		
		date = newRow.insertCell(0);
		time = newRow.insertCell(1);
		descrip = newRow.insertCell(2);
		type = newRow.insertCell(3);
		borough = newRow.insertCell(4);
		position = newRow.insertCell(5);
		
		date.innerHTML = arrayDataSetSafety[i][9];
		time.innerHTML = arrayDataSetSafety[i][10];
		descrip.innerHTML = arrayDataSetSafety[i][17];
		type.innerHTML = arrayDataSetSafety[i][19];
		borough.innerHTML = arrayDataSetSafety[i][21];
		position.innerHTML = arrayDataSetSafety[i][31];
	}		 
}

function updateTableHOUSING(){
	tableref = $("#mainTableBodyHOUSING")[0];
	var newRow, borough, lat, long, income;
	
	for(var i=0;i<arrayDataSetHousing.length;i++){
		newRow = tableref.insertRow(tableref.rows.length);
		
		borough = newRow.insertCell(0);
		lat = newRow.insertCell(1);
		long = newRow.insertCell(2);
		income = newRow.insertCell(3);
		
		borough.innerHTML = arrayDataSetHousing[i][15];
		lat.innerHTML = arrayDataSetHousing[i][25];
		long.innerHTML = arrayDataSetHousing[i][26];
		income.innerHTML = arrayDataSetHousing[i][31];
	}		 
}


$(document).ready( function(){
	$("#getData").on("click", getDATASETS);
	$("#updateTable").on("click", updateTableAREA);
	$("#updateTable").on("click", updateTableSAFETY);
	$("#updateTable").on("click", updateTableHOUSING);
})