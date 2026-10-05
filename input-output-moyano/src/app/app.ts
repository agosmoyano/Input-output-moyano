import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from './models/producto';
import { ProductoCard } from './componets/producto-card/producto-card';

@Component({
  imports: [RouterOutlet, ProductoCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('input-output');

  productos: Producto[] = [
    { img: 'https://acdn-us.mitiendanube.com/stores/002/458/854/products/proto-bow-85-navy-peony-74e19973d6afdd865f17749026395758-240-0.webp', id: 1, nombre: 'Palo/Stick', descripcion:'Palo de hockey de alta gama en carbono. Diseño en blanco y negro con caligrafía japonesa. Curva ultra baja ideal para control avanzado, pases de precisión y arrastradas potentes.', precio: 700000 },
    { img: 'https://acdn-us.mitiendanube.com/stores/374/744/products/1-dd717c6c3b0e930edf17748748508011-480-0.webp', id: 2, nombre: 'Funda/Bolso', descripcion:'Funda portapalos compacta y resistente. Color azul con logotipo negro vertical. Incluye compartimentos acolchados para palos y accesorios, con correas ajustables para un transporte cómodo.', precio: 700000 },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEoSKc1cTMWDQVq78Q7MnxPzTVfJMQ-hoV49HcT_NkCzIQZy2062HQUJaq&s=10', id: 3, nombre: 'Guante de hockey', descripcion:'Guante de protección premium para mano izquierda. Color morado y amarillo con 11 carcasas plásticas articuladas. Ofrece máxima seguridad contra impactos sin perder movilidad en los dedos.', precio: 700000 },
  ];

  onEliminado(id: Number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}

