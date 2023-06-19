/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // window.onload = () => {
  //write your code here
  document.querySelector("#button").addEventListener("click", function() {
    document.querySelector("#excuse").innerHTML = generatedExcuse();
  });
};

// let generatedExcuse = () => {
function generatedExcuse() {
  let who = [
    "Steve Buscemi",
    "Ronald McDonald",
    "An angry frog",
    "The actual void lord itself",
    "The person that invented envelope adhesive"
  ];
  let action = [
    "de-materialized",
    "created a wonderful puree using only",
    "forced self-awareness upon",
    "falcon punched"
  ];
  let what = [
    "my favorite underwear",
    "the enter keys from all my keyboards",
    "an innocent kitten"
  ];
  let when = [
    "on Christmas Eve.",
    "whilst a hot pocket was being microwaved.",
    "during the guitar solo in Hanson's breakaway hit MmmBop.",
    "while I was in the bathroom.",
    "while I was completing my excuse generator project."
  ];
  return (
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)]
  );
}
