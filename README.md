#  Mini Expense Tracker

A professional full-stack Expense Tracker application built to demonstrate **real-world data handling, aggregation, filtering, and UI visualization skills**.

This project is designed based on the official assignment:

> “Exercise 2: Mini Expense Tracker – Build an application that allows users to track daily spending and view financial summaries.”

---

#  Live Demo

Frontend (Vercel):  
https://your-frontend-url.vercel.app

Backend (Render):  
https://your-backend-url.onrender.com

---

#  Project Overview

This application allows users to:

- Track daily expenses across multiple categories
- Analyze spending habits through summaries and charts
- Filter data by date range and category
- Export financial data for external use
- Manage budgets per category

No authentication is required (single-user system assumption).

---

#  Core Features

## 1. Expense Management
- Add new expense with:
  - Amount (positive number)
  - Category (Food, Transport, Bills, Entertainment, Other)
  - Date
  - Optional note
- View all expenses in a structured table
- Edit existing expense records
- Delete expenses securely

---

## 2. Filtering System
- Filter by category
- Filter by date range:
  - This Month
  - Last Month
  - Custom Range

---

## 3. Summary Dashboard
Displays real-time financial insights:

- Total spent this month
- Total spending per category
- Highest single expense

---

## 4. Data Visualization
- Bar Chart / Pie Chart using Recharts
- Category-wise spending analysis

---

## 5. Currency Formatting
- Consistent INR formatting
- Example: ₹1,234.50
- Implemented using `Intl.NumberFormat`

---

## 6. Form Validation
- Prevent negative values
- Prevent future dates
- Required category selection
- Input sanitization

---

#  Bonus Features (Advanced Level)

## 1. CSV Export
- Export visible (filtered) expenses
- Download data in CSV format instantly

---

## 2. Budget System (Advanced Feature) pending
- Set monthly budget per category
- Real-time comparison:
  - If spending exceeds budget → Warning state
  - Else → Safe state
- Visual indicator for budget tracking

---

## 3. Persistence Layer
Supports multiple storage approaches:
- MongoDB (primary implementation)

---

#  Tech Stack

## Frontend
- React.js (Vite)
- Tailwind CSS
- Recharts
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- json2csv

---

# Project Architecture

```

client/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
     

server/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middlewares/
├── server.js
├── .env

````

---



### Environment Variables

Create `.env` file:

```
PORT=5000
MONGO_URI=mongodb+srv://kishuraj1111_db_user:qZSeQRRn0ylx9tEI@cluster0.09zh1zq.mongodb.net
```

---

## 1. Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Environment Variables

```
VITE_API_URL=http://localhost:5000/api
```

---

# API Endpoints

## Expenses

* `POST /api/expenses` → Create expense
* `GET /api/expenses` → Fetch expenses (with filters)
* `PUT /api/expenses/:id` → Update expense
* `DELETE /api/expenses/:id` → Delete expense

## Summary

* `GET /api/expenses/summary` → Dashboard analytics

## Export

* `GET /api/export/csv` → CSV download

---

#  Business Logic

## Summary Calculations

* Monthly total → MongoDB aggregation ($match + $group)
* Category-wise total → group by category
* Highest expense → max value calculation

---

## Budget Logic

* User defines budget per category
* System compares spending vs budget:

  * If spending > budget → Red alert
  * Else → Green status

---

# Screenshots


/screenshots/dashboard.png
![alt text](image.png)

/screenshots/add-expense.png

![alt text](image-1.png)


/screenshots/charts.png

![alt text](image-2.png)


---

# Key Highlights (For Reviewers)

* Clean REST API architecture
* Efficient MongoDB aggregation queries
* Reusable React components
* Real-time filtering and updates
* Scalable folder structure

---



---

# 👨‍💻 Developer

**Kishu Raj**
Full Stack Developer (MERN)

---

# 📌 Note for Reviewers

This project demonstrates:

* Strong understanding of full-stack architecture
* Real-world data processing and aggregation
* UI/UX implementation with React
* Backend API design with Express & MongoDB
* Scalable and production-ready code structure

---
