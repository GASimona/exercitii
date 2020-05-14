const name = "Simona";
const uri = 'https://reactjs.org/';
const sayHello = true;

const elem = (
    <h1>
        {/* { sayHello && <div>Hello, { name.toUpperCase() }!</div> }  */}
        {/* aici este un if / else */}
        { sayHello  
            ? <div>Hello, { name.toUpperCase() }!</div>
            : <div>Good bye!</div> 
        }

        <div>{ new Date().toDateString() } </div>
        <a href={ uri }>Learn more about React</a>
    </h1>
)

ReactDOM.render(
    elem,
    document.getElementById('root')
)

