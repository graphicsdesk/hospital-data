# How does access to hospitals differ across neighborhoods with different income levels?

## Data 
Spectator compiled data on open emergency hospitals and bed counts in New York City neighborhoods using the <a href = "https://profiles.health.ny.gov/hospital/county_or_region/region:new+york+metro+-+new+york+city">NY State Department of Health database</a> and emergency hospitals that have closed since 2000 using <a href = "https://data.cityofnewyork.us/Health/hospital/q6fj-vxf8">NYC Open Data</a>.

<a href = "https://data.cityofnewyork.us/City-Government/Neighborhood-Tabulation-Areas-NTA-/cpf4-rkhq">Neighborhood</a> zipcodes were queried for and hospital addresses geocoded using Google's <a href = "https://developers.google.com/places/web-service/intro">Places API</a>. The script can be found <a href = "https://github.com/graphicsdesk/hospital-data/blob/master/Code.gs">here</a> and is applied to our public dataset which can be found <b><a href = "https://docs.google.com/spreadsheets/d/1zecYfqyka_k-z5qefl9gxWsif0ECA7NJ2hbrFLjgFbc/edit#gid=351637570">here</a></b>. 

## Setup

1. Make sure you have [Python 3](https://www.python.org/downloads/) installed.

2. We are going to use `pipenv` to manage the packages we use. Install it by running this command in the terminal (you may have to first install [`brew`](https://brew.sh)):
```
brew install pipenv
```


## First Steps

1. Copy this repository onto your machine. To do this, run this command in the terminal:
```
git clone git@github.com:graphicsdesk/hospital-data.git
```
2. Navigate to the newly created `hospital-data` folder by running:
```
cd hospital-data
```
3. Now run `pipenv install` to install all the packages listed in the `Pipfile`. (The Pipfile is a file in this repository that lists all the packages we need so `pipenv` knows which ones to get.)

4. Run `pipenv shell` to be able to access the newly installed packages.

5. We will be using Jupyter Notebooks to do this analysis. Please watch [this short introduction on Jupyter](https://www.youtube.com/watch?v=jZ952vChhuI).

6. Run `jupyter notebook` to start the notebook. Go into the `notebooks` directory, then open the `fetcher.ipynb` notebook.

7. You're ready to do data reporting!
