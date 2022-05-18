import eel
import time


@eel.expose
def file_parser_py(file) -> bool:
    time.sleep(5)
    if file:
        print(file)
        return True
    return False
