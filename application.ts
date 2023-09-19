class Point {
    
private _abs :number;
private _ord :number;

constructor(abs:number, ord:number){
    this._abs=abs;
    this._ord=ord;
}
get abs(): number {
    return this._abs;
  }

  get ord(): number {
    return this._ord;
  }

  set abs(value: number) {
    this._abs = value;
  }

  set ord(value: number) {
    this._ord = value;
  }

sePresenter():void{
console.log("Mon abscisse est"+this._abs+" et mon ordonné"+this._ord);
}
calculerDistance(p:Point):number{
const dx= p.abs - this._abs;
const dy= p.ord - this._ord;
return Math.sqrt(dx*dx+dy*dy);

}
}
const p1=new Point(5,5);
const p2=new Point(10,10);
 p1.sePresenter();
 p2.sePresenter();
 const distance=p1.calculerDistance(p2);
console.log("la distance entre les deux point est"+distance)