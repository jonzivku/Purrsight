# Django Documentation

## Django Development setup:
#### 1. Create local virtual environment
>$ virtualenv env -p python3

#### 2. Activate virtual environment
>$ source django_venv/bin/activate

#### 3. Install python packages
>$ pip3 install -r requirements.txt


# Running server 
>$ python manage.py runserver

#### Django host ip:
>127.0.0.1:8000

# Usage
Get functionality of api by going to localhost:8000/admin
from there you can add posts and users

# Postman


## Accessing admin portal on django

Use createsuperuser to create admin profile. You will be prompted to input name, email, and password.
Once created you can go to localhost:8000/admin to get to the admin login page.
While there you will be able to modify user models, post models.

>$ python manage.py createsuperuser





