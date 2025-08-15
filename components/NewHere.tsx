import React, { useState, useRef, useEffect } from 'react';
import { generateWelcomeEmail } from '../services/geminiService';

const FormInput: React.FC<{
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}> = ({ id, name, type, label, value, onChange, required, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-church-gray mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:border-church-gold outline-none transition-shadow bg-white"
    />
  </div>
);

const NewHere: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Service',
    questions: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSubmitted && successRef.current) {
      successRef.current.focus();
    }
  }, [isSubmitted]);


  const serviceTimes: { [key: string]: string } = {
    'Service': 'Sunday, 11:00 AM',
    'Bible Study': 'Wednesday, 18:00 PM',
    'Worship & Prayer': 'Wednesday, 10:00 AM',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBackToHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = 'home';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const firstName = formData.name.split(' ')[0] || 'Friend';
    const serviceTime = serviceTimes[formData.service];

    try {
      const emailJson = await generateWelcomeEmail(firstName, formData.service, serviceTime);
      const emailContent = JSON.parse(emailJson);

      if (emailContent.error) {
        throw new Error(emailContent.error);
      }

      // Simulate sending the email by logging it to the console
      console.log('--- SIMULATING CONFIRMATION EMAIL ---');
      console.log(`To: ${formData.email}`);
      console.log(`Subject: ${emailContent.subject}`);
      console.log(`Body:\n${emailContent.body.replace(/\\n/g, '\n')}`);
      console.log('-----------------------------------');

      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit form:', error);
      setSubmitError('There was an issue planning your visit. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
        <section className="py-20 bg-church-light-gray min-h-[calc(100vh-200px)] flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
                <div ref={successRef} tabIndex={-1} className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg outline-none">
                    <h2 className="text-3xl md:text-4xl font-bold text-church-blue font-serif mb-4">Thank You!</h2>
                    <p className="text-lg text-church-gray mb-4">
                        We've received your visit plan for the <strong>{formData.service}</strong> service and we can't wait to meet you! A confirmation email is on its way to your inbox.
                    </p>
                    <p className="text-church-gray">
                        See you soon!
                    </p>
                    <a href="#home" onClick={handleBackToHomeClick} className="mt-8 inline-block bg-church-blue text-white px-8 py-3 rounded-full text-md font-semibold hover:bg-church-gold transition-all duration-300 transform hover:scale-105 cursor-pointer">
                        &larr; Back to Home
                    </a>
                </div>
            </div>
        </section>
    );
  }

  return (
    <section className="py-20 bg-church-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <a href="#home" onClick={handleBackToHomeClick} className="text-church-blue hover:text-church-gold transition-colors duration-300 inline-block mb-6 font-semibold cursor-pointer">&larr; Back to Home</a>
          <h2 className="text-3xl md:text-4xl font-bold text-church-blue font-serif mb-4">Plan Your Visit</h2>
          <p className="text-lg text-church-gray mb-12 max-w-2xl mx-auto">
            We're so excited to have you join us! Let us know you're coming by filling out the form below. We'll roll out the red carpet for you!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput id="name" name="name" type="text" label="Full Name" value={formData.name} onChange={handleChange} required placeholder="John Doe"/>
                    <FormInput id="email" name="email" type="email" label="Email Address" value={formData.email} onChange={handleChange} required placeholder="you@example.com"/>
                </div>
                 <FormInput id="phone" name="phone" type="tel" label="Phone Number (Optional)" value={formData.phone} onChange={handleChange} placeholder="(123) 456-7890" />

                <div>
                    <label className="block text-sm font-medium text-church-gray mb-2">Which service will you attend?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <label className="flex items-start p-4 border border-gray-300 rounded-lg has-[:checked]:bg-church-gold/10 has-[:checked]:border-church-gold cursor-pointer transition-all">
                            <input type="radio" name="service" value="Service" checked={formData.service === 'Service'} onChange={handleChange} className="h-4 w-4 text-church-gold focus:ring-church-gold border-gray-300 mt-1 shrink-0" />
                            <span className="ml-3">
                                <span className="block font-semibold text-church-gray">Service</span>
                                <span className="block text-sm text-gray-500">Sunday, 11:00 AM</span>
                            </span>
                        </label>
                        <label className="flex items-start p-4 border border-gray-300 rounded-lg has-[:checked]:bg-church-gold/10 has-[:checked]:border-church-gold cursor-pointer transition-all">
                            <input type="radio" name="service" value="Bible Study" checked={formData.service === 'Bible Study'} onChange={handleChange} className="h-4 w-4 text-church-gold focus:ring-church-gold border-gray-300 mt-1 shrink-0" />
                             <span className="ml-3">
                                <span className="block font-semibold text-church-gray">Bible Study</span>
                                <span className="block text-sm text-gray-500">Wednesday, 18:00 PM</span>
                            </span>
                        </label>
                        <label className="flex items-start p-4 border border-gray-300 rounded-lg has-[:checked]:bg-church-gold/10 has-[:checked]:border-church-gold cursor-pointer transition-all">
                            <input type="radio" name="service" value="Worship & Prayer" checked={formData.service === 'Worship & Prayer'} onChange={handleChange} className="h-4 w-4 text-church-gold focus:ring-church-gold border-gray-300 mt-1 shrink-0" />
                             <span className="ml-3">
                                <span className="block font-semibold text-church-gray">Worship &amp; Prayer</span>
                                <span className="block text-sm text-gray-500">Wednesday, 10:00 AM</span>
                            </span>
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="questions" className="block text-sm font-medium text-church-gray mb-1">
                        Any questions or special requests? (Optional)
                    </label>
                    <textarea 
                        id="questions" 
                        name="questions" 
                        rows={4}
                        value={formData.questions}
                        onChange={handleChange}
                        placeholder="e.g., Is there parking available?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:border-church-gold outline-none transition-shadow bg-white"
                    ></textarea>
                </div>

                <div className="pt-4 flex justify-center">
                    <button type="submit" disabled={isSubmitting} className="bg-church-gold text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-church-blue transition-all duration-300 transform hover:scale-105 w-full md:w-auto flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed">
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                           "Let's Go!"
                        )}
                    </button>
                </div>
                 {submitError && <p className="text-red-500 mt-4 text-center">{submitError}</p>}
            </form>
        </div>
      </div>
    </section>
  );
};

export default NewHere;