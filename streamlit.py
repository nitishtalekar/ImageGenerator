import streamlit as st
import requests
import io
from PIL import Image
import psycopg2
from psycopg2 import sql
import boto3
from botocore.exceptions import NoCredentialsError
import random
from dotenv import load_dotenv

# Load environment variables from a file
load_dotenv()

def get_env_variable(var_name):
    return os.environ.get(var_name)

def generate_filename(user_input):
    stripped_input = user_input.replace(" ", "")
    random_int1 = random.randint(1, 1000)
    random_int2 = random.randint(1, 1000)
    result = f"{random_int1}{stripped_input}{random_int2}.jpg"
    return result

def upload_image_to_s3(image_bytes, file):
    bucket_name = get_env_variable('BUCKET_NAME')
    s3_file_key = file
    aws_access_key_id = get_env_variable('AWS_ACCESS_KEY')
    aws_secret_access_key = get_env_variable('AWS_SECRET_KEY')
    try:
        s3 = boto3.client('s3', aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key)
        s3.upload_fileobj(io.BytesIO(image_bytes), bucket_name, s3_file_key)
        s3_url = f"https://{bucket_name}.s3.amazonaws.com/{s3_file_key}"
        print("Data uploaded successfully!")
        return s3_url
    except NoCredentialsError:
        print("Credentials not available")

def add_data(prompt, url):
    try:
        connection = psycopg2.connect(
            host=get_env_variable('DB_HOST'),
            database=get_env_variable('DB_NAME'),
            user=get_env_variable('DB_USER'),
            password=get_env_variable('DB_PASSWORD')
        )
        cursor = connection.cursor()

        insert_query = sql.SQL("""
            INSERT INTO image_data (prompt, image)
            VALUES (%s, %s);
        """)

        cursor.execute(insert_query, (prompt, url))

        connection.commit()

        print("Data added successfully!")

    except Exception as e:
        print("Error:", e)

    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

API_URL = "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5"
headers = {"Authorization": get_env_variable('HF_KEY')}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

def getImage(input):
    image_bytes = query({
        "inputs": input,
    })
    return image_bytes

def main():

    st.title("StreamLit Application")
    st.write(" ")
    user_input = st.text_input("Enter your prompt here:", key="user_input", value="")
    st.write(" ")
    button_clicked = st.button("Generate")
    if button_clicked:
        st.header(f"You entered: {user_input}")
        image_bytes = getImage(user_input)
        image = Image.open(io.BytesIO(image_bytes))
        url = upload_image_to_s3(image_bytes, generate_filename(user_input))
        add_data(user_input, url)
        st.image(image, caption=user_input, use_column_width=True)

# Run the app
if __name__ == "__main__":
    main()
