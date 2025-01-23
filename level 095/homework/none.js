const cards = document.querySelectorAll('.card');
const filterButton = document.getElementById('filter-below-average');

// ფილტრის ფუნქცია (საშუალოზე დაბლა)
filterButton.addEventListener('click', () => {
    const average = 30; // საშუალო რიცხვი
    cards.forEach(card => {
        const number = parseInt(card.querySelector('p').textContent.split(':')[1].trim());
        if (number < average) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
});

// სორტირების ფუნქცია
function sortCards(order) {
    let sortedCards;
    
    if (order === 'ascending') {
        sortedCards = Array.from(cards).sort((a, b) => {
            return parseFloat(a.dataset.rating) - parseFloat(b.dataset.rating);
        });
    } else if (order === 'descending') {
        sortedCards = Array.from(cards).sort((a, b) => {
            return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
        });
    } else if (order === 'random') {
        sortedCards = Array.from(cards).sort(() => Math.random() - 0.5);
    }

    // ხელახლა დავაყენებთ კარტებს
    const cardsContainer = document.querySelector('.cards');
    cardsContainer.innerHTML = '';
    sortedCards.forEach(card => {
        cardsContainer.appendChild(card);
    });
}
