# 3D-rotate-animation-with-vanta-js
A 3D rotate animation with the usagae of Vanta.js

README.md - 3D Rotating Text Animation with Vanta.js Background
md
Copy
Edit
# 🎨 3D Rotating Text Animation with Vanta.js Background

A visually appealing **3D rotating text animation** placed over an interactive **"Net" background effect** using **Vanta.js**. This project combines CSS animations and JavaScript to create an engaging user experience.

---

## 🚀 **Live Demo**
🔗 [View Live Demo]([https://your-username.github.io/3d-rotate-animation/](https://kiran-kata.github.io/3D-rotate-animation-with-vanta-js/) 


---

## 📜 **Project Overview**
### **✨ What This Project Does**
This project creates a **rotating 3D text effect** that smoothly spins while an **animated net effect** generated by Vanta.js moves in the background.

### **🔹 Technologies Used**
✅ **HTML** – Structure of the webpage.  
✅ **CSS** – Styling and 3D animation effects.  
✅ **JavaScript** – Handles the dynamic Vanta.js background animation.  
✅ **Vanta.js** – Provides the animated "Net" effect in the background.  

---

## 📁 **Project Structure**
/3d-rotate-animation │-- index.html # Main HTML file │-- style.css # Styles for text animation & layout │-- script.js # JavaScript for Vanta.js background │-- rotate.css # Additional 3D text animation styles │-- three.min.js # Required dependency for Vanta.js │-- vanta.net.min.js # Vanta.js Net Effect Library │-- README.md # Project documentation


---

## 🛠 **Setup & Installation**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/3d-rotate-animation.git
cd 3d-rotate-animation
2️⃣ Open the Project
Simply open index.html in any browser.

3️⃣ Run Locally Using Live Server
If you use VS Code, install the Live Server extension and:

Right-click index.html → Open with Live Server.
🖥 How It Works
🔹 Vanta.js Background Animation
The #background div is used to display the Vanta.js Net effect.
The script.js file initializes this effect:
js
Copy
Edit
document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: "#background",
        color: 0xffffff,   // White net color
        backgroundColor: 0x1a1a2e,  // Dark navy blue background
        points: 12.0,  // Density of points
        maxDistance: 20.0,  // Distance between connecting lines
        spacing: 15.0  // Spacing between nodes
    });
});
🔹 3D Rotating Text Animation
The .box container has multiple text spans arranged in 3D rotation.
CSS transforms and animations give it a circular rotation effect.
Example of how each text element rotates:
css
Copy
Edit
.box span {
    transform: translate(-50%, -50%) rotateX(calc(var(--i) * 22.5deg)) translateZ(109px);
}
The keyframes animation smoothly rotates the entire box:
css
Copy
Edit
@keyframes animate {
    0% {
        transform: perspective(500px) rotateX(0deg) rotate(5deg);
    }
    100% {
        transform: perspective(50px) rotateX(360deg) rotate(5deg);
    }
}
🌍 Deploying to GitHub Pages
You can host your project online using GitHub Pages.

1️⃣ Push to GitHub

git add .
git commit -m "Initial commit"
git push origin main
2️⃣ Enable GitHub Pages
Go to your repository on GitHub.
Navigate to Settings → Pages.
Under Branch, select main, then click Save.
After a few minutes, your site will be live at:
arduino
https://your-username.github.io/3d-rotate-animation/
🎨 Customization Options
Want to modify the look and feel? Here’s how:

🔹 Change the Background Effect
Modify script.js:

js
Copy
Edit
VANTA.NET({
    el: "#background",
    color: 0xff0000,  // Change net color (Red)
    backgroundColor: 0x000000,  // Change background (Black)
});
🔹 Adjust Text Colors
Modify style.css:

css
Copy
Edit
.box span i:nth-child(1) {
    color: #00ff00; /* Change first color to Green */
}

.box span i:nth-child(2) {
    color: #ff00ff; /* Change second color to Purple */
}
🔹 Speed Up the Rotation
Modify @keyframes animate in style.css:

css
Copy
Edit
@keyframes animate {
    0% { transform: perspective(500px) rotateX(0deg) rotate(5deg); }
    100% { transform: perspective(50px) rotateX(360deg) rotate(5deg); }
}
Increase animation speed: Reduce the duration in .box animation.
css
Copy
Edit
.box {
    animation: animate 4s ease-in-out infinite alternate; /* Faster rotation */
}
🛠 Troubleshooting
Issue	Solution
Vanta.js effect not working	Make sure three.min.js and vanta.net.min.js are loaded correctly.
Text appears behind background	Ensure the .container has position: relative; to be above the background.
Slow performance on mobile	Reduce points and maxDistance in script.js.
