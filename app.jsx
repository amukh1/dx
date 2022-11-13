/** @jsx dx.element */

// let [count, setCount] = dx.useState(0);
// setCount(2)
// console.log(count)
console.log(dx)

const app = (
	<div>
	  <h1>Hello World!</h1>
	  <h2>This is <span style="color:blue;">dx</span> (<span style="color:red;">dy</span> coming soon)</h2>
	  <button onClick="hhh()">hhhh</button>
	  {/* {Thing} */}
	</div>
);

function hhh() {
	// setCount(count + 1)
	console.log('hhh');
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