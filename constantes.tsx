
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  'Electrónicos',
  'Relojes',
  'Audio',
  'Fitness',
  'Gadgets',
  'Iluminación'
];

export const INITIAL_PRODUCTS: Product[] = [
  // ELECTRÓNICOS
  { id: 'e1', name: 'Enchufe Inteligente Pro Wi-Fi', description: 'Controla tus electrodomésticos desde el celular con ahorro energético.', price: 95, category: 'Electrónicos', stock: 25, image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600', isFeatured: true },
  { id: 'e2', name: 'Power Bank 20,000mAh Rugged', description: 'Carga rápida ultra resistente para exteriores.', price: 195, category: 'Electrónicos', stock: 15, image: 'https://images.unsplash.com/photo-1609592424109-dd0323069352?auto=format&fit=crop&q=80&w=600' },
  { id: 'e3', name: 'Multímetro Digital Precision', description: 'Herramienta de grado industrial para técnicos eléctricos.', price: 145, category: 'Electrónicos', stock: 10, image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600' },
  
  // RELOJES
  { id: 'r1', name: 'Garmin Fenix 7 Solar', description: 'GPS multideporte con carga solar y mapas detallados.', price: 4850, category: 'Relojes', stock: 5, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600', isFeatured: true },
  { id: 'r2', name: 'Xiaomi Mi Band 8 Pro', description: 'Pantalla AMOLED de gran tamaño y GPS integrado.', price: 420, category: 'Relojes', stock: 40, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=600' },
  { id: 'r3', name: 'Apple Watch Ultra 2', description: 'El reloj deportivo más capaz y resistente de Apple.', price: 6200, category: 'Relojes', stock: 3, image: 'https://images.unsplash.com/photo-1434494878577-86c23bddca60?auto=format&fit=crop&q=80&w=600' },

  // AUDIO
  { id: 'a1', name: 'Sony WH-1000XM5 Black', description: 'Noise cancelling de clase mundial para tu concentración.', price: 2950, category: 'Audio', stock: 4, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600', isFeatured: true },
  { id: 'a2', name: 'JBL Endurance Peak 3', description: 'Auriculares deportivos con ajuste seguro y graves potentes.', price: 850, category: 'Audio', stock: 12, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600' },
  { id: 'a3', name: 'Bose QuietComfort Earbuds', description: 'Cancelación de ruido en formato compacto y ligero.', price: 2100, category: 'Audio', stock: 7, image: 'https://images.unsplash.com/photo-1599666505317-7bb1999b2d46?auto=format&fit=crop&q=80&w=600' },

  // FITNESS
  { id: 'f1', name: 'Mancuernas Ajustables 24kg Kit', description: 'Mecanismo de cambio rápido para entrenar en casa.', price: 1650, category: 'Fitness', stock: 6, image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600', isFeatured: true },
  { id: 'f2', name: 'Banco de Pesas Multiuso', description: 'Ajustable para diferentes ángulos de entrenamiento.', price: 950, category: 'Fitness', stock: 8, image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600' },
  { id: 'f3', name: 'Ketllebell 16kg Pro', description: 'Hierro fundido de alta durabilidad.', price: 380, category: 'Fitness', stock: 15, image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=600' },

  // GADGETS
  { id: 'g1', name: 'DJI Mini 4 Pro Drone', description: 'Video 4K HDR en un formato de bolsillo.', price: 6800, category: 'Gadgets', stock: 4, image: 'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=600', isFeatured: true },
  { id: 'g2', name: 'Estabilizador para Celular Flow', description: 'Captura tomas cinematográficas con tu smartphone.', price: 1100, category: 'Gadgets', stock: 10, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600' },

  // ILUMINACIÓN
  { id: 'i1', name: 'Lámpara de Escritorio G-Light', description: 'RGB dinámico y carga inalámbrica Qi integrada.', price: 280, category: 'Iluminación', stock: 20, image: 'https://images.unsplash.com/photo-1534073828943-f801091bb270?auto=format&fit=crop&q=80&w=600', isFeatured: true },
  { id: 'i2', name: 'Paneles LED Hexagonales', description: 'Crea ambientes únicos controlados por app.', price: 550, category: 'Iluminación', stock: 12, image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=600' },
];

export const PRODUCTS: Product[] = [
  ...INITIAL_PRODUCTS,
  ...Array.from({ length: 44 }).map((_, idx) => ({
    id: `extra-${idx}`,
    name: `Accesorio Green Sport ${idx + 17}`,
    description: 'Calidad premium garantizada por GREEN SPORT para el deportista moderno.',
    price: Math.floor(Math.random() * 800) + 100,
    category: CATEGORIES[idx % CATEGORIES.length],
    stock: Math.floor(Math.random() * 30) + 2,
    image: `https://images.unsplash.com/photo-${1510000000000 + (idx * 10000)}?auto=format&fit=crop&q=60&w=600`,
    isFeatured: false
  }))
];
