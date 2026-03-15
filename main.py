'''coderadi &bull; Main file for the Project.'''

# ? IMPORTS
from flask import Flask
from routers import bind_routers

# ! SERVER INIT
server = Flask(__name__)

# ! BIND PLUGINS
bind_routers(server)