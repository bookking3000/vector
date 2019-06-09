import SVG from '../SVG.js';
import Element from './Element.js';
export default class Line extends Element {
    constructor(x1, y1, x2, y2) {
        super();
        this.root = SVG.Line(x1, y1, x2, y2);
        this.root.id = this.id;
    }
    get fill() {
        return this.root.style.fill;
    }
    set fill(fill) {
        this.root.style.fill = fill;
    }
    get stroke() {
        return this.root.style.stroke;
    }
    set stroke(stroke) {
        this.root.style.stroke = stroke;
    }
    get x1() {
        return this.root.x1.baseVal.value;
    }
    set x1(x1) {
        this.root.x1.baseVal.value = x1;
    }
    get y1() {
        return this.root.y1.baseVal.value;
    }
    set y1(y1) {
        this.root.y1.baseVal.value = y1;
    }
    get x2() {
        return this.root.x2.baseVal.value;
    }
    set x2(x2) {
        this.root.x2.baseVal.value = x2;
    }
    get y2() {
        return this.root.y2.baseVal.value;
    }
    set y2(y2) {
        this.root.y2.baseVal.value = y2;
    }
    translate(x, y) {
        this.root.x1.baseVal.value += x;
        this.root.y1.baseVal.value += y;
        this.root.x2.baseVal.value += x;
        this.root.y2.baseVal.value += y;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NvdXJjZS8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL0xpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFHLE1BQU0sV0FBVyxDQUFDO0FBQzVCLE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUVuQyxNQUFNLENBQUMsT0FBTyxPQUFPLElBQUssU0FBUSxPQUFPO0lBSXZDLFlBQVksRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVTtRQUN4RCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksRUFBRSxDQUFDLEVBQVU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLEVBQUUsQ0FBQyxFQUFVO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxFQUFFLENBQUMsRUFBVTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksRUFBRSxDQUFDLEVBQVU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsU0FBUyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTVkcgZnJvbSAnLi4vU1ZHLmpzJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBFbGVtZW50IHtcblxuICByb290OiBTVkdMaW5lRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcih4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJvb3QgPSBTVkcuTGluZSh4MSwgeTEsIHgyLCB5Mik7XG4gICAgdGhpcy5yb290LmlkID0gdGhpcy5pZDtcbiAgfVxuXG4gIGdldCBmaWxsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zdHlsZS5maWxsO1xuICB9XG5cbiAgc2V0IGZpbGwoZmlsbDogc3RyaW5nKSB7XG4gICAgdGhpcy5yb290LnN0eWxlLmZpbGwgPSBmaWxsO1xuICB9XG5cbiAgZ2V0IHN0cm9rZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc3R5bGUuc3Ryb2tlO1xuICB9XG5cbiAgc2V0IHN0cm9rZShzdHJva2U6IHN0cmluZykge1xuICAgIHRoaXMucm9vdC5zdHlsZS5zdHJva2UgPSBzdHJva2U7XG4gIH1cblxuICBnZXQgeDEoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yb290LngxLmJhc2VWYWwudmFsdWU7XG4gIH1cblxuICBzZXQgeDEoeDE6IG51bWJlcikge1xuICAgIHRoaXMucm9vdC54MS5iYXNlVmFsLnZhbHVlID0geDE7XG4gIH1cblxuICBnZXQgeTEoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnkxLmJhc2VWYWwudmFsdWU7XG4gIH1cblxuICBzZXQgeTEoeTE6IG51bWJlcikge1xuICAgIHRoaXMucm9vdC55MS5iYXNlVmFsLnZhbHVlID0geTE7XG4gIH1cblxuICBnZXQgeDIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yb290LngyLmJhc2VWYWwudmFsdWU7XG4gIH1cblxuICBzZXQgeDIoeDI6IG51bWJlcikge1xuICAgIHRoaXMucm9vdC54Mi5iYXNlVmFsLnZhbHVlID0geDI7XG4gIH1cblxuICBnZXQgeTIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnkyLmJhc2VWYWwudmFsdWU7XG4gIH1cblxuICBzZXQgeTIoeTI6IG51bWJlcikge1xuICAgIHRoaXMucm9vdC55Mi5iYXNlVmFsLnZhbHVlID0geTI7XG4gIH1cblxuICB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLnJvb3QueDEuYmFzZVZhbC52YWx1ZSArPSB4O1xuICAgIHRoaXMucm9vdC55MS5iYXNlVmFsLnZhbHVlICs9IHk7XG4gICAgdGhpcy5yb290LngyLmJhc2VWYWwudmFsdWUgKz0geDtcbiAgICB0aGlzLnJvb3QueTIuYmFzZVZhbC52YWx1ZSArPSB5O1xuICB9XG5cbn1cbiJdfQ==