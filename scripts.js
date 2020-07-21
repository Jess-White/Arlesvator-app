let url = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/2560px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg"
let title = "Bedroom in Arles"
let year = "1888"
let description = "Oil on canvas, 72 cm × 90 cm (28.3 in × 35.4 in). Bedroom in Arles (French: La Chambre à Arles; Dutch: Slaapkamer te Arles) is the title given to each of three similar paintings by 19th-century Dutch Post-Impressionist painter Vincent van Gogh. Van Gogh's own title for this composition was simply The Bedroom (French: La Chambre à coucher). There are three authentic versions described in his letters, easily distinguishable from one another by the pictures on the wall to the right. The painting depicts van Gogh's bedroom at 2, Place Lamartine in Arles, Bouches-du-Rhône, France, known as the Yellow House. The door to the right opened on to the upper floor and the staircase; the door to the left was that of the guest room he held prepared for Gauguin."

let currentPainting = document.getElementById("background-painting");
currentPainting.style.backgroundImage = `url("${url}")`;

let detailPainting = document.getElementById("modal-painting");
detailPainting.style.backgroundImage = `url("${url}")`;

let detailTitle = document.getElementById("modal-title");
document.getElementById('modal-title').innerHTML=title

let detailYear = document.getElementById("modal-year");
document.getElementById('modal-year').innerHTML=year;

let detailDescription = document.getElementById("modal-description");
document.getElementById('modal-description').innerHTML=description;

function checkDoor() {
  return document.getElementById('background-painting').classList.contains('open')
}

function changeFloor(floor) {
  if (floor === "P") {
    var url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/2560px-Starry_Night_Over_the_Rhone.jpg"
    var title = "Starry Night Over the Rhone"
    var year = "1888"
    var description = "Oil on canvas, 72.5 cm × 92 cm (28.5 in × 36.2 in). Starry Night (September 1888, French: La Nuit étoilée) is one of Vincent van Gogh's paintings of Arles at night. It was painted on the bank of the Rhône that was only a one or two-minute walk from the Yellow House on the Place Lamartine, which Van Gogh was renting at the time. The night sky and the effects of light at night provided the subject for some of van Gogh's more famous paintings, including Cafe Terrace at Night (painted earlier the same month) and the June, 1889, canvas from Saint-Remy, The Starry Night."
     document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
      document.getElementById('slidy-penthouse').classList.add('indicate-floor')
  } else if (floor === "R") {
      var url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/2560px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
      var title = "The Starry Night"
      var year = "1889"
      var description = "Oil on canvas, 73.7 cm × 92.1 cm (28.7 in × ​36 1⁄4 in). The Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village....The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. 'Through the iron-barred window,' he wrote to his brother, Theo, around 23 May 1889, 'I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.'"
      document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
      document.getElementById('slidy-rooftop').classList.add('indicate-floor') 
  } else if (floor === "B") {
      var url = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/2560px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg"
      var title = "The Potato Eaters"
      var year = "1885"
      var description = "Oil on canvas, 82 cm × 114 cm (32.3 in × 44.9 in). The Potato Eaters (Dutch: De Aardappeleters) is an oil painting by Dutch artist Vincent van Gogh painted in April 1885 in Nuenen, Netherlands. Writing to his sister Willemina two years later in Paris, Van Gogh still considered The Potato Eaters his most successful painting: 'What I think about my own work is that the painting of the peasants eating potatoes that I did in Nuenen is after all the best thing I did.'"
      document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
      document.getElementById('slidy-basement').classList.add('indicate-floor')
  } else if (floor === "L") {
      var url = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Vincent_van_Gogh_-_The_white_orchard_-_Google_Art_Project.jpg"
      var title = "The White Orchard"
      var year = "1885"
      var description = "Oil on canvas, 60 cm x 81 cm. Shortly after he had completed The Langlois Bridge, Van Gogh started painting orchards in blossom. The motif preoccupied him for almost a month and on about 21 April, when the trees were shedding their last blossom, he produced his final version. He had by then painted a total of fourteen canvases, the first of which, dated about 24 March, was: 'a cluster of apricot trees in bloom in a small, fresh green orchard'. Van Gogh was probably repeating the same motif several times in the hope of ultimately producing mature paintings which would attract buyers. He was hoping that the 'extraordinary gaiety' of his Provencal orchards would in any event 'finally break the ice in Holland', because, as he continued in the same letter - probably with earlier, successful examples from the Barbizon School in mind - orchards in blossom 'are motifs that one might be able to sell or exchange.'"
      document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
      document.getElementById('slidy-lobby').classList.add('indicate-floor') 
  }  
  else {
    var url = imageArray[floor].url
    var title = imageArray[floor].title
    var year = imageArray[floor].year
    var description = imageArray[floor].description
    document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'));
    document.getElementById(floor).classList.add('indicate-floor')
  }
  let currentPainting = document.getElementById("background-painting");
  currentPainting.style.backgroundImage = `url("${url}")`;
  let detailPainting = document.getElementById("modal-painting");
  detailPainting.style.backgroundImage = `url("${url}")`;
  let detailTitle = document.getElementById("modal-title");
  document.getElementById('modal-title').innerHTML=title
  let detailYear = document.getElementById("modal-year");
  document.getElementById('modal-year').innerHTML=year;
  let detailDescription = document.getElementById("modal-description");
  document.getElementById('modal-description').innerHTML=description;
}

function showAbout() {
  var elevator = document.getElementById("elevator-element");
  elevator.style.display = "none";
  var about = document.getElementById("about-element");
  about.style.display = "block";
}

function closeAbout() {
  var elevator = document.getElementById("elevator-element");
  elevator.style.display = "inline-block";
  var about = document.getElementById("about-element");
  about.style.display = "none";
}

function openDoors() {
  (document.getElementById('background-painting').classList.add('open'))
}

function closeDoors() {
  (document.getElementById('background-painting').classList.remove('open'))
}

function pressButton(floor) {
  var needCloseDoor = checkDoor();
  console.log(needCloseDoor);
  if (needCloseDoor) {
    closeDoors();
    setTimeout(() => changeFloor(floor), 5000)
      return 
  } 
  changeFloor(floor);
}

var modal = document.getElementById("detailsModal");

var btn = document.getElementById("detailsButton");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}