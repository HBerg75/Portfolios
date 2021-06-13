import React from 'react'
import emailjs from 'emailjs-com';

function Contactitem() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('Contact_pro', 'template_portfolio', e.target, 'user_xJA7gNAmUn6jNJIRc0MYq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        // <div className="container">
        //     <form onSubmit={sendEmail}>
        //         <div className="row pt-5 mx-auto">
        //             <div className="col-8 form-group pt-2 mx-auto">
        //                 <label></label>
        //                 <input className="contact-form" type="text" name="user_name" />
        //             </div>
        //             <div className="col-8 form-group pt-2 mx-auto">
        //                 <label></label>
        //                 <input className="contact-form" type="email" name="user_email" />
        //             </div>
        //             <div className="col-8 form-group pt-2 mx-auto">
        //                 <label></label>
        //                 <textarea className="contact-form" name="message" />
        //             </div>
        //             <div className="col-8 pt-3 mx-auto">
        //                 <input className="btn btn-info" type="submit" value="Envoyer" />
        //             </div>
        //         </div>
        //     </form>
        // </div>

        <div className="login-box">
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
                <div className="user-box">
                    <input type="text" name="user_email" required="" />
                    <label>Email</label>
                </div>

                <div className="user-box">
                    <input type="text" name="user_name" required="" />
                    <label>Nom, Prénom, Société</label>
                </div>

                <div className="user-box">
                    <input type="text" name="user_numbers" />
                    <label>Numéro</label>
                </div>

                <div className="user-box">
                    <textarea type="text" name="message" required="" />
                    <label>Message </label>
                </div>

                <button className="button" type="submit" value="" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Envoyer
                </button>



            </form>
        </div>


    )
}

export default Contactitem
