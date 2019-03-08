let op=document.getElementById("oppervlakte");
let om=document.getElementById("omtrek");
let straal=document.getElementById("straal");
let lengte =document.getElementById("lengte");
let breedte=document.getElementById("breedte");
let op1=document.getElementById("oppervlakte1");
let om1=document.getElementById("omtrek1");
let dia=document.getElementById("diagonaal");
let fahr=document.getElementById("fahr");
let cels=document.getElementById("celsius");
let kel=document.getElementById("kelvin");
let fahr1=document.getElementById("fahr1");
let cels1=document.getElementById("celsius1");
let kel1=document.getElementById("kelvin1");
function bereken(){
    let opp= Math.PI *Math.pow(straal.value,2);
    opp=Math.round(opp*100)/100;
    let omm=Math.PI*2*straal.value;
    omm =Math.round(omm*100)/100;
    op.innerHTML=opp;
    om.innerHTML=omm;
    if(straal.value.length==0){
        op.innerHTML="Je hebt geen nummer ingevult";
        om.innerHTML="Je hebt geen nummer ingevult";
    }
    
        
    
}
function bereken1(){
    let opp= lengte.value*breedte.value;
    opp=Math.round(opp*100)/100;
    let omm=2*lengte.value+2*breedte.value;
    omm=Math.round(omm*100)/100;
    let diag=Math.pow(lengte.value,2)+Math.pow(breedte.value,2);
    op1.innerHTML=opp;
    om1.innerHTML=omm;
    dia.innerHTML=diag;

}
function bereken2(){
    
    let tfahr=(9*cels.value/5)+32;
    let tkelv=cels.value+273.15;
    
    tfahr=Math.round(tfahr*100)/100;
    fahr.innerHTML=tfahr;
    kel.innerHTML=tkelv;
    
    if(cels.value.length==0){
        fahr.innerHTML="je hebt niks in gevult";
        kel.innerHTML="je hebt niks in gevult"; 
    }

    //van kelvin naar celsius
    let tcels1=kel1.value-273.15;
    let tfahr1=  (9*kel1.value-273.15)+32;
    tcels1=Math.round(tcels1*100)/100;
    tfahr1=Math.round(tfahr1*100)/100;
    fahr1.innerHTML=tfahr1;
    
    cels1.innerHTML=tcels1;
    if(kel1.value.length==0){
        fahr1.innerHTML="je hebt niks in gevult";
        cels1.innerHTML="je hebt niks in gevult";
    }
}