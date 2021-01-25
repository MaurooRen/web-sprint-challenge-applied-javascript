import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div')
  const headlineDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imgDiv = document.createElement('div')
  const img = document.createElement('img')
  const span = document.createElement('span')

  cardDiv.classList.add('card')
  headlineDiv.classList.add('headline')
  authorDiv.classList.add('author')
  imgDiv.classList.add('img-container')

  headlineDiv.textContent = article.headline
  img.src = article.authorPhoto
  span.textContent = article.authorName

  cardDiv.appendChild(headlineDiv)
  cardDiv.appendChild(authorDiv)
  authorDiv.appendChild(imgDiv)
  imgDiv.appendChild(img)
  authorDiv.appendChild(span)

  return cardDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const URL = 'https://lambda-times-api.herokuapp.com/articles'
  const cardContainer = document.querySelector(selector)

  const fetchArticles = (event) => {
    axios.get(URL)
      .then(res => {

        res.data.articles.bootstrap.forEach(item => {
          cardContainer.appendChild(Card(item))
        })
        res.data.articles.javascript.forEach(item => {
          cardContainer.appendChild(Card(item))
        })
        res.data.articles.technology.forEach(item => {
          cardContainer.appendChild(Card(item))
        })
        res.data.articles.jquery.forEach(item => {
          cardContainer.appendChild(Card(item))
        })
        res.data.articles.node.forEach(item => {
          cardContainer.appendChild(Card(item))
        })

      })
      .catch(err => {
        console.log('Ups!')
      })
  }

  fetchArticles()

}

export { Card, cardAppender }
