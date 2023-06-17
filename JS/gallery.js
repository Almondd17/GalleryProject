var categoryImages = {
    StillLife: [
      "/images/Still-Life/SL1.jpg",
      "/images/Still-Life/SL2.jpg",
      "/images/Still-Life/SL3.jpg",
      "/images/Still-Life/SL4.jpg",
      "/images/Still-Life/SL5.jpg",
      "/images/Still-Life/SL6.jpg",
      "/images/Still-Life/SL7.jpg",
      "/images/Still-Life/SL8.jpg",
      "/images/Still-Life/SL9.jpg"
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
        categoryContent += "<img class='category-image' src='" + image + "' alt='" + category + " Image' data-category='" + category + "'>";
      });
    }
  
    // Update the content div with the new category content
    contentDiv.innerHTML = categoryContent;
  
    // Add click event listener to each image
    var categoryImageElements = document.getElementsByClassName("category-image");
    for (var i = 0; i < categoryImageElements.length; i++) {
      categoryImageElements[i].addEventListener("click", zoomImage);
    }
  }
  
  function zoomImage(event) {
    // Get the images for the selected category
    var images = categoryImages[event.target.getAttribute("data-category")];
  
    // Create a container element for the enlarged image
    var container = document.createElement("div");
    container.classList.add("image-container");
  
    // Create the enlarged image element
    var enlargedImage = document.createElement("img");
    enlargedImage.classList.add("enlarged-image");
    enlargedImage.src = event.target.src;
  
    // Append the elements to the container
    container.appendChild(enlargedImage);
  
    // Append the container to the body
    document.body.appendChild(container);
  
    // Hide the scrollbar on the body
    document.body.style.overflow = "hidden";
  
    // Add a click event listener to the container to remove the enlarged image
    container.addEventListener("click", function () {
      document.body.removeChild(container);
      document.body.style.overflow = "auto";
    });
  
    // Prevent clicks inside the container from closing it
    enlargedImage.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }
  
  
  