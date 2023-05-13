let fullName = prompt("lütfen adınızı giriniz")

let myName  = document.querySelector("#myName")
 
myName.innerHTML = `${myName.innerHTML} <small>${fullName}</small>`

function updateClock() {
    const today = new Date();
    const currentHour = addZeroPadding(today.getHours());
    const currentMinute = addZeroPadding(today.getMinutes());
    const currentSecond = addZeroPadding(today.getSeconds());
    const currentDay = addZeroPadding(today.getDate());
    const currentMonth = addZeroPadding(today.getMonth() + 1); // ay 0'dan başlar, bu nedenle 1 eklemeliyiz
    const currentYear = today.getFullYear();
    const currentTime = `${currentHour}:${currentMinute}:${currentSecond}`;
    const currentDate = `${currentDay}.${currentMonth}.${currentYear}`;
    
    document.getElementById("clock").textContent = currentTime;
    document.getElementById("date").textContent = currentDate;
  }
  
  function addZeroPadding(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }
  
  updateClock();
  setInterval(updateClock, 1000); // her saniye güncelle
  
  