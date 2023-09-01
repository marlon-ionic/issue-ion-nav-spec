# Adding IonNav as a dependency causes unit test to fail (Reproduction Project)

This project was created as reproduction to an issue where adding the `IonNav` service in a boilerplate Ionic Angular (module-based) project appears to cause a unit test that previously passed to failed. The test is used to confirm that a value provided from `NavParams` is set on an element in the template.

There are two spec files of interest in the project. In both cases the test `'**should display name from navparams**'` is the key:

1. `src/app/no-modal/no-modal-comp/no-modal-comp.component.spec.ts`. Passes
2. `src/app/modal/comp/comp.component.spec.ts`. Fails with a message of `Expected '' to equal 'Test User'.`, which seems to indicate that the element exists, but the value is not set from `NavParams` as expected.

The only difference between these two groups are the addition of NavParams as a dependency to #2.

## Installation

```bash
npm i
```

## Usage

```bash
ng test
```
