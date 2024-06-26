let buttons = document.querySelectorAll(".btn");
let body = document.querySelector("body");
buttons.forEach(function(button){
  console.log(button);
  button.addEventListener("click",function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === "grey"){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "aqua"){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "red"){
      body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "pink"){
    body.style.backgroundColor = e.target.id
}
if(e.target.id === "palegreen"){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === "purple"){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === "lawngreen"){
  body.style.backgroundColor = e.target.id
}
  })
}

)