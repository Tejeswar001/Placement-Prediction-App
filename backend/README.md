# Backend - Placement Prediction API

This is the backend service for the Placement Prediction application. It provides a REST API for making placement predictions using a trained Random Forest model.

## Features

- Flask-based REST API
- Random Forest model for placement predictions
- CORS enabled for frontend integration
- Joblib model serialization

## Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

## Installation

1. Clone the repository and navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment:

   ```bash
   python -m venv .venv
   ```

3. Activate the virtual environment:

   - On Linux/Mac:
     ```bash
     source .venv/bin/activate
     ```
   - On Windows:
     ```bash
     .venv\Scripts\activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. Make sure the virtual environment is activated
2. Navigate to the src directory:
   ```bash
   cd src
   ```
3. Run the Flask application:
   ```bash
   python app.py
   ```

The API will be available at `http://localhost:5000`

## API Endpoints

### POST /predict

Predicts placement probability based on student features.

**Request Body:**

```json
{
  "features": [cgpa, iq, profile_score, experience]
}
```

**Response:**

```json
{
  "prediction": 0 or 1
}
```

Where:

- `0` = Not placed
- `1` = Placed

## Model

The application uses a pre-trained Random Forest model (`random_forest_model.pkl`) for making predictions. The model takes the following features:

- CGPA
- IQ Score
- Profile Score
- Experience

## Dependencies

- **Flask**: Web framework for creating the REST API
- **Flask-CORS**: Handles Cross-Origin Resource Sharing
- **scikit-learn**: Machine learning library
- **joblib**: Model serialization
- **pandas**: Data manipulation
- **numpy**: Numerical computing
- **gunicorn**: WSGI HTTP Server for production deployment

## Development

### Project Structure

```
backend/
├── src/
│   ├── app.py                 # Main Flask application
│   └── random_forest_model.pkl # Trained model file
├── requirements.txt           # Python dependencies
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

### Environment Variables

Currently, the application runs with default Flask settings. For production deployment, consider setting:

- `FLASK_ENV=production`
- `FLASK_DEBUG=False`

## Production Deployment

For production deployment, use a WSGI server like Gunicorn:

```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
