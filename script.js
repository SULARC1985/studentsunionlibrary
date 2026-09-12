const books = [
  {title:"Sample Book: Malayalam Literature", author:"Library Collection", category:"Malayalam"},
  {title:"Sample Book: Children's Stories", author:"Library Collection", category:"Balavedi"},
  {title:"Sample Book: General Knowledge", author:"Library Collection", category:"General"},
  {title:"Sample Book: Science & Learning", author:"Library Collection", category:"Science"},
  {title:"Sample Book: Biography", author:"Library Collection", category:"Biography"},
  {title:"Sample Book: History", author:"Library Collection", category:"History"}
];

const results = document.getElementById("bookResults");
const search = document.getElementById("bookSearch");

function renderBooks(list){
  results.innerHTML = list.map(book => `
    <article class="book-item">
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Category:</strong> ${book.category}</p>
    </article>
  `).join("");
}

renderBooks(books);

search.addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = books.filter(book =>
    `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(q)
  );
  renderBooks(filtered.length ? filtered : [{title:"No matching books found", author:"Try another keyword", category:""}]);
});

document.querySelector(".menu-toggle").addEventListener("click", function(){
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("open");
  this.setAttribute("aria-expanded", nav.classList.contains("open"));
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
