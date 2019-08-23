import React from 'react'

function Content(props) {
    const {url,header} = props;
    return (
        <div className='content'>
            <img alt='' src={url} />
            <h3>{header}</h3>
            <div className='par'>
                <p>Ea perspiciatis accusantium nobis pariatur. 
                    Assumenda enim nisi qui enim. Veniam aut sit hic soluta non debitis et officiis.
                     Omnis et maiores a id placeat veniam odit molestias.
                      Consequatur voluptas ipsa dolores dolorem et ullam qui saepe. 
                    Omnis non quibusdam veniam autem sint.</p>
            </div>

        </div>
    )
}

export default Content
