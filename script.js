var form=document.createElement("form")
var label=document.createElement("label");
label.innerHTML="Enter the country name";
label.setAttribute("for","text");
var br=document.createElement("br");


var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("required","")
input.setAttribute("placeholder","name")
var br1=document.createElement("br");


var button=document.createElement("button")
button.setAttribute("type","button")
button.addEventListener("click",foo);

button.innerHTML="search"
form.append(label,br,input,br1,button)
document.body.append(form);

async function foo(){
    try{
        
    let cc=document.getElementById("text").value
        var res=await fetch(`https://api.nationalize.io/?name[]=${cc}`)
        var res1=await res.json();
     
        for(var i=0;i<res1.length;i++){
    var element=document.createElement("div")
    element.className="a"
            var ele=document.createElement("div");
            var h3=document.createElement("h3")
            h3.innerHTML="country id"
    // ele.setAttribute("required","")
            ele.innerHTML=`${res1[i].country[0].country_id}
             country id:${res1[i].country[1].country_id }`
    
             var ele1=document.createElement("div");
    
             ele1.innerHTML=`probability:${res1[i].country[0].probability}`
             element.append(ele,ele1)
        document.body.append(element);

        }
    
    
}   
catch(error){
   var ele3=document.createElement("div")
   ele3.innerHTML=error.message
   document.body.append(ele3);
}
}


