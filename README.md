# Calculadora Nicolas

#### Description:

## Overview

The project consists of three main files: `index.html`, `index.css`, and `index.js`. Each file plays a crucial role in building a functional and interactive calculator.

## File Descriptions

### 1. `index.html`
The `index.html` file contains the entire structure of the calculator, including all its buttons. This file is responsible for laying out the user interface elements, ensuring that the calculator is both functional and visually intuitive. Each button corresponds to a specific operation, ranging from basic arithmetic to advanced mathematical functions like factorial and square root.

### 2. `index.css`
The `index.css` file defines the calculator's styling, including support for both dark mode and light mode themes.  
- **Dark Mode and Light Mode:** Users can toggle between themes seamlessly, enhancing the calculator's usability across different environments.  
- **Design:** The design ensures clear visual feedback for button presses, maintaining a user-friendly interface. By utilizing CSS variables, the themes are efficiently implemented, allowing for easy updates and scalability.

### 3. `index.js`
The `index.js` file contains the core logic of the calculator, transforming the static HTML structure into an interactive application. Below is a breakdown of its key functions:

#### Clearing Functions
- **Input and Output Reset:** Two separate functions reset the input and output values, ensuring the calculator starts fresh for new operations.

#### Button Handling
A dedicated function captures the value of each button pressed, dynamically mapping user interactions to corresponding operations.

#### Calculation Logic
The `calculate` function is the centerpiece of the calculator’s logic. It performs:
- **Basic Arithmetic Operations:** Uses JavaScript's `eval` function to handle addition, subtraction, multiplication, and division while respecting mathematical precedence.  
- **Advanced Features:**
  - **Factorial:** Calculated using a recursive auxiliary function named `fat()`.
  - **Square Root:** Provides quick and accurate square root calculations.
  - **Modulo (MOD):** Computes the remainder of division operations.
  - **Pi (π):** Offers the mathematical constant Pi for advanced calculations.

#### Additional Functionalities
- **Copy Function:** Allows users to copy the result directly to their clipboard for easy use in other applications.  
- **Theme Switching:** Enables toggling between dark and light themes, enhancing comfort and accessibility.  
- **Recursive `fat()` Function:** A helper function specifically for calculating factorials using recursion. It demonstrates efficient problem-solving in JavaScript.

## Summary of Features

1. **Basic Operations:** Addition, subtraction, multiplication, and division with proper precedence.
2. **Advanced Functions:** Factorial, square root, modulo, and the constant Pi.
3. **Clipboard Support:** Copy results for external use.
4. **Theme Switching:** Dark mode and light mode for user comfort.
5. **User-Friendly Interface:** Responsive design with intuitive interaction.

## Conclusion

The calculator project showcases the effective integration of HTML, CSS, and JavaScript to build a versatile and user-friendly application.  
- The `index.html` file structures the interface.  
- The `index.css` file enhances the visual appeal and ensures adaptability through theme switching.  
- The `index.js` file implements robust functionality, supporting both basic and advanced operations.  

This project highlights technical skills in web development and a focus on user experience, balancing functionality and design. The inclusion of advanced mathematical features and practical enhancements like clipboard support demonstrates the project's versatility and utility.

The calculator serves as a comprehensive example of modern front-end development techniques and provides a foundation for further enhancements and features.



