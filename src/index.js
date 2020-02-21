module.exports = function toReadable (number) {
 

  
     let sot,des,ed;
     
     sot = Math.floor(number/100);
     des = Math.floor(number/10)%10;
     ed = Math.floor(number%10);
     
     let sotArray = ['one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
     let desFirstArray = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
     let desSecondArray = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
     let edArray = ['one','two','three','four','five','six','seven','eight','nine'];
     

     if (number==0)
     {
          return "zero";
     }
     if( sot!=0){
     sot = sotArray[sot-1];
     }
     else sot = ""
     
     if(des!=0  && des!=1){
     des = " " +desSecondArray[des-2];
     
     }
     
     else if ( des==1 && ed!=0)
     {
          des=" "+desFirstArray[ed-1];
          ed ="";
     }

     else if ( des == 1 && ed == 0)
     {
          des=" ten";
          ed="";
     }
     else des = ""
     
     if (ed != 0)
      ed = " " + edArray[ed-1];
     else ed = ""
     
     if ((String(number)).split('').length==3){
     return (sot+des+ed);
     }
     
     
     if ((String(number)).split('').length==2){
          return (des.trimLeft()+ed);
     }
     
     
     if ((String(number)).split('').length==1){
          return (ed.trim());
     }
     
}
   
    
