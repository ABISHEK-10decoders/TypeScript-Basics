class Todo {
    id : string;
    name : string;
    constructor(todoText : string){
        this.id = Math.random().toString();
        this.name = todoText;
    }
}
export default Todo;