//ReactDOM.render(<h1>I love REACT</h1>, document.getElementById("root"))

/*

html code can also be stored in a variable like below

const list = (
    <ul>

    <li>
        I love React
    </li>
    <li>
        I love JavaScript
    </li>
    <li>
        I love Node.Js
    </li>

</ul>
)

ReactDOM.render(
list
, document.getElementById("root"))*/

//when the html is stored in a variable, it can get as nested as html with no problem

const nav = (
    <nav>

     <h1>myBrand</h1>

        <ul>
            <li>pricing</li>
            <li>about</li>
            <li>contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    nav,
    document.getElementById("root")
)

// when wrapping sibling elements in a jsx function, you need to wrap them in fragment tags <></> or in divs... otherwise, it will not work