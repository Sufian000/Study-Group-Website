# Whispr — Real-time Chat Application  

---

## 📖 Overview  
**Whispr** is a lightweight, real-time chat application designed for **study groups and small teams**. It delivers instant communication with minimal friction, avoiding laggy polling and heavy frameworks.  

Developed as part of **CISC 3140 (Summer 2025)**:  
- **Sufian Ali** — Frontend Lead (React, WebSocket client)  
- **Muhammad Jamal** — Backend Lead (Node.js, Express, MongoDB)  

🔗 **Repository**: [Study-Group-Website](https://github.com/Sufian000/Study-Group-Website.git)  

---

## ✨ Features  
- ⚡ **Real-time messaging** with WebSockets  
- 🖥️ **Modern React SPA** with chat UI, conversation lists, and user selector  
- 🔐 **JWT-based authentication** (partial implementation)  
- 💬 **Message persistence** with MongoDB & Mongoose  
- 🛠️ **Structured error handling** with consistent responses  
- 📂 **Well-organized codebase** for future scaling  

---

## 🏗️ System Architecture  

**Frontend (React SPA)**  
- SPA with chat window, user selector, and conversation list.  
- Optimistic UI updates, WebSocket integration, toast notifications.  

**Backend (Node.js + Express)**  
- REST API for users, conversations, and messages.  
- JWT-based authentication middleware.  

**WebSocket Layer (ws)**  
- Handles events: `message:new`, `message:ack`, `presence:update`.  

**Database (MongoDB + Mongoose)**  
- Schemas for users, conversations, and messages.  
- Indexed queries for recent messages and conversation lists.  

---

## 🚀 Setup & Installation  

### Prerequisites  
- Node.js **v20+**  
- npm  
- MongoDB (local or remote instance)  

### Clone Repository  
```bash
git clone https://github.com/Sufian000/Study-Group-Website.git
cd Study-Group-Website
```

### Backend Setup  
```bash
cd server
cp .env.example .env   # configure MONGODB_URI and JWT_SECRET
npm install
npm run dev
```
Server runs at **http://localhost:4000**  

### Frontend Setup  
```bash
cd ../client
cp .env.example .env   # configure VITE_API_BASE and VITE_WS_URL
npm install
npm run dev
```
Client runs at **http://localhost:5173**  

---

## 🔑 Environment Variables  

**Server**  
- `MONGODB_URI` → MongoDB connection string  
- `JWT_SECRET` → JWT secret key  
- `PORT=4000`  

**Client**  
- `VITE_API_BASE=http://localhost:4000`  
- `VITE_WS_URL=ws://localhost:4000`  

---

## 🧪 Smoke Test  
1. Start MongoDB, backend server, and frontend client.  
2. Open client → Confirm **“Connection successful!”** banner.  
3. Check server logs for client connection acknowledgment.  

---

## 📂 Repository Structure  

```
Study-Group-Website/
├─ Frontend/                               # Client-side application (React)
│  ├─ src/                                 # Source code
│  │  ├─ components/                       # Reusable UI components
│  │  ├─ pages/                            # Views (LoginPage, Dashboard, StudyRoom)
│  │  ├─ styles/                           # CSS / SCSS / Tailwind styles
│  │  ├─ assets/                           # Images, icons, fonts
│  │  ├─ App.js / App.tsx                  # Main application component
│  │  └─ index.js / main.tsx               # Entry point
│  ├─ public/                              # Static files (index.html, favicon, logos)
│  ├─ package.json                         # Frontend dependencies
│  └─ vite.config.js / webpack.config.js   # Build configuration
│
├─ Backend/                                # Server-side application (API + logic)
│  ├─ src/
│  │  ├─ routes/                           # API routes (auth, groups, chat, users)
│  │  ├─ models/                           # Data models (User, Group, Message)
│  │  ├─ controllers/                      # API handlers
│  │  ├─ middleware/                       # Auth, validation, error handling
│  │  ├─ services/                         # Business logic (group matching, notifications)
│  │  ├─ utils/                            # Helper functions
│  │  └─ index.ts / server.js              # Backend entry point
│  ├─ package.json                         # Backend dependencies
│  └─ tsconfig.json / .env.example         # TypeScript config / env sample
│
├─ Assets/                                 # Shared resources
│  ├─ images/                              # Logos, icons, mockups
│  ├─ docs/                                # Documentation (reports, diagrams, architecture)
│  └─ ppt/                                 # Final project slides
│
├─ README.md                               # Project documentation
├─ .gitignore                              # Ignore rules
└─ .DS_Store                               # macOS system file (ignored)
```

---

## 🧭 Roadmap  
- ✅ Real-time messaging pipeline with acknowledgments  
- 🔑 Full authentication (UI, registration, password reset)  
- 📎 File/attachment uploads with pre-signed storage  
- 🔍 Conversation search & message pagination  
- 🐳 Docker deployment and CI/CD integration  

---
