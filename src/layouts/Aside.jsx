import React from 'react';
import Logotype from '../assets/images/icons/logotype.svg'

const Aside = () => {
    return (
        <aside>
            <div className="logo">
                <img src={Logotype} alt="CRM" />
            </div>
        </aside>
    );
}

export default Aside;
