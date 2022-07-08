export const {body} = document.querySelector('body')
export const sidebar = body.querySelector('nav')
export const toggle = body.querySelector(".toggle")
export const searchBtn = body.querySelector(".search-box") as HTMLInputElement
export const modeSwitch = body.querySelector(".toggle-switch")
export const modeText = body.querySelector(".mode-text")


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
    modeText.innerText = "Light mode";
    }else{
    modeText.innerText = "Dark mode";
}
});