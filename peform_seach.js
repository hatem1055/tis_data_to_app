function performSearch() {
    const searchPattern = document.getElementById("search-box").value.toLowerCase();
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function (item) {
        const fileName = item.alt.toLowerCase();

        // Use a regular expression to test for a match
        const regex = new RegExp(searchPattern, 'i'); // 'i' flag for case-insensitive matching
        if (regex.test(fileName)) {
            item.style.display = "block"; // Show matching items
        } else {
            item.style.display = "none"; // Hide non-matching items
        }
    });
}

    // Add an event listener for keyup on the search box
    document.getElementById("search-box").addEventListener("keyup", function () {
        performSearch();
    });