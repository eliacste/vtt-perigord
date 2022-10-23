// eliaaa-webdev

let url = new URL("http://127.0.0.1:5500/booking.html");
let sta = localStorage.getItem('sta');if(sta==1){console.log(sta);localStorage.removeItem('sta');localStorage.setItem('sta', 2);}else if(sta==2){console.log(sta);localStorage.removeItem('sta');localStorage.setItem('sta', 3);}else if(sta==3){console.log(sta);localStorage.removeItem('sta');localStorage.setItem('sta', 4);}else if(sta==4){console.log(sta);localStorage.removeItem('sta');localStorage.setItem('sta', 5);}else if(sta==5){console.log(sta);localStorage.removeItem('sta');localStorage.setItem('sta', 6);}else{
    var response = confirm("Réserver !");if(response){
        document.location.replace(url);
    }localStorage.removeItem('sta');localStorage.setItem('sta', 1);}
