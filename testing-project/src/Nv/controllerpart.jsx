// /* eslint-disable react/prop-types */
// import { useState } from "react";
// const id = (function* (){
//     let i = 1;
//     while (true) {
//         yield i++;
//     }
// }) ();

// function Controller123({ addArticle, articleList }){
//     const [articles, setArticles] = useState([
//         {id: id.next(), title: "Title1", summary: "Summary1", display: "none"},
//         {id: id.next(), title: "Title2", summary: "Summary2", display: "none"},
//         {id: id.next(), title: "Title3", summary: "Summary3", display: "none"},
//         {id: id.next(), title: "Title4", summary: "Summary4", display: "none"},
//     ]);
//     const [title, setTitle] = useState("");
//     const [summary, setSummary] = useState("");
//     function onChangeTitle(e) {
//         setTitle(e.target.value);
//     }
//     function onChangeSummary(e) {
//         setSummary(e.target.value);
//     }

//     function onClickAdd(){
//         setArticles([...articles, {
//             setArticles([
//                 ...articles,
//                 {
//                     id:id.next(),
//                     title: title,
//                     summary: summary,
//                     display: "none"
//                 },
//             ])
//         }]);
//         setSummary("");
//         setTitle("");
//     }
//     function onClickToggle(id) {
//         const index = articles.findIndex(i => i.id === id);
//         const updatearticles = [...articles];
//         updatedarticles[index] = {
//             ...addArticles[index],
//             display: articles[index].display ? "none" : " ",};
//                 setArticles(updatedarticles);
//         }
//         function onClickRemove(id) {
//             setArticles(articles.filter((i) => i.id !== id));
//     }
//     function onClickRemove(id) {
//         setArticles(articles.filter((i) => i.id !== id));
//     }
//     return ( 
//          <setion>{addArticle({
//         title,
//         summary,
//         onChangeTitle,
//         onChangeSummary,
//         onClickAdd,
//     })}{""}
//     {articleList({
//         articles,
//         onClickToggle,
//         onClickRemove,
//     })}
//     </setion>
//     );
// }

/* eslint-disable react/prop-types */
import { useState } from "react";
const id = (function* () {
  let i = 1;
  while (true) {
    yield i++;
  }
})();

function Controller123({ addArticle, articlelist }) {
  const [articles, setArticles] = useState([
    { id: id.next(), title: "title 1", summary: "Summary1", display: "none" },
    { id: id.next(), title: "title 2", summary: "Summary2", display: "none" },
    { id: id.next(), title: "title 3", summary: "Summary3", display: "none" },
    { id: id.next(), title: "title 4", summary: "Summary4", display: "none" },

    // Add more articles here
  ]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeSummary(e) {
    setSummary(e.target.value);
  }
  function onclickAdd() {
    setArticles([
      ...articles,
      { id: id.next(), title, summary, display: "none" },
      function onClickToggle(id) {
        const index = articles.findIndex((i) => i.id === id);
        const updatedarticles = [...articles];
        updatedarticles[index] = {
          ...articles[index],
          display: articles[index].display ? "none" : "",
        };
        setArticles(updatedarticles);
      },
      function onClickRemove(id) {
      setArticles(articles.filter((i) => i.id !== id));
    }
    return <section>{addArticle({
      title,
      summary,
      onChangeTitle,
      onChangeSummary,
      onclickAdd,
      })}{""}
      {articlelist({
      articles,
      onClickToggle,
      onClickRemove,
      })}</section>;
  }
}
export default Controller123;
    