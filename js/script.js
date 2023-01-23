class PanelToggler {
  constructor() {
    this.panels = document.querySelectorAll('.panels__panel');
  }
  init() {
    this.panels.forEach(panel => panel.addEventListener('click', () => this.toggleOpen(panel)));
    this.panels.forEach(panel => panel.addEventListener('transitionend', (e) => this.toggleActive(e, panel)));
  }
  toggleOpen(panel) {
    panel.classList.toggle('open');
  }
  toggleActive(e, panel) {
    if (e.propertyName.includes('flex')) {
      panel.classList.toggle('open-active');
    }
  }
}
const panelToggler = new PanelToggler();
panelToggler.init();