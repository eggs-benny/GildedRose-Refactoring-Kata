# Gilded rose refactoring tech test
This is a well known kata developed by [Terry Hughes](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/).


## Approach
I started by defining the characteristics of each item's quality change relationship with its sell-by date. This helped me understand the rules of the shop and items. I then wrote tests for each product for how they would act in various states, such as before/after the sell by date, and regarding their min/max properties. Once each items' tests passed, as well as edge-cases, I wrote failing tests for how the new item (Conjured Mana Cake) would work.

Once I was satisfied with my test-suite, I studied the complex code. Immediately pulled out the variables that apply to all (or almost all) items, such as min/max quality, as well as items who's quality state isn't dependent on time.

As I moved on to refactor some of the code's quality & sellIn iterations, I realised I could approach this instead as a switch / case method, writing cases for each item, since the items were independent of each other.

This method allowed me to isolate each item's rules which, once I got all tests passing, allowed for clear & readable refactoring.

## Structure
Since the products behave distinctly from each other, it made the most sense to untangle the if/else statements between items as much as possible. This modular structure allows for easy future amends if the items' variables change, or if items are added or removed from the ledger.

## Running the app
This Gilded Rose kata was solved in JavaScript with Jest.

Install dependencies

```sh
npm install
```

## Tests

Test coverage for the codebase is >95%

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage