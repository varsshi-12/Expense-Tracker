# 💰 Expense Tracker

A **Full Stack Expense Tracker** application built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**. Track your expenses, view summaries, and manage your personal finance efficiently.

---

## 🚀 Features

- Add, edit, and delete daily expenses
- Monthly and overall expense summaries
- Dynamic UI rendered with EJS
- Persistent storage using PostgreSQL
- Modular and scalable architecture

---

## 🛠️ Tech Stack

**Frontend**:
- HTML5, CSS3
- EJS (Embedded JavaScript Templating)

**Backend**:
- Node.js
- Express.js

**Database**:
- PostgreSQL
- `pg` Node.js client

---

## 📁 Project Structure
expense-tracker/
├── public/
│ └── css/
│ └── style.css # Global CSS styles
│
├── views/
│ ├── partials/ # Reusable EJS partials
│ │ ├── dashboard.ejs # Dashboard view
│ │ ├── expenseList.ejs # List of expenses
│ │ └── monthly.ejs # Monthly expense summary
│
├── db.js # Database connection logic
├── schema # Database schema definition
├── server.js # Main server entry point (Express app)
└── style.css # (Optional duplicate, consider removing or merging)

## 📸 Screenshots

### 📊 Dashboard View
![Dashboard Screenshot](<img width="1920" height="1080" alt="Screenshot (23)" src="https://github.com/user-attachments/assets/e01c8b67-10e2-4389-8d73-776847df3fd1" />)

### ➕ Add Expense Form
![Add Expense](<img width="1920" height="1080" alt="Screenshot (21)" src="https://github.com/user-attachments/assets/0a19b552-eaff-4eed-9584-78cc7dd7b208" />)

### 📈 Monthly Summary
![Monthly Summary](<img width="1920" height="1080" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/3afe7d5a-a1a0-43ec-a88f-3bb04ba1b6c4" />)

## ⚙️ Installation & Setup

Follow these steps to get the Expense Tracker up and running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker

2. Install Dependencies

Install the required Node.js packages:

```bash
npm install

3. Set Up PostgreSQL Database
Create a PostgreSQL database, e.g., expense_db.

Create a table named expenses with the following SQL:

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  amount NUMERIC(10, 2) NOT NULL,
  category VARCHAR(100),
  date DATE NOT NULL DEFAULT CURRENT_DATE
);
4. Configure Environment Variables
Create a .env file in the root directory and add your PostgreSQL connection string:

DATABASE_URL=postgresql://your_username:your_password@localhost:5432/expense_db
PORT=3000
Replace your_username, your_password, and expense_db with your actual credentials.

5. Start the Server
Run the application:
npm start
The server should now be running at:
http://localhost:3000

### ✅ You're All Set!
