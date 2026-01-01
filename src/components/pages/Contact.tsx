import { useState } from "react";
import toast from "react-hot-toast";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10">Contact Me</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
