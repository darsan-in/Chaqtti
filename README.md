<div align="center">

# Chaqtti - Interactive Chat App using MQTT

<p id="intro">Welcome to Chaqtti — a dynamic, real-time chat application built with the MQTT protocol, designed for seamless, secure, and private messaging. With robust user authentication, dynamic user search, intuitive sorting, and smooth CSS animations, Chaqtti offers a feature-rich chat experience accessible on any device.</p>

---

</div>

## Table of Contents 📝

- [Features](#features)
- [Use Cases](#use-cases-)
- [Technologies Used](#technologies-used)
- [Installation - Step-by-Step Guide](#installation---step-by-step-guide-)
- [In-Action](#in-action-)
- [License](#license-%EF%B8%8F)
- [Contact Information](#contact-information)

## Features
1. **User Authentication**  
   - **Simple and Secure**: Easily register or log in using a unique username and password. All user credentials are securely stored with encrypted passwords using bcrypt, ensuring a safe authentication process.
   - **JWT Authentication**: JSON Web Tokens (JWT) provide secure and scalable user sessions for authenticated interactions.

2. **Real-Time Messaging with MQTT**  
   - **Private, Real-Time Communication**: Chat in private, real-time channels with MQTT, a lightweight protocol perfect for interactive apps.
   - **End-to-End Privacy**: Communication happens through unique, hashed MQTT topics (using bcrypt), ensuring end-to-end security where only the participants can read the messages.

3. **Dynamic User Management**  
   - **Search Users Instantly**: Effortlessly search for users by their username, with real-time filtering and suggestions as you type.
   - **Pagination and Sorting**: Easily browse through the user list with pagination and sort results by username in ascending or descending order for quicker access.

4. **Responsive UI with CSS Animations**  
   - **Mobile-First Design**: Whether you're using a phone, tablet, laptop, or desktop, Chaqtti offers an optimal, responsive layout that looks great on any screen size.
   - **Interactive CSS Animations**: Smooth transitions and visual cues keep the user experience engaging, making chat interactions feel seamless.

5. **Comprehensive Error Handling**  
   - **User-Friendly Alerts**: Invalid credentials? Failed connections? Bad inputs? Chaqtti has you covered with clear, informative error messages to guide users through the process.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Radix UI for component building
- **Backend**: Aedes MQTT broker, Next.js for server-side rendering
- **Libraries**: bcrypt for password hashing, jsonwebtoken for JWT authentication, mqtt.js for client-side MQTT messaging, websocket-stream for handling WebSocket connections

## Use Cases ✅

- **Real-Time Team Communication**: Boost remote team collaboration with quick, efficient, and private messaging.
- **Customer Support Chat**: Provide instant, real-time support to customers, enhancing their experience and satisfaction.
- **Educational Chat Platform**: Empower students and teachers to engage in live discussions, share resources, and collaborate interactively in virtual classrooms.
- **Gaming Community Chat**: Create a space where gamers can discuss strategies, share experiences, and stay connected with fellow players.

---

## Installation - Step-by-Step Guide 🪜

Get Chaqtti running on your machine with just a few steps:

- **Step 1**: Ensure that **Node.js** is installed. If you don’t have it yet, download and install from [nodejs.org](https://nodejs.org/).
- **Step 2**: Clone the repository to your local system:
```bash
git clone https://gitlab.com/darsan.in/Chaqtti.git
```
- **Step 3**: Navigate to the project directory in your terminal and install the required dependencies:
```bash
npm install
```
- **Step 4**: Build:
```bash
npm run build
```
- **Step 5**: Start the development server and run the app locally:
```bash
npm run start
```
- **Step 6**: Visit `http://localhost:3000` in your browser to see Chaqtti in action!

- **Step 7**: Login using test accounts on two different devices or two different browsers to experience CHAQTTI.

### Test Accounts
| Username              | Password |
|-----------------------|----------|
| darsan@cresteem.com   | 1234     |
| eminem@cresteem.com   | 1234     |
| john@test.com         | 1234     |



## In-Action 🤺

Watch the magic unfold in this **Chaqtti** demo! Experience its seamless real-time chat and dynamic user interactions through this video or screenshot.

![Chaqtti In Action](#)  
_Interactive, engaging, and fluid — this is Chaqtti!_
<details>
  <summary>Video Demo</summary>
  <video width="320" height="240" controls>
   <source src="https://raw.githubusercontent.com/darsan-in/Chaqtti/refs/heads/main/demo/walkthrough.mp4" type="video/mp4">
</video>
</details>

![Chaqtti App Home Screen](https://raw.githubusercontent.com/darsan-in/Chaqtti/refs/heads/main/demo/home.png)

## License ©️

This project is licensed under the **Apache License 2.0**. Feel free to modify, share, and use the code with the proper attribution.

## Contact Information

Have questions or want to collaborate? Reach out to me via **hello@darsan.in** or connect on [LinkedIn](https://www.linkedin.com/in/darsan-in/).

---

#### Topics

<ul id="keywords">
    <li>MQTT chat app</li>
    <li>Real-time messaging</li>
    <li>JavaScript MQTT integration</li>
    <li>Web chat application</li>
    <li>Responsive chat UI</li>
    <li>User authentication system</li>
    <li>Free MQTT broker</li>
    <li>Dynamic user search</li>
    <li>Error handling in MQTT</li>
    <li>CSS animations in chat</li>
    <li>Node.js MQTT server</li>
    <li>Real-time notifications</li>
</ul>


