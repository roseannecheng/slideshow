//Question 1
function submit(){
    let rentaldetials = document.getElementById("rentaldetials");
    
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    console.log(fname);
    console.log(lname);

    if(fname == "" || lname == ""){
        alert("First name and last name cannot be left blank");
    }
    else{
        rentaldetails.innerHTML += `First name:${document.getElementById("fname").value} Last name:${document.getElementById("lname").value}`;
    }

    //select box
    let payment = document.getElementById("payment");
    let index = payment.selectedIndex;

    console.log(payment[index].innerText);
    rentaldetails.innerHTML += `Payment method: ${payment.children[index].innerText} <br>`;

    let vehicle = document.getElementsByName("utility");
    console.log(vehicle);

    for(let cartype of vehicle){
        if(cartype.checked){
            rentaldetails.innerHTML += `Vehicle chosen: ${cartype.innerText}<br>`;
        }
    }

    //radio buttons
    let radioBtn = document.getElementsByName("utility");
    console.log(radioBtn);

    let category = document.getElementById("category");
    console.log(category.children);
    let vehicleType;
    let vehicleprice;
    for(let i=0; i<radioBtn.length; i++){
        if(radioBtn[i].checked){
            vehicleType = radioBtn[i].parentElement.innerText;
            vehicleprice = radioBtn[i].value; //this is how you get the label in the form 
        } 
    }

    //checkbox
    let selectedOptions = new Array();
    let options = document.getElementsByName("options");
    console.log(options.firstChild);
    let insuranceprice = 0;
    let insuranceArray = [];

    for(let i=0; i<options.length; i++){
        if(options[i].checked){
            rentaldetails += options[i].parentNode.childNodes[i].innerHTML;
            
            insuranceArray.push(options[i].value);          
            }
        }
        console.log(insuranceArray);
        for(let insurance of insuranceArray){
            console.log(insurance);
            insuranceprice = parseInt(insuranceprice) + parseInt(insurance);
        }
        parseInt(insuranceprice);
        console.log(insuranceprice);

        let subtotal = insuranceprice + vehicleprice;
        rentaldetails.innerHTML += `Total price is: $${subtotal}`;
        
}
  
  
//Question 2
function addItem(){
    let item = document.getElementById("item").value;
    console.log(item);

    let selectedItems = document.getElementById("selectedItems");
    console.log(selectedItems);
    let option = document.createElement("option");
    option.innerHTML = item;
    
    selectedItems.appendChild(option);
}

function deleteItem(){
    let selectedItems = document.getElementById("selectedItems");
    console.log(selectedItems);

    let index = selectedItems.selectedIndex;
    console.log(index);
    selectedItems.remove(selectedItems.selectedIndex);
}

function calcTotal(){
    let selectedItems = document.getElementById("selectedItems");
    console.log(selectedItems.children.length);
    let itemscount = selectedItems.children.length;
    let sum = 50 * itemscount;
    parseInt(sum);
    document.getElementById("amount").value = sum;
}

//Question 3
let imgArray = [];
let intervalHandle = null;
let index = 0;

function startFunc(){
    let imgs = document.getElementsByTagName("img");
    console.log(imgs);

    for(let image of imgs){
        imgArray.push(image);
    }
    console.log(imgArray[0].src);

    let slide = document.getElementById("slide");
    console.log(slide);

    
    console.log(imgArray[index]);

    intervalHandle = null;
            if(intervalHandle == null){
                intervalHandle = setInterval(myFunc,1000);
            }
    
    function myFunc(){

       slide.src = imgArray[index].src;

       if(index == 6){
           index = 0;
       } 
       else{
           index++;
       }
    }
}

function stopFunc(){
    if(intervalHandle != null){
        clearInterval(intervalHandle);
    }
}

