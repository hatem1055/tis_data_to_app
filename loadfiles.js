function getFolderIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const folderId = urlParams.get('folderid'); // Assuming the parameter name is 'folderid'
    return folderId;
}
// Global variables for the lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('close-button');

// Function to open the lightbox with the clicked image
function openLightbox(imageSrc) {
  lightboxImage.src = imageSrc;
  lightbox.style.display = 'flex'; // Display the lightbox
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.style.display = 'none'; // Hide the lightbox
}

// Add a click event listener to each container to open the lightbox with the image source
const containers = document.querySelectorAll('.grid-item-container');
containers.forEach((container, index) => {
  container.addEventListener('click', () => {
    console.log('ascsa')
    openLightbox(files[index].webContentLink); // Open the corresponding image
  });
});

// Add a click event listener to the close button to close the lightbox
closeButton.addEventListener('click', () => {
  closeLightbox();
});

async function loadFilesAndPopulateGrid() {
    const folderId = getFolderIdFromURL();

    const [files, checkError] = await get_files(folderId);

    if (checkError) {
      const imageGrid = document.getElementById('image-grid');
      imageGrid.innerHTML = ''; // Clear the existing content

      files.sort((a, b) => a.name.localeCompare(b.name));

      for (const file of files) {
        const container = document.createElement('div');
        container.classList.add('grid-item-container');

        const img = document.createElement('img');
        img.src = file.webContentLink;
        img.alt = file.name;
        img.classList.add('grid-item');

        const fileInfo = document.createElement('div');
        fileInfo.classList.add('file-info');

        const fileName = document.createElement('div');
        fileName.classList.add('file-name');
        fileName.textContent = getFileNameWithoutExtension(file.name);

        fileInfo.appendChild(fileName); // Move the file name element to the left
        container.appendChild(fileInfo);
        container.appendChild(img);

        // Add a click event listener to open the image with a shadow background
        container.addEventListener('click', () => {
                console.log('ascsa')
                openLightbox(file.webContentLink); // Open the corresponding image
        });
        img.addEventListener('click', () => {
            console.log('ascsa')
            openLightbox(file.webContentLink); // Open the corresponding image
        });
        fileName.addEventListener('click', () => {
            console.log('ascsa')
            openLightbox(file.webContentLink); // Open the corresponding image
        });
        imageGrid.appendChild(container);
      }

      // After updating the grid, perform the search again
      performSearch();
    }
    return checkError;
  }
  // Function to get the file name without extension
  function getFileNameWithoutExtension(fileName) {
    return fileName.split('.').slice(0, -1).join('.');
  }
