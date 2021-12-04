var con = document.getElementById("container");
var ext = document.getElementById("extend");
var title = document.getElementById("title");
var line = document.getElementById("line");

function exd(){
    if(ext.style.display == "flex" ){
        ext.style.transform = "scaley(0)";
        setTimeout(() => {
        ext.style.display = "none";
        con.style.paddingBottom = "0";
        con.style.width = "5rem";
        }, 300);
    }
    else{
        ext.style.display = "flex";
        con.style.width = "15rem";
        setTimeout(() => {
            ext.style.transform = "scaley(1)";
            con.style.paddingBottom = "2rem";
        }, 100);
        
    }   
}