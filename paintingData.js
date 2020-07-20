// Paintings data:

// const paintingArray = [
//   {
//     id: 1,
//     title: "Sunset at Montmajour",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sunset_at_Montmajour_1888_Van_Gogh.jpg/2560px-Sunset_at_Montmajour_1888_Van_Gogh.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 2,
//     title: "The Red Vineyard",
//     url: "https://upload.wikimedia.org/wikipedia/commons/3/35/Red_vineyards.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 3,
//     title: "Meadow with Flowers Under a Stormy Sky",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Van_Gogh_-_Wiese_mit_Blumen_unter_Gewitterhimmel.jpeg/2560px-Van_Gogh_-_Wiese_mit_Blumen_unter_Gewitterhimmel.jpeg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 4,
//     title: "The Large Plane Trees",
//     url: "https://cdn.britannica.com/92/215592-050-8DEB0E28/Large-Plane-Trees-Road-Menders-at-Saint-Remy-Vincent-Van-Gough-1889-Cleveland-Art-Museum.jpg",
//     year: "1889",
//     description: ""
//   },
//   {
//     id: 5,
//     title: "Landscape from Saint-Remy",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Vincent_van_Gogh_-_Landscape_from_Saint-R%C3%A9my_-_Google_Art_Project.jpg/1529px-Vincent_van_Gogh_-_Landscape_from_Saint-R%C3%A9my_-_Google_Art_Project.jpg",
//     year: "1889",
//     description: ""
//   },
//   {
//     id: 6,
//     title: "View of Arles, Flowering Orchards",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vincent_Van_Gogh_0018.jpg/1531px-Vincent_Van_Gogh_0018.jpg",
//     year: "1889",
//     description: ""
//   },
//   {
//     id: 7,
//     title: "The Langlois Bridge at Arles with Women Washing",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Van_Gogh_-Die_Br%C3%BCcke_von_Langlois_in_Arles_mit_W%C3%A4scherinnen.jpeg/2560px-Van_Gogh_-Die_Br%C3%BCcke_von_Langlois_in_Arles_mit_W%C3%A4scherinnen.jpeg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 8,
//     title: "The Poet's Garden",
//     url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Vincent_van_Gogh%E2%80%99s_famous_painting%2C_digitally_enhanced_by_rawpixel-com_51.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 9,
//     title: "Field with Poppies",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Veld_met_klaprozen_-_s0033V1962_-_Van_Gogh_Museum.jpg/2560px-Veld_met_klaprozen_-_s0033V1962_-_Van_Gogh_Museum.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 10,
//     title: "Falling Autumn Leaves",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Les_Alyscamps%2C_fallende_Bl%C3%A4tter.jpeg/2560px-Van_Gogh_-_Les_Alyscamps%2C_fallende_Bl%C3%A4tter.jpeg",
//     year: "1888",
//     description: ""
//   }
// ]

var url = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/2560px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg"
  let currentPainting = document.getElementById("background-painting");
  currentPainting.style.backgroundImage = `url("${url}")`;

function changeFloor(floor) {
  if (floor === "P") {
  var url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/2560px-Starry_Night_Over_the_Rhone.jpg"
   document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
    document.getElementById('slidy-penthouse').classList.add('indicate-floor')
  } else if (floor === "R") {
    var url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/2560px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
    document.getElementById('slidy-rooftop').classList.add('indicate-floor') 
  } else if (floor === "B") {
    var url = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/2560px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg"
    document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
    document.getElementById('slidy-basement').classList.add('indicate-floor')
  } else if (floor === "L") {
    var url = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Vincent_van_Gogh_-_The_white_orchard_-_Google_Art_Project.jpg"
    document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'))
    document.getElementById('slidy-lobby').classList.add('indicate-floor') 
  }  
  else {
    var url = imageArray[floor].url
    document.querySelectorAll('.navbar-brand-slidy').forEach(el => el.classList.remove('indicate-floor'));
    document.getElementById(floor).classList.add('indicate-floor')
  }
  let currentPainting = document.getElementById("background-painting");
  currentPainting.style.backgroundImage = `url("${url}")`;
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

// Penthouse: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/2560px-Starry_Night_Over_the_Rhone.jpg"
// Rooftop: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/2560px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
// Basement: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/2560px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg"
// Lobby: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg/1920px-Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg"


// Others:
// "Flowering Fruit Trees": "https://masterpieces-of-art.com/wp-content/uploads/peach-tree-in-blossom-vincent-van-gogh-1-520x520.jpg"
// "Cypresses": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Cypresses_MET_DP130999.jpg"

// ,
//   {
//     id: 11,
//     title: "Entrance to the Public Park in Arles",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Vincent_van_Gogh_-_Entrance_to_the_Public_Gardens_in_Arle_-_Google_Art_Project.jpg/2560px-Vincent_van_Gogh_-_Entrance_to_the_Public_Gardens_in_Arle_-_Google_Art_Project.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 12,
//     title: "The Langlois Bridge at Arles with Women Washing",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Van_Gogh_-Die_Br%C3%BCcke_von_Langlois_in_Arles_mit_W%C3%A4scherinnen.jpeg/2560px-Van_Gogh_-Die_Br%C3%BCcke_von_Langlois_in_Arles_mit_W%C3%A4scherinnen.jpeg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 13,
//     title: "Meadow with Flowers Under a Stormy Sky",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Van_Gogh_-_Wiese_mit_Blumen_unter_Gewitterhimmel.jpeg/2560px-Van_Gogh_-_Wiese_mit_Blumen_unter_Gewitterhimmel.jpeg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 14,
//     title: "Summer Evening in Arles",
//     url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Van_Gogh_-_Weizenfeld_bei_Sonnenuntergang.jpeg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 15,
//     title: "View of Arles with Iries in the Foreground",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Vincent_van_Gogh_-_Veld_met_bloemen_bij_Arles_-_Google_Art_Project.jpg/2560px-Vincent_van_Gogh_-_Veld_met_bloemen_bij_Arles_-_Google_Art_Project.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 16,
//     title: "Wheat Field with the Hills of the Alpilles in the Background",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vincent_van_Gogh_-_Wheatfield_-_Google_Art_Project.jpg/2560px-Vincent_van_Gogh_-_Wheatfield_-_Google_Art_Project.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 17,
//     title: "View of Arles with Iries in the Foreground",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Vincent_van_Gogh_-_Veld_met_bloemen_bij_Arles_-_Google_Art_Project.jpg/2560px-Vincent_van_Gogh_-_Veld_met_bloemen_bij_Arles_-_Google_Art_Project.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 18,
//     title: "View of Arles with Iries in the Foreground",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Vincent_van_Gogh_-_Veld_met_bloemen_bij_Arles_-_Google_Art_Project.jpg/2560px-Vincent_van_Gogh_-_Veld_met_bloemen_bij_Arles_-_Google_Art_Project.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 19,
//     title: "View of Arles with Iries in the Foreground",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Vincent_van_Gogh_-_Veld_met_bloemen_bij_Arles_-_Google_Art_Project.jpg/2560px-Vincent_van_Gogh_-_Veld_met_bloemen_bij_Arles_-_Google_Art_Project.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 20,
//     title: "Orchard with Flowering Plum Trees",
//     url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Vincent_van_Gogh_-_The_white_orchard_-_Google_Art_Project.jpg",
//     year: "1888",
//     description: ""
//   },
//   {
//     id: 21,
//     title: "Irises",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Vincent_van_Gogh_-_Irises_%281889%29.jpg/1554px-Vincent_van_Gogh_-_Irises_%281889%29.jpg",
//     year: "1889",
//     description: ""
//   },
//   {
//     id: 22,
//     title: "Evening Landscape with Rising Moon",
//     url: "https://www.vincentvangogh.org/images/paintings/evening-landscape-with-rising-moon.jpg",
//     year: "1889",
//     description: ""
//   }