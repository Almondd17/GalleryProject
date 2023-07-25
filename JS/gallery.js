var categoryImages = {
    StillLife: [
      {
        path: "/images/Still-Life/SL1.jpg",
        description: "A kettle, vase, and dish placed on a red table."
      },
      {
        path: "/images/Still-Life/SL2.jpg",
        description: "Green plant in a blue vase."
      },
      {
        path: "/images/Still-Life/SL3.jpg",
        description: "Colorful bowls and utensils against a modern background."
      },
      {
        path: "/images/Still-Life/SL4.jpg",
        description: "Three fruits and a lidded pitcher in a blue bowl."
      },
      {
        path: "/images/Still-Life/SL5.jpg",
        description: "Pink flowers and vibrant green leaves."
      },
      {
        path: "/images/Still-Life/SL6.jpg",
        description: "Assorted fruits on a blue tray with a wine bottle."
      },
      {
        path: "/images/Still-Life/SL7.jpg",
        description: "A red kettle and glass paired with a green bowl."
      },
      {
        path: "/images/Still-Life/SL8.jpg",
        description: "A brown pot showcasing a green plant with pink roses."
      },
      {
        path: "/images/Still-Life/SL9.jpg",
        description: "Yellow tulips in a brown pot against a blue background."
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
        description: "Three penguins against a blue backdrop."
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
        description: "Two toucans with a different appearance standing on a branch"
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
  
  function showCategoryContent(category) {
    console.clear();
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
    descriptionSpan.innerText = "Scroll to see more paintings!";
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
  
  function tooltip() {
    var galleryItems = document.getElementsByClassName("gallery-item");
  
    for (var i = 0; i < galleryItems.length; i++) {
      var galleryItem = galleryItems[i];
      var tooltipValue = galleryItem.getAttribute('data-tooltip');
  
      // Create tooltip element
      var tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.textContent = tooltipValue;
  
      // Add tooltip to gallery item
      galleryItem.appendChild(tooltip);
  
      // Attach event listeners to gallery item
      galleryItem.addEventListener('mouseenter', showTooltip(tooltip));
      galleryItem.addEventListener('mouseleave', hideTooltip(tooltip));
    }
  
    function showTooltip(tooltip) {
      return function () {
        tooltip.style.display = 'block';
      };
    }
  
    function hideTooltip(tooltip) {
      return function () {
        tooltip.style.display = 'none';
      };
    }
  }
  
  // Call the tooltip function after the DOM is loaded
  document.addEventListener("DOMContentLoaded", tooltip);
  
  
  

  
  
  
  