'''coderadi &bull; Routers management file for the Project.'''

# ? IMPORTS
from .app import app

# * FUNCTION TO BIND ROUTERS TO THE SERVER
def bind_routers(server):
    '''
    Binds all routers to the server

    ## Example usage
    ```python
    from flask import Flask
    from routers import bind_routers

    server = Flask(__name__)
    bind_routers(server)
    ```
    '''

    server.register_blueprint(app)