let secTens = document.querySelector('#secondTens');
let secOnes = document.querySelector('#secondOnes');
let msHun = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');

let digits = document.querySelectorAll('.digits div');


let msTensCount = setInterval(1);

function startTimer(){
    digits.forEach(digit => digit.classList.remove('redDigit'));
    msTens.textContent = 0;
    msHun.textContent = 0;
    secOnes.textContent = 0;
    secTens.textContent = 0;
    let counter = 0;
    let msHunNum = 0;
    let secOnesNum = 0;
    let secTensNum = 0;
    startButton.disabled=true;

  msTensCount = setInterval( () => {
   ++counter;
   msTens.textContent = counter;
   
    if (counter == 10) {
      msHunNum++;
      msHun.textContent = msHunNum;

      if (msHunNum == 10) {
        msHunNum = 0;
        msHun.textContent = msHunNum;
      }

      if (msHunNum == 0) {
        secOnesNum++;
        secOnes.textContent = secOnesNum;

        if (secOnesNum == 10) {
          secOnesNum = 0;
          secOnes.textContent = secOnesNum;
        }

          if (secOnesNum == 0) {
            secTensNum++;
            secTens.textContent = secTensNum;

            if (secTensNum == 1) {
              msTens.textContent = 0;
                  digits.forEach(digit => digit.classList.add('redDigit'));
                  startButton.disabled=false;
              clearInterval(msTensCount);
            }
          }
        }
      }
   if (counter == 10) {
     counter = 0;
     msTens.textContent = counter;
   }
}, 10);
}

const startButton = document.createElement("button");
startButton.textContent = "Start Timer";
startButton.style.marginLeft = "5rem";

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Timer";
resetButton.style.marginLeft = "5rem";

const appendBody = document.querySelector("body");
appendBody.appendChild(startButton);
appendBody.appendChild(resetButton);

startButton.addEventListener("click", function(){
    startTimer();
  });

  resetButton.addEventListener("click", function(){
    document.location.reload()
  });
  