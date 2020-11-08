class Brain {
	constructor(config) {
		this.inputs = [];
		this.hiddens = [];
		this.outputs = [];
		this.initNodes(config);
		this.connectionGenes = [];
		this.initConnections();
	}

	initNodes(config) {
		let num = 0;
		for (let i = 1; i <= config.inputs; i++) {
			this.inputs.push(i);
		}
		num = this.inputs.length;
		for (let i = num + 1; i <= config.outputs + num; i++) {
			this.outputs.push(i);
		}
	}

	initConnections() {
		let innovation = 1;
		for (let i = 0; i < this.inputs.length; i++) {
			for (let j = 0; j < this.outputs.length; j++) {
				this.connectionGenes.push({
					inNode: this.inputs[i],
					outNode: this.outputs[j],
					weight: Math.random() * 2 - 1,
					enabled: true,
					innovation: innovation
				});
				innovation++;
			}
		}
	}

	findPossibleConnections() {

	}

	findConnection(inNode, outNode) {
		let nodes = this.inputs.concat(this.hiddens).concat(this.outputs).filter(x => x !== undefined);
		if (nodes.includes(inNode) && nodes.includes(outNode)) {
			for (let i = 0; i < this.connectionGenes.length; i++) {
				if (this.connectionGenes[i].inNode === inNode && this.connectionGenes[i].outNode === outNode) {
					return this.connectionGenes[i];
				}
			}
			return undefined;
		}
		return null;
	}

	randomizeWeight(inputNode, outputNode) {
		this.findConnection(inputNode, outputNode).weight = Math.random() * 2 - 1;
	}

	perturbWeight(inputNode, outputNode, intensity) {
		this.findConnection(inputNode, outputNode).weight += (Math.random() * 2 - 1) * intensity;
	}

	addHiddenNode(inputNode, outputNode, i) {
		let connection = this.findConnection(inputNode, outputNode);
		if (connection && connection.enabled === true) {
			let nodes = this.inputs.concat(this.hiddens).concat(this.outputs).filter(x => x !== undefined);
			let hiddenNode = nodes.length + 1;
			this.hiddens.push(hiddenNode);
			connection.enabled = false;
			this.addConnection(inputNode, hiddenNode, 1, true, i);
			this.addConnection(hiddenNode, outputNode, connection.weight, true, i + 1);
		}
	}

	addConnection(inputNode, outputNode, weight, enabled, i) {
		let connection = this.findConnection(inputNode, outputNode);
		if (connection || connection === null) {
			return;
		} else {
			this.connectionGenes.push({
				inNode: inputNode,
				outNode: outputNode,
				weight: weight,
				enabled: enabled,
				innovation: i
			});
		}
	}

	feedForward() {

	}

	setInputs(inputArray) {

	}
}