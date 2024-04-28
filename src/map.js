const { addDefault } = require('@kmamal/util/map/add-default')

class Counts {
	constructor () {
		this._map = new Map()
		addDefault(this._map, () => 0)
	}

	getMap () { return this._map }

	get (key) { return this._map.get(key) }

	add (key, n) {
		const m = this._map.get(key) + n
		this._map.set(key, m)
		return m
	}

	inc (key) { return this.add(key, 1) }
	dec (key) { return this.add(key, -1) }

	mostFrequent () {
		let maxKey
		let maxCount = -Infinity
		for (const [ key, count ] of this._map.entries()) {
			if (count > maxCount) {
				maxCount = count
				maxKey = key
			}
		}
		return maxKey
	}
}

module.exports = { Counts }
