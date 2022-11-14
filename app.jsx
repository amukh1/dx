/** @jsx dx.element */

// let [count, setCount] = dx.useState(0);
// setCount(2)
// console.log(count)
console.log(dx)

let rando = Math.floor(Math.random() * 250)

const app = (
	<div>
	  <h1 class="head">This is <span class={"blu"} onClick={"hhh()"}>dx</span></h1>
	  <h2 class="head2">Image a react that could fit within a <span class="blu" onClick={"hhh()"}>CDN</span></h2>
	  <h2>Random number: {rando.toString()}</h2>
	  <button onClick="hhh()">Github</button>
	  {/* {Thing} */}
	</div>
);

function hhh() {
	// setCount(count + 1)
	console.log('hhh');
	window.location.href = "https://github.com/amukh1/dx"
}

let Thing = (
	<div>
	  <h1>Thing</h1>
	</div>
)

// class Component {
// 	constructor(props) {
// 		this.props = props;
// 		this.state = this.state || {};
// 	}
// 	setState(state) {
// 		this.state = Object.assign({}, this.state, state);
// 	}
// }

// class Thing extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Thing</h1>
// 				<h2>{this.props.x}</h2>
// 			</div>
// 		);
// 	}
// }

// const Thing = function(props) {
// 	return (
// 		<div>
// 			<h1>Thing</h1>
// 			<h2>props: {props.x}</h2>
// 		</div>
// 	);
// }



const container = document.getElementById("root");
let App = dx.render(app);
container.appendChild(App);