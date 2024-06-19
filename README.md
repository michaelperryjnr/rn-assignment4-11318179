# 11318179

Tettey Michael Perry

# Component Descriptions

## `inputBar.jsx`

The `InputBar` component provides a user interface for entering search queries.

### Usage:

```jsx
import { InputBar } from "./components";

<InputBar
  placeholder="Search for items..."
  isFilterable={true}
  handleSearch={(text) => console.log(text)}
  handleFilter={() => console.log("Filter button pressed")}
/>;
```

## `jobCard.jsx`

The `JobCard` component creates a job card from an object with data.

### Usage:

```jsx
import { JobCard } from "./components";

<JobCard
  role={item.role}
  company={item.company}
  salary={item.salary}
  location={item.location}
  bgColor={item.bgColor}
  image={item.image}
/>
```

## `customButton.jsx`

The `CustomButton` component is reusable button component:

### Usage:

```jsx
import { CustomButton } from "./components";

<CustomButton
  title={item.title}
  containerStyles={item.containerStyles}
  handlePress={() => router.push("/home")}
  textStyles={item.textStyles}
  isLoading={<Loader />}
/>;
```

## `logInOptions.jsx`

The `LogInOptions` renders login options for the app

### Usage:

```jsx
import { LogInOptions } from './components';

<LogInOptions
    icons = {icons:Array<Images>}
/>

```

## `index.js`

This exports the default components in the `components` folder to make the imports cleaner in the codebase.



## App Screenshot

<img src="./assets/images/Screenshot.jpg">
