const courses = document.querySelector('#courses');

const objectcard1 = {
  name: 'HTML Essential Training',
  image: 'assets/img/htmlSide.png',
  description:
      'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page.',
};
const objectcard2 = {
  name: 'CSS Essential Training',
  image: 'assets/img/CSS3Side.png',
  description: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
};
const objectcard3 = {
  name: 'JS Essential Training',
  image: 'assets/img/javascript.png',
  description:
      'JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it.',
};
const objectcard4 = {
  name: 'PHP Essential Training',
  image: 'assets/img/PHPSide.png',
  description: 'PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.',
};
const objectcard5 = {
  name: 'Python Essential Training',
  image: 'assets/img/pythonSide.jpeg',
  description:
      'Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear.',
};

const objectcard6 = {
  name: 'React js Essential Training',
  image: 'assets/img/reactjsSide.png',
  description:
        'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies React can be used as a base in the development of single-page or mobile applications. ',
};

const objectCourse = [
  objectcard1,
  objectcard2,
  objectcard3,
  objectcard4,
  objectcard5,
  objectcard6,
];

function addDataToHtml() {
  for (let i = 0; i < objectCourse.length; i += 1) {
    const itemDiv = document.createElement('DIV');
    const itemBodyDiv = document.createElement('DIV');
    const pTitle = document.createElement('P');
    const img = document.createElement('IMG');
    const pDescription = document.createElement('P');
    itemDiv.classList.add('col-lg-6');
    itemDiv.classList.add('course-item');
    itemBodyDiv.classList.add('course-item-body');
    pTitle.classList.add('title-course');
    const textp = document.createTextNode(objectCourse[i].name);
    const textdes = document.createTextNode(objectCourse[i].description);
    img.src = objectCourse[i].image;
    pTitle.appendChild(textp);
    pDescription.appendChild(textdes);
    itemDiv.appendChild(img);
    itemBodyDiv.appendChild(pTitle);
    itemBodyDiv.appendChild(pDescription);
    itemDiv.appendChild(itemBodyDiv);
    courses.appendChild(itemDiv);
  }
}

window.addEventListener('load', () => {
  addDataToHtml();
});