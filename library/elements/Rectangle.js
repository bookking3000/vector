import SVG from '../SVG.js';
import Element from './Element.js';
export default class Rectangle extends Element {
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor(x, y, width, height) {
        super();
        this.root = SVG.Rectangle(x, y, width, height);
        this.root.id = this.id;
    }
    get fill() {
        return this.root.style.fill;
    }
    set fill(s) {
        this.root.style.fill = s;
    }
    get stroke() {
        return this.root.style.stroke;
    }
    set stroke(s) {
        this.root.style.stroke = s;
    }
    /**
    * Returns the x position of the rectangle
    */
    get x() {
        return this.root.x.baseVal.value;
    }
    /**
    * Sets the x position of the rectangle
    */
    set x(n) {
        this.root.x.baseVal.value = n;
    }
    /**
    * Returns the y position of the rectangle
    */
    get y() {
        return this.root.y.baseVal.value;
    }
    /**
    * Sets the y position of the rectangle
    */
    set y(n) {
        this.root.y.baseVal.value = n;
    }
    /**
    * Returns the width of the rectangle
    */
    get width() {
        return this.root.width.baseVal.value;
    }
    /**
    * Sets the width of the rectangle
    */
    set width(n) {
        this.root.width.baseVal.value = n;
    }
    /**
    * Returns the height of the rectangle
    */
    get height() {
        return this.root.height.baseVal.value;
    }
    /**
    * Sets the height of the rectangle
    */
    set height(n) {
        this.root.height.baseVal.value = n;
    }
    translate(x, y) {
        this.root.x.baseVal.value = this.root.x.baseVal.value + x;
        this.root.y.baseVal.value = this.root.y.baseVal.value + y;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdGFuZ2xlLmpzIiwic291cmNlUm9vdCI6Ii4vc291cmNlLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvUmVjdGFuZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sR0FBRyxNQUFNLFdBQVcsQ0FBQztBQUM1QixPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFFbkMsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFVLFNBQVEsT0FBTztJQU81Qzs7TUFFRTtJQUNGLFlBQWEsQ0FBUSxFQUFFLENBQVEsRUFBRSxLQUFZLEVBQUUsTUFBYTtRQUMxRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsQ0FBUTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxDQUFTO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOztNQUVFO0lBQ0YsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7TUFFRTtJQUNGLElBQUksQ0FBQyxDQUFFLENBQVE7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O01BRUU7SUFDRixJQUFJLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVEOztNQUVFO0lBQ0YsSUFBSSxDQUFDLENBQUUsQ0FBUTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7TUFFRTtJQUNGLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O01BRUU7SUFDRixJQUFJLEtBQUssQ0FBRSxDQUFRO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7TUFFRTtJQUNGLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRUQ7O01BRUU7SUFDRixJQUFJLE1BQU0sQ0FBRSxDQUFRO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBUSxFQUFFLENBQVE7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTVkcgZnJvbSAnLi4vU1ZHLmpzJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEVsZW1lbnR7XG5cbiAgLyoqXG4gICogVGhlIHN2ZyBlbGVtZW50XG4gICovXG4gIHJvb3Q6IFNWR1JlY3RFbGVtZW50O1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdHMgYSByZWN0YW5nbGUgZWxlbWVudCBhdCB0aGUgcG9zaXRpb24gKHgseSlcbiAgKi9cbiAgY29uc3RydWN0b3IoIHg6bnVtYmVyLCB5Om51bWJlciwgd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yb290ID0gU1ZHLlJlY3RhbmdsZSggeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5yb290LmlkID0gdGhpcy5pZDtcbiAgfVxuXG4gIGdldCBmaWxsKCkgOiBzdHJpbmd7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zdHlsZS5maWxsO1xuICB9XG5cbiAgc2V0IGZpbGwoczpzdHJpbmcpe1xuICAgIHRoaXMucm9vdC5zdHlsZS5maWxsID0gcztcbiAgfVxuXG4gIGdldCBzdHJva2UoKSA6IHN0cmluZ3tcbiAgICByZXR1cm4gdGhpcy5yb290LnN0eWxlLnN0cm9rZTtcbiAgfVxuXG4gIHNldCBzdHJva2Uoczogc3RyaW5nKXtcbiAgICB0aGlzLnJvb3Quc3R5bGUuc3Ryb2tlID0gcztcbiAgfVxuXG4gIC8qKlxuICAqIFJldHVybnMgdGhlIHggcG9zaXRpb24gb2YgdGhlIHJlY3RhbmdsZVxuICAqL1xuICBnZXQgeCgpIDogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnguYmFzZVZhbC52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAqIFNldHMgdGhlIHggcG9zaXRpb24gb2YgdGhlIHJlY3RhbmdsZVxuICAqL1xuICBzZXQgeCggbjpudW1iZXIgKSB7XG4gICAgdGhpcy5yb290LnguYmFzZVZhbC52YWx1ZSA9IG47XG4gIH1cblxuICAvKipcbiAgKiBSZXR1cm5zIHRoZSB5IHBvc2l0aW9uIG9mIHRoZSByZWN0YW5nbGVcbiAgKi9cbiAgZ2V0IHkoKTpudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnJvb3QueS5iYXNlVmFsLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICogU2V0cyB0aGUgeSBwb3NpdGlvbiBvZiB0aGUgcmVjdGFuZ2xlXG4gICovXG4gIHNldCB5KCBuOm51bWJlcil7XG4gICAgdGhpcy5yb290LnkuYmFzZVZhbC52YWx1ZSA9IG47XG4gIH1cblxuICAvKipcbiAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgcmVjdGFuZ2xlXG4gICovXG4gIGdldCB3aWR0aCgpIDogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yb290LndpZHRoLmJhc2VWYWwudmFsdWU7XG4gIH1cblxuICAvKipcbiAgKiBTZXRzIHRoZSB3aWR0aCBvZiB0aGUgcmVjdGFuZ2xlXG4gICovXG4gIHNldCB3aWR0aCggbjpudW1iZXIgKSB7XG4gICAgdGhpcy5yb290LndpZHRoLmJhc2VWYWwudmFsdWUgPSBuO1xuICB9XG5cbiAgLyoqXG4gICogUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoZSByZWN0YW5nbGVcbiAgKi9cbiAgZ2V0IGhlaWdodCgpIDogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmhlaWdodC5iYXNlVmFsLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICogU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSByZWN0YW5nbGVcbiAgKi9cbiAgc2V0IGhlaWdodCggbjpudW1iZXIgKSB7XG4gICAgdGhpcy5yb290LmhlaWdodC5iYXNlVmFsLnZhbHVlID0gbjtcbiAgfVxuXG4gIHRyYW5zbGF0ZSh4Om51bWJlciwgeTpudW1iZXIpe1xuICAgIHRoaXMucm9vdC54LmJhc2VWYWwudmFsdWUgPSB0aGlzLnJvb3QueC5iYXNlVmFsLnZhbHVlICsgeDtcbiAgICB0aGlzLnJvb3QueS5iYXNlVmFsLnZhbHVlID0gdGhpcy5yb290LnkuYmFzZVZhbC52YWx1ZSArIHk7XG4gIH1cbn1cbiJdfQ==