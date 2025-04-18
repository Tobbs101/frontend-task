# Frontend Assessment for Xische

This is the frontend project developed for Xische Frontend's assessment. It leverages React and TypeScript for a robust and maintainable codebase, Vite for a fast development experience, Shadcn UI for pre-styled components, and Tailwind CSS for rapid styling.

## Included Technologies

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript for enhanced code quality and maintainability.
- **Vite:** A build tool that provides a fast and optimized development experience with Hot Module Replacement (HMR).
- **Shadcn UI:** A collection of reusable UI components built using Radix UI primitives and styled with Tailwind CSS.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Pages & Features

- **Articles Page:** A page to view all articles.
- **Article Page:** A page to view a particular article.

## How to Run the Project

Follow these steps to run the Xische frontend assessment project locally:

1.  **Clone the Repository:** If you haven't already, clone the project repository to your local machine using Git:

    ```bash
    git clone [https://github.com/Tobbs101/frontend-task.git](https://github.com/Tobbs101/frontend-task.git)
    ```

2.  **Install Dependencies:** Navigate to the project directory in your terminal and install the required dependencies using Yarn:

    ```bash
    cd frontend-task
    yarn install
    ```

3.  **Start the Development Server:** Once the dependencies are installed, you can start the Vite development server by running the following command:

    ```bash
    yarn dev
    ```

4.  **Open in Your Browser:** Open your web browser and navigate to the address provided in the terminal (usually http://localhost:5173/). You should now see the Xische frontend assessment application running in your browser.

## How to Execute Tests and Get Coverage Reports

To run tests and generate coverage reports:

1.  **Run Unit Tests:** To execute the unit and integration tests, use the following Yarn command in your terminal (within the project directory):

    ```bash
    yarn test
    ```

    This command will run all the test files located in your project (test files for can be found in `src/components/custom/__tests__` directory).

2.  **Run U.I Tests:** To execute the unit and integration tests, use the following Yarn command in your terminal (within the project directory):

    ```bash
    npx cypress open
    ```

    This command will bring up a browser pop-up and you follow the instructions as displayed.

3.  **Generate Coverage Report:** To generate a code coverage report, run the below command in your terminal:

    ```bash
    yarn test:coverage
    ```

    After running this command, a `coverage` folder will be created in your project root.
