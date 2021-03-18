console.log("Ajax Introduction");

let fetchBtn= document.getElementById("fetchBtn");
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler()
{
    console.log("You have clicked the button");

    //instantiate the object
    const xhr=new XMLHttpRequest();

    //open the object
    //GET REQUEST
    //xhr.open('GET','data.txt',true); 

    //takes three args- method, url, asyn=true or false
    //GET data from this URL

    //POST REQUEST
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true); 

    //in post u need to send data, sending data encoded in url
    xhr.getResponseHeader('Content-type','application/json');

    //What to do on progress (optional)
    xhr.onprogress= function()
    {
        console.log("In Progress");
    }

    //u can also tracks the state changes(optional)
    xhr.onreadystatechange= function()
    {
        console.log("ready state is ", xhr.readyState);
    }

    //what to do when request is ready
    xhr.onload=function()
    {
        if(this.status==200)
        {
            console.log(this.responseText);
        }
        else
        {
            console.log("Some error occurred");
        }
        
    }

    //send the GET request to the URL
    
    //xhr.send();
    
    //send the post request

    params=`{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done");


}