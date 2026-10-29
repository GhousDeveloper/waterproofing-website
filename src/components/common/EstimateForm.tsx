import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Clock, Calculator, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/roofingData.ts';

interface EstimateFormProps {
  compact?: boolean;
  className?: string;
  source?: string;
  onSuccess?: () => void;
}

export const EstimateForm: React.FC<EstimateFormProps> = ({
  compact = false,
  className = '',
  source = 'inline-estimate',
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Roof Waterproofing',
    propertyType: 'House',
    estimatedSqFt: '2000',
    message: '',
    urgency: 'Standard — Within 1–2 Weeks'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  // Approximate PKR benchmark range for transparent guidance
  const calculateEstimateRangePKR = () => {
    const sqft = parseInt(formData.estimatedSqFt, 10) || 1500;
    let ratePerSqFtLow = 45;
    let ratePerSqFtHigh = 85;

    if (formData.service.includes('Waterproofing')) {
      ratePerSqFtLow = 50;
      ratePerSqFtHigh = 95;
    } else if (formData.service.includes('Heat Proofing')) {
      ratePerSqFtLow = 40;
      ratePerSqFtHigh = 75;
    } else if (formData.service.includes('Leak Repair')) {
      return 'Rs. 15,000 – Rs. 45,000 (Typical Repair Scope)';
    } else if (formData.service.includes('Industrial') || formData.service.includes('Commercial')) {
      ratePerSqFtLow = 65;
      ratePerSqFtHigh = 120;
    } else if (formData.service.includes('Inspection')) {
      return 'Free Initial On-Site Assessment';
    }

    const low = Math.round(sqft * ratePerSqFtLow);
    const high = Math.round(sqft * ratePerSqFtHigh);
    return `PKR ${low.toLocaleString()} – PKR ${high.toLocaleString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Instant submission feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-2xl p-8 text-center border border-[#E8E2DF] shadow-xl ${className}`}>
        <div className="w-16 h-16 bg-[#B52F24]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#B52F24]">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-[#202020] mb-2 font-['Plus_Jakarta_Sans']">
          Estimate Request Received!
        </h3>
        <p className="text-neutral-600 mb-6 text-sm max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-neutral-900">{formData.name}</strong>. Our technical roofing estimator will review your project details and contact you at <strong className="text-neutral-900">{formData.phone || formData.email}</strong> shortly to discuss your requirements and arrange a site visit.
        </p>

        <div className="bg-[#FAF7F5] rounded-xl p-4 text-left border border-[#E8E2DF] mb-6 space-y-2">
          <div className="text-xs uppercase font-bold text-[#B52F24] tracking-wider">
            Estimated Reference Range (~{formData.estimatedSqFt} sq ft)
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-[#202020] font-mono">
            {calculateEstimateRangePKR()}
          </div>
          <div className="text-xs text-neutral-500">
            *Final itemized quotation is provided after thorough physical inspection of roof surface and slope.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href={COMPANY_INFO.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
          </a>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto py-2.5 px-5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B52F24]" />
            <span>Call {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              service: 'Roof Waterproofing',
              propertyType: 'House',
              estimatedSqFt: '2000',
              message: '',
              urgency: 'Standard — Within 1–2 Weeks'
            });
          }}
          className="text-xs font-semibold text-[#B52F24] hover:underline cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-[#E8E2DF] overflow-hidden ${className}`}>
      {/* Header bar matching reference visual design */}
      <div className="bg-gradient-to-r from-[#8F211A] to-[#B52F24] px-6 py-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] tracking-tight">
              Get an Estimate
            </h3>
            <p className="text-xs text-white/85 mt-0.5">
              Free Initial Assessment · Transparent Quotations · Quality Assurance
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowCalculator(!showCalculator)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-lg text-xs font-medium transition-colors cursor-pointer"
            title="Toggle ballpark rate calculator"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{showCalculator ? 'Hide Estimator' : 'Rate Estimator'}</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {showCalculator && (
          <div className="p-4 bg-[#FAF7F5] rounded-xl border border-[#B52F24]/20 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#202020]">Roof Surface Area (approx. sq. ft.):</span>
              <span className="font-mono font-bold text-[#B52F24]">{formData.estimatedSqFt} sq ft</span>
            </div>
            <input
              type="range"
              min="500"
              max="10000"
              step="250"
              value={formData.estimatedSqFt}
              onChange={(e) => setFormData({ ...formData, estimatedSqFt: e.target.value })}
              className="w-full accent-[#B52F24] cursor-pointer"
            />
            <div className="flex justify-between items-center pt-2 border-t border-[#E8E2DF] text-xs">
              <span className="text-neutral-600">Reference Benchmark:</span>
              <span className="font-mono font-bold text-sm text-[#202020]">{calculateEstimateRangePKR()}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Full Name <span className="text-[#B52F24]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ahmed Khan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Phone Number <span className="text-[#B52F24]">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+92 300 1234567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24] focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="ahmed@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Roofing Service Needed
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24] focus:bg-white transition-colors"
            >
              <option value="Roof Installation">Roof Installation</option>
              <option value="Roof Replacement">Roof Replacement</option>
              <option value="Roof Leak Repair">Roof Leak Repair</option>
              <option value="Roof Waterproofing">Roof Waterproofing</option>
              <option value="Roof Heat Proofing">Roof Heat Proofing</option>
              <option value="Commercial Roofing">Commercial Roofing</option>
              <option value="Industrial Roofing">Industrial Roofing</option>
              <option value="Roof Inspection">Roof Inspection</option>
              <option value="Storm/Rain Damage Repair">Storm/Rain Damage Repair</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {!compact && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Property Type
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24] focus:bg-white transition-colors"
              >
                <option value="House">House</option>
                <option value="Apartment Building">Apartment Building</option>
                <option value="Shop">Shop</option>
                <option value="Office">Office</option>
                <option value="School">School</option>
                <option value="Hospital">Hospital</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Factory">Factory</option>
                <option value="Commercial Building">Commercial Building</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Project Urgency
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24] focus:bg-white transition-colors"
              >
                <option value="Emergency — As Soon As Possible">Emergency — As Soon As Possible</option>
                <option value="Urgent — Within 2–3 Days">Urgent — Within 2–3 Days</option>
                <option value="Standard — Within 1–2 Weeks">Standard — Within 1–2 Weeks</option>
                <option value="Planning / Future Project">Planning / Future Project</option>
              </select>
            </div>
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
            Project Details or Symptoms
          </label>
          <textarea
            rows={compact ? 2 : 3}
            placeholder="Describe roof leakage, cracks, water damage, heat issues, roof size, property type, or any specific requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E8E2DF] rounded-xl focus:outline-none focus:border-[#B52F24] focus:bg-white transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 bg-[#B52F24] hover:bg-[#8F211A] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-75"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Request Free Estimate</span>
            </>
          )}
        </button>

        <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2 border-t border-[#E8E2DF]">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B52F24]" />
            <span>Workmanship Guarantee</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#B52F24]" />
            <span>Quick Response</span>
          </div>
          <div>
            <span>No Obligation Quote</span>
          </div>
        </div>
      </form>
    </div>
  );
};
