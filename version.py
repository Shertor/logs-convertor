import pyinstaller_versionfile

import json

import os


def open_json(path: str) -> dict:
    """Считывание json файла в словарь"""
    with open(path, 'r', encoding='utf-8') as file:
        json_data = json.load(file)

    return [*json_data.keys()][-1]


version = open_json("version.json")
print(version)

pyinstaller_versionfile.create_versionfile(
    output_file="versionfile.txt",
    version=version,
    company_name="MDGT",
    file_description="PG Logs to EngGeo Converter",
    internal_name="LogsConvertor",
    legal_copyright="© MDGT. All rights reserved.",
    original_filename="LogsConvertor.exe",
    product_name="LogsConvertor"
)

os.system('npm run build')

os.system(
    f'python -m eel main.py build --onefile --noconsole --icon "public/icon.ico" --name "LogsConvertor-{version}" --version-file "versionfile.txt"')
