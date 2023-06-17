// Language translation object
const translations = {
    english: {
      paragraph: "<strong>Discover Doron:<br>A Celebration of Artistry</strong><br>Enter the world of Doron, a renowned artist whose paintings transcend reality. Explore our virtual gallery to witness the extraordinary fusion of buildings, animals, people, and objects in vibrant and captivating compositions. Uncover the artist's inspirations and stories in the About section. Connect with us in the Contact section to inquire, commission, or share your appreciation. Embark on this artistic journey and let Doron's creations ignite your imagination.",
      switchtext: "Switch language to Hebrew"
    },
    hebrew: {
      paragraph: "<strong>:ברוכים הבאים לעולם של דורון<br>חגיגת האמנות</strong><br>היכנסו לעולם של דורון, אמן שציוריו גוברים על המציאות. חקרו את הגלריה שלנו כדי לחוות את השילוב המדהים של בניינים, חיות דוממים ופורטרטים בתמונות מרהיבות ומרתקות. גלו את ההשראות והסיפורים שמאחורי הציורים בדף - \"עלינו\". צרו איתנו קשר בדף -  \"צור קשר\" כדי לשאול, לקרוא או לשתף את ההערכה שלכם. נסעו במסע האמנותי הזה ותאירו את הדמיון שלכם ביצירותיו של דורון",
      switchtext: "החלף שפה לאנגלית"
    },  
  };
  
  // Default language
  let currentLanguage = translations.english;
  
  // Function to update the paragraph content based on the selected language
  function updateContent() {
    const paragraphElement = document.querySelector(".paragraph");
    paragraphElement.innerHTML = currentLanguage.paragraph;
  
    // Set font-family for the text
    const title = document.getElementById("changeTitle")
    if (currentLanguage === translations.hebrew) {
      paragraphElement.style.fontFamily = "'Miriam', sans-serif";
    } else {
      paragraphElement.style.fontFamily = "'Raleway', sans-serif";
      title.style.fontFamily = "'Raleway', sans-serif";
      title.style.fontWeight = "lighter";

    }
  }
  
  // Event listener for the language switch checkbox
  document.getElementById("languageSwitch").addEventListener("change", function() {
    if (this.checked) {
      currentLanguage = translations.hebrew;
      document.getElementById("changeTitle").innerHTML = translations.hebrew.switchtext;
    } else {
      currentLanguage = translations.english;
      document.getElementById("changeTitle").innerHTML = translations.english.switchtext;
    }
    updateContent();
  });
  
  // Call the function after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    updateContent();
  });
  