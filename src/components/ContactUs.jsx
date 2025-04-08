import React, { useState } from "react";
import emailjs from "@emailjs/browser";


export default function ContactUs() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(""); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const templateParams = {
        email: email,
        subject: subject,
        message: message,
      };
  
      emailjs
        .send("service_mtqzpha", "template_2ucye56", templateParams, "GUA5F2KJWCvQMHY6k")
        .then(
          (response) => {
            console.log("Success:", response);
            setStatus("Message sent successfully!");
          },
          (error) => {
            console.log("Error:", error);
            setStatus("There was an error sending the message.");
          }
        );
    };
    return (
        <div className='flex justify-center items-center mt-20 rounded-lg shadow-lg mb-50'>
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
              </p>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-white text-center rounded-lg bg-[#1d6b89] sm:w-fit hover:bg-[#f1f0ee] hover:text-[#1d6b89]  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
                >
                  Send message
                </button>
                {status && (
                    <p className="mt-4 text-green-600 text-center font-medium bg-green-100 py-2 px-4 rounded-lg shadow-md">
                        {status}
                    </p>
                )}
              </form>
            </div>
          </section>
        </div>
      );
    }
