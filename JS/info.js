//theme switch
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;
const header = document.querySelector('header');
const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const h2Elements = document.querySelectorAll('h2');
const paragraphs = document.querySelectorAll('p');
const footer = document.querySelector('footer');

themeSwitch.addEventListener('change', function() {
    if (themeSwitch.checked) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        header.style.backgroundColor = '#222';
        main.style.backgroundColor = '#222';
        h1.style.color = '#fff';
        h2Elements.forEach(h2 => h2.style.color = '#fff');
        paragraphs.forEach(p => p.style.color = '#fff');
        footer.style.backgroundColor = '#777';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        header.style.backgroundColor = '#f2f2f2';
        main.style.backgroundColor = '#fff';
        h1.style.color = '#000';
        h2Elements.forEach(h2 => h2.style.color = '#000');
        paragraphs.forEach(p => p.style.color = '#000');
        footer.style.backgroundColor = '#333';
    }
});
//language Switch
const languageSwitch = document.getElementById('languageSwitch');
const mainElementsToTranslate = document.querySelectorAll('main [data-lang]');

const translations = {
    aboutTitle: {
        hebrew: 'אודות דורון',
        english: 'About Doron'
    },
    aboutText1: {
      hebrew: 'דורון מירסקי מתעניין בנושאים רבים ביניהם מדע, אמנות, קריאת ספרים ולימוד שפות. הוא דובר שש שפות באופן חופשי. דורון מצייר מגיל צעיר ומתוך הנושאים שהוא אוהב לצייר בחרנו להציג בתערוכה את ציורי ה\'טבע דומם\' הבתים והציפורים.',
      english: 'Doron Mirsky is interested in various topics including science, art, reading, and language learning. He speaks six languages fluently. Doron has been drawing since a young age and among the subjects he loves to paint, we chose to present in the exhibition the "Silent Nature" paintings, houses, and birds.'
    },
    aboutText2: {
        hebrew: 'דורון מתעניין מאד בארכיטקטורה ובמיוחד במבני כנסיות. בכל טיול שלו ברחבי העולם, הוא מגלה עניין מיוחד בכנסיות עתיקות. חוויה מיוחדת עבורו הייתה ביקור בכנסיית פטרוס הקדוש ברומא.',
        english: 'Doron is very interested in architecture, especially in church buildings. On each of his trips around the world, he discovers a special interest in ancient churches. A unique experience for him was visiting the Church of St. Peter in Rome.'
    },
    aboutText3: {
        hebrew: 'דורון אוהב לצייר בתים. ציוריו מתאפיינים במשטחים רחבים ובצבעים עזים. כיוון נוסף  בציוריו הינם ציורי בעלי חיים ובעיקר ציפורים. הציפורים מסמלות עבורו הן יופי והן כמיהה לחופש ולשחרור.',
        english: 'Doron loves to paint houses. His paintings are characterized by wide areas and bold colors. Another direction in his art is animal paintings, mainly birds. Birds symbolize for him both beauty and the yearning for freedom and liberation.'
    },
    aboutText4: {
        hebrew: 'בציורי הטבע הדומם מרבה דורון לצייר פרחים וכן חפצים שונים. בציורים אילו משלב דורון את היופי יחד עם הסדר והארגון. הוא מתבונן באמצעות הציורים ודרך מושג היופי מצליח לארגן וליצר לעצמו סדר והגיון בתוך העולם.',
        english: 'In his silent nature paintings, Doron often paints flowers and various objects. In these paintings, Doron combines beauty with order and organization. Through his artwork and the concept of beauty, he contemplates and succeeds in creating order and logic within the world.'
    },
    // Define more translations here
};

// Update the toggleLanguage function
const toggleLanguage = () => {
    const currentLanguage = languageSwitch.checked ? 'english' : 'hebrew';

    mainElementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-lang');
        if (translations.hasOwnProperty(translationKey)) {
            element.textContent = translations[translationKey][currentLanguage];
            if (currentLanguage === 'hebrew'){
              element.classList.add('rtl-text');
            }
            else{
              element.classList.remove('rtl-text');
            }
        }
    });
};

// Add event listener for language switch
languageSwitch.addEventListener('change', toggleLanguage);
