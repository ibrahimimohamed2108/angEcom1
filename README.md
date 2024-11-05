
---

# Angular E-Commerce App

This is an e-commerce application built with **Angular 14** and deployed with **Docker**. It provides users with a streamlined shopping experience, enabling them to browse, search, and order products.

## Features

- **Product Browsing**: View all available products, filter by category, and search by keywords.
- **Cart Management**: Add, remove, and update quantities of products in the cart.
- **Order Confirmation**: Complete orders with order confirmation notifications.
- **User Authentication**: Secure login and user management.
- **Firestore Integration**: Persistent storage for orders and user information.

## Technologies

- **Frontend**: Angular 18, TypeScript
- **Backend**: Firebase Firestore for database storage, fireAuth for Login/signUP
- **Docker**: Containerization of the Angular application for easy deployment

## Project Structure

```plaintext (not all included)
├── src/                  # Angular source files
├── README.md             # Project documentation
└── package.json          # Project dependencies and scripts
```

## Getting Started

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [Angular CLI](https://angular.io/cli) (for development)
- [Docker](https://www.docker.com/) (for deployment)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ibrahimimohamed2108/your-repo.git
    cd your-repo
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application locally**:
    ```bash
    ng serve
    ```
   The application will be available at `http://localhost:4200`.

### Building and Deploying with Docker

1. **Build the project**:
    ```bash
    ng build 
    ```

2. **Build the Docker image**:
    ```bash
    docker build -t ibrahimimohamed2108/emishop:v2 .
    ```
    (in the same folder as Dockerfile)
    (C:\Users\moham\Desktop\angEcom1\front\e-commerce\browser>  docker build -t ibrahimimohamed2108/emishop:v2 .)
3. **Push the Docker image to Docker Hub**:
    ```bash
    docker push ibrahimimohamed2108/emishop:v2
    ```

4. **Run the Docker container**:
    ```bash
    docker run -p 8080:80 ibrahimimohamed2108/emishop:v2
    ```
   Access the application at `http://localhost:8080`.

### Firebase Configuration

This application requires Firebase Firestore for data persistence. To set up Firestore:

1. Create a Firebase project on [Firebase Console](https://console.firebase.google.com/).
2. Enable Firestore Database.
3. Add Firebase configuration to your Angular environment files.

## Author

**Mohamed Ibrahimi**  
Mohammadia school of engineers computer science Student  
[Docker Hub Repository](https://hub.docker.com/repository/docker/ibrahimimohamed2108/emishop)

## License

This project is licensed under the MIT License.

---
