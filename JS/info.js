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
  'Still Life Paintings': {
    en: 'Still Life Paintings',
    he: 'ציורי טבע דומם'
  },
  'About Doron': {
    en: 'About Doron',
    he: 'אודות דורון'
  },
  '"Still life" is a genre in visual art, primarily in painting, that depicts various objects—natural or man-made, such as plants, flowers, fruits, food items, and household items. The accessibility of these objects allows the artist to work within their studio, their private space, and enables them to have full control over the chosen subject. The artist determines everything, selecting the objects, composing the scene, choosing the angle of view, and establishing the placement and atmosphere. The artist creates the expression of \'beauty\' for themselves, hence the term \'still life,\' which is closely related to the fundamentals of painting. In its very form, it resembles a grid (an element of a sort of network) that organizes the composition into order and aesthetics.':
  {
    en:
      '"Still life" is a genre in visual art, primarily in painting, that depicts various objects—natural or man-made, such as plants, flowers, fruits, food items, and household items. The accessibility of these objects allows the artist to work within their studio, their private space, and enables them to have full control over the chosen subject. The artist determines everything, selecting the objects, composing the scene, choosing the angle of view, and establishing the placement and atmosphere. The artist creates the expression of \'beauty\' for themselves, hence the term \'still life,\' which is closely related to the fundamentals of painting. In its very form, it resembles a grid (an element of a sort of network) that organizes the composition into order and aesthetics.',
    he:
      '״טבע דומם״ הוא סוג באמנות הוויזואלית, בעיקר בציור, המתאר עצמים שונים - טבעיים או יצוריים, כגון צמחים, פרחים, פירות, פריטי מזון וחפצי בית. הנגישות של עצמים אלה מאפשרת לאמן לעבוד בתוך הסטודיו שלהם, במרחב הפרטי שלהם, ומאפשרת להם להיות בשליטה מלאה על הנושא שנבחר. האמן קובע הכול, בוחר את העצמים, מלטף את הסצינה, בוחר את זווית התצפית, וקובע את המיקום והאווירה. האמן יוצר את ביטוי ה״יופי״ עבור עצמו, ולכן גם המונח ״טבע דומם״ קשור בצורה קרובה ליסודות הציור. במבנה עצמו, הוא דומה לגריד (רכיב מתוך סוג של רשת) שמארגן את ההרכבה לסדר ואסטטיקה.'
  },
  'Doron Mirsky is interested in various subjects, including science, art, reading books, and language learning. He freely speaks six languages. Doron has been drawing since a young age, and among the topics he enjoys illustrating, we have chosen to present his \'still life\' paintings of homes and birds in this exhibition.': {
    en: 'Doron Mirsky is interested in various subjects, including science, art, reading books, and language learning. He freely speaks six languages. Doron has been drawing since a young age, and among the topics he enjoys illustrating, we have chosen to present his \'still life\' paintings of homes and birds in this exhibition.',
    he: 'דורון מירסקי מתעניין בנושאים שונים, כולל מדע, אמנות, קריאת ספרים ולימוד שפות. הוא מדבר באופן שוטף שש שפות. דורון מצייר מגיל צעיר, ובין הנושאים שהוא נהנה להתאמץ, בחרנו להציג בתערוכה זו את ציורי הטבע הנצחיים שלו של בתים וציפורים בתערוכה זו.'
  },
  'Doron is particularly fascinated by architecture, especially ancient churches. During his travels around the world, he discovers a special interest in old churches. A special experience for him was visiting St. Peter\'s Basilica in Rome.': {
    en: 'Doron is particularly fascinated by architecture, especially ancient churches. During his travels around the world, he discovers a special interest in old churches. A special experience for him was visiting St. Peter\'s Basilica in Rome.',
    he: 'דורון מתאופף באדריכלות, במיוחד בכנסיות עתיקות. במהלך המסעותיו ברחבי העולם, הוא מגלה עניין מיוחד בכנסיות עתיקות. חוויה מיוחדת עבורו הייתה ביקור בקתדרלת סנט פטרוס ברומא.'
  },
  'Doron loves painting houses. His paintings are characterized by wide surfaces and bold colors. Another direction in his artwork involves animal paintings, especially birds. Birds symbolize both beauty and a longing for freedom and liberation.': {
    en: 'Doron loves painting houses. His paintings are characterized by wide surfaces and bold colors. Another direction in his artwork involves animal paintings, especially birds. Birds symbolize both beauty and a longing for freedom and liberation.',
    he: 'דורון אוהב לצייר בתים. ציוריו מתארכים בשטחים רחבים וצבעים מוחזקים. עוד כיוון ביצירתיותו כולל ציורי חיות, בעיקר ציפורים. הציפורים מסמלות את היופי ואת תשוקת החירות והשחרור.'
  },
  'In his still life paintings, Doron often emphasizes flowers and various objects. In these paintings, Doron combines beauty with order and organization. Through his paintings and the concept of beauty, he observes and successfully creates order and logic within the world.': {
    en: 'In his still life paintings, Doron often emphasizes flowers and various objects. In these paintings, Doron combines beauty with order and organization. Through his paintings and the concept of beauty, he observes and successfully creates order and logic within the world.',
    he: 'בציורי הטבע הדומם שלו, דורון נוהג להדגיש בעיקר פרחים ופריטים שונים. בציורים אלה, דורון משלב את היופי עם הסדר והארגון. באמצעות ציוריו והמושג של היופי, הוא מתבונן ויוצר בהצלחה סדר והגיון בתוך העולם.'
  }
  // Add other translations here
};

const toggleLanguage = () => {
    const lang = languageSwitch.checked ? 'he' : 'en';
    mainElementsToTranslate.forEach(element => {
        const key = element.dataset.lang; // Use the data-lang attribute as the key
        const translation = translations[key] ? translations[key][lang] || key : key;
        element.textContent = translation;
        //change the text css by adding a class
        if (lang === 'he') {
          element.classList.add('rtl-text');
        } else {
          element.classList.remove('rtl-text');
        }    
    });
};

languageSwitch.addEventListener('change', toggleLanguage);

// Store the English text in a separate data attribute for each element
mainElementsToTranslate.forEach(element => {
    element.dataset.lang = element.textContent.trim(); // Store the English text
});