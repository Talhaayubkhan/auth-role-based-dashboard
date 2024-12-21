# 🚀 React Auth Dashboard

A **React-based authentication system** with login, signup, role-based access control (RBAC), and a protected dashboard. This project uses mock user data for backend authentication and localStorage for session handling.

---

## ✨ Features

- 🔑 **User Authentication**: Login and signup with input validation.
- 🔒 **Role-Based Access Control**: Admin/User roles with restricted access.
- 🛡️ **Protected Dashboard**: Only accessible to authenticated users.
- 🗄️ **Mock Backend**: Simulated using hardcoded JSON data.
- 🚪 **Logout Functionality**: Clears session and redirects to the login page.

---

## 📦 Installation

### Prerequisites

Ensure the following are installed on your system:

- 🖥️ [Node.js](https://nodejs.org/) (v14+ recommended)
- 📦 npm or yarn

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/react-auth-dashboard.git
   cd react-auth-dashboard
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm start
   ```

4. **View in Browser**
   Open your browser and visit:

   ```
   http://localhost:3000
   ```

---

## 🗂️ Project Structure

```
react-auth-dashboard/
│
├── /src
│   ├── /components
│   │   ├── /auth
│   │   │   ├── Login.jsx       # Login form
│   │   │   └── SignUp.jsx      # Signup form
│   │   └── /pages
│   │       ├── Dashboard.jsx   # Protected dashboard
│   │       └── Home.jsx        # Public home page
│   │
│   ├── /constants
│   │   └── users.js            # Mock user data
│   │
│   ├── App.jsx                 # Main application entry point
│   ├── index.js                # React DOM entry point
│   └── styles.css              # Optional custom styles
│
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

---

## ⚙️ Usage Instructions

### 1. **Login**

Use one of the pre-defined credentials from `src/constants/users.js`:

- **Admin**:
  - Email: `admin@example.com`
  - Password: `admin123`
- **User**:
  - Email: `user@example.com`
  - Password: `user123`

### 2. **Signup**

Sign up with new user details. Signup is currently simulated locally.

### 3. **Dashboard**

Access the protected dashboard after logging in. Only logged-in users can view this page.

### 4. **Logout**

Click the "Logout" button to clear your session and redirect to the login page.

---

## 🔧 Technical Details

### **Mock Backend**

- The mock user data is stored in `src/constants/users.js`.
- Authentication is simulated by comparing credentials against this data.

### **Role-Based Access**

- User roles (`Admin`/`User`) are managed via the `role` property in user data.
- Routes are protected using the `ProtectedRoute` component.

### **Session Management**

- User data and mock tokens are stored in `localStorage`.
- The session is cleared when the user logs out.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push the branch (`git push origin feature-name`).
5. Open a pull request.

---
