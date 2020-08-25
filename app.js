                  //Generate pin       
        const btnGpin = document.querySelector("#btn-gpin")
              btnGpin.addEventListener("click",function(){
        const pin =1000 + Math.random()*9000;
        const random =Math.round(pin)
              document.querySelector("#pin-Display").value=random;
        })
       let  btnValue = num => document.querySelector("#btn-display").value += num;
       let  btnClear = num => document.querySelector("#btn-display").value = num;
       
  
       let match = document.querySelector("#match")
       let notMatch =  document.querySelector("#not-match")
       let subMitBtn = document.querySelector("#btn-sub")

           subMitBtn.addEventListener("click",function(){
       let btnDisplay = document.querySelector("#btn-display").value
       let pinDisplay = document.querySelector("#pin-Display").value     
                  if(btnDisplay === pinDisplay){
                  notMatch.style.display = "none";
                  match.style.display = "block";
                  } else{
                   notMatch.style.display = "block";
                   match.style.display = "none";
                }
              })
         
    