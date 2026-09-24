// Student's Union Library — Live Public Catalogue

(function () {
  "use strict";

  const API =
    "https://sularc1985.pythonanywhere.com/public-catalogue.json";

  async function searchBooks(query) {
    const url = new URL(API);

    if (query) {
      url.searchParams.set("q", query);
    }

    const response = await fetch(url.toString(), {
      cache: "no-cache"
    });

    if (!response.ok) {
      throw new Error("Catalogue service unavailable");
    }

    const books = await response.json();

    if (!Array.isArray(books)) {
      throw new Error("Invalid catalogue response");
    }

    return books;
  }

  window.SULARC_SEARCH_BOOKS = searchBooks;
})();
