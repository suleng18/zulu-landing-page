function handleToggleMenu() {
  const menu = document.querySelector('.header-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  if (!menu || !menuToggle) return;

  menuToggle.addEventListener('click', function (e) {
    menu.classList.add('is-active');
  });

  document.addEventListener('click', function (e) {
    const a = !menu.contains(e.target);
    const b = !e.target.matches('.menu-toggle');

    console.log(a);
    console.log(b);

    if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
      menu.classList.remove('is-active');
    }
  });
}

handleToggleMenu();
