import eel
import time
import platform

try:
    from tkinter import Tk
except ImportError:
    try:
        from Tkinter import Tk
    except ImportError:
        print("Error: tkinter not found")

try:
    from tkinter.filedialog import asksaveasfilename
except ImportError:
    from tkFileDialog import asksaveasfilename

file_data: str


@eel.expose
def file_parser_py(loaded_data) -> bool:
    global file_data
    time.sleep(5)
    if loaded_data:
        print(loaded_data)
        file_data = loaded_data
        return True
    return False


@eel.expose
def save_file():
    global file_data
    if not file_data:
        return False

    file_path = ask_file_save_location(None)
    with open(file_path, 'w') as file:
        file.write(file_data)

    return True


def ask_file_save_location(file_type):
    """ Ask the user where to save a file """
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)

    if (file_type is None) or (platform.system() == "Darwin"):
        file_path = asksaveasfilename(parent=root)
    else:
        if file_type == 'json':
            file_types = [('JSON Files', '*.json'), ('All files', '*')]
        else:
            file_types = [('All files', '*')]
        file_path = asksaveasfilename(parent=root, filetypes=file_types)
    root.update()

    if bool(file_path):
        if file_type == 'json':
            return file_path if file_path.endswith('.json') else file_path + '.json'
        else:
            return file_path
    else:
        return None
