import os

folder_path = "images/objects"  # Path to the folder

# Get a list of all files in the folder
file_list = os.listdir(folder_path)

# Sort the file list alphabetically
file_list.sort()

# Rename each file with the desired format
for i, filename in enumerate(file_list):
    # Generate the new filename
    new_filename = f"object{i+1}"
    # Get the full path of the file
    file_path = os.path.join(folder_path, filename)
    new_file_path = os.path.join(folder_path, new_filename)
    # Rename the file
    os.rename(file_path, new_file_path)
    print(f"Renamed {filename} to {new_filename}")
