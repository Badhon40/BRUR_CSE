import React from 'react';

const Footer = () => {
    return (
       <footer className="footer sm:footer-horizontal bg-[#3F8AFF] text-white p-10 text-lg">
        <aside>
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.438857205189!2d89.25905!3d25.715810999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aef52cbb3c57f5%3A0xb37cc4709f5c2d83!2sBegum%20Rokeya%20University%2C%20Rangpur!5e0!3m2!1sen!2sbd!4v1700000000000"
                width="100%"
                height="200"
                style={{
                    border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
        </aside>
        <nav>
            <h6 className="footer-title">Offices</h6>
            <a className="link link-hover">Vice-Chancellor Office</a>
            <a className="link link-hover">Register Office</a>
            <a className="link link-hover">Exam Controller Office</a>
            <a className="link link-hover">Transport-Pool Office</a>
            <a className="link link-hover">External Affair Office</a>
        </nav>
        <nav>
            <h6 className="footer-title">Address</h6>
            <a className="link link-hover">Ashreatpur, Park Moor</a>
            <a className="link link-hover">Rangpur City</a>
            <a className="link link-hover">Post Office : Cadet College</a>
            <a className="link link-hover">Division : Rangpur</a>
        </nav>
        <nav>
            <h6 className="footer-title">Contact</h6>
            <a className="link link-hover">Department of Computer</a>
            <a className="link link-hover">Science and Engineering</a>
            <a className="link link-hover">Email : </a>
        </nav>
        </footer>
    );
};

export default Footer;