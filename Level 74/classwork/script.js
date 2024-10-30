// აუცილებელია ამ მეთოდების გამოყენებით შექმნილი ობიექტების
// ჩამატება რომელიმე ელემენტში რომ გახდნენ ხილვადები

// შექმნის მეთოდები
document.createElement("Element") //- ქმნის ელემენტს
document.createTextNode(text) //- ქმნის ტექტს
element.cloneNode()//- ქმნის ტექსტის კლონს

// ჩამატების მეთოდები
Element.appendChild(node) //- ელემენტში ამატებს სასურველ ობიექტს
element.insertBefore(node1, node2) 




const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++',];


const ul = document.createElement('ul');


programmingLanguages.forEach(language => {
   const li = document.createElement('li');
   li.textContent = language;
   ul.appendChild(li);
});


document.body.appendChild(ul);



