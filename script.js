let randNumber
let result
let quote = document.querySelector('#quote-text')
let author = document.querySelector('#author-name')
let regEx = /\w+ \w+/
const colors = ['#34568B', '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1']

let btn = document.querySelector(".btn").addEventListener("click", getQuote)

function getQuote() {
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then((arr)=> {
    let randNumber = Math.floor(Math.random() * arr.length) 
    console.log(randNumber) 
    return arr[randNumber]
  })
  .then(function(data) {
    let randColor = Math.floor(Math.random() * colors.length) 
    console.log(data);
    quote.innerHTML = data.text
    document.querySelector('body').style.backgroundColor = colors[randColor]
    document.querySelector('.btn').style.backgroundColor = colors[randColor]
    quote.style.color = colors[randColor]
    if (regEx.test(data.author) === false){
      author.innerHTML = 'Unknown'
    }
    else author.innerHTML = data.author.match(regEx)
  });
}

getQuote()





