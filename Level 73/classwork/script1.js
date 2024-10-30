// აირჩიეთ პარაგრაფები class-ის მიხედვით
const updateParagraphs = document.querySelectorAll('.update');

// for loop-ის გამოყენება შინაარსისა და ფერის შესაცვლელად
for (let i = 0; i < updateParagraphs.length; i++) {
    updateParagraphs[i].textContent = `ახალი შინაარსი ${i + 1}`;
    updateParagraphs[i].style.color = 'green'; // თქვენ შეგიძლიათ შეცვალოთ ფერი საჭიროების მიხედვით
}

// ID-ს მიცემული პარაგრაფის დაყენება event listener
const studentInfo = document.getElementById('student-info');
studentInfo.addEventListener('click', function() {
    alert('თქვენი სახელი და გვარი: [თქვენი სახელი] [თქვენი გვარი]');
});
