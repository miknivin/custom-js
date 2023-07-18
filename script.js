
// Get the strong tags from the li elements under .hl_dashboard--matters-added .bottom-stats
const strongTagsMattersAdded = document.querySelectorAll('.hl_dashboard--matters-added .bottom-stats li strong');

// Define the background position range
const backgroundPositionRange = {
  min: -16,
  max: 0
};

// Iterate over the strong tags and adjust the background position
strongTagsMattersAdded.forEach((strongTag, index) => {
  // Get the value from the strong tag and convert it to a number
  const value = parseFloat(strongTag.textContent);

  // Handle the special case where the value is 0
  let backgroundPosition;
  if (value === 0) {
    backgroundPosition = -17.4;
  } 
  
  else {
    // Calculate the background position based on the value and range
    backgroundPosition = backgroundPositionRange.min + ((value - 1) / 3) * (backgroundPositionRange.max - backgroundPositionRange.min);
  }

  // Set the background position for the corresponding li element
  const liElement = strongTag.closest('li');
  liElement.style.backgroundPosition = `${backgroundPosition.toFixed(1)}vw 50%`;
  console.log(backgroundPosition)
});

