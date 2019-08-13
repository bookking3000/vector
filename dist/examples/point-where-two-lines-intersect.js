// import Interactive from 'https://unpkg.com/@interactive-svg/library/dist/Interactive.js';
import Interactive from '../Interactive.js';
import { PointWhereTwoLinesIntersect } from '../Util.js';
// Initialize the interactive
let id = 'point-where-two-lines-intersect';
let interactive = new Interactive(id);
interactive.window = true;
// Create three control points
let p1 = interactive.control(200, 200);
let p2 = interactive.control(300, 100);
let p3 = interactive.control(350, 200);
let p4 = interactive.control(100, 100);
let point = interactive.circle(0, 100, 3);
point.root.style.fill = '#333333';
point.addDependency(p1, p2, p3, p4);
point.update = function () {
    let point = PointWhereTwoLinesIntersect(p1, p2, p3, p4);
    this.cx = point.x;
    this.cy = point.y;
};
point.update();
addLineBetweenPoints(p1, p2);
addLineBetweenPoints(p3, p4);
// Draws a line between two points
function addLineBetweenPoints(point1, point2) {
    let line = interactive.line(0, 0, 0, 0);
    line.addDependency(point1, point2);
    line.update = function () {
        let slope = (point2.y - point1.y) / (point2.x - point1.x);
        let b = point2.y - slope * point2.x;
        if (isFinite(slope)) {
            this.x1 = interactive.minX - 10;
            this.y1 = slope * this.x1 + b;
            this.x2 = interactive.width + 10;
            this.y2 = slope * this.x2 + b;
        }
        else {
            this.x1 = point1.x;
            this.y1 = interactive.minY - 10;
            this.x2 = point1.x;
            this.y2 = interactive.maxY + 10;
        }
    };
    line.update();
    return line;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQtd2hlcmUtdHdvLWxpbmVzLWludGVyc2VjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9leGFtcGxlcy9wb2ludC13aGVyZS10d28tbGluZXMtaW50ZXJzZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RixPQUFPLFdBQVcsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFdkQsNkJBQTZCO0FBQzdCLElBQUksRUFBRSxHQUFHLGlDQUFpQyxDQUFDO0FBQzNDLElBQUksV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBRTFCLDhCQUE4QjtBQUM5QixJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUV0QyxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUNsQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLEtBQUssQ0FBQyxNQUFNLEdBQUc7SUFDYixJQUFJLEtBQUssR0FBRywyQkFBMkIsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQUNGLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVmLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFN0Isa0NBQWtDO0FBQ2xDLFNBQVMsb0JBQW9CLENBQUUsTUFBTSxFQUFFLE1BQU07SUFDM0MsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHO1FBQ1osSUFBSSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFbEMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBRTtZQUNqQyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFFO1lBQ2xDLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNkLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyJ9