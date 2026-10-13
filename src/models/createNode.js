export default function createNode(id, x, y, neighbors = []) {
	return {
		id,
		neighbors,

		isWall: false,
		isStart: false,
		isEnd: false,
		previousNode: null,
		isOpenSet: false,
		isClosedSet: false,
		isPath: false,

		x,
		y,
		gCost: Infinity,
		hCost: 0,
		fCost: function () {
			return this.gCost + this.hCost;
		},
	};
}
