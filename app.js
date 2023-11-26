function Header(){
    return (
        <header className="headerContainer">
                    <img src="React-icon.svg.png" className="react-logo" />
                    <ul className="items">
                    <li > Pricing  </li>
                    <li > About </li>
                    <li >Contact  </li>
                    </ul>
        </header>
    )
    }
 function Main(){
    return(
        <div className="main-container">
        <h1> Fun Facts about React </h1>
        <ul className="main-list">
                <li> was first released in 2013 </li>
                <li> Was originaly created by Jordan Walked </li>
                <li> Has well over 100k starts on GitHub </li>
                <li> It mainted by Facebook </li>
            </ul>
            </div>
    ) 
}
function Footer(){
    return (
        <footer>
                © Meirovich development. All rights reserved!
                </footer>
    )
    }

function Page(){
    return (
        <div>
            <Header/>
            <Main />
            <Footer />
        </div>
        
    )

}



     
   



ReactDOM.render( <Page /> , document.querySelector("#root"));