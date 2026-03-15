'''coderadi &bull; Site basic routes management file for the Project.'''

# ? IMPORTS
from flask import Blueprint, render_template, redirect, url_for, flash, request

# ! ROUTER INIT
app = Blueprint('app', __name__)

# & INDEX ROUTE
@app.route('/')
def index():
    return render_template('pages/index.html')