/**
 * VOXY OFFICIAL WEBSITE - INTERACTION & RUNTIME LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = '#090d14';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        navLinks.style.gap = '1.25rem';
      }
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all other items
        faqItems.forEach((other) => other.classList.remove('open'));
        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // Open first FAQ by default
  if (faqItems[0]) {
    faqItems[0].classList.add('open');
  }

  // 4. Hero Demo Call Timer Simulator
  const timerElement = document.getElementById('demo-call-timer');
  if (timerElement) {
    let totalSeconds = 18 * 60 + 42;
    setInterval(() => {
      totalSeconds++;
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      timerElement.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
  }

  // 5. Hero Demo Interactive Mute Toggle
  const muteBtn = document.getElementById('demo-mute-btn');
  const speakingAvatar = document.querySelector('.voice-user-row:first-child .user-avatar-mini');
  let isMuted = false;

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      if (isMuted) {
        muteBtn.style.color = '#ef4444';
        muteBtn.title = 'Desmutar Microfone';
        muteBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        `;
        if (speakingAvatar) {
          speakingAvatar.classList.remove('speaking-ring');
        }
      } else {
        muteBtn.style.color = '';
        muteBtn.title = 'Mutar Microfone';
        muteBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        `;
        if (speakingAvatar) {
          speakingAvatar.classList.add('speaking-ring');
        }
      }
    });
  }

  // 6. Interactive Mock Channel Switcher
  const mockChannelItems = document.querySelectorAll('.mock-ch-item');
  mockChannelItems.forEach((ch) => {
    ch.addEventListener('click', () => {
      mockChannelItems.forEach((c) => c.classList.remove('active'));
      ch.classList.add('active');
    });
  });

  // 7. Interactive Mock Server Switcher
  const mockServerItems = document.querySelectorAll('.mock-server-icon:not(:last-child)');
  mockServerItems.forEach((srv) => {
    srv.addEventListener('click', () => {
      mockServerItems.forEach((s) => s.classList.remove('active'));
      srv.classList.add('active');
    });
  });

  // 8. Card Mouse Spotlight / Glow Follower
  const glowCards = document.querySelectorAll('.feature-card, .stream-perk-card');
  glowCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 9. Stream Video Player Controls
  const streamVideo = document.getElementById('stream-video-element');
  const streamPlayBtn = document.getElementById('stream-play-btn');
  const streamMuteBtn = document.getElementById('stream-mute-btn');
  const streamFullscreenBtn = document.getElementById('stream-fullscreen-btn');

  if (streamVideo && streamPlayBtn) {
    const updatePlayBtnIcon = () => {
      if (streamVideo.paused) {
        streamPlayBtn.title = 'Reproduzir';
        streamPlayBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        `;
      } else {
        streamPlayBtn.title = 'Pausar';
        streamPlayBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        `;
      }
    };

    streamPlayBtn.addEventListener('click', () => {
      if (streamVideo.paused) {
        streamVideo.play();
      } else {
        streamVideo.pause();
      }
    });

    streamVideo.addEventListener('play', updatePlayBtnIcon);
    streamVideo.addEventListener('pause', updatePlayBtnIcon);

    // Audio toggle
    if (streamMuteBtn) {
      streamMuteBtn.addEventListener('click', () => {
        streamVideo.muted = !streamVideo.muted;
        if (streamVideo.muted) {
          streamMuteBtn.title = 'Ativar Áudio';
          streamMuteBtn.style.color = '#fff';
          streamMuteBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="1" y1="1" x2="23" y2="23"></line>
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
              <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
            </svg>
          `;
        } else {
          streamMuteBtn.title = 'Mutar Áudio';
          streamMuteBtn.style.color = 'var(--brand-mint)';
          streamMuteBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          `;
        }
      });
    }

    // Fullscreen toggle
    if (streamFullscreenBtn) {
      streamFullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          streamVideo.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }
  }

  // 10. Active Navigation Link on Scroll
  const sections = document.querySelectorAll('section[id], div[id="showcase"]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  });

  // 11. Precise Smooth Scroll for Anchor Links (fixes header occlusion & mid-image scroll)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').substring(1);
      if (!targetId) return;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 72;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 20);
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        history.pushState(null, '', `#${targetId}`);

        // Close mobile nav on click if open
        if (mobileToggle && navLinks && window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      }
    });
  });

  console.log('⚡ Voxy Official Website initialized successfully.');
});
