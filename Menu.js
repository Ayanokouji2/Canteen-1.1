const navBar = document.querySelector("nav");
const menuText = document.querySelector('.menu-background h4'); 

let flag = false;

// Using the variable made in css on javascript.
const rvar = document.querySelector(':root');
let rs = getComputedStyle(rvar);
const navBar_Width = rs.getPropertyValue('--navBarWidth');
const navBar_spacer = rs.getPropertyValue('--spacer-2');



document.addEventListener('scroll',function(){
    const menuText_bottom_value =  menuText.getBoundingClientRect().bottom;
    const menuText_top_value =  menuText.getBoundingClientRect().top;
    const navBar_Y_value = navBar.getBoundingClientRect().y;
    const navBar_bottom_value = navBar.getBoundingClientRect().bottom;


    // console.log(` navBar_bottom:${navBar_bottom_value} menutext: ${menuText_bottom_value}  navBar:${navBar_Y_value}`);

    // While Scrolling Down the navBar position is done fixed to make it stay in the top
    if(navBar_bottom_value < -30  || navBar_bottom_value ===144 ){
        navBar.style.animation = `sliding 1s ease-in-out 1 `;
        navBar.style.top = 0+'rem';
        navBar.style.width = "100%";
        navBar.style.margin = 0+'px';
        navBar.style.borderRadius = 0 +'px';
        navBar.style.position = 'fixed';
        flag = true;
    }

    // While scrolling up we have to make the navBar move to its initial position
    // if(navBar_bottom_value > -50 && flag ){
    //     navBar.style.position = 'absolute';
    //     flag = false;
    // }

    
    //? Making the navBar fade-out and giving it its pre setted value
    // ! The navBar doesn't work while scrolling up and messes up at some point
    if( menuText_top_value >= 10 && flag){
        navBar.style.animation = `slidingfadeout 0.5s ease-in-out 1 `;
        navBar.style.width = navBar_Width;
        navBar.style.marginLeft = 2 +'rem';
        navBar.style.marginRight = 2 +'rem';
        navBar.style.position = 'absolute';
        navBar.style.borderRadius = 10+'px';
        navBar.style.top = navBar_spacer;
        flag = true;
    }


})


//# Creating the menu list and adding in the Menu-List div;


// Creating Menu items and appending them in the "menu-item-container".

const menuList = {
    North_India : [{name:"Dosa Plain",Price:65},{name:"Dosa Masala",Price:80},{name:"Idli",Price:50},{name:"Chole Bhature",Price:90},{name:"Dhokla",Price:40}],

    South_India:[{name:"Samosa (2Pc)",Price:20},{name:"Kachori (2Pc)",Price:30},{name:"Sambar Vada",Price:75},{name:"Pao Bhaji",Price:80},{name:"Pao Extra",Price:15},{name:"Dahi Vada",Price:50},{name:"Medu Vada",Price:65}]
}

let menuCategory = Object.keys(menuList);
for(let i=0;i<menuCategory.length;i++){
    let categoryName = menuCategory[i];
    
    let catName = menuList[categoryName];
    appendingMenuList(catName,categoryName)
}


function appendingMenuList(Category,categoryName){
    for(var i=0;i<Category.length;i++){

        // Creation of div Container that will contain the naem and Price of the Menu item
        let menuDiv = document.querySelector(`.${categoryName}`);
        let divContainer = document.createElement("div");
        divContainer.classList.add("menu-item-container");
        menuDiv.appendChild(divContainer);


        let data = Category[i].name;
        let nameTag = document.createElement('h5');
        nameTag.classList.add('menu-name');
        nameTag.innerHTML = data;
        divContainer.appendChild(nameTag); // Name Attachment
        
        data = Category[i].Price;
        let Priceh5 = document.createElement("h5");
        Priceh5.classList.add("item-price");
        Priceh5.innerText =  "₹ "+data; 
        divContainer.appendChild(Priceh5); // Price Attachment
    }
}



//# Function for Creating an HTML Elements
function createHTMLElement(typeOfEle,className){
    let nameOfEle = document.createElement(`${typeOfEle}`);
    nameOfEle.classList.add(`${className}`)
    console.log(nameOfEle,'inside',className);
    return nameOfEle;
}

//# Function for Giving details and content to the Elemenet and the attaching to the Element
function contentAndChildOf(child,content,parent){
    child.innerText = content;
    parent.appendChild(child);

}

const drinks = {
    Dessert:[{name:'Strawberry Shake',Price:80},{name:'Vanilla Shake',Price:80},{name:'Chocolate shake',Price:80},{name:'Apple Shake',Price:80},{name:'Cold Coffee',Price:80}],
    Beverages:[{name:'Tea',Price:20},{name:'Maaza(Tetra)',Price:10},{name:'Soft Drinks (75mL)',Price:45},{name:'Lassi',Price:50},{name:'Mineral Water',Price:20},{name:"Chhanch",Price:40}]
}

menuCategory = Object.keys(drinks);
for(let i=0;i<menuCategory.length;i++){
    let categoryName = menuCategory[i];
    let catContent = drinks[categoryName];
    appendingMenuList(catContent,categoryName)
}


const continental = {
    Continental:[{name:"Veg Snadwich Grilled Half",Price:40},{name:"Veg Sandwich Plain",Price:30},{name:"Cheese Onion Grilled Sandwich",Price:85},{name:"Veg Margarita Pizza",Price:100},{name:"Paneer Capsicum Pizza",Price:100},{name:"Veg Burger",Price:65,},{name:"Veg Chesse Burger",Price:75}],
    Chat:[{name:"Kachori Chat",Price:70},{name:"Mix Chat",Price:60},{name:"Papri Chat",Price:60},{name:'Samosa Chat',Price:60}]
}

menuCategory = Object.keys(continental);
for(let i=0;i<menuCategory.length;i++){
    let categoryName = menuCategory[i];
    let catContent = continental[categoryName];
    appendingMenuList(catContent,categoryName);
}


const chinese = {
    Recommended:[{name:'Veg Chowmine',Price:60},{name:'Veg Manchurian',Price:80},{name:'Veg Kathi Roll',Price:70},{name:'Masala Maggi',Price:40}],
    Special:[{name:'Chana Chilli',Price:80},{name:'Paneer Chilli (10Pcs)',Price:100},{name:'Baby Corn Chilly',Price:100},{name:'Special Chowmine',Price:100},{name:'Veg Hot & Sour Soup',Price:100}]
}
menuCategory = Object.keys(chinese);
for(let i=0;i<menuCategory.length;i++){
    let categoryName = menuCategory[i];
    let catContent = chinese[categoryName];
    appendingMenuList(catContent,categoryName);
}


// Clickables And Openning of any Windows Menu
const menuClick = document.querySelector('.nav-Home');
menuClick.addEventListener('click', (event)=>{
    window.open("./HomePage.html",'_self');
})

const logoClick = document.querySelector(".logo-nav");
logoClick.addEventListener('click', (event)=>{
    window.open("./HomePage.html",'_self');
})





//*Scrolling to the top when reached certain position

const topbtn=document.querySelector(".to-the-top-cont");
const headingtag = document.querySelector('.Drinks');
window.addEventListener("scroll",(e)=>{
    const heading_bottom = headingtag.getBoundingClientRect().bottom;
    if(heading_bottom < 10){
        topbtn.style.display = 'flex';
    }
    else topbtn.style.display = 'none';
})
topbtn.addEventListener("click",(e)=>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

