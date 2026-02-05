import mysql.connector
from mysql.connector import errorcode

def create_tables():
    config = {
        'user': 'root',
        'password': 'tarun@4857',
        'host': 'localhost',
        'database': 'doctor_website'
    }

    TABLES = {}
    TABLES['doctor'] = (
        "CREATE TABLE IF NOT EXISTS doctor ("
        "  `id` int(11) NOT NULL AUTO_INCREMENT,"
        "  `name` varchar(255) NOT NULL,"
        "  `age` int(11) NOT NULL,"
        "  `experience` varchar(255) NOT NULL,"
        "  `kyc_image` varchar(500),"
        "  `photo` varchar(500),"
        "  `clinic_location` text,"
        "  `timings` varchar(255),"
        "  `login_id` varchar(255) NOT NULL,"
        "  `password` varchar(255) NOT NULL,"
        "  PRIMARY KEY (`id`)"
        ") ENGINE=InnoDB")

    TABLES['patients'] = (
        "CREATE TABLE IF NOT EXISTS patients ("
        "  `id` int(11) NOT NULL AUTO_INCREMENT,"
        "  `name` varchar(255) NOT NULL,"
        "  `age` int(11) NOT NULL,"
        "  `issue` text,"
        "  `phno` varchar(20),"
        "  `location` text,"
        "  `login_id` varchar(255) NOT NULL,"
        "  `password` varchar(255) NOT NULL,"
        "  PRIMARY KEY (`id`)"
        ") ENGINE=InnoDB")

    TABLES['main_admin'] = (
        "CREATE TABLE IF NOT EXISTS main_admin ("
        "  `id` int(11) NOT NULL AUTO_INCREMENT,"
        "  `login_id` varchar(255) NOT NULL,"
        "  `password` varchar(255) NOT NULL,"
        "  PRIMARY KEY (`id`)"
        ") ENGINE=InnoDB")

    TABLES['appointments'] = (
        "CREATE TABLE IF NOT EXISTS appointments ("
        "  `id` int(11) NOT NULL AUTO_INCREMENT,"
        "  `doctor_id` int(11) NOT NULL,"
        "  `patient_id` int(11) NOT NULL,"
        "  `appointment_date` DATE NOT NULL,"
        "  `appointment_time` TIME NOT NULL,"
        "  `status` ENUM('scheduled', 'completed', 'cancelled', 'rescheduled') DEFAULT 'scheduled',"
        "  `notes` TEXT,"
        "  PRIMARY KEY (`id`),"
        "  FOREIGN KEY (`doctor_id`) REFERENCES doctor(`id`) ON DELETE CASCADE,"
        "  FOREIGN KEY (`patient_id`) REFERENCES patients(`id`) ON DELETE CASCADE"
        ") ENGINE=InnoDB")

    try:
        cnx = mysql.connector.connect(**config)
        cursor = cnx.cursor()

        for table_name in TABLES:
            table_description = TABLES[table_name]
            try:
                print(f"Creating table {table_name}: ", end='')
                cursor.execute(table_description)
            except mysql.connector.Error as err:
                if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
                    print("already exists.")
                else:
                    print(err.msg)
            else:
                print("OK")

        cursor.close()
        cnx.close()
    except mysql.connector.Error as err:
        print(f"Error connecting to database: {err}")

if __name__ == "__main__":
    create_tables()
