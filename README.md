
# 🔥🔥 VAANI: AI-Powered Biometric Assistant for the Visually Impaired 👁️🛡️

**VAANI** (meaning "Voice" or "Speech") is an intelligent, secure biometric-based assistant designed to empower visually impaired users. It combines facial recognition for secure authentication with the **Google Gemini AI** engine to summarize emails and manage Telegram messages through a voice-first interface.

---

## 🚀🚀 Features
- **Biometric Security:** Secure login/registration using facial data stored as encoded strings.
- **AI Summarization:** Real-time email and message summarization using Gemini 1.5 Flash.
- **Voice-First UI:** Minimalist interface where the branding itself acts as the system trigger.
- **Cloud-Synced:** Fully deployed architecture with persistent cloud database storage.

---

## 🛠️⚔️ Technology Stack

| Category         | Technology Used                                     |
|------------------|-----------------------------------------------------|
| **Frontend** | HTML5, Tailwind CSS, JavaScript (EJS Templates)    |
| **Backend** | Node.js, Express.js                                |
| **Database** | **MySQL (Hosted on Aiven)** |
| **AI Engine** | Google Generative AI (Gemini 1.5 Flash)            |
| **Deployment** | **Render (Backend) & GitHub (Version Control)** |
| **Messaging** | Telegram Bot API                                   |

---

## 📂💻 Project Architecture

- **`server.js`**: Main entry point. Handles Express routing, Gemini API integration, and Telegram proxy logic.
- **`db.js`**: Manages the connection pool to the **Aiven MySQL** instance.
- **`auth.controller.js`**: Contains logic for biometric registration and user authentication.
- **`views/`**: Contains EJS files for dynamic rendering of the UI.
- **`.env`**: (Local only) Stores secret keys. **Excluded from GitHub for security.**

---

## ⚙️⚙️ Installation & Local Setup

1. **Clone the Repository**:
   ```bash
   git clone [https://github.com/yourusername/vaani.git](https://github.com/yourusername/vaani.git)
   cd vaani
Install Dependencies:

Bash

npm install

Configure Environment Variables:

Create a .env file in the root directory:

Code snippet
PORT=3000
DB_HOST=your-aiven-hostname
DB_USER=your-aiven-username
DB_PASSWORD=your-aiven-password
DB_NAME=defaultdb
DB_PORT=your-aiven-port
GEMINI_API_KEY=your_key_here
Run the App:

Bash
npm start


🌐 Deployment Guide

1. Database (Aiven)
Create a MySQL service on Aiven.io.

Ensure the faceData column in your users table is set to LONGTEXT to accommodate biometric strings.

2. Backend (Render)
Connect your GitHub repository to Render.

Environment Variables: Manually add all keys from your .env file into the Render Dashboard under Settings > Environment.

Build Command: npm install

Start Command: node server.js (or npm start)

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Vijay Prasad, B.Tech Student | Aspiring MERN Stack Developer GitHub Profile

