class mango {
	constructor(x, y, r) {
		var options = {
			isStatic: true,
			friction: 1.0,
			restitution: 0
		};
		this.x = x;
		this.y = y;
		this.r = r;

		this.image = loadImage('sprites/mango.png');

		this.body = Bodies.circle(this.x, this.y, this.r, options);

		World.add(world, this.body);
	}
	display() {
		var angle = this.body.angle;
		push();
		translate(this.body.position.x, this.body.position.y);
		rotate(angle);
		imageMode(CENTER);
		ellipseMode(RADIUS);
		image(this.image, 0, 0, this.r * 2, this.r * 2);
		pop();
	}
}
