class Brain {
	constructor(config) {
		this.inputs = [];
		this.hidden = [];
		this.outputs = [];
		this.initNodes(config);
		this.connectionGenes = [];
		this.initConnections();
	}

	initNodes(config) {
		let num = 0;
		for (let i = 1; i <= config.inputs; i++) {
			this.inputs.push(new NodeGene(i, "I"));
		}
		num = this.inputs.length;
		for (let i = num + 1; i <= config.outputs + num; i++) {
			this.outputs.push(new NodeGene(i, "O"));
		}
	}

	initConnections() {
		let innovation = 1;
		for (let i = 0; i < this.inputs.length; i++) {
			for (let j = 0; j < this.outputs.length; j++) {
				this.connectionGenes.push(new ConnectionGene(
					this.inputs[i].num,
					this.outputs[j].num,
					Math.random() * 2 - 1,
					false,
					innovation
				));
				innovation++;
			}
		}
	}

	randomizeWeight(inputNode, outputNode) {
		
	}

	perturbWeight(inputNode, outputNode) {
		
	}

	addHiddenNode(inputNode, outputNode, i) {
		
	}

	addConnection(inputNode, outputNode, i) {

	}

	feedForward() {

	}

	setInputs(inputArray) {
		
	}
}