# Random User Generator

The Random User Generator is a frontend application that fetches a list of random users from the [RandomUser.me API](https://randomuser.me/documentation) and displays each user's details in a paginated table. Users can choose to view 5 or 10 users per page and navigate through the pages using Next and Previous buttons. The table has four columns: Full Name, Country, Email Address, and Phone Number.

## Technologies Used
- ReactJS
- Redux
- React Router DOM
- Axios
- React Paginate
- CSS Modules

## Features
- Fetches a list of 50 random users from the RandomUser.me API.
- Paginates the list of users and allows users to choose to view 5 or 10 users per page.
- Displays each user's Full Name, Country, Email Address, and Phone Number in a table.
- Allows users to navigate through the paginated list of users using Next and Previous buttons.
- Displays a loading indicator while fetching user data from the API.
- Displays the details of a user when a user's Full Name is clicked.
- Displays the user's City, Profile Picture, Date of Birth, and Nationality on the details page.
- Has a mobile-responsive design.

## Getting Started
To run the application on your local machine, follow these steps:

1. Clone the repository: 
```
git clone https://github.com/your-username/random-user-generator.git
```

2. Install the required packages:
```
cd random-user-generator
npm install
```

3. Start the development server:
```
npm start
```

4. Open your browser and navigate to http://localhost:3000 to view the application.

## Future Improvements
- Add search functionality to search for users by name or email.
- Add sorting functionality to sort the list of users by Full Name or Country.
- Add filtering functionality to filter the list of users by Country or Nationality.

## Conclusion
The Random User Generator is a simple frontend application that demonstrates how to fetch data from an API, paginate data, and display details of a selected item. This application can be used as a starting point for building more complex applications that require similar functionality.
