/** @jsx dx.element */

const app = (
	<div>
	  <h1>Hello World!</h1>
	  <h2>This is <span style="color:blue;">dx</span> (<span style="color:red;">dy</span> coming soon)</h2>
	  <div/>
	</div>
);

const container = document.getElementById("root");
let App = dx.render(app, container);
document.body.appendChild(App);