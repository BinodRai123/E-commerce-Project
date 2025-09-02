// src/components/ContactSection.jsx

const ContactSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row md:justify-center gap-8 px-4">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/4 bg-white shadow-md rounded-lg p-6">
          <div className="mb-6 flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <i class="ri-phone-line size-10 flex items-center justify-center text-red-100 bg-[#DB4444] rounded-full text-xl"></i>
              <h3 className="font-semibold text-lg">Call To Us</h3>
            </div>
            <p className="font-light text-sm">
              We are available 24/7, 7 days a week.
            </p>
            <p className="font-light text-sm">Phone: +8801611112222</p>
          </div>

          <hr className="my-4" />

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <i class="ri-mail-download-line size-10 flex items-center justify-center text-red-100 bg-[#DB4444] rounded-full text-xl"></i>
              <h3 className="font-semibold text-lg">Write To Us</h3>
            </div>
              <p className="text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm mt-1">
                Emails: customer@exclusive.com
              </p>
              <p className="text-sm">support@exclusive.com</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-[60%] bg-white shadow-md rounded-lg p-6">
          <form className="flex flex-col gap-4">
            {/* Top Row Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className=" px-4 bg-[#f5f5f5] py-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className=" px-4 bg-[#f5f5f5] py-2 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className=" px-4 bg-[#f5f5f5] py-2 focus:outline-none"
              />
            </div>

            {/* Message Box */}
            <textarea
              rows="6"
              placeholder="Your Message"
              className="  px-4 bg-[#f5f5f5] py-2 focus:outline-none "
            ></textarea>

            {/* Submit Button */}
              <button
                type="submit"
                className="button text-xl rounded hover:bg-red-700 self-end"
              >
                Send Message
              </button>
        
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
