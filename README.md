
# 🌟 Health Tracker & BMI Calculator 🌟

An interactive web application designed to promote health awareness by calculating Body Mass Index (BMI) and tracking daily water intake. This project combines functionality, aesthetics, and responsiveness for an engaging user experience.

---

## 🚀 Features

1. **BMI Calculator** 🧮:
   - Input height (cm) and weight (kg) to calculate BMI.
   - Categorizes BMI into health zones:
     - Underweight
     - Normal Weight
     - Overweight
     - Obesity

2. **Water Intake Tracker** 💧:
   - Track water consumption with each 250ml intake.
   - Dynamic progress bar visualization.
   - Celebration on reaching 2000ml with animations and congratulatory messages.

3. **Interactive UI** ✨:
   - Gradient-animated background.
   - Smooth progress bar transitions.
   - Confetti animation for achievements.

4. **Responsive Design** 📱:
   - Seamlessly adapts to desktop, tablet, and mobile devices.

---

## 🎯 Purpose

This project aims to:
- Educate users on BMI and its categories.
- Encourage healthy hydration habits with fun, gamified tracking.
- Provide an engaging and visually appealing user experience.

---

## 🌐 Demo

🔗 **Live Demo**: [BMI calculator Demo](https://healthtrackerandbmicalculator.netlify.app/)  


---

## 📸 Screenshots

### **BMI Calculator**
![BMI Calculator Screenshot](https://github.com/Yashkolte1/Health-Tracker-BMI-Calculator/blob/main/Health%20Tracker%20And%20BMI%20Calculator.jpg?raw=true)  


### **Water Intake Tracker**
![Water Intake Tracker Screenshot](https://github.com/Yashkolte1/Health-Tracker-BMI-Calculator/blob/main/Health%20Tracker%20And%20BMI%20Calculator%201.jpg?raw=true)  


---

## 🛠️ Technologies Used

- **HTML**: To structure the content.
- **CSS**: For styling and animations.
- **JavaScript**: To provide interactivity and dynamic behavior.

---

## 🔧 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/health-tracker.git
   ```
2. Navigate to the project folder:
   ```bash
   cd health-tracker
   ```
3. Open `index.html` in your browser:
   - Double-click the file.
   - Or use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for a better experience.

---

## 💻 Code Overview

The project is designed with simplicity and modularity in mind. All functionality is combined into a single `index.html` file for easy deployment.

### Code Highlights:
- **BMI Calculation**:
   ```javascript
   function calculateBMI(height, weight) {
       const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
       return bmi;
   }
   ```
- **Dynamic Progress Bar**:
   ```javascript
   function updateWaterIntake(current, target) {
       const progress = (current / target) * 100;
       document.querySelector('.progress-bar').style.width = `${progress}%`;
   }
   ```
- **Confetti Animation**:
   Integrated for celebration upon achieving water intake goals.

---

## 📝 File Structure

```plaintext
📁 health-tracker/
├── 📄 index.html   # Single-file application (HTML, CSS, JS combined)
└── 📄 README.md    # Documentation
```

---

## ✨ Customization

1. **Water Intake Goal**:
   - Adjust the `dailyTarget` variable in the JavaScript section for custom goals.

2. **Styling**:
   - Modify gradient colors or animation speeds in the CSS section.

3. **BMI Categories**:
   - Update the categories logic in the JavaScript for custom thresholds.

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it as you like!

---

## 💡 Future Enhancements

- **Daily Logging**: Track BMI and water intake over multiple days.
- **Dark Mode**: Add a toggle for light and dark themes.
- **Mobile Optimization**: Further enhance the UI for smaller screens.

---



## 🙋 About the Author

👤 **Kyash**  
💼 [GitHub Profile](Yashkolte1)  
📧 [Contact Me](yashthetopslugger@gmail.com)  

---

## 🌟 Show Your Support

If you like this project, please consider giving it a ⭐ on GitHub! Your support means a lot.
