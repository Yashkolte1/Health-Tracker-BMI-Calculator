function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  if (!height || !weight || height <= 0 || weight <= 0) {
      document.getElementById('bmiResult').innerText = "Please enter valid values for height and weight.";
      return;
  }
  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obesity";

  document.getElementById('bmiResult').innerHTML = `Your BMI is <strong>${bmi}</strong> (<em>${category}</em>).`;
}

let waterConsumed = 0;
const dailyTarget = 2000;

function addWater() {
  if (waterConsumed >= dailyTarget) return;
  waterConsumed += 250;
  const progressPercentage = Math.min((waterConsumed / dailyTarget) * 100, 100);
  document.getElementById('waterProgress').style.width = `${progressPercentage}%`;
  document.getElementById('waterStatus').innerText = `${waterConsumed} / ${dailyTarget} ml`;

  if (waterConsumed >= dailyTarget) {
      showConfetti();
      setTimeout(() => alert("Congratulations! You've reached your daily water intake goal!"), 500);
  }
}

function showConfetti() {
  const confettiCanvas = document.getElementById('confettiCanvas');
  const confetti = [];
  const colors = ['#00509e', '#a1c4fd', '#fbc2eb', '#c2e9fb'];

  for (let i = 0; i < 100; i++) {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.width = `${Math.random() * 10 + 5}px`;
      div.style.height = `${Math.random() * 10 + 5}px`;
      div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      div.style.left = `${Math.random() * window.innerWidth}px`;
      div.style.top = `${Math.random() * window.innerHeight}px`;
      div.style.opacity = Math.random();
      div.style.transform = `rotate(${Math.random() * 360}deg)`;
      div.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
      confettiCanvas.appendChild(div);
      confetti.push(div);
  }

  setTimeout(() => {
      confetti.forEach(div => confettiCanvas.removeChild(div));
  }, 3000);
}
