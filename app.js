document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    dropbtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    dropdownContent.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            dropbtn.textContent = event.target.textContent;
            dropdownContent.classList.remove('show');
        }
    });

    searchButton.addEventListener('click', () => {
        const selectedCategory = dropbtn.textContent;
        const query = searchInput.value;
        alert(`Searching for "${query}" in ${selectedCategory}`);
    });
});
