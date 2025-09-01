## 🧱 Wall Visualization Tool
This is a web-based application that graphically represents a series of walls based on user input and calculates how many of them are visible from both the left and right perspectives.

## 🚀 Features
* **Interactive Visualization:** Dynamically generates a scaled graphical representation of walls.

* **Visibility Calculation:** Computes the number of walls visible from a left-to-right and right-to-left viewpoint.

* **Input Validation:** Ensures the user provides valid input to prevent errors.

* **Modern UI:** A clean and responsive design built with a dark theme.

## 💻 Technologies Used
* **HTML5:** For the project's structure and content.

* **CSS3:** For styling, including Flexbox for layout and custom gradients for the visualization grid.

* **JavaScript (ES6+):** For all the core logic, calculations, and DOM manipulation.

## 🛠️ How to Run the Project
# 1. Clone the Repository (if applicable):
git clone [your-repo-url]

# 2. Navigate to the Project Directory:
cd wall-visualization-tool

# 3. Open the File:
Simply open the index.html file in your preferred web browser. The application will run directly in the browser without the need for a server.

## 📌 Project Structure
.
├── index.html          # The main HTML file
├── style.css           # The CSS file for all styling
├── script.js           # The JavaScript file for all functionality
└── README.md           # This file

## 🧠 Logic Behind the Visibility Calculation
The visibility is determined by a simple but effective algorithm. A wall is considered visible if it is taller than the tallest wall seen so far.

Visible from Left: The script loops through the walls from left to right, keeping track of the maximum height encountered. Any wall that is taller than this maximum is counted as visible.

Visible from Right: The same logic is applied, but the script loops through the walls in reverse, from right to left.

This approach ensures that the calculation is accurate and efficient.