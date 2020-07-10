# Project Documentation
#### Django host ip:
>127.0.0.1:8000
#### React host ip:
>127.0.0.1:3000

## Reactjs Development setup:
#### Navigate to my-app folder which contains package.json

#### 1. Install frontend dependencies using npm
>$ npm install
#### OR
>$ npm i

## Reactjs Usage:
#### 1. Run Server
>$ npm start

## Django Development setup:
#### Navigate to folder containing manage.py

#### 1. Create local virtual environment
#### Create a virtual environment called env
>$ virtualenv env

#### 2. Activate virtual environment
#### When working with the backend, activate the virtual environment
#### The virtual env can be deactivated with 'deactivate'
>$ source env/bin/activate

>$ deactivate

#### 3. Install python packages
#### if this is your first time pulling or django is missing dependencies run
>$ pip3 install -r requirements.txt

#### 4. Migrate models
#### Before models (database storage) can be used, models must be migrated
#### Use the command 
>$ python3 manage.py migrate

## Running backend server
#### Run the backend server with the command below
#### Your terminal should indicate that the server is running
>$ python3 manage.py runserver

## Accessing admin portal on django
#### You can look at users and posts / other database information
#### by going to the url localhost:8000/admin with the backend server running

#### Use createsuperuser to create an admin profile. 
#### You will be prompted to input name, email, and password.
>$ python manage.py createsuperuser

#### Once created navigate to localhost:8000/admin and enter the credentials for the user you created