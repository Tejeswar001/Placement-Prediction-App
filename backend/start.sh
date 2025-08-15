#!/bin/bash
# Navigate to the src directory where app.py is located
cd src
# Start the Flask application with Gunicorn
exec gunicorn --bind 0.0.0.0:$PORT --workers 4 app:app
