"use strict";
class Point {
    constructor(abs, ord) {
        this._abs = abs;
        this._ord = ord;
    }
    get abs() {
        return this._abs;
    }
    get ord() {
        return this._ord;
    }
    set abs(value) {
        this._abs = value;
    }
    set ord(value) {
        this._ord = value;
    }
    sePresenter() {
        console.log("Mon abscisse est" + this._abs + " et mon ordonné" + this._ord);
    }
    calculerDistance(p) {
        const dx = p.abs - this._abs;
        const dy = p.ord - this._ord;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.sePresenter();
p2.sePresenter();
const distance = p1.calculerDistance(p2);
console.log("la distance entre les deux point est" + distance);
