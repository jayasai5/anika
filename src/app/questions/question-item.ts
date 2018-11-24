export class QuestionItem {
    id : number;
    prompt : string;
    type : string;
    follows? : Follow[];
    options? : string[];
    start : boolean;
    constructor(id:number,prompt:string,type:string,follows:Follow[],options:string[],start:boolean){
        this.id = id;
        this.prompt = prompt;
        this.type = type;
        this.follows = follows;
        this.options = options;
        this.start = start;
    }
}
export class Follow{
    id : number;
    when? : When[];
    constructor(id:number, when:When[]){
        this.id = id;
        this.when = when;
    }
}
export class When{
    id : number;
    value : string;
    constructor(id:number,value:string){
        this.id = id;
        this.value = value;
    }
}
