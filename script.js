var firstX =1;
var secondX = 0;

while(firstX<52){
    document.getElementById('firstLine').innerHTML+=(firstX)+", ";
    firstX+=2;
}
do{
    secondX +=2;
    document.getElementById('secondLine').innerHTML+=(secondX)+", ";
}while(secondX<50);

for(var thirdX=1; thirdX<=4096;thirdX=thirdX*2){
    document.getElementById('thirdLine').innerHTML+=(thirdX)+", ";
}
