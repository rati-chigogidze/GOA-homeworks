import os

def rename_folders_in_directory(directory):
    try:
     
        if not os.path.exists(directory):
            print(f"Directory not found: {directory}")
            return


        folders = [f for f in os.listdir(directory) if os.path.isdir(os.path.join(directory, f))]
        if not folders:
            print("No folders found in the specified directory.")
            return


        folders.sort()

        print("\nRenaming folders...")
        for i, folder in enumerate(folders):
            new_name = f"level {i:03}" 


            old_path = os.path.join(directory, folder)
            new_path = os.path.join(directory, new_name)
            os.rename(old_path, new_path)
            print(f"{folder} -> {new_name}")

        print("\nFolders renamed successfully!")

    except Exception as e:
        print(f"Error: {e}")


    directory = r"https://github.com/rati-chigogidze/GOA-homeworks.git"  
    rename_folders_in_directory(directory)