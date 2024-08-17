# AI Chat

**AI Chat Bot** that **converses with users and answers users questions.** This is done using the **Google Gemini API**, the bot understands and responds to questions in a natural way,
provides summaries of complex topics and learns and improves over time.

## Key features
### Chat with the AI bot
* AI bot responds to users query with an answer, a suggestion or responds by completing a specific task.

### Browse old chats, with each conversation with the chat bot saved
* Utilises **MongoDB** by saving chats in a database and querying the chats when user wants to access old chats. This ensures all chats are saved and can be accessed as well as
* being secure due to **MongoDB's** many security features.

### User Authentication
* Able to authenticate user to display old conversations made with the AI chat bot from that account.

### Image upload
* Able to ask the bot about images (e.g what colour is this image), images saved using **ImageKit** and **Gemini AI** responds to the query by viewing that saved image.

## Technologies Used
* React.js
* Node.js
* MongoDB
* Express
* Cors
* Clerk (User Authentication)
* ImageKit
* Mongoose
* Nodemon

## Getting Started
In order to get the AI Chat Bot running you need these prerequisites.

### Prerequisites
* Node.js
* MongoDB

### Installation
1. Clone the GitHub repository
    ```
    git clone https://github.com/neimad2ez/aichat.git
    ```

2. Navigate to project directory
    
    ```
    cd aichat
    ```

### Backend Setup

1. Navigate to server directory
    ```
    cd backend
    ```

2. Install dependencies
    ```
    npm install ...
    ```

3. Run the server
    ```
    npm start
    ```

### Frontend Setup

1. Navigate to client folder
    ```
    cd client
    ```

2. Install dependencies
    ```
    npm install ...
    ```

3. Deploy the Vite + React application
    ```
    npm run dev
    ```

### Running the application
To start the application, you can access the frontend application by entering the URL into your browser provided by Vite and the backend API will be accessible at `http://localhost:3000`
