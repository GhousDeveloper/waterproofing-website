import React from 'react';
import { X } from 'lucide-react';
import { EstimateForm } from './EstimateForm.tsx';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <EstimateForm compact={false} source="modal" onSuccess={() => {}} />
      </div>
    </div>
  );
};
