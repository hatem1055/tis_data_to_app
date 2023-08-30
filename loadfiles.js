function getFolderIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const folderId = urlParams.get('folderid'); // Assuming the parameter name is 'folderid'
    return folderId;
}
async function loadFilesAndPopulateGrid() {
    const folderId = getFolderIdFromURL();

    const [files, checkError] = await get_files(folderId);
    console.log([files,checkError])
    
    if (checkError) {
        const imageGrid = document.getElementById('image-grid');
        imageGrid.innerHTML = ''; // Clear the existing content
        console.log(files)
        for (const file of files) {
            const img = document.createElement('img');
            img.src = file.webContentLink;
            img.alt = file.name;
            img.classList.add('grid-item'); // Add a class for styling
            imageGrid.appendChild(img)
        }
        
        // After updating the grid, perform the search again
        performSearch();
    }
    return checkError;
}