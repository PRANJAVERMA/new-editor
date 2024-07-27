# Code Editor

## Overview

`Code Editor` is a web-based application designed for real-time code editing and collaboration. Users can create and join rooms to edit the code in all the language. The application uses CodeMirror for advanced code editing features.

## Features

- **Room Creation**: Generate a unique room ID and enter a username to create or join a collaborative coding environment.
- **Real-time Collaboration**: Collaborate with others in real-time using socket connections. Changes are synced instantly across all users in the room.
- **Code Editing**: Utilize CodeMirror for editing HTML, CSS, and JavaScript code with advanced features like syntax highlighting and auto-completion.
- **Live Preview**: Execute code and see the results in a live preview pane.

## Installation

To set up `Code Editor` locally, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/code-editor.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd code-editor
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Start the Development Server**:
    ```bash
    npm start
    ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Generating a Room ID**:
   On the home page, click the button to generate a unique room ID. Enter your username and click "Join" to create or join a room.

2. **Joining a Room**:
   Enter the room ID and your username to join an existing room where you can start coding with others.

3. **Editing Code**:
   On the code editor page, use CodeMirror to edit HTML, CSS, and JavaScript. Click the "Run" button to view the output in the live preview pane.

## Configuration

### Environment Variables

Ensure that you have the following environment variables set up:

- `REACT_APP_SOCKET_SERVER`: URL of the socket server (e.g., `http://localhost:3008`).

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [CodeMirror](https://codemirror.net/) - Code editor component for the browser.
- [Socket.IO](https://socket.io/) - Real-time communication library for web applications.


