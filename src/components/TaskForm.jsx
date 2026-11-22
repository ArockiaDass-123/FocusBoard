import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function TaskForm({ 
  isOpen, 
  onClose, 
  onSubmit, 
  initialData 
}) {
  const isEditing = Boolean(initialData && initialData.id);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    status: 'To do',
    priority: 'Medium',
    dueDate: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        category: initialData.category || '',
        status: initialData.status || 'To do',
        priority: initialData.priority || 'Medium',
        dueDate: initialData.dueDate || ''
      });
    } else {
      setFormData({
        title: '',
        description: '',
        category: '',
        status: 'To do',
        priority: 'Medium',
        dueDate: new Date().toISOString().split('T')[0]
      });
    }
    setErrors({});
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const trimmedTitle = formData.title.trim();
    if (!trimmedTitle) {
      setErrors({ title: 'Task title is mandatory. Please provide a clear title.' });
      return;
    }

    onSubmit({
      ...formData,
      title: trimmedTitle
    });
    onClose();
  };

  return (
    <div 
      className="modal-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="task-form-title"
    >
      <div className="modal-dialog">
        <div className="modal-header">
          <h2 id="task-form-title">{isEditing ? 'Edit Task' : 'Create New Task'}</h2>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="task-title-input">
                Task Title <span className="required-indicator">*</span>
              </label>
              <input
                id="task-title-input"
                name="title"
                type="text"
                className={`form-control ${errors.title ? 'has-error' : ''}`}
                placeholder="e.g. Conduct usability testing on mobile flow"
                value={formData.title}
                onChange={handleChange}
                autoFocus
              />
              {errors.title && <span className="form-error-msg">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="task-desc-input">Description</label>
              <textarea
                id="task-desc-input"
                name="description"
                rows={3}
                className="form-control"
                placeholder="Add context, acceptance criteria, or key dependencies..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="task-category-input">Category</label>
                <input
                  id="task-category-input"
                  name="category"
                  type="text"
                  className="form-control"
                  placeholder="e.g. Design, Frontend, DevOps"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="task-duedate-input">Due Date</label>
                <input
                  id="task-duedate-input"
                  name="dueDate"
                  type="date"
                  className="form-control"
                  value={formData.dueDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="task-status-select">Status</label>
                <select
                  id="task-status-select"
                  name="status"
                  className="form-control"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="To do">To do</option>
                  <option value="In progress">In progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="task-priority-select">Priority</label>
                <select
                  id="task-priority-select"
                  name="priority"
                  className="form-control"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-primary"
            >
              {isEditing ? 'Save Changes' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
