
import os
import requests
from urllib.parse import urlparse

def download_file(url, folder):
    try:
        # Send a GET request to download the file
        response = requests.get(url)
        
        # Extract the filename from the URL
        filename = os.path.join(folder, os.path.basename(urlparse(url).path))
        
        # Save the file
        with open(filename, "wb") as f:
            f.write(response.content)
        
        print(f"Downloaded: {url}")
    except Exception as e:
        print(f"Failed to download {url}: {str(e)}")

def save_webpage(url, folder):
    # Send a GET request to the URL
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Create the folder if it doesn't exist
        if not os.path.exists(folder):
            os.makedirs(folder)
        
        # Save the HTML content to a file
        html_filename = os.path.join(folder, "webpage.html")
        with open(html_filename, "w", encoding="utf-8") as f:
            f.write(response.text)
        print(f"Webpage HTML saved successfully as '{html_filename}'")

        # Extract accompanying files (images, stylesheets, etc.)
        # Here, you need to parse the HTML content to identify the URLs of accompanying files
        # Then, download each file using the download_file function
        # For simplicity, I'm just showing how to download a hypothetical image
        # Replace this with actual parsing logic to identify and download accompanying files
        accompanying_files = ["https://example.com/image.jpg", "https://example.com/style.css"]
        for file_url in accompanying_files:
            download_file(file_url, folder)
    else:
        print("Failed to fetch webpage. Status code:", response.status_code)

# URL of the webpage you want to save
url = "https://www.amazon.com/product-reviews/B0CJCHDKLF/ref=cm_cr_arp_d_paging_btm_next_2?ie=UTF8&filterByStar=five_star&reviewerType=all_reviews&pageNumber=2#reviews-filter-bar"

# Folder where you want to save the webpage and accompanying files
folder = "product2/r51"

# Save the webpage and accompanying files
save_webpage(url, folder)
