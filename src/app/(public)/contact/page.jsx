import { CalendarDays, Map, MapPin, PhoneCall } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="main-container-large flex justify-center flex-col items-center">
      <div className="text-center max-w-[50rem] my-20 px-5">
        <div className="text-3xl font-semibold mb-2">
          Get In <span className="text-primary">Touch</span>
        </div>
        <p className="text-slate-600">
          We’d love to hear from you! Whether you have a question about our
          services, need assistance with your car purchase, or just want to
          share your feedback, our team is here to help.
        </p>
      </div>
      <div className="flex justify-center gap-10 flex-row-reverse md:flex-nowrap flex-wrap m-5">
        <div className="flex flex-col gap-5 bg-slate-100 dark:bg-gray-800 p-5 rounded-xl">
          <div>
            <div className="text-xl font-semibold flex gap-2 mb-2">
              Our Address <MapPin className="text-primary" />
            </div>
            <p>
              Visit us At : <br />
              Jl. Soekarno Hatta no 245, Kota Bandung, Indonesia
            </p>
          </div>
          <div>
            <div className="text-xl font-semibold flex gap-2 mb-2">
              Customers Support <PhoneCall className="text-primary" />
            </div>
            <p>
              For immediate assistance, please contact our customer support
              team:
            </p>
            <div className="text-sm mt-2">
              <div>
                <b>Phone</b> : (022) 8098039
              </div>
              <div>
                <b>Email</b> : carzone@gmail.com
              </div>
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold flex gap-2 mb-2">
              Business Hour <CalendarDays className="text-primary" />
            </div>
            <p className="textgray-700">Our office is open:</p>
            <div className="text-sm mt-2">
              <div>
                <b>Monday to Friday </b>: 9:00 AM - 6:00 PM
              </div>
              <div>
                <b>Saturday</b>: 10:00 AM - 4:00 PM
              </div>
              <div>
                <b>Sunday</b>: Closed
              </div>
            </div>
          </div>
        </div>
        <div className=" p-5 rounded-xl bg-slate-100">
          <div className="text-xl font-semibold flex gap-2 mb-2">
            Location <Map className="text-primary" />
          </div>
          <div className="flex justify-center items-center">
            <iframe
              className=" p-5 h-96 border rounded-xl bg-white"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=jalan+soekarno+hatta&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
