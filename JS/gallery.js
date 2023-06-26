var categoryImages = {
    StillLife: [
      {
        path: "/images/Still-Life/SL1.jpg",
        description: "example description 1"
      },
      {
        path: "/images/Still-Life/SL2.jpg",
        description: "2222222"
      },
      {
        path: "/images/Still-Life/SL3.jpg",
        description: "333333"
      },
      {
        path: "/images/Still-Life/SL4.jpg",
        description: ""
      },
      {
        path: "/images/Still-Life/SL5.jpg",
        description: ""
      },
      {
        path: "/images/Still-Life/SL6.jpg",
        description: ""
      },
      {
        path: "/images/Still-Life/SL7.jpg",
        description: ""
      },
      {
        path: "/images/Still-Life/SL8.jpg",
        description: ""
      },
      {
        path: "/images/Still-Life/SL9.jpg",
        description: ""
      },
    ],
    portraits: [
      {
        path: "/images/portraits/person1.jpg",
        description: ""
      },
      {
        path: "/images/portraits/person2.jpg",
        description: ""
      },
      {
        path: "/images/portraits/person3.jpg",
        description: ""
      },
    ],
    animals: [
      {
        path: "/images/animals/animals1.jpg",
        description: ""
      },
      {
        path: "/images/animals/animals2.jpg",
        description: ""
      },
      {
        path: "/images/animals/animals3.jpg",
        description: ""
      },
      {
        path: "/images/animals/animals4.jpg",
        description: ""
      },
      {
        path: "/images/animals/animals5.jpg",
        description: ""
      },
    ],
    buildings: [
      {
        path: "/images/buildings/buildings1.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings2.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings3.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings4.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings5.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings6.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings7.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings8.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings9.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings10.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings11.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings12.jpg",
        description: ""
      },
      {
        path: "/images/buildings/buildings13.jpg",
        description: ""
      },
    ]
  };
  
  window.onload = function() {
    toolTip();
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
        console.log(image.path)
        categoryContent += "<img  class='category-image' src='" + image.path + "' alt='" + category + " Image' data-category='" + category + "'>";
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
    var category = event.target.getAttribute("data-category");
    var images = categoryImages[category];
    var imageIndex = images.indexOf(event.target.src);
  
    var container = document.createElement("div");
    container.classList.add("image-container");
  
    var prevButton = document.createElement("button");
    prevButton.classList.add("navigation-button", "prev-button");
    prevButton.innerHTML = "&#10094;";
  
    var nextButton = document.createElement("button");
    nextButton.classList.add("navigation-button", "next-button");
    nextButton.innerHTML = "&#10095;";
  
    var enlargedImage = document.createElement("img");
    enlargedImage.classList.add("enlarged-image");
    enlargedImage.src = event.target.src;
  
    
    var descriptionSpan = document.createElement("span");
    descriptionSpan.classList.add("image-description");
    descriptionSpan.innerText = "scroll to see more pictures!";
    var matchedIndex = -1; // Variable to store the matched index, initially set to -1

    for (var i = 0; i < images.length; i++) {
      if (images[i].path === imageIndex) {
        matchedIndex = i;
        descriptionSpan.innerText = images[i].description;
        break;
      }
    }
    
    container.appendChild(prevButton);
    container.appendChild(enlargedImage);
    container.appendChild(nextButton);
    container.appendChild(descriptionSpan);
    document.body.appendChild(container);
  
    document.body.style.overflow = "hidden";
  
    container.addEventListener("click", function () {
      document.body.removeChild(container);
      document.body.style.overflow = "auto";
    });
  
    enlargedImage.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  
    prevButton.addEventListener("click", function (event) {
      event.stopPropagation();
      imageIndex = (imageIndex - 1 + images.length) % images.length;
      enlargedImage.src = images[imageIndex].path;
      descriptionSpan.innerText = images[imageIndex].description;
    });
  
    nextButton.addEventListener("click", function (event) {
      event.stopPropagation();
      imageIndex = (imageIndex + 1) % images.length;
      enlargedImage.src = images[imageIndex].path;
      descriptionSpan.innerText = images[imageIndex].description;
    });
  }
  function toolTip() {
    var galleryItems = document.getElementsByClassName("gallery-item");
    var tooltip = document.createElement("span");
    tooltip.classList.add("tooltiptext");

    for (var i = 0; i < galleryItems.length; i++) {
      console.log();
      var category = galleryItems[i].getAttribute("data-category");
      tooltip.innerText = category;
    }
    // Position the tooltip relative to the mouse cursor
    galleryItems.addEventListener("mousemove", function(event) {
      tooltip.style.top = (event.clientY + 10) + "px";
      tooltip.style.left = (event.clientX + 10) + "px";
    });

    // Show and hide the tooltip on mouse enter/leave
    galleryItems.addEventListener("mouseenter", function() {
      tooltip.style.display = "block";
    });

    galleryItems.addEventListener("mouseleave", function() {
      tooltip.style.display = "none";
    });
  }
  

  
  
  
  