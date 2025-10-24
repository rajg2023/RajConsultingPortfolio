import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // For now, just show a success message (no backend)
    setSubmitted(true);
    // Reset form after submit
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="container mx-auto my-12 p-6 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
      <p className="mb-8">Ready to discuss your project or have questions about my services? Reach out anytime.</p>

      {submitted && <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">Thank you for your message! I will get back to you soon.</div>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">Name</label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full border rounded p-2" required />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2" required />
        </div>
        <div>
          <label htmlFor="subject" className="block font-semibold mb-1">Subject</label>
          <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold mb-1">Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full border rounded p-2" required></textarea>
        </div>

        <button type="submit" className="col-span-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
        <div>
          <p><strong>Direct Email:</strong> rajivgiri2025@gmail.com</p>
          <p><strong>Admin Email:</strong> admin@rajtechconsulting.com</p>
          <p><strong>Consulting Email:</strong> consulting@rajtechconsulting.com</p>
          <p><strong>Phone:</strong> +1 (513) 834-3371</p>
          <p><strong>Location:</strong> Cincinnati, OH</p>
        </div>
        <div>
          <p><strong>Availability:</strong> Monday - Friday, 9am - 5pm PST</p>
          <p><strong>Connect With Me:</strong></p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="LinkedIn" className="text-blue-600">LinkedIn</a>
            <a href="#" aria-label="Twitter" className="text-blue-600">Twitter</a>
            <a href="#" aria-label="GitHub" className="text-blue-600">GitHub</a>
            <a href="#" aria-label="Facebook" className="text-blue-600">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
