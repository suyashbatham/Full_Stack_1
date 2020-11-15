const time_c= document.getElementById('time')
const  name= document.getElementById('head-3')
var date= document.getElementById('head-4')
const greet= document.getElementById("head-1")
var welcome=document.getElementById('head-2')
welcome.innerHTML=""
function time(){

    let timetoday= new Date();
    let hours= timetoday.getHours();
    let minute= timetoday.getMinutes();
    let seconds = timetoday.getSeconds();
    const Am_pm= hours>12?'PM':'AM'
    hours = (hours % 12 )|| 12;

    setTimeout(time,1000);
    time_c.innerHTML=`${add_zero(hours)}<span>:<span>${add_zero(minute)}<span>:<span>${add_zero(seconds)}<span> <span>${Am_pm}`;
}
function add_zero(n){

    return (parseInt(n,10)<10?'0':'')+n;
}


time();


name.addEventListener("keypress",setName)
name.addEventListener("blur",setName);


function setName(e){
    if (e.type === 'keypress'){
        if (e.keyCode === 13){
            var m= e.target.innerHTML
            localStorage.setItem("name",e.target.innerHTML);
            name.blur();
        }
    }
    else{
        localStorage.setItem("name",e.target.innerHTML);
    }
    console.log(m)
};

function getName(){
    if (localStorage.getItem('name') === null){
        name.innerHTML = '[Enter Name]';
    }
    else{
        name.innerHTML = localStorage.getItem('name');
    }
}

getName()


greet.innerHTML=""
function writeText(){
    let time= new Date()
    let hours= time.getHours();

    if(hours<12 && hours<6){
        const greeting= "Good morning Dear!";
        document.body.style.backgroundImage='url("../images/morn.jpg")';
        document.body.style.backgroundPosition='center'
        document.body.style.backgroundSize='100% 100%'
        document.body.style.backgroundRepeat='no-repeat'
        let i=0
        const type= ()=>{
            if(i<greeting.length){
                greet.innerHTML+= greeting.charAt(i)
                i++
                setTimeout(type, 500);
            }
        }
        type()


    }


    else if(hours>12 && hours<17){
        const greting= "Good Afternoon!";
        document.body.style.backgroundImage='url("../images/after.jpg")';
        document.body.style.backgroundPosition='center'
        document.body.style.backgroundSize='100% 100%'
        document.body.style.backgroundRepeat='no-repeat'
        let i=0
        const type= ()=>{
            if(i<greting.length){
                greet.innerHTML+= greting.charAt(i)
                i++
                setTimeout(type, 500);
            }
        }
        type()


    }

    else if(hours>=17&& hours<20){
        document.body.style.backgroundImage='url("../images/even.jpg")';
        document.body.style.backgroundPosition='center'
        document.body.style.backgroundSize='100% 100%'
        document.body.style.backgroundRepeat='no-repeat'
        const greting= "Good Evening!";
        let i=0
        const type= ()=>{
            if(i<greting.length){
                greet.innerHTML+= greting.charAt(i)
                i++
                setTimeout(type, 500);
            }
        }
        type()


    }

    else if(hours>=20&& hours<=0){
        const greting= "Good Night Dear!";
        document.body.style.backgroundImage='url("../images/moon-night-mountains-nature-wallpaper-preview.jpg")';
        document.body.style.backgroundPosition='center'
        document.body.style.backgroundSize='100% 100%'
        document.body.style.backgroundRepeat='no-repeat'
        let i=0
        const type= ()=>{
            if(i<greting.length){
                greet.innerHTML+= greting.charAt(i)
                i++
                setTimeout(type, 500);
            }
        }
        type()


    }










}
writeText()
function setdate(){
    date.innerHTML="";
    let today= new Date()
    let date_tod= today.getUTCDate();


    var day=['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    let day_tod= day[today.getUTCDay()];
    var month=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
    let month_rec= month[today.getMonth()]
    let year= today.getFullYear()
    date.innerHTML=`${day_tod}<span>,<span>${date_tod}<span>-<span>${month_rec}<span>-<span>${year}`
}
setdate()

function welcome_message(){
    const  message="Hi! viewer!!"
    console.log(message)
    let j=0
    const type= ()=>{
        console.log(22)
        if(j<message.length){
            welcome.innerHTML+= message.charAt(j)
            j++
            setTimeout(type,500)
        }
    }
    type()
}
welcome_message()
