// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap";

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"
import { library } from "webpack";


const results = document.querySelector('#results');

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9e2677275f583e220b7138a1f1be7e3e&language=en-US&page=1")
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    // data.Search.forEach((result) => {
    //   const movieTag = `<li class="list-inline-item">
    //   <img src="${result.Poster}" alt"">
    //   <p>${result.Title}</p>
    //   </li>`
    //   results.insertAdjacentHTML("beforeend", movieTag)
    // })

  })
