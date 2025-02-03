**Job Portal** 🚀  
A full-stack Job Portal application built with **MERN (MongoDB, Express, React, Node.js)**.  

## **📌 Features**  
- User Authentication (JWT & OAuth)  
- Job Listings & Applications  
- Role-Based Access (Admin, Recruiter, Job Seeker)  
- Resume Upload & Profile Management  
- Responsive UI with TailwindCSS  
- REST API with Express.js  
- Database Integration (MongoDB)  

---

## **🛠️ Tech Stack**  
### **Frontend**  
- **React.js** (Vite for fast development)  
- **TailwindCSS** (Styling)  
- **ShadCN/UI** (UI Components)  
- **Axios** (API Calls)  

### **Backend**  
- **Node.js** (Runtime)  
- **Express.js** (Framework)  
- **MongoDB + Mongoose** (Database)  
- **JWT Authentication**  
- **Cloudinary** (Resume & Profile Image Uploads)  

---

## **📂 Folder Structure**  
```
Job-Portal/
│── backend/                  # Backend (Node.js & Express)
│   ├── controllers/          # API Controllers
│   ├── models/               # Mongoose Models
│   ├── routes/               # API Routes
│   ├── middlewares/          # Auth & Error Handling
│   ├── .env                  # Environment Variables
│   ├── server.js             # Main Server File
│
│── frontend/                 # Frontend (React.js)
│   ├── src/                  # Main React Source
│   │   ├── components/       # Reusable UI Components
│   │   ├── pages/            # Page Components
│   │   ├── assets/           # Static Assets
│   │   ├── App.jsx           # Main App Component
│   │   ├── index.css         # Global Styles
│   ├── tailwind.config.js    # Tailwind Configuration
│   ├── vite.config.js        # Vite Configuration
│
│── .gitignore                # Ignore Unnecessary Files
│── package.json              # Dependencies & Scripts
│── README.md                 # Project Documentation
```

---

## **🚀 Getting Started**  
### **1️⃣ Backend Setup**  
```bash
cd backend
npm install
npm run dev
```
- Configure **.env** file for database and JWT keys.

### **2️⃣ Frontend Setup**  
```bash
cd frontend
npm install
npm run dev
```
- Ensure TailwindCSS is configured properly.

---

## **🛠️ Environment Variables**  
Create a `.env` file in the backend directory and add:  
```env
MONGO_URI=your_mongo_db_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET=your_secret
```

---

## **💡 Contributing**  
Want to contribute? Follow these steps:  
1. **Fork** the repository.  
2. Create a new **branch** (`git checkout -b feature-branch`).  
3. **Commit** your changes (`git commit -m "Added feature"`).  
4. Push to **GitHub** (`git push origin feature-branch`).  
5. Open a **Pull Request**.  

---

## **📃 License**  
This project is licensed under the **MIT License**.  