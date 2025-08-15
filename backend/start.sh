#!/bin/bash
# Start the Flask application with Gunicorn from backend root
exec gunicorn --bind 0.0.0.0:$PORT --workers 1 app:app
