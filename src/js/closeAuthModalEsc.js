import closeAuthModal from './renderAuthModal';

window.addEventListener('keydown', onKeyPress);

function onKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    
    const isEscKey = event.code === ESC_KEY_CODE;
    
    if (isEscKey) {
        closeAuthModal(event);
    }
  }