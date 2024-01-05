import psycopg2
from psycopg2 import sql

# Function to connect to PostgreSQL and create a table if not exists
def create_table():
    try:
        # Connect to the PostgreSQL database
        connection = psycopg2.connect(
            host="streamlitdemo.cz08a084ewcv.us-west-2.rds.amazonaws.com",
            database="streamlit_image_data",
            user="streamlit_admin",
            password="Streamlit123"
        )

        cursor = connection.cursor()

        create_table_query = """
            CREATE TABLE IF NOT EXISTS image_data (
                id SERIAL PRIMARY KEY,
                prompt TEXT,
                image TEXT
            );
        """

        # Execute the query
        cursor.execute(create_table_query)

        # Commit the changes to the database
        connection.commit()

        print("Table 'image_data' created successfully!")

    except Exception as e:
        print("Error:", e)


# Call the create_table function to ensure the table exists
create_table()

