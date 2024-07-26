const planets=document.querySelectorAll(".rec");
const observer= new IntersectionObserver(entries=>{
    entries.forEach(entry=>{entry.target.classList.toggle("show",entry.isIntersecting)
        console.log(entry);
        if(entry.isIntersecting)
            {observer.unobserve(entry.target);
            }
    })
},{threshold:0.2,})
planets.forEach(planet=>{observer.observe(planet);})
const subs=document.querySelector(".subscribe");
const popup=document.querySelector(".popup");
function pop()
{   
    popup.classList.add('active');
}
subs.addEventListener('click', pop)
