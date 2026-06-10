import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:1rem">
      <h1>Neuron</h1>
      <p>Rendszer inicializálva.</p>
    </div>
  `
})
export class AppComponent {}
