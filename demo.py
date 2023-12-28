import streamlit as st

import requests
import io
from PIL import Image

API_URL = "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.content

def getImage(input):
    image_bytes = query({
    	"inputs": input,
    })
    return image_bytes

# Define the main function for the Streamlit app
def main():
    # Set the page title
    st.title("StreamLit Demo")

    # Add a space for layout purposes
    st.write(" ")

    # Create a centered textbox for user input
    user_input = st.text_input("Enter propmt here:", key="user_input", value="")

    # Add a space for layout purposes
    st.write(" ")

    # Create a centered button
    button_clicked = st.button("Generate")

    # Display the input as a heading when the button is clicked
    if button_clicked:
        st.header(f"You entered: {user_input}")
        image_bytes = getImage(user_input)
        image = Image.open(io.BytesIO(image_bytes))
        st.image(image, caption=user_input, use_column_width=True)

# Run the app
if __name__ == "__main__":
    main()
