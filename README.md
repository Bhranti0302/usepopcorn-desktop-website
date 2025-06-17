# 🍿 usePopcorn - Your Personal Movie Tracker

📦 A sleek and responsive React application that helps you find movies, view their details, and keep a curated list of films you've watched, complete with your personal ratings.

-----

✨ Features

  * **Movie Search:** Quickly discover movies using the OMDb API.
  * **Detailed Movie Info:** Get in-depth information about any film, including plot, cast, director, and IMDb ratings.
  * **Personal Watchlist:** Add movies to your custom "watched" list.
  * **Star Rating:** Rate movies you've seen with an interactive star rating system.
  * **Watched Summary:** View statistics for your watched movies, including average IMDb and personal ratings, and total runtime.
  * **Seamless Management:** Easily remove movies from your watched list.
  * **Keyboard Navigation:** Close movie details by pressing the `ESC` key.

-----

🚀 Live Demo
Check out the live application here:
[https://usepopcorn-desktop-website.vercel.app/](https://usepopcorn-desktop-website.vercel.app/)

-----

💻 Technologies Used

  * **React.js:** A JavaScript library for building dynamic user interfaces.
  * **CSS3:** For styling and responsive design.
  * **OMDb API:** Used for fetching movie data. All API calls are made securely over HTTPS.

-----

🛠️ How to Run Locally
To get a copy of this project up and running on your local machine, follow these simple steps:

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your system.

  * [Node.js](https://nodejs.org/en/)
  * npm (comes with Node.js) or [yarn](https://yarnpkg.com/en/docs/install)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
    cd YOUR_REPOSITORY_NAME
    ```

    *(Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub details.)*

2.  **Install dependencies:**
    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

3.  **Set up Environment Variables (Crucial\!):**
    This project uses the OMDb API, which requires an API key. To keep your key secure, use environment variables:

      * **Get your API Key:** Obtain a free API key from [OMDb API](http://www.omdbapi.com/).
      * **Create `.env.local`:** In the **root directory** of your project, create a file named `.env.local`.
      * **Add your API key:**
        ```
        REACT_APP_OMDB_API_KEY=YOUR_ACTUAL_OMDB_API_KEY
        ```
        *(Replace `YOUR_ACTUAL_OMDB_API_KEY` with your key. No spaces around `=`, no quotes.)*
      * **Add to `.gitignore`:** Ensure `.env.local` is added to your `.gitignore` file to prevent committing your key:
        ```
        # .gitignore
        .env.local
        ```

### Running the Application

After installing dependencies and setting up the environment variable, you can start the development server:

Using npm:

```bash
npm start
```

Or using yarn:

```bash
yarn start
```

This will open the application in your browser at `http://localhost:3000`.

-----

## 💡 Usage

  * **Search:** Type a movie title (at least 3 characters) into the search bar.
  * **Details:** Click on a movie to see its full information.
  * **Add to Watched:** Rate a movie and click "+ Add to list" from the details view.
  * **Remove:** Click "X" next to a movie in your watched list to remove it.

-----

## 🙏 Credits

  * Developed as part of a React learning journey.
  * Movie data provided by the [OMDb API](http://www.omdbapi.com/).

-----

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

-----
