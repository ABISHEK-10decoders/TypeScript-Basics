import React ,{ useRef , useState} from 'react'

const Form:React.FC<{onAddTodo : (text : string)=> void}> = (props) => {
    const [InputValue, setInputValue] = useState("")
    // const inputvalue = useRef<HTMLInputElement>(null)


    const submitButton = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("submitButton",InputValue);
        if(InputValue.trim().length === 0 ){
            return;
        }
        props.onAddTodo(InputValue);

        
    };
    console.log(InputValue);
  return (
    <div>

        <form onSubmit={submitButton}> 
            <label htmlFor="text">Form Name</label>
            <input type="text" id="text"  onChange={ (e) => setInputValue(e.target.value)}/>
            <button> OnClick</button>

        </form>
    </div>
  )
}

export default Form;