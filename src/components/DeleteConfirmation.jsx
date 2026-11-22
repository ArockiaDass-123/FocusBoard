import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function DeleteConfirmation({ 
  isOpen, 
  task, 
  onConfirm, 
  onCancel 
}) {
  if (!isOpen || !task) return null;

  return (
    <div 
      className="modal-overlay" 
      role="alertdialog" 
      aria-modal="true" 
      aria-labelledby="delete-dialog-title" 
      aria-describedby="delete-dialog-desc"
    >
      <div className="modal-dialog" style={{ maxWidth: '480px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ color: '#EF4444' }} aria-hidden="true">
              <AlertTriangle size={24} />
            </div>
            <h2 id="delete-dialog-title" style={{ fontSize: '1.2rem' }}>Confirm Task Deletion</h2>
          </div>
        </div>

        <div className="modal-body" style={{ padding: '24px 32px' }}>
          <p id="delete-dialog-desc" style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Are you sure you want to permanently delete <strong style={{ color: '#FFFFFF' }}>"{task.title}"</strong>? 
            This action cannot be undone and will update your dashboard statistics immediately.
          </p>
        </div>

        <div className="modal-footer">
          <button 
            type="button" 
            className="btn-secondary" 
            onClick={onCancel}
          >
            Cancel
          </button>
          <button 
            type="button" 
            className="btn-danger" 
            onClick={onConfirm}
            autoFocus
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}
