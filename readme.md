# 🔐 Modern Full-Stack Authentication System

A cutting-edge full-stack authentication system featuring a blazing-fast Vite + React frontend and a secure Node.js/Express backend. Built with modern best practices and a focus on developer experience.

## ✨ Features

### Frontend
- **Lightning Fast**: Built with Vite for instant hot module replacement
- **Modern UI**: React with TypeScript for type-safe development
- **State Management**: React Context API for global state
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS for modern, responsive design
- **Protected Routes**: Secure route handling with React Router
- **Toast Notifications**: User-friendly feedback system
- **Loading States**: Skeleton loaders and spinners
- **Responsive Design**: Mobile-first approach

### Backend
- **Secure Authentication**: JWT-based authentication with refresh token rotation
- **Password Security**: Bcrypt password hashing with salt rounds
- **Database Integration**: MongoDB with Mongoose ODM
- **Environment Configuration**: Secure environment variable management with dotenv
- **CORS Protection**: Configurable CORS policies
- **Input Validation**: Comprehensive request validation
- **Error Handling**: Centralized error handling
- **Rate Limiting**: Protection against brute force attacks
- **Logging**: Detailed request logging

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ayukshh/log_reg
cd auth-system
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/auth-system
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d
```

4. Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
```

5. Start the development servers:

```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev
```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Refresh Token
```http
POST /api/auth/refresh-token
Content-Type: application/json

{
  "refreshToken": "your_refresh_token"
}
```

## 🔒 Security Features

- **JWT Implementation**: Secure token-based authentication with refresh token rotation
- **Password Hashing**: Bcrypt with configurable salt rounds
- **CORS Protection**: Configurable CORS policies
- **Rate Limiting**: Protection against brute force attacks
- **Input Validation**: Request validation and sanitization
- **Secure Headers**: Implementation of security headers
- **Error Handling**: Secure error responses
- **XSS Protection**: Frontend security measures
- **CSRF Protection**: Cross-Site Request Forgery prevention

## 🛠️ Tech Stack

### Frontend
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Form Handling**: React Hook Form + Zod
- **Routing**: React Router
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Security**: bcrypt, cors, helmet
- **Environment**: dotenv
- **Validation**: express-validator
- **Logging**: winston

## 📦 Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/         # Custom React hooks
│   │   ├── layouts/       # Page layouts
│   │   ├── pages/         # Route components
│   │   ├── services/      # API services
│   │   ├── types/         # TypeScript types
│   │   ├── utils/         # Utility functions
│   │   ├── App.tsx        # Root component
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
│
└── backend/
    ├── src/
    │   ├── config/        # Configuration files
    │   ├── controllers/   # Route controllers
    │   ├── middleware/    # Custom middleware
    │   ├── models/        # Mongoose models
    │   ├── routes/        # API routes
    │   ├── services/      # Business logic
    │   ├── utils/         # Utility functions
    │   └── app.js         # Express app setup
    └── .env              # Environment variables
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Vite team for the amazing build tool
- React team for the incredible UI library
- Express.js team for the robust backend framework
- MongoDB team for the powerful database


---

Made with ❤️ by Ayush Bhattarai
