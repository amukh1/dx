# dx: the front-end library to make the amount of code you write infinitely smaller

## Getting started

### Add the dependencies into the html

```html
<head>
    <script src="https://raw.githubusercontent.com/amukh1/dx/master/dx.js"></script> <!-- dx -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> <!-- babel -->
</head>
```

### Tell babel to use dx as a jsx pragma at the top of the file

```js
/** @jsx dx.element */
```

### Just start writing jsx

```js
const app = (
	<div>
	  <h1>Hello World!</h1>
	  <h2>This is <span style="color:blue;">dx</span> (<span style="color:red;">dy</span> coming soon)</h2>
	  <div/>
	</div>
);
```

### Render the app with dx

```js
const container = document.getElementById("root");
let App = dx.render(app);
container.appendChild(App);
```

## Final jsx code:

```js
/** @jsx dx.element */

const app = (
	<div>
	  <h1>Hello World!</h1>
	  <h2>This is <span style="color:blue;">dx</span> (<span style="color:red;">dy</span> coming soon)</h2>
	  <div/>
	</div>
);

const container = document.getElementById("root");
let App = dx.render(app);
container.appendChild(App);
```