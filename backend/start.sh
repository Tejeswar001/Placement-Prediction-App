#!/bin/bash
# Start the Flask application with Gunicorn
exec gunicorn --chdir src --bind 0.0.0.0:$PORT --workers 1 app:app
