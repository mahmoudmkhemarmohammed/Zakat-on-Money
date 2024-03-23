let typeTextContainer = document.querySelector(".type-text");
let input = document.getElementById("inp");
let spanText = document.querySelector(".span-content");
let lightMood = document.querySelector("i.fa-moon")
let typeText = ["برنامج حساب نسبه ذكاة المال"];
function sleep(ms){
    return new Promise(res => setTimeout(res , ms));
}
let sleepTimer = 100;
let writer = async () => {
    while (true){
        let word = typeText[0]
        for(let i = 0 ; i < word.length; i++){
            typeTextContainer.innerHTML = word.substring(0, i + 1);
            await sleep(sleepTimer)
        }
        await sleep(sleepTimer * 10)
        for(let i = word.length; i > 0; i--){
            typeTextContainer.innerHTML = word.substring(0, i - 1);
            await sleep(sleepTimer)
        }
        await sleep(sleepTimer * 5);
    }
}
writer()
input.onkeyup = function() {
    if(this.value !== ''){
        spanText.innerHTML = this.value * 0.025;
    }
    if(this.value === ''){
        spanText.innerHTML = '';
    }
}
if(localStorage.theme === 'light'){
    document.body.classList.add("light");
    lightMood.className = 'fa-solid fa-sun';
}
else {
    document.body.classList.remove("light");
    lightMood.className = 'fa-solid fa-moon';
}
lightMood.addEventListener("click" , () => {
    document.body.classList.toggle("light")
    if(document.body.classList.contains("light")){
        lightMood.className = 'fa-solid fa-sun';
        localStorage.setItem("theme","light");
    }
    else {
        lightMood.className = 'fa-solid fa-moon'
        localStorage.setItem("theme","dark");
    }
})