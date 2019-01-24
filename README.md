# Capstone Project - "MileEdge"
## Client README
### GA Boston WDI28 Project 4
### By: Eshan Misra


### Links
* [Client Repo](https://github.com/ecmisra/Capstone-Client)
* [API Repo](https://github.com/ecmisra/Capstone-API)
* [Deployed Heroku API](https://limitless-garden-94318.herokuapp.com/)
* [Deployed Client](https://ecmisra.github.io/Capstone-Client/#/)

### Preparation

1.  Fork and clone this repository.
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.
1.  Run `npm start` to run website locally


### Description
MileEdge is an app which allows users to create a log of each time they get gas for their car.

Users can record their mileage, the amount of gas purchased and at what price, and even what gas station they visited. The idea being that keeping a close eye on your fuel consumption can help you to economize your driving style and to help "train" yourself to drive more economically, getting the most for your money.

I have lived in several traffic-heavy cities throughout my life, and as a result I have learned the hard way how beneficial it can be (both financially and psychologically) to have a clear understanding of how economically you drive, and the importance of maintaining a close watch of your car's MPG performance. MileEdge gives you the edge when it comes to maximizing your car's MPG.


### Webpage Screenshot

![Eshan Misra Capstone Client Screenshot](https://i.imgur.com/yp28faE.jpg)


### Technologies Used

* React
* JSX
* JavaScript
* HTML
* SCSS
* Bootstrap




### Planning/Building Process

* Wireframes/ERD/User Stories
* Scaffold/build API gas_logs resource
* Build/test auth CRUDs one at a time on my terminal
* Build/test resource CRUDs one at a time on my terminal
* Create React client for Gas Logs
* Test client auth functionality, one function at a time (sign up/in/out, change password)
* Build routes/links/components for Gas Logs client
* Test client resource functionality, one function at a time (add/edit/delete Gas Log)
* Add user-facing success/error messages
* Test message functionality
* Optimize styling for Gas Logs client


### User Stories

* As a user, I want to be able to sign up w/ email & password
* As a user, I want to be able to sign in.
* As a user, once signed in, I want the options to change my password
* As a user, once signed in, I want the option to sign out
* As a user, once signed in, I want to be able to see all my gas logs
* As a user, once signed in, I want to be able to create a gas log
* As a user, once sign in, I want to be able to update a gas log
* As a user, once sign in, I want to be able to delete a gas log

### Wireframe

![Eshan Misra full-stack wireframe](https://i.imgur.com/5oQCd8P.jpg)


### Future Improvements/Plans

In the future, I would ideally like to advance the functionality of this application. For example: have forms automatically calculate the total based on price per gallon and volume of gas purchased. I would also like to implement a table format for all Gas Logs to make the appearance cleaner/more professional. Even further advancements I'd like to see are integrating google maps API so that users can record their favorite or go-to gas station of choice.
