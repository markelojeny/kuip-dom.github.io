import React from 'react';

const Contact = (props) => {
    const [formValue, setFormValue] = React.useState({ 
        fio: '',
        email: '',
        tel: '' 
    })
 
    const handleChange = (e) => { 
        const {name, value} = e.target; 
        setFormValue({ 
          ...formValue, 
          [name]: value 
        }); 
    } 
    
    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(props);
        console.log(formValue.fio, formValue.email, formValue.tel);
        props.onSendMail(formValue.fio, formValue.email, formValue.tel);
    }

    return (
        <section id='Contact' className="contact">
                <div className="about__description">
                    <h3 className="content__title">Контактная информация</h3>
                    <form 
                        action="submit"
                        className='contact__form'
                        onSubmit={handleSubmit}
                        name="form">
                        <div className='contact__inputs'>
                            <input 
                                className='contact__input' 
                                minLength="2" maxLength="30" 
                                id="fio" name="fio" 
                                type="text" 
                                placeholder="введите ваше ФИО" 
                                value={formValue.fio} 
                                autoComplete="off"
                                onChange={handleChange}
                                required/>
                            <input 
                                className='contact__input' 
                                minLength="2" maxLength="30" 
                                id="email" name="email" type="email" 
                                placeholder="введите вашу почту" 
                                value={formValue.email} autoComplete="off" 
                                onChange={handleChange}  required
                                />
                            <input 
                                className='contact__input' 
                                minLength="2" maxLength="30" 
                                id="tel" name="tel" type="tel" 
                                placeholder="введите ваш номер телефона" 
                                value={formValue.tel} autoComplete="off" 
                                onChange={handleChange} required/>
                        </div>
                        <button
                            type="submit"
                            onSubmit={handleSubmit}
                            className='contact__button'>оставить заявку</button>
                    </form>
                </div>
                <p className='contact__text'>Если вас заинтересовало наше предложение, то позвоните по номеру телефона 8 925 999-96-10  или оставьте заявку нам на почту</p>
        </section>
    )
}

export default Contact;