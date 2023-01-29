class traine{
	constructor(traineeName,mobile,dob,rating){
		this.name=traineeName;
		this.mobile=mobile;
		this.DOB=dob;
		this.rating=rating;
	}
	changeRatings(value){
		this.rating=value;
	}
}

let trainee1=new traine("aravindh","9600302639","29-09-2002","5");
let trainee2=new traine("karthick","9655309998","9-07-2003","4.5");
let trainee3=new traine("mathesh","986472639","21-09-2004","4.1");
let trainee4=new traine("suresh","9876543210","12-01-2001","4.8");
let trainee5=new traine("mani","1234567890","11-11-2001","4");


var trainees=[];
trainees.push(trainee1);
trainees.push(trainee2);
trainees.push(trainee3);
trainees.push(trainee4);
trainees.push(trainee5);

var tableBody=document.getElementById("table-body");

trainees.forEach(function(value,index){

	let tableRow=document.createElement("tr");
	tableBody.appendChild(tableRow);

	var serialNo=document.createElement("td");
	serialNo.innerText=index+1;
	tableRow.appendChild(serialNo);

	var traineeName=document.createElement("td");
	traineeName.innerText=value.name;
	tableRow.appendChild(traineeName);

	var mobileNumber=document.createElement("td");
	mobileNumber.innerText=value.mobile;
	tableRow.appendChild(mobileNumber);

	var dateOfBirth=document.createElement("td");
	dateOfBirth.innerText=value.DOB;
	tableRow.appendChild(dateOfBirth);

	var rating=document.createElement("td");
	rating.innerText=value.rating;
	tableRow.appendChild(rating);

	var updateRating=document.createElement("td");
	tableRow.appendChild(updateRating);

	var changeInput=document.createElement("input");
	changeInput.setAttribute("id","change");
	changeInput.setAttribute("type","number")
	updateRating.appendChild(changeInput);

	var changeButton=document.createElement("button");
	changeButton.innerText="update";
	changeButton.setAttribute("onclick","changeRating(this)")
	updateRating.appendChild(changeButton);
})

function changeRating(e){
	var index=e.parentNode.parentNode.firstElementChild.innerText-1;
	var changeValue=e.previousElementSibling.value;
	if(changeValue!=""){
		trainees[index].changeRatings(changeValue);
		e.parentNode.previousElementSibling.innerText=changeValue;
		e.previousElementSibling.style.border="1px solid black";
	}
	else{
		e.previousElementSibling.style.border="1px solid red"
	}
}
	

