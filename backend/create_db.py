import mysql.connector
from mysql.connector import errorcode

def create_database():
    config = {
        'user': 'root',
        'password': 'tarun@4857',
        'host': 'localhost',
    }
    
    db_name = "doctor_website"

    try:
        # Establish connection to MySQL server
        cnx = mysql.connector.connect(**config)
        cursor = cnx.cursor()
        
        # Create database
        print(f"Attempting to create database: {db_name}")
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db_name}")
        print(f"Database '{db_name}' created successfully (or already existed).")
        
        # Verify creation
        cursor.execute("SHOW DATABASES")
        databases = [x[0] for x in cursor]
        if db_name in databases:
            print(f"SUCCESS: Database '{db_name}' found in MySQL server.")
        
        cursor.close()
        cnx.close()
        
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("ERROR: Access denied. Checked user/password.")
            print("Please update the script with correct MySQL credentials.")
        else:
            print(f"ERROR: {err}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    create_database()
