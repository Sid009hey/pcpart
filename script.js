// Get the search input and button elements
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

// Get the parts list element
const partsList = document.querySelector("#parts");

// Add an event listener to the search button
searchButton.addEventListener("click", function() {
  // Get the search query
  const searchQuery = searchInput.value.toLowerCase();

  // Loop through the parts
  for (let i = 0; i < partsList.children.length; i++) {
    const part = partsList.children[i];
    const partName = part.textContent.toLowerCase();

    // Check if the part name contains the search query
    if (partName.includes(searchQuery)) {
      // Show the part
      part.style.display = "block";
    } else {
      // Hide the part
      part.style.display = "none";
    }
  }
});


// Fetch the JSON mock data from an API or a JSON file
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    // Clear the contents of the parts list
    partsList.innerHTML = "";

    // Loop through the parts
    for (let i = 0; i < data.length; i++) {
      const part = data[i];

      // Create a new list item for the part
      const partItem = document.createElement("li");
      partItem.textContent = `${part.name}`;

      // Append the list item to the parts list
      partsList.appendChild(partItem);
    }
  })
  .catch(error => console.log(error));