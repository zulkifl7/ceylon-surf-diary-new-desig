import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails: {
    name: string;
    subtitle: string;
    price: string;
  } | null;
}

export default function BookingModal({ isOpen, onClose, packageDetails }: BookingModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    peopleCount: '',
    date: '',
    notes: ''
  });

  if (!isOpen || !packageDetails) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "94767676197";
    const message = `*NEW BOOKING REQUEST*%0A%0A` +
      `*Package:* ${packageDetails.name} ${packageDetails.subtitle}%0A` +
      `*Price:* ${packageDetails.price}%0A%0A` +
      `*Client Details:*%0A` +
      `- Name: ${formData.firstName} ${formData.lastName}%0A` +
      `- Email: ${formData.email}%0A` +
      `- Phone: ${formData.phone}%0A` +
      `- Country: ${formData.country}%0A` +
      `- People: ${formData.peopleCount}%0A` +
      `- Preferred Date: ${formData.date}%0A` +
      `- Notes: ${formData.notes || 'None'}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 scale-100 opacity-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-jedira tracking-wide">BOOKING DETAILS</h3>
            <p className="text-xs text-gray-500 font-poppins">{packageDetails.name}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-poppins text-gray-500 ml-1">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-poppins text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-poppins text-gray-500 ml-1">Last Name</label>
              <input
                required
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-poppins text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-poppins text-gray-500 ml-1">Email Address</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-poppins text-sm focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-poppins text-gray-500 ml-1">Phone Number</label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-poppins text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-poppins text-gray-500 ml-1">Country</label>
              <input
                required
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-poppins text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-poppins text-gray-500 ml-1">Number of People</label>
              <select 
                required
                name="peopleCount"
                value={formData.peopleCount}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-poppins text-sm text-gray-500 focus:outline-none focus:border-black transition-colors"
              >
                <option value="">No of people</option>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4+ people</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-poppins text-gray-500 ml-1">Preferred Date</label>
              <input
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-poppins text-sm text-gray-500 focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-poppins text-gray-500 ml-1">Special Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special requests or details?"
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-poppins text-sm focus:outline-none focus:border-black transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-black text-white py-3.5 rounded-full font-poppins font-medium hover:bg-gray-800 transition-all duration-300 mt-2 shadow-lg shadow-black/10 active:scale-[0.98]"
          >
            CONFIRM & SEND TO WHATSAPP
          </button>
        </form>
      </div>
    </div>
  );
}