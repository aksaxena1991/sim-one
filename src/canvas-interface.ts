interface Canvas {
    id:string,
    width: number,
    height: number,
    
}
class CreateCanvas implements Canvas {
     id: string = 'myCanvas';
     width: number = 300;
     height: number = 300;
     
     canvas = <HTMLElement> document.createElement('canvas');
     body = <HTMLBodyElement> document.getElementById('body');
    

    constructor(id: string, width: number, height: number) {
        this.id = id;
        this.width = width;
        this.height = height;
    }
    init() {
        this.canvas.id = this.id;
        this.canvas?.setAttribute('height',`${this.height}`);
        this.canvas?.setAttribute('width',`${this.width}`);
        this.body.appendChild(this.canvas);
    }
    getCanvas() {
        return this.canvas;
    }
    getContext() {
        let cnvs = this.getCanvas() as HTMLCanvasElement;
        let ctx = cnvs.getContext('2d');
        console.log('context', ctx);
    }

}
export default CreateCanvas;