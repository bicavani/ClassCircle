let Circle = function (radius) {
    this.radius = radius;
    this.getRadius = function () {
        return radius;
    };
    this.getArea = function () {
        let area = radius * radius * 3.14;
        return area;
    };
    this.displayCircle = function () {
        let area = this.getArea();
        document.write("Radius: " + radius + "; Area: " + area);
    };
};