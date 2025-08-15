# Placement Prediction Application

A full-stack web application that predicts student placement probability using machine learning. The application consists of a Flask-based REST API backend and a Next.js frontend.

## 🚀 Features

- **Machine Learning Prediction**: Uses a trained Random Forest model to predict placement outcomes
- **Modern Web Interface**: Clean, responsive UI built with Next.js and Tailwind CSS
- **Real-time Predictions**: Instant results based on student input data
- **RESTful API**: Well-structured backend API for predictions
- **Input Validation**: Comprehensive validation for all user inputs
- **Error Handling**: Graceful error handling and user feedback

## 📋 Prerequisites

- **Python 3.8+** (for backend)
- **Node.js 18+** (for frontend)
- **npm or yarn** (package manager)
- **Git** (version control)

## 🏗️ Project Structure

```
APP/
├── backend/                 # Flask API server
│   ├── src/
│   │   ├── app.py          # Main Flask application
│   │   └── random_forest_model.pkl # Trained ML model
│   ├── requirements.txt    # Python dependencies
│   ├── .gitignore         # Backend ignore rules
│   └── README.md          # Backend documentation
├── frontend/               # Next.js web application
│   ├── src/
│   │   └── app/           # App router pages
│   ├── public/            # Static assets
│   ├── package.json       # Node.js dependencies
│   ├── .env.example       # Environment template
│   └── README.md          # Frontend documentation
├── .gitignore             # Global ignore rules
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Tejeswar001/Placement-Prediction-App.git
cd APP
```

### 2. Setup Backend

```bash
cd backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# On Linux/Mac:
source .venv/bin/activate
# On Windows:
# .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the backend server
cd src
python app.py
```

The backend API will be available at `http://localhost:5000`

### 3. Setup Frontend

Open a new terminal window:

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 🔧 Configuration

### Backend Configuration

The backend runs on Flask's default settings. For production:

1. Set environment variables:

   ```bash
   export FLASK_ENV=production
   export FLASK_DEBUG=False
   ```

2. Use a production WSGI server:
   ```bash
   gunicorn -w 4 -b 0.0.0.0:5000 app:app
   ```

### Frontend Configuration

Update `.env.local` with your backend URL:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```

For production deployment, update the API URL to your production backend.

## 📊 Model Information

The application uses a Random Forest model trained on student data with the following features:

- IQ	Student’s IQ score (normally distributed around 100)
- Prev_Sem_Result	GPA from the previous semester (range: 5.0 to 10.0)
- CGPA	Cumulative Grade Point Average (range: ~5.0 to 10.0)
- Academic_Performance	Annual academic rating (scale: 1 to 10)
- Internship_Experience	Whether the student has completed any internship (Yes/No)
- Extra_Curricular_Score	Involvement in extracurriculars (score from 0 to 10)
- Communication_Skills	Soft skill rating (scale: 1 to 10)
- Projects_Completed	Number of academic/technical projects completed (0 to 5)

**Output**: Binary classification (0 = Not Placed, 1 = Placed)

## 🌐 API Endpoints

### POST /predict

Predicts placement probability for a student.

**Request:**

```json
{
  "features": ['IQ', 'Prev_Sem_Result', 'CGPA', 'Academic_Performance',
       'Internship_Experience', 'Extra_Curricular_Score',
       'Communication_Skills', 'Projects_Completed']
}
```

**Response:**

```json
{
  "prediction": 0 or 1
}
```

## 📱 Usage

1. **Navigate** to the frontend application at `http://localhost:3000`
2. **Go to** the prediction page
3. **Enter** student details:
   - CGPA (0.0 - 10.0)
   - IQ Score (80 - 200)
   - Profile Score (0 - 100)
   - Experience (years)
4. **Click** "Predict Placement" to get the result
5. **View** the prediction result

## 🛠️ Development

### Backend Development

```bash
cd backend
source .venv/bin/activate  # Activate virtual environment
cd src
python app.py  # Run with auto-reload enabled
```

### Frontend Development

```bash
cd frontend
npm run dev  # Run with hot reload
```

### Code Quality

Backend:

```bash
# Install development dependencies
pip install flake8 black pytest

# Format code
black .

# Lint code
flake8 .

# Run tests
pytest
```

Frontend:

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint -- --fix
```

## 🚀 Production Deployment

### Backend Deployment

1. **Environment Setup**:

   ```bash
   pip install gunicorn
   ```

2. **Run with Gunicorn**:

   ```bash
   gunicorn -w 4 -b 0.0.0.0:5000 app:app
   ```

3. **Docker Deployment** (optional):
   ```dockerfile
   FROM python:3.9-slim
   WORKDIR /app
   COPY requirements.txt .
   RUN pip install -r requirements.txt
   COPY src/ .
   EXPOSE 5000
   CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
   ```

### Frontend Deployment

1. **Build for Production**:

   ```bash
   npm run build
   ```

2. **Start Production Server**:

   ```bash
   npm start
   ```

3. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

## 🧪 Testing

### Backend Testing

```bash
cd backend
python -m pytest tests/
```

### Frontend Testing

```bash
cd frontend
npm test
```

## 📈 Performance

- **Backend**: Flask with Gunicorn can handle ~1000 requests/second
- **Frontend**: Next.js optimized builds with automatic code splitting
- **Model**: Random Forest provides fast inference (~1ms per prediction)

## 🔒 Security

- **CORS**: Properly configured for cross-origin requests
- **Input Validation**: All inputs are validated on both client and server
- **Environment Variables**: Sensitive data stored in environment files
- **Production Settings**: Debug mode disabled in production

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - _Tejeswar Naidu_ - [GitHub](https://github.com/Tejeswar001)

## 🙏 Acknowledgments

- Flask team for the excellent web framework
- Next.js team for the amazing React framework
- scikit-learn contributors for the machine learning tools

## 📞 Support

If you have any questions or need help:

1. **Check** the documentation in each directory
2. **Open** an issue on GitHub

---

**Happy Coding! 🎉**
