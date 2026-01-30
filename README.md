💬 MarsChat

A Telegram-inspired messaging application built to explore message flows, inbox management, and backend data modeling, without using WebSockets or real-time communication.

Messages are delivered through standard HTTP requests, focusing on correct backend logic and UX structure rather than real-time transport.

🚀 Live Demo

👉 Live: https://mars-chat.vercel.app/

👉 Repository: https://github.com/MarkoMTP/MarsChat

✨ Features

User authentication

One-to-one and group inboxes

Message sending and retrieval

Message history per conversation

Group chat logic and membership handling

Clean, simple messaging UI

Non-real-time message delivery (HTTP-based)

⚠️ This project intentionally does not use WebSockets or real-time subscriptions.

🛠 Tech Stack
Frontend

React

Vite

TailwindCSS

React Router

Fetch / Axios

Backend

Node.js

Express.js

Prisma ORM

PostgreSQL

JWT authentication

REST API architecture

🧩 Project Focus

MarsChat was built to focus on:

Designing messaging data models

Handling conversation and message relationships

Structuring backend logic for chat systems

Building predictable REST-based message flows

Separating concerns between frontend and backend

Creating a clean messaging UX without real-time complexity

This project prioritizes correctness, structure, and clarity over real-time delivery.

📚 What I Learned

Modeling conversations, messages, and users in PostgreSQL

Designing REST APIs for messaging workflows

Handling pagination and message history

Managing authentication in multi-user systems

Building chat UIs driven by backend state

Understanding trade-offs between REST and WebSockets

📦 Getting Started Locally
git clone https://github.com/MarkoMTP/MarsChat.git
cd MarsChat
npm install
npm run dev

🔮 Possible Improvements

Real-time messaging with WebSockets or WebRTC

Message read receipts

Typing indicators

Message reactions

Push notifications

👤 Author

Marko Matković
Full-stack developer & software engineering student
📍 Padova, Italy

GitHub: https://github.com/MarkoMTP
