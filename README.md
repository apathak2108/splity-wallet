**Screenshot of Web View**

![Splity Wallet Screenshot](https://i.postimg.cc/52JQH7CZ/Splity-Wallet.png)

## To run the project on your machine, follow the given steps:-

1. **Install Git**: Ensure that Git is installed on your machine. If not, do it by the following link:
   https://git-scm.com/downloads

2. **Open a Terminal or Command Prompt**: Access your terminal (macOS/Linux) or command prompt (Windows). You can also use Git Bash if you’re on Windows.

3. **Navigate to the Desired Directory**: Change to the directory where you want to clone the repository. Use the "cd" command to navigate. For example:

```bash
cd path/to/your/directory
```

4. **Clone the Repository**: Use the `git clone` command followed by the given repository URL:
   https://github.com/apathak2108/shoonya-life-frontend-assignment.git

5. **Enter the Project Directory**: After cloning, navigate into the cloned repository's directory by entering given command:
   cd your-repo-name

## Running the Project

After cloning the repository, follow these steps to set up and run the React project locally:

6. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

7. **Start the Development Server**: Run the following command to start the development server:

```bash
npm start
```

Now the project will run on http://localhost:3000

## Additional Information

### Styling

This project uses a combination of styling methods:

- **Styled-Components**: I have used [styled-components](https://styled-components.com/) for component-level styling. It allows writing CSS in JavaScript and ensures styles are scoped to components.

- **Vanilla CSS**: Some global styles and layout-related CSS are written using traditional CSS. This is used for styles that apply across multiple components or for legacy styles.

- **Custom Theme**: A custom theme is implemented to manage styles centrally. Modify the theme in the `src/styles/theme.js` file.

### State Management

- **Redux**: The application uses [Redux](https://redux.js.org/) for state management. Redux is set up in the `src/store` directory, with reducers combined in `rootReducer.js`.

- **Actions and Reducers**: Defined in the `src/redux` directory. Each module has its own slice.

- **Usage**: Components use `useDispatch` and `useSelector` hooks from `react-redux`.
