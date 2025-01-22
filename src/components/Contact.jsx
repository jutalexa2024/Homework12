import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      // Here, you can add functionality to send the data to an API or email service
      console.log("Form submitted:", formData);
      setErrors({});
      setFormData({ name: "", email: "", message: "" });
      setSuccess("Your message has been sent!");
    }
  };
    return (
      <div className="min-h-screen w-screen flex p-16 items-center justify-center bg-gray-100">
        <div className="max-w-6xl w-full bg-white p-12 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Me</h2>
          {success && <p className="text-green-500 mb-6 text-lg">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label
                className="block text-gray-700 font-semibold text-lg mb-4"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-lg border rounded-lg ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 font-semibold text-lg mb-4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-lg border rounded-lg ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 font-semibold text-lg mb-4"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-lg border rounded-lg ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your Message"
                rows="6"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-2">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 text-lg rounded-lg hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
};

export default Contact;
