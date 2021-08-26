import React from "react";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="bg-warning ">
        <h1 className="text-center">CONTACT US </h1>
      </div>
      <div className="d-flex justify-content-around ">
        <div className="">
          <h1>OFFICE HOURS</h1>
          <div className="d-flex justify-content-between">
            <div>
              <b>SUNDAY</b>
            </div>
            <div>09:30 - 18:00</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>MONDAY</b>
            </div>
            <div>09:30 - 18:00</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>TUESDAY</b>
            </div>
            <div>09:30 - 18:00</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>WEDNESDAY</b>
            </div>
            <div>09:30 - 18:00</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>THURSDAY</b>
            </div>
            <div>09:30 - 18:00</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>FRIDAY</b>
            </div>
            <div>By appointment only</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>SATURDAY</b>
            </div>
            <div>CLOSED</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b></b>
            </div>
            <div></div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>Address</b>
            </div>
            <div>16 HaThiya St. Tel Aviv-Yafo Israel</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>Tel</b>
            </div>
            <div>16 HaThiya St. Tel Aviv-Yafo Israel</div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <h2 className="text-primary ">Our Location</h2>
          </div>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.71060318687!2d34.765491384451714!3d32.05002382800246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca4cc26d2c3%3A0xc46dbb67c55d08a5!2sThe%20Milk%20%26%20Honey%20Distillery!5e0!3m2!1siw!2sil!4v1630008614742!5m2!1siw!2sil"
            allowfullscreen=""
            loading="lazy"
            width="600px"
            height="450px"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
