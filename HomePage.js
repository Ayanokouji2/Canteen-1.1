const category=document.querySelectorAll(".menu-icons-cont img")
const listcontainer=document.querySelector(".menu-list-cont")
const btn=document.querySelector(".more")
const balls=document.querySelectorAll(".ball")
const topbtn=document.querySelector(".to-the-top-cont")
const reviewarr=["The food is amazing is here and there are variety of food items to choose from","The staff is hospitable here and the canteen is well managed","The best part of this canteen is that it focuses on hygiene and the wastes are well disposed  here in diffrent  coloured dustbins."]
const textbox=document.querySelector(".review-text")

const fooditems={
    continental:[{name:"Pizza",price:"120"},{name:"Burger",price:"80"},{name:"Kachori Chat",price:"70"}],
    chinese:[{name:"Chowmin",price:"60"},{name:"Panner Chilli",price:"100"},{name:"Hot n Sour Soup",price:"100"}],
    southindian:[{name:"Dosa",price:"65"},{name:"Idly",price:"50"},{name:"Samosa 2pcs",price:"20"}],
    desert:[{name:"Strawberry Shake",price:"80"},{name:"Choclate Shake",price:"80"},{name:"Vanilla Shake",price:"80"}],
}
category.forEach(item => {
    item.addEventListener("click",(e)=>{
        listcontainer.innerHTML="";
        const key=item.classList[0]
        const length=fooditems[key].length
        for(let i=0;i<length;i++){
            const ul=document.createElement("ul")
            const itemname=fooditems[key][i].name
            const itemprice=fooditems[key][i].price
            ul.innerHTML=`<li>${itemname}</li>
                        <li>₹${itemprice}</li>`
            listcontainer.appendChild(ul)
        }
        // btn.style.display="block"
        setactive(item)
    })
});

function setactive(item){
    category.forEach(element=>{
        element.classList.remove("active")
    })
    item.classList.add("active")
}

let count=1;
setInterval(textchange, 5000)
function textchange(){
    count%=3
    textbox.innerText=reviewarr[count]
    balls.forEach(item=>{
        item.classList.remove("me")
    })
    balls[count].classList.add("me")
    count++
}


window.addEventListener("scroll",(e)=>{
    scrollFunction()
})


function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
      topbtn.style.display = "flex"
    } else {
      topbtn.style.display = "none"
    }
}
topbtn.addEventListener("click",(e)=>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


const menuClick = document.querySelector('.menu');
menuClick.addEventListener("click",(event)=>{
    window.open("./Menu.html","_self")
});

const logoClick = document.querySelector(".logo-nav");
logoClick.addEventListener('click', (event)=>{
    window.open("./HomePage.html",'_self');
})

const menuMore = document.querySelector('.more');
menuMore.addEventListener('click', (event)=>{
    window.open("./Menu.html","_self")
})

