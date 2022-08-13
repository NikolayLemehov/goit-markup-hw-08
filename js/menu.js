(() => {
  const ref = {
    menuBtn: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('[data-menu]'),
    header: document.querySelector('.header'),
  };
  ref.menuBtn?.addEventListener('click', () => {
    const expanded = ref.menuBtn?.getAttribute('aria-expanded') === 'true' || false
    // ref.menuBtn?.classList.toggle('is-open');
    ref.menuBtn?.setAttribute('aria-expanded', String(!expanded));
    ref.mobileMenu?.classList.toggle('is-open');
    ref.header?.classList.toggle('header--is-open-menu');
  })
})()
