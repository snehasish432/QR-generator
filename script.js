

 let imgBox= document.getElementById("imgBox");
 let qrImg= document.getElementById("qrImg");
 let qrText= document.getElementById("qrText");
 

 function generateQR(){
       if(qrText.value === ''){
              alert('Please provide valid input')
              return
       }
       qrImg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
       imgBox.classList.add("show-img");
      
 }

 