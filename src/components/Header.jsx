import React from "react";

function Header({texto1}){
    return(
     
     <header className="contenedor-principal-header">

        <div className="header">
            <h2>{texto1}</h2>
        </div>

     </header>
      
    );
}

export default Header;