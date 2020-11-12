# Fitness Tracker

## Table of Contents

- [Objective](#Objective)
- [Installation](#installation)
- [Functionality](#Functionality)
- [Improvements](#Improvements)
- [Screenshots](#Screenshots)

## Objective 

To create a workout tracker using a mongo database with a mongoose schema and handling routes with express.

## Installation

Create a '.env' file with 'DB_NAME=workout' inside and then run 'npm install'

## Functionality

Once on the app the user is prompted to create a workout or continue a workout. When creating a workout the user will add exercises into it. There are two types of exercises with different data fields:

* Resistance:
    - Name
    - Weight
    - Sets
    - Reps
    - Duration

* Cardio:
    - Name
    - Distance
    - Duration

The user can add as many exercises as they want and after hitting complete they are brought back to the home screen where it shows total values of the exercises added. The user can then choose to make a new workout or add more exercises to the workout. If the 'Dashboard' word is clicked in the nav bar the user is taken to a new page where it will show past workouts in different kinds of graphs or charts.

## Improvements

For some reason the combined duration comes back as undefined and I couldn't figure out why. Improvements could also be made for total weight lifted so it would multiply the reps sets and weight to get a more accurate total weight lifted.

## Screenshots

![image](https://user-images.githubusercontent.com/69565347/98896238-5d408500-245d-11eb-9d29-a54ec7c146e3.png)

![image](https://user-images.githubusercontent.com/69565347/98896301-8234f800-245d-11eb-88f0-1e102f11d682.png)

![image](https://user-images.githubusercontent.com/69565347/98896394-b01a3c80-245d-11eb-9b76-9567f50d0997.png)