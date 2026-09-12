const books=[
{title:"Malayalam Literature",author:"Library Collection",category:"Malayalam"},
{title:"Children's Stories",author:"Library Collection",category:"Balavedi"},
{title:"General Knowledge",author:"Library Collection",category:"General"},
{title:"Science & Learning",author:"Library Collection",category:"Science"},
{title:"Biography",author:"Library Collection",category:"Biography"},
{title:"History",author:"Library Collection",category:"History"}];

const results=document.getElementById("bookResults");
const search=document.getElementById("bookSearch");

function render(list){
  results.innerHTML=list.length
    ? list.map(b=>`<div class="book"><h3>${b.title}</h3><p>${b.author}</p><p>${b.category}</p></div>`).join("")
    : '<div class="book"><h3>No matching books</h3><p>Try another search.</p></div>';
}
render(books);

search.addEventListener("input",e=>{
  const q=e.target.value.toLowerCase().trim();
  render(books.filter(b=>(b.title+" "+b.author+" "+b.category).toLowerCase().includes(q)));
});

document.querySelector(".menu").addEventListener("click",()=>document.querySelector(".nav nav").classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
