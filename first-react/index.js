

 function MainContent()
 {
     return (
         <div>
         <header>
             <nav className="nav">
                 <img  src="download.png" className="nav-logo" width="50px" alt="logo"/>
                 <ul className="nav-items">
                     <li>Home</li>
                     <li>About</li>
                     <li>Gallery</li>
                     <li>Contact</li>
                 </ul>  
             </nav>
       </header>
             <h1>Fun facts about React</h1>
             <img src="iscon2.png"  width="150px" alt="image" />
             <ol type="square">
                 <li>Was first release in 2013</li>
                 <li>About</li>
                 <li>Was originally created by Joran Walke</li>
                 <li>Has well over 100k stars on Github</li>
                 <li>Is maintained by Facebook</li>
                 <li> Powwes thousands of enterprise apps, including mobile apps</li>
             </ol>        
             <footer>
                 <small>@2022 Tsope development. All rights reservad</small>
             </footer>

         </div>
     )
 }

//Function
function LoadFunction() {
    return (
    <div>
       <MainContent />
       
    </div>
    )
}

ReactDOM.render(<LoadFunction />, document.getElementById("root"))