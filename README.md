# Venture Canada Leather

Venture Canada Leather is a modern and professional e-commerce platform for premium leather products. This project is built using the **MERN stack** with a focus on **React.js** for the frontend and **Node.js, Express.js, and MongoDB** for the backend.

## Features
- **Modern UI/UX** with responsive design
- **Product Listing & Details Page** with high-quality images
- **Category-based Navigation** for easy browsing
- **Google Cloud Storage Integration** for image hosting
- **REST API Backend** for efficient data management
- **Material UI Theming** for styling consistency

## Tech Stack
### Frontend:
- React.js (with hooks and components)
- Material UI & External CSS for styling
- React Router for navigation

### Backend:
- Node.js & Express.js
- MongoDB (Atlas) for database storage
- Google Cloud Storage for image management

## Project Structure
```
Venture-Canada-Leather/
│── client/ (React Frontend)
│── server/ (Node.js & Express Backend)
│── theme.js (Global Styling Theme)
│── .env (Environment Variables)
│── README.md
```

## Installation
### Prerequisites:
- Node.js & npm installed
- MongoDB Atlas account
- Google Cloud Storage account

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/venture-canada-leather.git
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd client && npm install
   cd ../server && npm install
   ```
3. Set up environment variables in `.env` files for both client and server.
4. Start the development server:
   ```sh
   cd client && npm start
   cd ../server && npm run dev
   ```

## API Endpoints
| Method | Endpoint         | Description              |
|--------|----------------|--------------------------|
| GET    | /api/products  | Fetch all products      |
| GET    | /api/products/:id | Fetch product details |
| POST   | /api/products  | Add a new product       |
| PUT    | /api/products/:id | Update a product     |
| DELETE | /api/products/:id | Delete a product     |

## Deployment
- The frontend can be deployed on **Vercel** or **Netlify**.
- The backend can be deployed on **Render** or **Heroku**.

## Contributions
Contributions, issues, and feature requests are welcome! Feel free to fork the repo and submit a pull request.

## License
This project is licensed under the MIT License.

---
**Wishing you a Wonderful Journey!** 🚀
