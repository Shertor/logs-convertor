import pyinstaller_versionfile

pyinstaller_versionfile.create_versionfile(
    output_file="versionfile.txt",
    version="0.0.1.1",
    company_name="MDGT",
    file_description="PG Logs to EngGeo Converter",
    internal_name="LogsConvertor",
    legal_copyright="© MDGT. All rights reserved.",
    original_filename="LogsConvertor.exe",
    product_name="LogsConvertor"
)
