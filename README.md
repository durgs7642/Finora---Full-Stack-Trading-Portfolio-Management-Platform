# TradeX 📈

TradeX is a modern full-stack trading and investment platform designed to provide users with a seamless experience for exploring market data, analyzing stocks, managing portfolios, and executing virtual buy/sell operations. The platform focuses on security, performance, and real-time financial insights through an intuitive and responsive user interface.

---

## 🚀 Features

### 🔐 Authentication & Security

* JWT-based Authentication
* Secure User Registration & Login
* Protected Routes
* Role-Based Authorization
* Password Hashing using bcrypt
* Persistent User Sessions

### 📊 Market Analytics

* Interactive Stock Charts
* Real-Time Market Data Visualization
* Stock Performance Analysis
* Historical Price Trends
* Portfolio Insights
* Investment Tracking Dashboard

### 💹 Trading Functionality

* Buy Stock Simulation
* Sell Stock Simulation
* Portfolio Management
* Holdings Tracking
* Transaction History
* Investment Summary

### 💰 Brokerage & Financial Insights

* Brokerage Calculation
* Profit & Loss Tracking
* Investment Metrics
* Market Performance Monitoring

### 🎨 User Experience

* Responsive Design
* Modern Trading Dashboard
* Interactive UI Components
* Smooth Navigation
* Mobile-Friendly Interface

### ☁️ Cloud Integration

* Firebase Integration
* MongoDB Atlas Database
* Cloud-Based Data Management

---

## 🏗️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* Chart.js / Financial Chart Libraries

### Backend

* Node.js
* Express.js
* JWT Authentication
* REST APIs

### Database

* MongoDB Atlas
* Mongoose ODM

### Cloud & Deployment

* Firebase
* Render
* GitHub

---

## 📂 Project Structure

```bash
TradeX/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── build/
│
├── dashboard/
│   ├── src/
│   ├── public/
│   └── build/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
|   |   Util/
│   ├── public/
│   │   ├── frontend/
│   │   └── dashboard/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/tradex.git
cd tradex
```

### Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Dashboard

```bash
cd dashboard
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=3002

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

FIREBASE_API_KEY=your_firebase_key

FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain

FIREBASE_PROJECT_ID=your_project_id
```

---

## ▶️ Running the Project

### Start Frontend

```bash
cd frontend
npm start
```

### Start Dashboard

```bash
cd dashboard
npm start
```

### Start Backend

```bash
cd backend
npm start
```

---

## 📸 Key Modules

### User Authentication

* Secure signup and login
* JWT token generation
* Route protection

### Trading Dashboard

* Portfolio overview
* Holdings management
* Market insights

### Analytics Engine

* Stock trend visualization
* Performance metrics
* Investment analysis

### Transaction Management

* Buy operations
* Sell operations
* Transaction history tracking

---

## 🔒 Security Measures

* JWT Authentication
* Secure Password Hashing
* Protected API Endpoints
* Input Validation
* Authentication Middleware
* Environment Variable Protection

---

## 🌟 Future Enhancements

* Real-Time WebSocket Updates
* Advanced Portfolio Analytics
* Watchlist Management
* Notification System
* AI-Powered Market Insights
* Advanced Order Types
* Multi-Asset Support

---

## 👨‍💻 Author

**Durgesh Gupta**

B.Tech Student | Full Stack Developer

Passionate about building scalable web applications, financial technology solutions, and modern full-stack systems.

---

## 📄 License

This project is developed for educational, learning, and portfolio purposes.
