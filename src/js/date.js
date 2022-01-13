// function to parse timestamp object to into a date, last three days in form of which day it was by name, yesterday or today in form of a clock
let parseDate = function(dat, mes){        
    let date = new Date(dat)
    let today = new Date()
    if(date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()){
        //today
        if(date.getDate() == today.getDate()){
            if (mes){
                return 'today'
            }else{
                return getTime(date)
            }
        }
        //yesterday
        else if(date.getDate() == today.getDate()-1){
            return 'yesterday'
        }
        //last three days
        else if(date.getDate() == today.getDate()-2 || date.getDate() == today.getDate()-3){
            return getDayName(date)
        }
        else{
            return getDate(date);
        } 
    }//former
    else{
        return getDate(date);
    }    
}

let getDayName = function(date){
    return date.toLocaleDateString('locale', { weekday: 'long' });   
}
//returns timestamp as a date
let getDate = function(date){
    let day = checkForm(date.getDate());
    let month = checkForm(date.getMonth());
    let year = date.getFullYear();
    return day+'.'+month+'.'+year
}
// returns date as clock
let getTime = function(date){
    let hours = checkForm(date.getHours());
    let minutes = checkForm(date.getMinutes());
    return hours+':'+minutes;
}

let isNewDay = function(mesBef, mesAft){
    let date = new Date(mesBef)
    let today = new Date(mesAft)
    //sameDay?
    if(date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear() && date.getDate() == today.getDate())return false
    //other day
    return true
}
//changes value into string with zero bevor if value is just one letter long
let checkForm= function(number){
    let num;
    if(number<10) num = '0'+ number
    return num || number;
}

//changes a timervalue into 00:00:00
let parseTimeToString = function(time){
    let hours = parseInt(time/3600);
    time = time - hours * 3600;

    let minutes = parseInt(time/60);
    time = time - minutes * 60;

    let sec = parseInt(time);
    time = time-sec;

    let mil = parseInt(time*100);
    let res;
    if (hours>0){
        res = checkForm(hours)+':'+ checkForm(minutes)+':'+ checkForm(sec)+':'+ checkForm(mil);
    }else{
        res = checkForm(minutes)+':'+ checkForm(sec)
    }
    return res;
}
export {parseDate, getTime, parseTimeToString, getDate, isNewDay}