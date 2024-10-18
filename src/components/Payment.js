import React from 'react';
import rubble from '../image/rubble.svg';

function Payment(props) {

    return (
        <section className='payment'>
            <img src={rubble} className="payment__logo" alt="logo" />
            <div className='payment__information'>
                <p className='payment__description'>Подходит под сельскую ипотеку от Банков до 3% годовых:</p>
                <ul className='payment__list'>
                    <li className='payment__element'>на участки, готовые и строящиеся дома</li>
                    <li className='payment__element'>первоначальный взнос не менее 20,1%</li>
                    <li className='payment__element'>сумма кредитования до 6 млн. рублей</li>
                </ul>
            </div>
        </section>
    )
}

export default Payment;