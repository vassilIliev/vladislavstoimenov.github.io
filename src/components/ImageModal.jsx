import { useEffect } from 'react'
import './ImageModal.css'

function ImageModal({ isOpen, onClose, images, currentIndex, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          e.preventDefault()
          onPrev()
          break
        case 'ArrowRight':
          e.preventDefault()
          onNext()
          break
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen || !images || images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        {images.length > 1 && (
          <>
            <button 
              className="modal-nav modal-prev" 
              onClick={onPrev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button 
              className="modal-nav modal-next" 
              onClick={onNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        <div className="modal-image-container">
          <img 
            src={currentImage.src} 
            alt={currentImage.alt} 
            className="modal-image"
          />
          {currentImage.caption && (
            <div className="modal-caption">
              <p>{currentImage.caption}</p>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="modal-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => onClose()}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageModal 