# Gousto coding test

Hi there!

My solution has the original codebase as a starting point. Initially I updated the folder structure, version of some existing packages and added Enzyme to help with the testing coverage. Afterwards, I added a setupTests file in order to configure the test environment and global variables that would later be used in each of the unit tests. I then added some basic components and their respective tests before diving into the redux part of the application, more precisely, setting up categories and products reducers, action creators and tests.

A middleware responsible to catching all actions API related was added so that the actions creators were free of any request logic. As soon as it was implemented, I updated all the action creators.

Once there was duplicate data in both categories and products responses, namely the categories in each of the product’s details, I added a normalizer middleware to remove the unnecessary data before adding it to the products reducer.

I then started connecting the components to the state, by adding a stateful container for the Home component and updated the categories and products list components to render the real data as well as their CSS styles.

The SearchBox component was the last to be added and it was built as a parent to the ProductsList component in order to filter the data that’s passed on.

Finally, I updated the test suites and cleaned some unused code.

## Application Structure

```
gousto-react-test/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      About/
        About.js
        About.css
        About.test.js
      App/
        App.css
        App.js
      CategoriesList/
        CategoriesList.js
        CategoriesList.styles.css
        CategoriesList.test.js
      Home/
        Home.js
        Home.test.js
      ProductsDetail/
        ProductsDetail.js
        ProductsDetail.styles.css
        ProductsDetail.test.js
      ProductsList/
        ProductsList.js
        ProductsList.styles.css
        ProductsList.test.js
      SearchBox/
        SearchBox.js
        SearchBox.styles.css
        SearchBox.test.js
    containers/
      HomeContainer.js
    redux/
      actions/
        api.js
        api.test.js
        categories.js
        categories.test.js
        index.js
        products.js
        products.test.js
        types.js
      middlewares/
        api.js
        normalizer,js
      reducers/
        categories.js
        categories.test.js
        index.js
        products.js
        products.test.js
      store.js
    index.js
    index.css
    setupTests.js
```


## How to use:

### Prerequisites:

* `node js` >= 8.12
* `yarn` (you can install it globally by running `npm install -g yarn`)

### Commands:

* `yarn install` - installing dependencies
* `yarn start` - starting the app in dev mode
* `yarn build` - build the production artifacts
* `yarn test` - running the tests

## Missing functional requirements

i don't think I've missed any of the functional requirements.

## Imporvements

I would have liked to have more test coverage and probably optimize some of the code
namely in terms of the lazy components and fallback and data normalisation.

