import { navigateTo } from '../router/navigator';

export const goToRoute = (path: string) => () => {
  navigateTo(path);
};

export const goToContact = (topic?: string) => () => {
  const search = topic ? `?topic=${encodeURIComponent(topic)}` : '';
  navigateTo(`/${search}#contact`);
};

export const scrollToElement = (id: string) => () => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const openExternal = (url: string) => () => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

let feedbackContainer: HTMLDivElement | null = null;

const ensureContainer = () => {
  if (feedbackContainer) {
    return feedbackContainer;
  }

  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '24px';
  container.style.right = '24px';
  container.style.zIndex = '99999';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '12px';
  container.style.pointerEvents = 'none';

  document.body.appendChild(container);
  feedbackContainer = container;
  return container;
};

export const showFeedback = (message: string, tone: 'success' | 'info' = 'success') => {
  const container = ensureContainer();
  const toast = document.createElement('div');

  toast.textContent = message;
  toast.style.background =
    tone === 'success'
      ? 'linear-gradient(135deg, #34d399, #10b981)'
      : 'linear-gradient(135deg, #60a5fa, #2563eb)';
  toast.style.color = '#fff';
  toast.style.padding = '14px 20px';
  toast.style.borderRadius = '9999px';
  toast.style.boxShadow = '0 20px 45px -20px rgba(15, 118, 110, 0.65)';
  toast.style.fontSize = '15px';
  toast.style.fontWeight = '600';
  toast.style.display = 'inline-flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '10px';
  toast.style.pointerEvents = 'auto';
  toast.style.cursor = 'pointer';
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(8px)';
  toast.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

  const icon = document.createElement('span');
  icon.textContent = tone === 'success' ? '✅' : 'ℹ️';
  toast.prepend(icon);

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  const removeToast = () => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => {
      toast.remove();
    }, 180);
  };

  toast.addEventListener('click', removeToast);
  setTimeout(removeToast, 2800);
};
