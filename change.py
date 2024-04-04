
filename = 't33'

import re

def find_div_indices(text):
    start_indices = [m.start() for m in re.finditer(r'<div class="cr-helpful-button cr-vote-component aok-float-left">', text)]
    end_indices = [m.end() for m in re.finditer(r'</div>', text)]

    div_indices = []

    for start_index in start_indices:
        next_to_next_end_index = -1
        count = 0
        for end_index in end_indices:
            if end_index > start_index:
                count += 1
            if count == 2:
                next_to_next_end_index = end_index
                break
        div_indices.append((start_index, next_to_next_end_index))

    return div_indices

# Example usage:
# text = '''
# <div class="cr-helpful-button cr-vote-component aok-float-left">Div 1</div>
# <div>Some other content</div>
# <div class="cr-helpful-button cr-vote-component aok-float-left">Div 2</div>
# <div>Some other content</div>
# <div class="cr-helpful-button cr-vote-component aok-float-left">Div 3</div>
# <div>Some other content</div>
# '''


# def create_altered_copy():
with open(f'p1h/{filename}.html', "r") as file:
    html_content = file.read()

indices = find_div_indices(html_content)

replacement_strings = []
for i, (start, end) in enumerate(indices, 1):
    instance = (html_content[start:end])
    pattern = r'id="a-autoid-(\d+)"'
    match = re.search(pattern, instance)
    if match:
        # Extracting the ID from the match
        id_number = match.group(1)
        print("ID:", id_number)
    else:
        print("ID not found in the string.")

    replacement_string = f"""
    <div class="cr-helpful-button cr-vote-component aok-float-left" onclick="callFlaskAPI({id_number})">
    <span class="a-declarative"><span class="a-button a-button-base" id="a-autoid-{id_number}"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit" value="Mark this review as helpful BUTTON" aria-labelledby="a-autoid-{id_number}-announce"><span class="a-button-text" aria-hidden="true" id="a-autoid-{id_number}-announce"><div class="cr-helpful-text">
        Read</div>
    </span></span></span></span></div>
    """
    replacement_strings.append((start, end, replacement_string))


    print(replacement_strings)




    # replacement_strings.sort(reverse=True)
    modified_string = html_content
    offset = 0

    for start, end, replacement in replacement_strings:
    # Adjust start and end indices by the cumulative offset
        start += offset
        end += offset
        modified_string = modified_string[:start] + replacement + modified_string[end:]

        # Update the offset based on the change in length
        offset += len(replacement) - (end - start)



    js_code = """


    <script>
        function callFlaskAPI(commentNumber) {
            console.log('here');
            // Create an object containing form data
            const formData = new FormData();
            formData.append('html_file_name', 'example.html');
            formData.append('comment_number', commentNumber);
            formData.append('user_id', '123');

            // Make a POST request to your Flask API endpoint
            fetch('http://127.0.0.1:5000/add_response', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data.message); // Log the response message
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });


            var buttonElement = document.getElementById('a-autoid-' + commentNumber.toString());

            // Define the hex values for button color and border color
            var buttonColorHex = '#EDFCFF'; 
            var borderColorHex = '#058295'; 

            // Set the styles
            buttonElement.style.backgroundColor = buttonColorHex;
            buttonElement.style.borderColor = borderColorHex;
        }
    </script>


    """

    with open(f'p1h/{filename}_1.html', 'w') as file:
        file.write(modified_string + js_code)





        








            
            
            





