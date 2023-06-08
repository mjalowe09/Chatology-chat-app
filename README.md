# Chatology-chat-app
An incomplete simple chat app that utilizes MERN Stack technology.

## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express, MongoDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/mjalowe09/Chatology-chat-app.git
```

Go to the project directory

```bash
  cd Chatology
```

Install dependencies
```bash
  npm install
```

```bash
  cd frontend
  npm install

```
```bash
  cd backend
  npm install
```
  
Modify MongoDB connection from db.js (optional)  
```
const conn = await mongoose.connect(/*enter DB connection link here */, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
```
Start the server
```bash
  cd backend
  npm run dev
```
Start the client
``` 
  cd frontend
  npm run dev
```
