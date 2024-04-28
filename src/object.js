
class Counts {
	constructor () {
		this._object = Object.create(null)
	}

	getObject () { return this._object }

	get (key) {
		this._object[key] ??= 0
		return this._object[key]
	}

	add (key, n) {
		this._object[key] ??= 0
		return (this._object[key] += n)
	}

	inc (key) { return this.add(key, 1) }
	dec (key) { return this.add(key, -1) }
}

module.exports = { Counts }
