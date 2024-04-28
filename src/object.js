const { maxBy } = require('@kmamal/util/array/max')

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

	mostFrequent () {
		let maxKey
		let maxCount = -Infinity
		for (const key in this._object) {
			const count = this._object[key]
			if (count > maxCount) {
				maxCount = count
				maxKey = key
			}
		}
		return maxKey
	}
}

module.exports = { Counts }
