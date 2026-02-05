import mysql.connector

# Database Configuration
# In a real production app, use environment variables
db_config = {
    'user': 'root',
    'password': 'tarun@4857',
    'host': 'localhost',
    'database': 'doctor_website'
}

def get_db_connection():
    """Establishes and returns a connection to the database."""
    try:
        connection = mysql.connector.connect(**db_config)
        return connection
    except mysql.connector.Error as err:
        print(f"Error connecting to DB: {err}")
        return None
