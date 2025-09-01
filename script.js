const numWallsInput = document.getElementById('numWalls');
const heightsInput = document.getElementById('heights');
const visualizeBtn = document.getElementById('visualizeBtn');
const visualizationContainer = document.getElementById('visualization-container');
const yAxisLabelsContainer = document.getElementById('y-axis-labels');
const leftCountSpan = document.getElementById('left-count');
const rightCountSpan = document.getElementById('right-count');

const VISUALIZATION_HEIGHT = 300;
const NUMBER_OF_LABELS = 5;

// EVENT LISTENERS
visualizeBtn.addEventListener('click', () => {
    renderVisualization();
});

//===============================================================================================

// Function that coordinated with the entire visualization process
function renderVisualization() {
    // Gets and prepares the user's data
    const numWalls = parseInt(numWallsInput.value);
    const heightsString = heightsInput.value;
    const heightsArray = heightsString.split('#').map(h => parseInt(h));

    // It validates the user's input
    if (!isValidInput(numWalls, heightsArray)) {
        alert('Heads up! The number of wall heights you entered doesn\'t match the number of walls, or some values aren\'t numbers. Please double-check and try again.');
        return;
    }

    // It resets the visualization area for a fresh start
    clearVisualization();

    // It draws the walls and the height labels
    const wallElements = drawWalls(heightsArray);
    drawYAxisLabels(heightsArray);
    
    // It calculates and highlights which walls are visible
    const { leftVisibleCount, rightVisibleCount } = calculateVisibleWalls(heightsArray, wallElements);

    // It displays the final results to the user
    displayResults(leftVisibleCount, rightVisibleCount);
}

// Function to check if the input is valid
function isValidInput(numWalls, heightsArray) {
    return heightsArray.length === numWalls && !heightsArray.some(isNaN) && numWalls > 0;
}

// Function to clear all elements from the visualization containers
function clearVisualization() {
    visualizationContainer.innerHTML = '';
    yAxisLabelsContainer.innerHTML = '';
}

// Function to draw and scale the wall bars
function drawWalls(heightsArray) {
    const wallElements = [];
    const maxHeight = Math.max(...heightsArray);

    heightsArray.forEach(height => {
        const wall = document.createElement('div');
        wall.classList.add('wall');
        wall.style.height = `${(height / maxHeight) * VISUALIZATION_HEIGHT}px`;
        visualizationContainer.appendChild(wall);
        wallElements.push(wall);
    });
    return wallElements;
}

// Function to create and display the y-axis labels
function drawYAxisLabels(heightsArray) {
    const maxHeight = Math.max(...heightsArray);
    for (let i = 0; i <= NUMBER_OF_LABELS; i++) {
        const label = document.createElement('div');
        const labelValue = Math.round((maxHeight / NUMBER_OF_LABELS) * i);
        label.textContent = labelValue;
        yAxisLabelsContainer.appendChild(label);
    }
}

// Function to calculate and apply visibility styling
function calculateVisibleWalls(heightsArray, wallElements) {
    // Calculate visible walls from the left
    let leftVisibleCount = 0;
    let maxSeenLeft = 0;
    for (let i = 0; i < heightsArray.length; i++) {
        if (heightsArray[i] > maxSeenLeft) {
            leftVisibleCount++;
            maxSeenLeft = heightsArray[i];
            wallElements[i].classList.add('visible-left');
        }
    }

    // Calculate visible walls from the right
    let rightVisibleCount = 0;
    let maxSeenRight = 0;
    for (let i = heightsArray.length - 1; i >= 0; i--) {
        if (heightsArray[i] > maxSeenRight) {
            rightVisibleCount++;
            maxSeenRight = heightsArray[i];
            wallElements[i].classList.add('visible-right');
        }
    }
    return { leftVisibleCount, rightVisibleCount };
}

// Function to update the results display
function displayResults(leftCount, rightCount) {
    leftCountSpan.textContent = leftCount;
    rightCountSpan.textContent = rightCount;
}