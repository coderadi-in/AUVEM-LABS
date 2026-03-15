'''
coderadi &bull; Run script for the Project.

## Run command
```bash
uv run python run.py
python run.py
```
'''

# ? IMPORTS
from main import server

# ! RUN TRIGGER
if (__name__ == "__main__"):
    server.run(debug=True, host='0.0.0.0')