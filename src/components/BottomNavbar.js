import React from 'react';
import{Link} from 'react-router-dom';
const activeLink = (e)=>{
    const links = document.getElementsByClassName('navLink');
    if(e.target.id==='main'){
      links[0].className += ' active'; 
      links[1].className = links[1].className.replace(' active',''); 
    } else{
        links[1].className += ' active'; 
        links[0].className = links[0].className.replace(' active',''); 
      }
        
}
function BottomNavbar() {
    return (
        <nav className='navbar-bottom'>
                <ul>
                    <li><Link to='/' className='navLink active' id='main' onClick={activeLink.bind(this)}>MainPage</Link></li>
                    <li><div className='tooltip'><span className='navLink' id='procudts'>Procudts</span>
                        <div className='tooltiptext'>
                            <Link to='/products'className='link' onClick={activeLink.bind(this)}>On Boarding</Link>
                            <p className='link'>Customisations</p>
                            <p className='link'>Templates</p>
                            <p className='link'>Integrations</p>
                        </div></div></li>
                    <li><span className='navLink'>Solitios</span></li>
                    <li><span className='navLink'>Services</span></li>
                    <li><span className='navLink'>Piricing</span></li>
                </ul>
             
            
        </nav>
    )
}

export default BottomNavbar
