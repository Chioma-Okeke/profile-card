# **📇 Responsive Profile Card**  
A simple, **responsive profile card** built using **HTML, CSS, and Vanilla JavaScript**. This project dynamically updates the **current UTC time** and displays essential personal details with a clean UI/UX design.  

![image](https://github.com/user-attachments/assets/9e7e9397-4b5f-4438-ad29-419bd99cb67f)

---

## **📌 Features**
✅ **Fully Responsive** – Adapts to different screen sizes (mobile, tablet, desktop).  
✅ **Profile Picture** – Displays a user's image with a flip effect.  
✅ **Full Name & Job Title** – Highlights the person's name and professional title.  
✅ **Short Bio** – A brief introduction about the user.  
✅ **Contact Information** – Displays email and location with clickable links.  
✅ **Social Media Links** – Directs to LinkedIn and GitHub profiles.  
✅ **Dynamic UTC Time** – Updates on page reload to show the current **Coordinated Universal Time (UTC)**.  

---

## **🛠 Tech Stack**
- **HTML5** – For structured content  
- **CSS3** – For styling and responsiveness  
- **JavaScript (Vanilla JS)** – Handles dynamic updates (e.g., time update, animations)  

---

## **🚀 Getting Started**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/profile-card.git
cd profile-card
```

### **2️⃣ Open in a Browser**
Simply open the `index.html` file in your browser.  

---

## **📌 How It Works**
1. **Loads the Profile Card** with smooth animations.  
2. **Updates the Current UTC Time** dynamically when the page is refreshed.  
3. **Displays User Information** (name, bio, email, job title, and location).  
4. **Shows Social Links** – Clicking them opens the respective profile.  
5. **Profile Flip Effect** – When hovered, the profile picture has an animated flip effect.  

---

## **📜 Code Overview**
### **🔹 JavaScript: Updating UTC Time**
```js
const currentTime = document.querySelector("[data-testid='currentTimeUTC']");

function updateTime() {
    const date = new Date();
    const updatedTime = date.toUTCString();
    currentTime.innerText = updatedTime;
}

// Updates the time on page load
document.addEventListener("DOMContentLoaded", updateTime);
```
📌 **What it does:**  
- Retrieves the **current UTC time**.  
- Updates it **only when the page loads or refreshes** (not every second).  

---
