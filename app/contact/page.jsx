"use client"; 

import Link from 'next/link';
import { useState } from 'react';
import { db } from '/firebase.config'; 
import { collection, addDoc } from 'firebase/firestore';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await addDoc(collection(db, 'contacts'), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timestamp: new Date()
            });
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); 
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 px-4 bg-bgLight min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
            <p className="text-center mb-12">Feel free to reach out for collaborations or an opportunity for work. <span className='text-primary'>Thank you.</span></p>

            <div className="max-w-lg mx-auto space-y-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your Email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your Message"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white p-2 rounded-md font-semibold hover:bg-dark transition"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                <div className="text-center space-y-4">
                    <p className="text-lg font-semibold">Or contact me directly:</p>
                    <p className="text-md">
                        Email: <a href="mailto:yashpatel7205@gmail.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">yashpatel7205@gmail.com</a>
                    </p>
                    <p className="text-md">
                        LinkedIn: <Link href="https://www.linkedin.com/in/yashkumar-patel-68a5651a2" className="text-primary underline" target="_blank">Yashkumar Patel</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
