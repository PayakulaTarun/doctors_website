import mysql.connector

def add_columns():
    config = {
        'user': 'root',
        'password': 'tarun@4857',
        'host': 'localhost',
        'database': 'doctor_website'
    }

    alter_statements = [
        "ALTER TABLE doctor ADD COLUMN login_id VARCHAR(255) NOT NULL",
        "ALTER TABLE doctor ADD COLUMN password VARCHAR(255) NOT NULL",
        "ALTER TABLE patients ADD COLUMN login_id VARCHAR(255) NOT NULL",
        "ALTER TABLE patients ADD COLUMN password VARCHAR(255) NOT NULL",
    ]

    try:
        cnx = mysql.connector.connect(**config)
        cursor = cnx.cursor()

        for stmt in alter_statements:
            try:
                print(f"Executing: {stmt}")
                cursor.execute(stmt)
                print("Success")
            except mysql.connector.Error as err:
                print(f"Error: {err}")

        cursor.close()
        cnx.close()
    except mysql.connector.Error as err:
        print(f"Error connecting to database: {err}")

if __name__ == "__main__":
    add_columns()
