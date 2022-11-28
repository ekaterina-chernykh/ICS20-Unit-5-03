// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-03/sw.js", {
    scope: "/ICS20-Unit-5-03/",
  })
}

function myButtonClicked() {
  let age = document.getElementById("age").value

  if (age >= 17) {
    document.getElementById("answer").innerHTML = "G, Pg13 and R"
  } else if (age >= 13) {
    document.getElementById("answer").innerHTML = "G and Pg13"
  } else if (age <= 12) {
    document.getElementById("answer").innerHTML = "G"
  } else {
    document.getElementById("answer").innerHTML = "Error"
  }
}