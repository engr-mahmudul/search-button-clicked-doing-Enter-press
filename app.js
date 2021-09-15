const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("serach-button");


searchField.addEventListener('keypress', (event) =>{
    if (event.key === 'Enter'){
        searchButton.click();
    }
})
searchButton.addEventListener('click', function() {
    const searchText = searchField.value;
    console.log("Search button is clicked with value = ", searchText);
    searchField.value = '';
});