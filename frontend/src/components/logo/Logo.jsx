import React , {useState} from 'react';

function Logo(props) {
    const [dataLogo] = useState([
        {
            id: 1,
            name: 'STRATEGIC WEALTH PARTNERS'
        },
        {
            id: 2,
            name: 'CAPITAL GROWTH ADVISORS'
        },
        {
            id: 3,
            name: 'ENTERPRISE LENDING SOLUTIONS'
        },
        {
            id: 4,
            name: 'RISK & COMPLIANCE DESK'
        },
        {
            id: 5,
            name: 'DIGITAL BANKING INNOVATION'
        },
        {
            id: 6,
            name: 'CORPORATE TREASURY SERVICES'
        },
        {
            id: 7,
            name: 'MICROFINANCE OUTREACH'
        },
        {
            id: 8,
            name: 'ASSET MANAGEMENT SQUAD'
        },
        {
            id: 9,
            name: 'DATA ANALYTICS LAB'
        },
        {
            id: 10,
            name: 'INVESTOR RELATIONS TEAM'
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

