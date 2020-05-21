class Welcome extends React.Component {

render() {
    return (
            <h1>
                {/* { sayHello && <div>Hello, { name.toUpperCase() }!</div> }  */}
                {/* aici este un if / else */}
                { this.params.sayHello  
                    ? <div>Hello, { this.params.name.toUpperCase() }!</div>
                    : <div>Good bye!</div> 
                }
                <div>{ new Date().toDateString() } </div>
                <div>{ new Date().getHours() } : { new Date().getMinutes() } : { new Date().getSeconds() } </div>
                <div> { new Date().toISOString() } </div>
                <a href={ this.params.uri } className="highlight">Learn more about React</a>
            </h1>
            )
        }
}

const App = function() {
    return (
        <Welcome sayHello={true} uri="https://reactjs.org/" name= "Simona"/>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)