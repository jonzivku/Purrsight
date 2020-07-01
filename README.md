# Django Documentation
Run command in root directory unless otherwise stated.
#### Default host ip:
>127.0.0.1:8000

#### Root directory:
>Purrsight/

## Development setup:

#### 1. Create local virtual environment
>$ virtualenv django_venv -p python3

#### 2. Activate virtual environment
>$ source django_venv/bin/activate

#### 3. Install python packages
>$ pip3 install -r requirements.txt

#### 4. Set git to ignore \_\_pycache__
>$ git checkout -- src/purrsight/\_\_pycache__

## Usage:
#### 1. Activate virtual environment
>$ source django_venv/bin/activate

#### 2. Run server
>$ python3 ./src/manage.py runserver

#### 3. Deactivate to leave virtual environment
>$ deactivate