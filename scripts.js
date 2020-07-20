const imageArray = [
  {
    id: 1,
    title: "Sunset at Montmajour",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sunset_at_Montmajour_1888_Van_Gogh.jpg/2560px-Sunset_at_Montmajour_1888_Van_Gogh.jpg",
    year: "1888",
    description: "Oil on canvas, 73.3 cm × 93.3 cm (28.9 in × 36.7 in). Confirmed as a genuine Vincent van Gogh work in 2013. First full-sized painting by van Gogh to be confirmed since 1928. Among the evidence that confirmed the painting's authenticity was a letter written by Vincent van Gogh to his brother Theo on 5 July 1888, describing a landscape that he had painted the previous day: 'Yesterday, at sunset, I was on a stony heath where very small, twisted oaks grow, in the background a ruin on the hill, and wheatfields in the valley. It was romantic, it couldn’t be more so, à la Monticelli, the sun was pouring its very yellow rays over the bushes and the ground, absolutely a shower of gold. And all the lines were beautiful, the whole scene had a charming nobility. You wouldn’t have been at all surprised to see knights and ladies suddenly appear, returning from hunting with hawks, or to hear the voice of an old Provençal troubadour. The fields seemed purple, the distances blue. And I brought back a study of it too, but it was well below what I’d wished to do.'"
  },
  {
    id: 2,
    title: "The Red Vineyards Near Arles",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/35/Red_vineyards.jpg",
    year: "1888",
    description: "Oil on canvas, 75 cm × 93 cm (29.5 in × 36.6 in). Believed to be the only painting van Gogh sold during his lifetime. The Red Vineyard was exhibited for the first time at the annual exhibition of Les XX, 1890 in Brussels, and sold for 400 Francs (equal to about $2,000 today) to Anna Boch, an impressionist painter. The painting was later purchased, in 1909, from a Paris art gallery by Ivan Morozov. Later, it was being housed in the exquisite collection of Sergei Shchukin, in Shchukin‘s home at Trubestkoy Palace in Moscow. After the Russian revolution, the painting was subsequently nationalised by the Bolsheviks, while Shchukin was allowed to emigrate to France. The Red Vineyard was eventually passed to Moscow‘s Pushkin Museum of Fine Arts, where it resides today."
  },
  {
    id: 3,
    title: "View of Arles with Irises in the Foreground",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Vincent_van_Gogh_-_Veld_met_bloemen_bij_Arles_-_Google_Art_Project.jpg/2560px-Vincent_van_Gogh_-_Veld_met_bloemen_bij_Arles_-_Google_Art_Project.jpg",
    year: "1888",
    description: "Oil on canvas, 54 x 65 cm. Van Gogh was captivated by the colours of the landscape around the town of Arles (FR). He particularly loved the contrast between the yellow and purple flowers in the fields. In this landscape, he felt he could see a reflection of the world he knew from his collection of Japanese prints. Japanese artists used large areas of colour in their compositions, often with a sharp diagonal. They also regularly zoomed in on a detail in the foreground. Van Gogh adopted these elements in his paintings. It was just like 'a Japanese dream,' he wrote in a letter to his brother Theo."
  },
   {
    id: 4,
    title: "The Langlois Bridge at Arles with Women Washing",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Van_Gogh_-Die_Br%C3%BCcke_von_Langlois_in_Arles_mit_W%C3%A4scherinnen.jpeg/2560px-Van_Gogh_-Die_Br%C3%BCcke_von_Langlois_in_Arles_mit_W%C3%A4scherinnen.jpeg",
    year: "1888",
    description: "Oil on canvas, 49.5 cm × 64.5 cm (19.5 in × 25.4 in). The Langlois Bridge at Arles is the subject of four oil paintings, one watercolor and four drawings by Vincent van Gogh. The works, made in 1888 when Van Gogh lived in Arles, in southern France, represent a melding of formal and creative aspects. Van Gogh used a perspective frame that he built and used in The Hague to create precise lines and angles when portraying perspective. Van Gogh was influenced by Japanese woodcut prints, as evidenced by his simplified use of color to create a harmonious and unified image. Contrasting colors, such as blue and yellow, were used to bring a vibrancy to the works. He painted with an impasto, or thickly applied paint, using color to depict the reflection of light. The subject matter, a drawbridge on a canal, reminded him of his homeland in the Netherlands....The reconstructed Langlois Bridge is now named Pont Van-Gogh."
  },
  {
    id: 5,
    title: "Landscape from Saint-Remy",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Vincent_van_Gogh_-_Landscape_from_Saint-R%C3%A9my_-_Google_Art_Project.jpg/1529px-Vincent_van_Gogh_-_Landscape_from_Saint-R%C3%A9my_-_Google_Art_Project.jpg",
    year: "1889",
    description: "Oil on canvas, 29 × 36 1/4 in, 73.7 × 92.1 cm. Vincent van Gogh spent one year at the asylum in Saint-Rémy de Provence. This year was probably the most difficult of his entire life. It would also prove to be one of his most creative as an artist. After cutting off part of his left ear in Arles, Van Gogh voluntarily confined himself to the institution in Saint-Rémy. Throughout the course of his year there Van Gogh would battle his own personal demons, but would also produce many of the best works of his career. At times Van Gogh would be completely incapacitated by his illness, but during his more lucid times the staff at the asylum would allow him to work outdoors and pursue his art. Van Gogh's landscapes in particular (such as Wheat Field with Cypresses) would be the most exquisite he would ever produce."
  },
  {
    id: 6,
    title: "View of Arles, Flowering Orchards",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vincent_Van_Gogh_0018.jpg/1531px-Vincent_Van_Gogh_0018.jpg",
    year: "1889",
    description: "Oil on canvas, 72 cm × 92 cm (28.3 in × 36.2 in), "
  },
  {
    id: 7,
    title: "Summer Evening in Arles",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Van_Gogh_-_Weizenfeld_bei_Sonnenuntergang.jpeg",
    year: "1888",
    description: "View of Arles, Flowering Orchards is a painting by Vincent van Gogh, executed in spring 1889, one of several paintings he produced in his Flowering Orchards series while living in Arles. It supplies a view across a canal and the poplars on its board towards the historical center of Arles, with the towers of Saint-Trophime and College St Charles to the left, contrasted by recent building of the Caserne Calvin, housing the Zouave Regiment, to the right. Van Gogh was acquainted with several of the Zouave officers, painted one in native uniform, and his portrait of Lieutenant Milliet is known as The Lover. Poplar trees still stand along the canal, today, but the orchards and the Caserne are gone."
  },
  {
    id: 8,
    title: "The Poet's Garden",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Vincent_van_Gogh%E2%80%99s_famous_painting%2C_digitally_enhanced_by_rawpixel-com_51.jpg",
    year: "1888",
    description: "Oil on canvas, 28 3/4 × 36 1/4 in. (73 × 92.1 cm). Before Gauguin had appeared in Arles, van Gogh has begun his poet's garden series which he had planned to place in Gauguin's bedroom. The artist used the small park that nestled in front of 'The Yellow House' for his inspiration for the four series sequence of paintings. The painter explained to the poet: 'I have tried to distill in the decoration the immutable character of this country, in such a way that one is put in mind of the old poet from these parts (or rather from Avignon), Petrarch, and of the new poet from these parts—Paul Gauguin.'ent-van-Goghs-The-Poets-Garden-A-Set-of-Four-Paintings"
  },
  {
    id: 9,
    title: "Field with Poppies",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Vincent_van_Gogh_-_Field_with_Poppies_%281889%29.jpg/1525px-Vincent_van_Gogh_-_Field_with_Poppies_%281889%29.jpg",
    year: "1889",
    description: "Oil on canvas,  72 cm (28.3 in), 91 cm (35.8 in). This painting was done in early June 1889, not long after Van Gogh had arrived at the asylum, and as such it can be assumed that it was made either from the window of the asylum or from very near to it....The view shoots away down a steep hill to fields in the distance and has no horizon, which was an element that he used increasingly in his last paintings. He produced a number of drawings around the same time as this painting, and the style of this painting is similar to that of the drawings, although Theo was not enthusiastic about them."
  },
  {
    id: 10,
    title: "Evening Landscape with Rising Moon",
    url: "https://www.vincentvangogh.org/images/paintings/evening-landscape-with-rising-moon.jpg",
    year: "1889",
    description: "Oil on canvas, 92 x 72 cm. The moon, the sun and the stars were important symbolic elements for Van Gogh who equated their radiating light to religious precepts surrounding resurrection, redemption and salvation. In this painting the moon in brilliant yellow rises from behind the smoky blue Alpilles mountains, and radiates a light that he has evoked through multiple short strokes of white paint. His use of these short, regular, white strokes was fairly unusual for him, but gives the effect of the dappled moonlight playing across the landscape. There is great rhythm in this painting that is created through these very precise brushstrokes - every stroke of paint here has a function and builds towards the greater surface pattern across the canvas. His forms are very rounded from the stacks of wheat to the mountains, and this sense of 'roundness' and curvature was something that was characteristic of many of his later works. This painting was done in July 1889, which was when he made his first trip back to Arles from the asylum, and subsequently had his first serious breakdown in Soint-Remy."
  },
  {
    id: 11,
    title: "Entrance to the Public Park in Arles",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Vincent_van_Gogh_-_Entrance_to_the_Public_Gardens_in_Arle_-_Google_Art_Project.jpg/2560px-Vincent_van_Gogh_-_Entrance_to_the_Public_Gardens_in_Arle_-_Google_Art_Project.jpg",
    year: "1888",
    description: "Oil on canvas 72.5 x 91.0 cm, Entrance to the Public Gardens in Arles is one of a series of thematically related paintings, all standard toiles de trente, that Vincent van Gogh executed in the south of France between August and October 1888, a period of intense creativity for him. He was probably referring to this painting when he wrote to his brother Theo around October 10, briefly stating that he has finished 'a new size 30 canvas… another garden.' For months van Gogh had absorbed the warm Mediterranean atmosphere of Arles, and Entrance, remarkable for its strident and saturated colors, its profusion of semi-exotic foliage, and its dazzling, shadowless light, conveys the artist’s newfound delight in the region. “Everywhere and all over the vault of heaven,” he wrote Theo in mid-September, “is a marvelous blue, and a sun sheds a radiance of pure sulphur, and it is soft and as lovely as the combination of heavenly blues and yellows in a Van der Meer of Delft… It absorbs me so much that I let myself go, never thinking of a single rule."
  }
]

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