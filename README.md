<h3> How does access to hospitals differ across neighborhoods with different income levels? </h3>

## Setup

1. Make sure you have [Python 3](https://www.python.org/downloads/) installed.

2. We are going to use `pipenv` to manage the packages we use. Install it by running this command in the terminal (you may have to first install [`brew`](https://brew.sh)):
```
brew install pipenv
```


## First Steps

1. Copy this repository onto your machine. To do this, run this command in the terminal:
```
git clone git@github.com:spec-journalism/hospital-data.git

2. Navigate to the newly created `hospital-data` folder by running:
```
cd hospital-data
```

3. Now run `pipenv install` to install all the packages listed in the `Pipfile`. (The Pipfile is a file in this repository that lists all the packages we need so `pipenv` knows which ones to get.)

4. Run `pipenv shell` to be able to access the newly installed packages.

5. We will be using Jupyter Notebooks to do this analysis. Please watch [this short introduction on Jupyter](https://www.youtube.com/watch?v=jZ952vChhuI).

6. Run `jupyter notebook` to start the notebook. Go into the `notebooks` directory, then open the `fetcher.ipynb` notebook.

7. You're ready to do data reporting!
