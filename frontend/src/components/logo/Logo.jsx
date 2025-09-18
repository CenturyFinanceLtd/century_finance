import React , {useState} from 'react';

function Logo(props) {
    const [dataLogo] = useState([
        {
            id: 1,
            name: 'CENTURY FINANCE LIMITED'
        },
        {
            id: 2,
            name: 'CENTURY FINANCE LIMITED'
        },
        {
            id: 3,
            name: 'CENTURY FINANCE LIMITED'
        },
        {
            id: 4,
            name: 'CENTURY FINANCE LIMITED'
        },
        {
            id: 5,
            name: 'CENTURY FINANCE LIMITED'
        },
        {
            id: 6,
            name: 'CENTURY FINANCE LIMITED'
        },
        {
            id: 7,
            name: 'CENTURY FINANCE LIMITED'
        },
        {
            id: 8,
            name: 'CENTURY FINANCE LIMITED'
        },
        {
            id: 9,
            name: 'CENTURY FINANCE LIMITED'
        },
        {
            id: 10,
            name: 'CENTURY FINANCE LIMITED'
        },
    ])
    return (
        <section className="logo-slider">          
                <div className="logo-slider-wrap">
                    <div className="logo-slider-inner">
                        {
                            dataLogo.map(idx => (
                                <h3 key={idx.id}>{idx.name}</h3>
                            ))
                        }

                    </div>
                    <div className="logo-slider-inner style-2">
                        {
                            dataLogo.map(idx => (
                                <h3 key={idx.id}>{idx.name}</h3>
                            ))
                        }
                    </div>
                </div>
            </section>
    );
}

export default Logo;