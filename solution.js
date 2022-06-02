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

