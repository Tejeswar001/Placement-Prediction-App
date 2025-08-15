# Frontend - Placement Prediction App

This is the frontend application for the Placement Prediction system. Built with Next.js, it provides a user-friendly interface for students to input their details and get placement predictions.

## Features

- Modern, responsive UI built with Next.js 15
- Real-time placement prediction
- Interactive forms with validation
- Smooth animations with Framer Motion
- Toast notifications for user feedback
- Styled with Tailwind CSS and DaisyUI

## Technologies Used

- **Next.js 15**: React framework for production
- **React 19**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS component library
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful & consistent icon toolkit
- **React Hot Toast**: Notifications

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

## Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Create environment file:

   ```bash
   cp .env.example .env.local
   ```

4. Update the environment variables in `.env.local` as needed

## Usage

### Development Mode

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
frontend/
├── public/
│   └── origami.svg           # Application logo/icon
├── src/
│   └── app/
│       ├── globals.css       # Global styles
│       ├── layout.js         # Root layout component
│       ├── page.js           # Home page
│       └── predict/
│           └── page.js       # Prediction page
├── package.json              # Dependencies and scripts
├── next.config.mjs          # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── jsconfig.json           # JavaScript configuration
├── eslint.config.mjs       # ESLint configuration
├── .env.example            # Environment variables template
└── README.md               # This file
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Features Overview

### Home Page

- Welcome message and application overview
- Navigation to prediction page
- Responsive design

### Prediction Page

- Input form for student details:
  - CGPA (0.0 - 10.0)
  - IQ Score (80 - 200)
  - Profile Score (0 - 100)
  - Experience (years)
- Real-time validation
- Prediction results display
- Error handling with user-friendly messages

## API Integration

The frontend communicates with the backend API at `/predict` endpoint:

```javascript
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    features: [cgpa, iq, profileScore, experience],
  }),
});
```

## Styling

The application uses:

- **Tailwind CSS** for utility-first styling
- **DaisyUI** for pre-built components
- **Custom CSS** for specific styling needs
- **Responsive design** for mobile and desktop

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

This application supports all modern browsers including:

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
