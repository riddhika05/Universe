const planets=document.querySelectorAll(".rec");
const observer= new IntersectionObserver(entries=>{
    entries.forEach(entry=>{entry.target.classList.toggle("show",entry.isIntersecting)
        if(entry.isIntersecting)observer.unobserve(entry.target)
    })
},{threshold:0.5,})
planets.forEach(planet=>{observer.observe(planet);})
