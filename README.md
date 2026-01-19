# SpinDry - Online Laundry Solution

## Project Overview
SpinDry is a comprehensive B2B and B2C online laundry management platform that provides:
- **Laundry Pickup & Delivery Service**: Schedule pickups, professional cleaning, and doorstep delivery
- **Laundry Shop**: Purchase detergents, fabric softeners, and laundry essentials
- **Clothing Rental**: Rent formal, casual, and business attire (perfect for students)

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB

## Project Structure
```
SpinDry-Improved/
├── frontend/                # React.js frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   └── utils/           # Utility functions
│   └── package.json
│
├── backend/                 # Node.js backend application
│   ├── config/              # Configuration files
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Custom middleware
│   ├── server.js            # Entry point
│   └── package.json
│
└── README.md
```

## Features

### 1. Laundry Service
- Schedule pickup and delivery
- Multiple service types (Wash & Fold, Dry Clean, Iron, Premium)
- Real-time order tracking
- Flexible scheduling

### 2. Shop
- Browse laundry products
- Add items to cart
- Secure checkout
- Product categories: Detergents, Softeners, Cleaners, Accessories

### 3. Rental Service
- Rent clothing for special occasions
- Categories: Formal, Casual, Business, Party
- Flexible rental periods
- Security deposit system

### 4. User Management
- User registration and authentication
- B2B and B2C account types
- Profile management
- Order history

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/spindry
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:3000
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (Protected)

### Orders
- `POST /api/orders` - Create new order (Protected)
- `GET /api/orders` - Get user orders (Protected)
- `GET /api/orders/:id` - Get order by ID (Protected)
- `PUT /api/orders/:id` - Update order (Protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Rentals
- `GET /api/rentals` - Get all rental items
- `GET /api/rentals/:id` - Get rental by ID
- `POST /api/rentals` - Create rental item (Admin)
- `PUT /api/rentals/:id` - Update rental item (Admin)
- `POST /api/rentals/:id/book` - Book rental (Protected)

## Database Models

### User
- Name, Email, Password (hashed)
- Phone, Address
- Role (user, business, admin)

### Order
- User reference
- Order type (laundry, product, rental)
- Items array
- Laundry details (pickup, delivery dates, address)
- Status tracking
- Payment status

### Product
- Name, Description, Category
- Price, Stock
- Images, Brand
- Rating and reviews

### Rental
- Name, Description, Category
- Size, Condition
- Price per day, Security deposit
- Availability status
- Current rental information

## Development

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

### Building for Production

Backend:
```bash
cd backend
npm start
```

Frontend:
```bash
cd frontend
npm run build
```

## Future Enhancements
- Payment gateway integration
- Real-time order tracking with maps
- Push notifications
- Mobile application
- Review and rating system
- Loyalty program
- Multi-language support
- Admin dashboard

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the ISC License.

## Contact
For any queries or support, please contact us at info@spindry.com 
