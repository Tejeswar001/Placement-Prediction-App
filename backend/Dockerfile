# Use Python 3.12 slim image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy requirements first for better caching
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY src/ ./src/

# Expose port
EXPOSE 5000

# Change to src directory and start the app
WORKDIR /app/src
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
