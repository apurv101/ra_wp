import json
import pandas as pd
from pathlib import Path
import csv

# Define the path to the current directory
THIS_FOLDER = Path(__file__).parent.resolve()

# Define the products
products = ['product1', 'product2', 'product3', 'product4']

# Initialize an empty list to hold all reviews
all_reviews = []

# Iterate through each product
for product in products:
    # Define the file paths for all reviews and top reviews
    all_reviews_file = THIS_FOLDER / product / 'all_review_data.json'
    top_reviews_file = THIS_FOLDER / product / 'top_review_data.json'

    # Load the all review data
    with open(all_reviews_file, 'r') as file:
        all_review_data = json.load(file)

    # Load the top review data
    with open(top_reviews_file, 'r') as file:
        top_review_data = json.load(file)

    # Add the all reviews data to the list with the product name and file source
    for review in all_review_data:
        # Convert image_urls array to comma-separated string
        review['image_urls'] = ','.join(review.get('image_urls', []))
        review['product_name'] = product
        review['source'] = 'all review'
        all_reviews.append(review)

    # Add the top reviews data to the list with the product name and file source
    for review in top_review_data:
        # Convert image_urls array to comma-separated string
        review['image_urls'] = ','.join(review.get('image_urls', []))
        review['product_name'] = product
        review['source'] = 'top review'
        all_reviews.append(review)

# Create a DataFrame from the list of reviews
reviews_df = pd.DataFrame(all_reviews)

# Define the columns to include in the CSV file
columns = ['product_name', 'source', 'id', 'Reviewer', 'Rating', 'Title', 'Date', 'Body', 'Number', 'image_urls']

# Save the DataFrame to a CSV file with proper quoting
reviews_df.to_csv(THIS_FOLDER / 'all_product_reviews.csv', index=False, columns=columns, quoting=csv.QUOTE_ALL)
