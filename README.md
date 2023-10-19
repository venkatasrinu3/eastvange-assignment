# REACT JS DEVELOPER ASSIGNMENT

This is a simple React application that demonstrates how to make an API call using Axios within a functional component. The example includes TypeScript for type safety.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

1. Clone the repository or download the source code to your local machine.

```bash
git clone https://github.com/venkatasrinu3/eastvange-assignment.git
```

2. Navigate to the project directory.

```bash
cd eastvange-assignment
```

3. Install project dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm start
```

This will open the application in your default web browser.

## How It Works

In this example, we have created a functional component called `UserDetails`. Here's what happens:

1. We use Axios to make a GET request to the given API to fetch a list of users from page 2.

2. We define a TypeScript type for the user data to ensure type safety.

3. The component sets the fetched user data in a state variable using the `useState` hook.

4. We use the `useEffect` hook to make the API call when the component mounts. The empty dependency array `[]` ensures that this effect runs only once, mimicking the behavior of `componentDidMount`.

5. The user data is displayed in a simple card.

## Customization

Feel free to customize this example for your own needs. You can modify the API endpoint, style the component, or add more functionality as required.

## License

This project is open-source and available under the [MIT License](LICENSE).
```
