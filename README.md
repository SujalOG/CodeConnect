# CodeConnect ⚡
> **Real-Time Collaborative Code Editor, Multi-Language Compiler & Developer Workspace**

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-green.svg)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/Frontend-React%2018%20%7C%20Vite-blue.svg)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-darkgreen.svg)](https://nodejs.org/)
[![Socket.io](https://img.shields.io/badge/RealTime-Socket.io-black.svg)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20%7C%20DaisyUI-38B2AC.svg)](https://tailwindcss.com/)
[![Monaco Editor](https://img.shields.io/badge/Editor-Monaco%20Editor-007ACC.svg)](https://microsoft.github.io/monaco-editor/)

---

## 📌 Overview

**CodeConnect** is a full-stack, real-time developer collaboration platform designed for pair programming, remote technical interviews, and team coding sessions. It pairs a high-performance multi-file code editor with live synchronization, remote multi-language code execution, interactive architectural whiteboarding, multimedia team chat, and project task management into a single, unified workspace.

---

## 💼 Resume Ready Highlights (Copy & Paste)

> **Full-Stack Developer / Software Engineer — CodeConnect**
> - **Real-Time Collaboration Engine:** Engineered a multi-user collaborative coding workspace using **React 18**, **Monaco Editor**, and **Socket.io**, enabling real-time file tree synchronization, cursor tracking, and zero-conflict multi-user editing.
> - **Cloud Code Execution:** Integrated the **Piston Remote Execution Engine** to compile and run code across 8+ languages (JavaScript, Python, C, C++, Java, Ruby, Go, PHP) with real-time stdout/stderr streaming.
> - **Rich Media Collaboration:** Built an in-room real-time chat supporting media attachments (images, video, audio, code files) using **Multer** and **Cloudinary CDN**, with message persistence in **MongoDB**.
> - **System Architecture & Canvas:** Integrated an interactive digital whiteboard using **Excalidraw** for diagramming and live system architecture brainstorming directly within the coding session.
> - **Secure Authentication & RBAC:** Implemented JWT-based session security, email verification via **Nodemailer**, password reset workflows, and social login with **Google OAuth** and **GitHub OAuth**.

---

## ✨ Core Features

| Feature | Description |
| :--- | :--- |
| 🧑‍💻 **Monaco Code Editor** | VS Code-powered multi-file editor with syntax highlighting, customizable themes (`vs-dark`, `light`), and language switching. |
| 🔄 **Live Sync & Room State** | Real-time code broadcasting and connected user presence tracking powered by Socket.io rooms. |
| ⚡ **Multi-Language Compiler** | Execute code on the fly in Python, C, C++, Java, JS, Go, Ruby, and PHP with instant terminal output. |
| 🎨 **Interactive Whiteboard** | Built-in canvas for system design diagrams, flowcharts, and technical explanations. |
| 💬 **Multimedia Room Chat** | In-workspace messaging with real-time socket events, past message history, and Cloudinary media uploads. |
| 📋 **Developer Todo Manager** | Built-in task tracker with task deadlines, priority ranking, and persistent MongoDB sync. |
| 💾 **Project Snapshots** | Save active room files directly into personal projects in MongoDB and restore them with one click. |
| 🔐 **Comprehensive Auth** | Email account activation, JWT sessions, password reset, and Google/GitHub OAuth integrations. |

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework & Build:** React 18, Vite
- **Code Editor:** `@monaco-editor/react`, `react-ace`
- **Styling & UI:** Tailwind CSS, DaisyUI, Lucide React, React Icons, Framer Motion
- **Networking & Real-Time:** `socket.io-client`, `axios`
- **State & Routing:** React Context API, React Router DOM v6
- **Feedback & Toasts:** `react-hot-toast`, `react-toastify`

### **Backend**
- **Runtime & Framework:** Node.js, Express.js
- **Real-Time Communication:** Socket.io
- **Database & ODM:** MongoDB, Mongoose
- **Authentication & Validation:** JSON Web Tokens (`jsonwebtoken`, `express-jwt`), `express-validator`, `crypto`
- **Media & Email:** Multer, Cloudinary SDK, Nodemailer
- **Code Execution API:** Piston Execution API

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** (v18 or v20+ recommended)
- **MongoDB** (Local MongoDB Community Server running on `mongodb://localhost:27017` or MongoDB Atlas URI)
- **npm** or **yarn**

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/SujalOG/CodeConnect.git
cd CodeConnect
```

---

### Step 2: Configure Environment Variables

#### 1. Backend Configuration (`server/.env`)
Create a `.env` file in the `server` directory:
```env
PORT=4500
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# MongoDB Connection String
MONGO_URI=mongodb://localhost:27017/codeconnect

# JWT Secrets (Can be any random secure string for local dev)
JWT_SECRET=codeconnect_jwt_secret_dev_key_2026_!@#
JWT_ACCOUNT_ACTIVATION=codeconnect_jwt_activation_key_dev_2026_!@#
JWT_RESET_PASSWORD=codeconnect_jwt_reset_key_dev_2026_!@#

# Default avatar API
PROFILE_PIC_API=https://api.dicebear.com/7.x/bottts/svg

# Email Credentials (Optional for local testing; required for account activation emails)
GMAIL_ID=
GMAIL_APP_PASSWORD=
EMAIL_FROM=no-reply@codeconnect.dev

# Cloudinary Credentials (Optional for local testing; required for chat media uploads)
CLOUDINARY_CLOUDNAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

#### 2. Frontend Configuration (`Client/.env`)
Create a `.env` file in the `Client` directory:
```env
VITE_BACKEND_ROOT_ENDPOINT=http://localhost:4500
VITE_BACKEND_ENDPOINT=http://localhost:4500/api

# OAuth Client IDs (Optional for local development)
VITE_GOOGLELOGIN_CLIENT_ID=
VITE_GITHUBLOGIN_CLIENT_ID=
```

---

### Step 3: Install Dependencies

#### Install Server Dependencies
```bash
cd server
npm install
npm install axios
```

#### Install Client Dependencies
```bash
cd ../Client
npm install
```

---

### Step 4: Run the Application

Open two terminal windows:

#### Terminal 1 — Start the Backend:
```bash
cd server
npm run dev
# Server will run on: http://localhost:4500
```

#### Terminal 2 — Start the Frontend:
```bash
cd Client
npm run dev
# Vite client will run on: http://localhost:5173
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 API Reference Overview

### **Auth Endpoints** (`/api`)
- `POST /api/signup` — Request account creation & triggers activation email
- `POST /api/account-activation` — Verify token & register user
- `POST /api/signin` — Authenticate user and return JWT
- `PUT /api/forgot-password` — Send password reset link
- `PUT /api/reset-password` — Reset password using verification token

### **Room Endpoints** (`/api/rooms`)
- `GET /api/rooms` — Fetch all active rooms
- `POST /api/rooms/new` — Create a new room with a unique UUID
- `POST /api/rooms/delete` — Delete room (creator only)
- `POST /api/rooms/files` — Retrieve current file list for a room
- `POST /api/rooms/files/update` — Save active room files state to MongoDB

### **Compiler Endpoint** (`/api/compiler`)
- `POST /api/compiler/compile` — Executes user code via Piston API (`language`, `code`)

### **Project & Todo Endpoints** (`/api`)
- `POST /api/project` — Snapshot and save room files as a named project
- `GET /api/project/:userId` — List all saved projects for a user
- `DELETE /api/project/:projectId` — Delete a saved project
- `POST /api/user/todos` — Fetch user's persistent todo list
- `POST /api/user/todos/update` — Update user's persistent todo list

---

## 🔌 Socket.io Events Reference

| Event Name | Direction | Payload Description |
| :--- | :--- | :--- |
| `join` | Client $\rightarrow$ Server | `{ roomId, userDeatils }` — User joins room |
| `joined` | Server $\rightarrow$ Room | `{ connectedUsers, username, socketId }` — User joined broadcast |
| `code-change` | Bi-directional | `{ roomId, files, fileId }` — Real-time editor code delta sync |
| `sync-code` | Client $\rightarrow$ Server | `{ files, socketId }` — Sync state to newly joined user |
| `message` / `send-message`| Bi-directional | `{ messageObject, roomId, senderObject }` — Real-time chat message |
| `disconnected` | Server $\rightarrow$ Room | `{ socketId, username }` — User left room broadcast |

---

## 📄 License
This project is licensed under the **ISC License**. Developed by [Sujal](https://github.com/SujalOG).
