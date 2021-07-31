import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			products : [
				{name: "Product 1", votes: 0},
				{name: "Product 1", votes: 0},
				{name: "Product 1", votes: 0},
				{name: "Product 1", votes: 0}
			]
		}
	}

	vote (i) {
		let products = [...this.state.products];
		products[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({products: newproducts});
		
	}

	render(){
		return(
			<>
				<h1>Vote for your products!</h1>
				<div className="products">
					{
						this.state.products.map((product, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{product.votes}
								</div>
								<div className="productinfo">
									{product.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>This button is for voting for products</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default App;
