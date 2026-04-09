/* ===== MUSIC ===== */
function playMusic(){
  alert("Playing music...");
}

function buyItem(item){
  alert(item + " added to cart");
}

function playSong(src, title, description) {
  const player = document.getElementById("player");
  const titleEl = document.getElementById("title");
  const descEl = document.getElementById("description");

  player.src = src;
  player.play();

  titleEl.textContent = title;
  descEl.innerHTML = description;
}

/* ===== ALBUM SYSTEM ===== */

// lagay mo dito lahat ng images ng album
const albums = [
  [
    "phtos/sinnedz.jpg",
    "phtos/jersey.jpg",
    "phtos/kdfrm.jpg"
  ]
];

let currentAlbum = [];
let currentIndex = 0;

function openAlbum(albumIndex){
  currentAlbum = albums[albumIndex];
  currentIndex = 0;

  document.getElementById("viewer").style.display = "flex";
  showImage();
}

function showImage(){
  document.getElementById("viewImg").src = currentAlbum[currentIndex];
}   

function nextImage(){
  currentIndex++;
  if(currentIndex >= currentAlbum.length){
    currentIndex = 0;
  }
  showImage();
}

function prevImage(){
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = currentAlbum.length - 1;
  }
  showImage();
}

function closeViewer(){
  document.getElementById("viewer").style.display = "none";
}