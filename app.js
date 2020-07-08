console.log("start of JS file");


async function getData(){
	try{
		var rawData = await fetch("https://5f01e2e49e41230016d42929.mockapi.io/products");
	}catch(error){
		console.log(err);
	}
	var jsonData = await rawData.json();
	return (jsonData);
}


function populateData(data){
	var s = "";
	table_tag = document.getElementById("root");
	// console.log(data);
	data.forEach(d=>{
		s = s + `<tr><th>${d.id}</th><th>${d.name}</th><th>${d.details}</th></tr>`
		// console.log(d);
	})
	// console.log(s);
	table_tag.innerHTML = s;
}

function loadPopulate(){
		getData().then(populateData);
		setTimeout(loadPopulate,5000);
}

loadPopulate();

console.log("end of JS file");