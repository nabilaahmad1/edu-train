import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="container my-5">
            {/* service heading  */}
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder">Contact Us</h1>
            </div>
            {/* contact form  */}
            <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustomUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-12">
                    <label for="validationTextarea" className="form-label">Textarea</label>
                    <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                    <div className="invalid-feedback">
                        Please enter a message in the textarea.
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    {/* <!-- Button trigger modal --> */}
                    <button className="btn btn-primary rounded-pill px-5" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit form</button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Notification</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>From Submited</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary px-5 rounded-pill" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary px-5 rounded-pill">Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;