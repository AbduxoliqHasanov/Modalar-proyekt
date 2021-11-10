window.addEventListener("DOMContentLoaded",()=>{
    window.addEventListener("scroll",function(){
        const header =document.querySelector("header");
        header.classList.toggle("sticky",window.scrollY>0);
    })

    const menuBtn=document.querySelector(".menuBtn");
    const navigation=document.querySelector(".navigation");
    const navigationItms=document.querySelectorAll(".navigation a");


    menuBtn.addEventListener("click",()=>{
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
    })
    navigationItms.forEach(navItem=>{
        navItem.addEventListener("click",()=>{
            menuBtn.classList.remove("active");
            navigation.classList.remove("active");
        })
    })

    const scrollBtn=document.querySelector(".scrllTop-btn");
    window.addEventListener("scroll",() => {
        scrollBtn.classList.toggle("active", window.scrollY>500);
    })
    scrollBtn.addEventListener("click", () => {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    })
    const loader =document.querySelector(".loader");
    setTimeout(function (){
        loader.style.opacity="0";
    } , 2000);
    setTimeout(()=>{
        loader.style.display="none";
    },2500);
    
})