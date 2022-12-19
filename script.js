var id_page1 = document.getElementById("page-1");
var buttton_1 = document.getElementById("button-1");
var id_page2 = document.getElementById("page-2");
function button1() {
  id_page1.style.display = "none";
  id_page2.style.display = "block";
}

var id_pen1 = document.getElementById("pen1");
var id_pen2 = document.getElementById("pen2");
var id_pen3 = document.getElementById("pen3");
var id_pen4 = document.getElementById("pen4");
var id_book1 = document.getElementById("book1");
var id_lain1 = document.getElementById("lain1");
var id_lain2 = document.getElementById("lain2");
var id_lain3 = document.getElementById("lain3");
var id_lain4 = document.getElementById("lain4");
function pen() {
  id_book1.style.display = "none";

  id_lain1.style.display = "none";
  id_lain2.style.display = "none";
  id_lain3.style.display = "none";
  id_lain4.style.display = "none";

  id_pen1.style.display = "flex";
  id_pen2.style.display = "flex";
  id_pen3.style.display = "flex";
  id_pen4.style.display = "flex";
}
function book() {
  id_pen1.style.display = "none";
  id_pen2.style.display = "none";
  id_pen3.style.display = "none";
  id_pen4.style.display = "none";

  id_lain1.style.display = "none";
  id_lain2.style.display = "none";
  id_lain3.style.display = "none";
  id_lain4.style.display = "none";

  id_book1.style.display = "flex";
}
function lain() {
  id_pen1.style.display = "none";
  id_pen2.style.display = "none";
  id_pen3.style.display = "none";
  id_pen4.style.display = "none";

  id_book1.style.display = "none";

  id_lain1.style.display = "flex";
  id_lain2.style.display = "flex";
  id_lain3.style.display = "flex";
  id_lain4.style.display = "flex";
}
function bukutulis() {
  id_pen1.style.display = "none";
  id_pen2.style.display = "none";
  id_pen3.style.display = "none";
  id_pen4.style.display = "none";
  id_book1.style.display = "flex";
  id_lain1.style.display = "none";
  id_lain2.style.display = "none";
  id_lain3.style.display = "none";
  id_lain4.style.display = "none";
}
function bukugambar() {
  id_pen1.style.display = "none";
  id_pen2.style.display = "none";
  id_pen3.style.display = "none";
  id_pen4.style.display = "none";
  id_book1.style.display = "none";
  id_lain1.style.display = "none";
  id_lain2.style.display = "none";
  id_lain3.style.display = "none";
  id_lain4.style.display = "none";
}
function bulpen() {
  id_pen1.style.display = "flex";
  id_pen2.style.display = "flex";
  id_pen3.style.display = "flex";
  id_pen4.style.display = "flex";
  id_book1.style.display = "none";
  id_lain1.style.display = "none";
  id_lain2.style.display = "none";
  id_lain3.style.display = "none";
  id_lain4.style.display = "none";
}
function pensil() {
  id_pen1.style.display = "none";
  id_pen2.style.display = "none";
  id_pen3.style.display = "none";
  id_pen4.style.display = "none";
  id_book1.style.display = "none";
  id_lain1.style.display = "none";
  id_lain2.style.display = "none";
  id_lain3.style.display = "none";
  id_lain4.style.display = "none";
}
function spidol() {
  id_pen1.style.display = "none";
  id_pen2.style.display = "none";
  id_pen3.style.display = "none";
  id_pen4.style.display = "none";
  id_book1.style.display = "none";
  id_lain1.style.display = "none";
  id_lain2.style.display = "none";
  id_lain3.style.display = "none";
  id_lain4.style.display = "none";
}