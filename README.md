# TradeSphere — Stock Trading Platform

TradeSphere is a full-stack stock trading web application that simulates how modern trading platforms work.
Users can view stock prices, buy stocks, and track their holdings and positions in real time through an interactive dashboard.

This project was built to practice real-world backend APIs, database integration, and frontend dashboard design using the MERN stack.

---

##  Features

* Buy stocks from a watchlist
* View current holdings and positions
* Real-time dashboard interface
* Store orders and transactions in database
* Interactive charts and analytics
* Clean and responsive UI
* Full backend API integration

---

##  Tech Stack

### Frontend

* React.js
* Material UI
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Tools

* Git & GitHub
* REST APIs
* Nodemon

---

##  Project Structure

TradeSphere/
│
├── backend/        → Server, APIs, database models
├── frontend/       → Landing / main UI
├── dashboard/      → Trading dashboard
├── .gitignore
├── .env.example
└── README.md

---

##  How to Run This Project Locally

### 1️⃣ Clone the repository

git clone https://github.com/pk612004/tradesphere.git

cd tradesphere

---

### 2️⃣ Install dependencies

#### Backend

cd backend
npm install

#### Frontend

cd ../frontend
npm install

#### Dashboard

cd ../dashboard
npm install

---

###  Create environment file

Inside the **backend** folder, create:

.env

Add:

PORT=3002
MONGO_URL=your_mongodb_connection_string

---

###  Start the servers

#### Backend

cd backend
npm start

#### Frontend

cd ../frontend
npm start

#### Dashboard

cd ../dashboard
npm start

---

##  API Endpoints

GET /allHoldings
GET /allPositions
POST /newOrder

These APIs handle fetching and storing trading data.

---

##  What I Learned From This Project

* How frontend and backend communicate using APIs
* How to design a REST API using Express
* How to connect a Node.js server to MongoDB Atlas
* How to manage application state in React
* How to structure a full-stack project professionally
* How to debug real-world errors and deployment issues

---

##  Future Improvements

* Add Sell functionality
* Add user authentication (login/signup)
* Deploy project to cloud
* Add live stock price API
* Improve performance and error handling

---

##  Author

Prakash Kumar
B.Tech ECE — 3rd Year
Aspiring Software Engineer

---

##  If you found this project useful

Please consider giving it a star on GitHub.
