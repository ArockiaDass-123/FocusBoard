import React from 'react';
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';
import { focusNotes } from '../data/focusNotes';

export default function FocusNotesCarousel({ activeSlide, onChangeSlide }) {
  const current = focusNotes[activeSlide] || focusNotes[0];
  const totalSlides = focusNotes.length;

  const handlePrev = () => {
    if (activeSlide > 0) {
      onChangeSlide(activeSlide - 1);
    }
  };

  const handleNext = () => {
    if (activeSlide < totalSlides - 1) {
      onChangeSlide(activeSlide + 1);
    }
  };

  return (
    <section className="focus-notes-section" aria-label="Focus Notes Carousel">
      <div className="focus-notes-carousel">
        <div className="carousel-slide-content">
          <div className="slide-main-info">
            <div className="slide-badges">
              <span className="slide-tag">{current.tag}</span>
              <span className="slide-highlight-badge">{current.badge}</span>
            </div>
            <h2 className="slide-title">{current.title}</h2>
            <p className="slide-description">{current.description}</p>
          </div>
          <div className="slide-metric-box">
            <div className="slide-metric-label">{current.metricLabel}</div>
            <div className="slide-metric-value">{current.metricValue}</div>
          </div>
        </div>

        <div className="carousel-footer">
          <div className="carousel-indicators" role="tablist" aria-label="Slide selectors">
            {focusNotes.map((slide, idx) => (
              <button
                key={slide.id}
                role="tab"
                aria-selected={activeSlide === idx}
                aria-label={`Slide ${idx + 1}: ${slide.title}`}
                className={`indicator-dot ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => onChangeSlide(idx)}
              />
            ))}
          </div>

          <div className="carousel-nav-buttons">
            <button 
              className="carousel-btn" 
              onClick={handlePrev} 
              disabled={activeSlide === 0}
              aria-label="Previous focus note"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              className="carousel-btn" 
              onClick={handleNext} 
              disabled={activeSlide === totalSlides - 1}
              aria-label="Next focus note"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
