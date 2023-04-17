let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let button = document.getElementById("generateButton");
let setPassword = document.getElementById("setPassword");
let checkedCount = 0;
let symbolsString = "!@#$%^&*()_+-={}[]|:?/<>,.";
let password = "";
let passwordLength = 8;

slider.addEventListener("input",sliderHandler);
function sliderHandler(event){

    sliderValue.innerText = event.target.value;
    passwordLength = event.target.value;
}

upper.addEventListener("change",totalCount);
lower.addEventListener("change",totalCount);
number.addEventListener("change",totalCount);
symbol.addEventListener("change",totalCount);
function totalCount(event){
    if(event.target.checked == true)
        checkedCount++;
    else if(event.target.checked == false)
        checkedCount--;
}

function randomNumber(min, max){ 
    return Math.floor(Math.random()*(max-min)+min);
}

function getUppercaseLetter(){
    let letter = String.fromCharCode( randomNumber(65,90));
    return letter;
} 

function getLowercaseLetter(){
    let letter = String.fromCharCode( randomNumber(97,120));
    return letter;
} 

function getNumbers(){
    let number = randomNumber(0,9);
    return number;
}

function getSymbol(){
    let symbol = symbolsString[randomNumber(0,symbolsString.length-1)];
    return symbol;
}


button.addEventListener("click",generatePassword);
function generatePassword(){

    var funArray = [];
    if(checkedCount<=0){
        return;
    }

    if(checkedCount>passwordLength){
        slider.value = checkedCount;
        sliderValue.innerText = checkedCount;
    }

    if(password != ""){
        password="";}

        var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        for(let checkedBox of markedCheckbox ){
            switch(checkedBox.name)
            {
                case "uppercase":
                    funArray.push(getUppercaseLetter);
                break;
                case "lowercase":
                    funArray.push(getLowercaseLetter);
                break;
                case "number":
                    funArray.push(getNumbers);
                break;
                case "symbol":
                    funArray.push(getSymbol);
                break;
                default:
            }
        }

        for(let i=0;i<funArray.length;i++){
            password += funArray[i]();
        }

        for(let i=0;i<passwordLength - funArray.length;i++)
        {
            password += funArray[Math.floor(Math.random()*funArray.length)]();
        }

        setPassword.value = password ;

        console.log(password);
        strength();
    
}

function strength(){
    switch(checkedCount)
    {
        case 1:
            console.log('Weak');
            break;
        case 2:
            console.log('Medium');
            break;
        case 3:
        case 4:
            console.log('Strong');

    }
}

let copypopup = document.getElementById("copypopup");
async function copy(){
    if(setPassword.value!=""){
    await navigator.clipboard.writeText(setPassword.value);
    copypopup.style.display="block";
    setTimeout(()=>{
        copypopup.style.display="none";
    },500);
    }

}



const checkbox = document.getElementById('theme');
let logo = document.getElementById("logo");
let heading = document.getElementById("heading");
let parameterContainer = document.getElementsByClassName("parameterContainer");
let copyId = document.getElementsByClassName("copy");
let setPasswordcss = document.getElementById("setPassword");
let daymode = document.getElementsByClassName("daymode");
let nightmode = document.getElementsByClassName("nightmode");
let sun = document.getElementById("sun");
let svg = document.getElementById("svgpath");
let wavefooter = document.getElementById("wavefooter");
let footer = document.getElementById("footer");

checkbox.addEventListener('change',themeChange)

function themeChange(){
    if(checkbox.checked)
    {

        document.body.classList.toggle('dark');
        heading.style.color = "#534ecb";
        logo.style.content = "url('dark-logo.png')";
        parameterContainer[0].style.color = "black";
        copyId[0].style.filter = "none";
        setPasswordcss.style.color = "black";
        daymode[0].style.display = "block";
        nightmode[0].style.display = "none";
        sun.style.content = "url('sun.png')";
        daymode[0].style.opacity = "1";
        svg.setAttribute("fill","#e0e6f4");
        wavefooter.setAttribute("fill","#e0e6f4");
        footer.style.backgroundColor ="#e0e6f4";
        footer.style.color ="black";
    }
    else{

        document.body.classList.toggle('dark');
        heading.style.color = "white";
        logo.style.content = "url('white-logo.png')";
        parameterContainer[0].style.color = "white";
        copyId[0].style.filter = "drop-shadow(0.3px 0.3px 6px var(--lightblue))";
        setPasswordcss.style.color = "white";
        daymode[0].style.display = "none";
        daymode[0].style.opacity = "0";
        nightmode[0].style.display = "block";
        sun.style.content = "url('moon.png')";
        svg.setAttribute("fill","#5350cd");
        wavefooter.setAttribute("fill","#5350cd");
        footer.style.backgroundColor ="#5350cd";
        footer.style.color ="white";
        
    }

}

let svgs= document.getElementById("visual");
let d= document.getElementById("svgpath");
window.onload = function(){
    if(window.innerWidth<=600)
    {
        svgs.setAttribute("viewBox","0 0 400 900");
        d.setAttribute("d","M0 188L22.2 181C44.3 174 88.7 160 133.2 216C177.7 272 222.3 398 266.8 432.3C311.3 466.7 355.7 409.3 377.8 380.7L400 352L400 0L377.8 0C355.7 0 311.3 0 266.8 0C222.3 0 177.7 0 133.2 0C88.7 0 44.3 0 22.2 0L0 0Z");
    }
    themeChange();

};



