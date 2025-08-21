see project ui here: https://e-commerce-store-by-baxrom.netlify.app/ <br/>
see backend here: https://github.com/brenthardt/e-commerce-store-backend.git <br/>
see figma here : https://www.figma.com/design/xyT6B6th4ucBzsheOmXLyK/Full-E-Commerce-Website-UI-UX-Design--Community-?node-id=34-213&t=zch2BaIb6VoTTgxl-0 <br/>


#  E-Commerce Store Frontend

This is the **frontend** of the **E-Commerce Store** project, built with **React + Vite**, **Redux Toolkit**, **React Router v7**, and **TailwindCSS**.  
It integrates with the [backend API](https://github.com/your-username/e-commerce-store-backend) and provides a modern UI with authentication, protected routes, and role-based access for admins.

---

## Features

- 🔑 **JWT Authentication** with refresh token support
- 🔒 **Protected Routes** using a custom `<ProtectedRoute />`
- 👤 **Role-Based Access** (admin vs normal users)
- 🛍️ E-commerce functionality:
  - Wishlist
  - Cart
  - Checkout
- 📦 Admin-only pages:
  - Dashboard
  - Manage Users (`AUser`)
  - Manage Products (`AProduct`)
- 📱 Fully responsive UI with **TailwindCSS**
- 🌀 Token refresh interceptor using `axios`

---

##  Tech Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Rodal](https://github.com/chenjiahan/rodal) (for modals)
- [React Responsive Carousel](https://github.com/leandrowd/react-responsive-carousel)

---

##  Project Structure (Key Files)

src/ <br/>
│── App.jsx # Main router configuration <br/>
│── Protected/ProtectedRoute.jsx <br/>
│── Armory/userActions.js # Redux user actions <br/>
│── AuthContext.jsx # Authentication context <br/>
│── useAxiosWithRefresh.js # Axios instance with refresh token logic <br/>
│ <br/>
├── Components/ # Reusable user-facing pages <br/>
│ ├── HomePage.jsx <br/>
│ ├── Wishlist.jsx <br/>
│ ├── Cart.jsx <br/>
│ ├── CheckOut.jsx <br/>
│ ├── Account.jsx <br/>
│ ├── About.jsx <br/>
│ ├── Contact.jsx <br/>
│ └── Details.jsx <br/>
│<br/>
├── AdminPages/ # Admin-only pages <br/>
│ ├── Dashboard.jsx <br/>
│ ├── AUser.jsx <br/>
│ └── AProduct.jsx <br/>



---

##  Authentication & Token Refresh

- On login/signup, the backend issues **JWT + Refresh Token**.
- Tokens are stored in `localStorage`.
- All API requests go through `useAxiosWithRefresh`:
  - Adds `Authorization: Bearer <token>` automatically.
  - If a `401 Unauthorized` occurs, it **automatically attempts to refresh the token**.
  - If refresh fails, user is logged out and redirected to `/login`.


Getting Started

1 Install Dependencies
npm install

2 Run the Development Server
npm run dev

##  Routes Overview

### Public Routes
- `/signup` → Sign up  
- `/login` → Login  
- `/*` → NotFound page  

### Protected Routes (user must be logged in)
- `/` → HomePage  
- `/wishlist` → Wishlist  
- `/cart` → Cart  
- `/checkout` → Checkout  
- `/account` → Account  
- `/about` → About  
- `/contact` → Contact  
- `/details/:id` → Product Details  

### Admin Routes (must be `ROLE_ADMIN`)
- `/dashboard` → Admin Dashboard  
- `/auser` → Manage Users  
- `/aproduct` → Manage Products  




 Dependencies (from package.json)
"dependencies": { <br/>
  "@reduxjs/toolkit": "^2.8.2", <br/>
  "axios": "^1.9.0", <br/>
  "react": "^18.3.1", <br/>
  "react-dom": "^18.3.1", <br/>
  "react-redux": "^9.2.0", <br/>
  "react-router-dom": "^7.5.3", <br/>
  "react-responsive-carousel": "^3.2.23", <br/>
  "react-scroll": "^1.9.3", <br/>
  "rodal": "^2.1.0", <br/>
  "autoprefixer": "^10.4.21", <br/>
  "tailwindcss": "^3.4.17" <br/>
} <br/>
