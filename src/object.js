
class Counts {
	constructor (init) {
		this._object = init ?? Object.create(null)
		this._total = 0
	}

	getObject () { return this._object }
	total () { return this._total }

	get (key) {
		this._object[key] ??= 0
		return this._object[key]
	}

	add (key, n) {
		this._object[key] ??= 0
		this._total += n
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
