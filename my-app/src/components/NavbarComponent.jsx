import React from "react";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavbarComponent() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const {user, isAuthenticated} = useAuth0();
    return(
        <section class="menu cid-TiendaMin" once="menu" id="menu1-0">
        
        <nav class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="menu-logo">
                <div class="navbar-brand">
                    <span class="navbar-logo">
                        <a href="#top">
                            <img src="assets/img/logo copia.png" alt="TecnoSeller" title="" style={{height: 4.8 + 'rem'}}/>
                        </a>
                    </span>
                    <div class="navbar-buttons mbr-section-btn ">
                    <a class="btn btn-sm btn-primary display-4 ancho boton" onClick={()=> loginWithRedirect()}>
                        <span class="mbri-mobile mbr-iconfont mbr-iconfont-btn "></span>  
                        Login
                    </a>
    
                    </div>

                    <div class="navbar-buttons mbr-section-btn">
                    {isAuthenticated ? <a class="nav-link link  display-4 bi " onClick={()=> logout({ returnTo: window.location.origin})}>
                        <span class="mbri-mobile mbr-iconfont mbr-iconfont-btn"></span>  
                        Logout
                    </a>:null}
                    
                    </div>

                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true"><li class="nav-item">
                        <Link className="nav-link link  display-4 bi bi-house-door" aria-current="page" to="/"><span class="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
                        Home
                        </Link> 
                    </li><li class="nav-item">
                        <Link className="nav-link link  display-4 bi bi-cart3" aria-current="page" to="/pedidos"><span class="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
                        Pedidos
                        </Link>                
                    </li><li class="nav-item">
                        <Link className="nav-link link  display-4 bi bi-person" aria-current="page" to="/usuarios"><span class="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
                        Usuario
                        </Link>
                        </li></ul>
                <div class="navbar-buttons mbr-section-btn">
                    <a class="btn btn-sm btn-primary display-4" href="https://wa.me/+573163529471">
                        <span class="mbri-mobile mbr-iconfont mbr-iconfont-btn"></span>  
                        +57-316-3529471
                    </a>
                </div>
                
                <form class="navbar-buttons mbr-section-btn">
                    <a class=" btn btn-sm btn-primary display-4 boton" type="submit"> {isAuthenticated ? user.name: "User"}</a>
                </form>
            </div>

        </nav>
    </section>
  );
}

export default NavbarComponent;
