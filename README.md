# LoansPredictionApp

## introduction

An application designed for banks , 

When a client comes to the bank and wants to take out a loan,
he provides details to the bank employee

The information is entered into the application and returns a predictive answer 
whether the client will succeed in repaying the loan or not

## Development tools

The application was written in `Angular` for client side and `NodeJS` for server , 

Uses `firebase` as DB to manage information about loans and users
, in addition to management authentication.


## services
Using a model for `machine learning` which is storage in Python server (`flask`)
and deploy with `heroku` , acts as an API when the application sends API requests and 
receives a prediction response and presents it to a client.

## links
[The machine learning model (flask)](https://github.com/netanel246/loans-prediction-python)


