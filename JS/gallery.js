var categoryImages = {
    objects: [
      "/images/objects/object1.jpg",
      "/images/objects/object2.jpg",
      "/images/objects/object3.jpg",
      "/images/objects/object4.jpg",
      "/images/objects/object5.jpg",
      "/images/objects/object6.jpg",
      "/images/objects/object7.jpg",
      "/images/objects/object8.jpg",
      "/images/objects/object9.jpg"
    ],
    portraits: [
      "/images/portraits/person1.jpg",
      "/images/portraits/person2.jpg",
      "/images/portraits/person3.jpg"
    ],
    animals: [
      "/images/animals/animals1.jpg",
      "/images/animals/animals2.jpg",
      "/images/animals/animals3.jpg",
      "/images/animals/animals4.jpg",
      "/images/animals/animals5.jpg"
    ],
    buildings: [
      "/images/buildings/buildings1.jpg",
      "/images/buildings/buildings2.jpg",
      "/images/buildings/buildings3.jpg",
      "/images/buildings/buildings4.jpg",
      "/images/buildings/buildings5.jpg",
      "/images/buildings/buildings6.jpg",
      "/images/buildings/buildings7.jpg",
      "/images/buildings/buildings8.jpg",
      "/images/buildings/buildings9.jpg",
      "/images/buildings/buildings10.jpg",
      "/images/buildings/buildings11.jpg",
      "/images/buildings/buildings12.jpg",
      "/images/buildings/buildings13.jpg"
    ]
  };
  
  function filterSelection() {
    var select = document.getElementById("category-select");
    var selectedCategory = select.options[select.selectedIndex].value;
  
    var galleryItems = document.getElementsByClassName("gallery-item");
  
    for (var i = 0; i < galleryItems.length; i++) {
      if (galleryItems[i].classList.contains(selectedCategory)) {
        galleryItems[i].style.display = "block";
      } else {
        galleryItems[i].style.display = "none";
      }
    }
  }
  
  function showAllImages() {
    var galleryItems = document.getElementsByClassName("gallery-item");
  
    for (var i = 0; i < galleryItems.length; i++) {
      galleryItems[i].style.display = "block";
    }
  }
  
  function showCategoryContent(category) {
    var contentDiv = document.getElementById("content");
  
    // Clear previous content
    contentDiv.innerHTML = "";
  
    // Generate new content based on the selected category
    var categoryContent = "<h2 class='category-h2'>" + category.charAt(0).toUpperCase() + category.slice(1) + "</h2>";
  
    // Get the images for the selected category
    var images = categoryImages[category];
  
    if (images) {
      images.forEach(function(image) {
        categoryContent += "<img class='category-image' src='" + image + "' alt='" + category + " Image'>";
      });
    }
  
    // Update the content div with the new category content
    contentDiv.innerHTML = categoryContent;
  }
  