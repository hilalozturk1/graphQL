const authors = [
  {
    id: "1",
    name: "Alber",
    surname: "Camus",
    age: 50,
    books: [{ id: "1", title: "Test", score: 9, isPublished: false }],
  },
];

const books = [
  {
    id: "1",
    title: "The Stranger",
    author: authors[0],
    score: 6.9,
    isPublished: true,
  },
];

module.exports = {
  authors,
  books,
};
