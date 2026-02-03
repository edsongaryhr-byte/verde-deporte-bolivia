
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useParams, useSearchParams } from 'react-router-dom';
import { 
  ShoppingCart, Menu, X, Search, ChevronRight, LayoutDashboard, 
  Phone, Facebook, Instagram, Star, Plus, Minus, CheckCircle, 
  Truck, ShieldCheck, Zap, Dumbbell, QrCode, Share2, Globe, 
  Copy, MapPin, User, ExternalLink, Rocket, Settings, ArrowLeft
} from 'lucide-react';
import { Product, CartItem, Order, Category } from './types';
import { PRODUCTS, CATEGORIES } from './constants';

// --- Componentes Compartidos ---
const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 group cursor-pointer ${className}`}>
    <div className="bg-emerald-600 text-white p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-emerald-600/20">
      <Zap size={24} fill="currentColor" />
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-black text-2xl tracking-tighter text-gray-900 uppercase">GREEN<span className="text-emerald-600">SPORT</span></span>
      <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Tecnología & Acción</span>
    </div>
  </div>
);

const ProductCard: React.FC<{ product: Product; onAddToCart: (p: Product) => void }> = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
    <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      {product.isFeatured && (
        <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Elite</div>
      )}
    </Link>
    <div className="p-6 flex flex-col flex-1">
      <span className="text-[10px] text-emerald-600 font-black uppercase tracking-widest mb-2">{product.category}</span>
      <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-1 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
      <div className="mt-auto flex justify-between items-center">
        <p className="text-2xl font-black text-gray-900">{product.price} <span className="text-xs font-bold text-gray-400 uppercase">Bs.</span></p>
        <button onClick={(e) => { e.preventDefault(); onAddToCart(product); }} className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center hover:bg-gray-900 transition-all shadow-lg shadow-emerald-200"><Plus size={24} /></button>
      </div>
    </div>
  </div>
);

// --- Navegación ---
const Header = ({ cartCount, onToggleCart }: { cartCount: number; onToggleCart: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-600"><Menu size={24} /></button>
        <Link to="/"><Logo /></Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-600 uppercase tracking-wide">
          <Link to="/shop" className="hover:text-emerald-600 transition-colors">Tienda</Link>
          <Link to="/contact" className="hover:text-emerald-600 transition-colors">Contacto</Link>
          <Link to="/admin" className="hover:text-emerald-600 transition-colors flex items-center gap-1"><Settings size={14}/> Admin</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => onToggleCart()} className="relative p-2.5 text-gray-400 hover:text-emerald-600 transition-all">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="absolute top-1 right-1 bg-emerald-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">{cartCount}</span>}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 p-6 flex flex-col gap-4">
          <Link to="/shop" onClick={() => setIsOpen(false)} className="font-bold py-2 border-b border-gray-50 uppercase tracking-widest text-xs">Catálogo</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="font-bold py-2 border-b border-gray-50 uppercase tracking-widest text-xs">Contacto</Link>
          <Link to="/admin" onClick={() => setIsOpen(false)} className="font-bold py-2 uppercase tracking-widest text-xs text-emerald-600">Admin</Link>
        </div>
      )}
    </header>
  );
};

// --- Páginas ---
const HomePage = ({ onAddToCart }: { onAddToCart: (p: Product) => void }) => (
  <div className="pb-20 space-y-24">
    <section className="relative h-[650px] flex items-center overflow-hidden">
      <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1920" className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" alt="Hero" />
      <div className="relative max-w-7xl mx-auto px-4 w-full text-white space-y-8">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none italic uppercase">EQUIPO <br /><span className="text-emerald-500">PREMIUM.</span></h1>
        <p className="text-lg text-gray-300 font-medium max-w-xl">La mejor tecnología deportiva de Santa Cruz. Calidad Green, Rendimiento Sport.</p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="/shop" className="bg-emerald-600 hover:bg-emerald-500 px-12 py-6 rounded-2xl font-black uppercase tracking-widest shadow-2xl transition-all">Explorar Tienda</Link>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-12 text-center">Novedades Elite</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.filter(p => p.isFeatured).slice(0, 4).map(p => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  </div>
);

const ShopPage = ({ onAddToCart }: { onAddToCart: (p: Product) => void }) => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>((categoryFilter as any) || 'Todos');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-12">
      <aside className="w-full md:w-64 space-y-8">
        <h3 className="font-black uppercase tracking-widest text-xs border-b-2 border-emerald-600 pb-2 inline-block">Filtros</h3>
        <div className="flex flex-wrap md:flex-col gap-2">
          {['Todos', ...CATEGORIES].map(cat => (
            <button 
              key={cat} 
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest text-left transition-all ${selectedCategory === cat ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-gray-400 hover:bg-gray-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
      </main>
    </div>
  );
};

const ProductDetailPage = ({ onAddToCart }: { onAddToCart: (p: Product) => void }) => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <div className="p-32 text-center font-black uppercase tracking-widest">Producto no encontrado</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-16">
      <Link to="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-600 font-black uppercase text-[10px] tracking-widest">
        <ArrowLeft size={16} /> Volver a la tienda
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="bg-white p-4 rounded-[3.5rem] shadow-2xl overflow-hidden border border-gray-50 aspect-square">
          <img src={product.image} className="w-full h-full object-cover rounded-[2.5rem]" alt={product.name} />
        </div>
        <div className="space-y-8">
          <span className="text-emerald-600 font-black uppercase tracking-widest text-[10px]">{product.category}</span>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter leading-none">{product.name}</h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">{product.description}</p>
          <div className="pt-6">
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Precio en Santa Cruz</p>
            <p className="text-6xl font-black text-emerald-600 italic">{product.price} <span className="text-2xl text-gray-900">Bs.</span></p>
          </div>
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gray-400">
            <div className="flex items-center gap-2"><Truck size={16} /> Envío en 24h</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} /> Garantía Green</div>
          </div>
          <button 
            onClick={() => onAddToCart(product)} 
            className="w-full bg-emerald-600 text-white py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-gray-900 transition-all shadow-xl shadow-emerald-200"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = ({ orders }: { orders: Order[] }) => {
  const [activeTab, setActiveTab] = useState<'ventas' | 'deploy'>('ventas');
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-12">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter">Admin</h1>
        <div className="flex bg-gray-100 p-1 rounded-2xl">
          <button onClick={() => setActiveTab('ventas')} className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest ${activeTab === 'ventas' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-400'}`}>Ventas</button>
          <button onClick={() => setActiveTab('deploy')} className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest ${activeTab === 'deploy' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-400'}`}>Despliegue</button>
        </div>
      </div>
      {activeTab === 'ventas' ? (
        <div className="bg-white p-10 rounded-[3rem] shadow-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b"><th className="pb-4">Cliente</th><th className="pb-4">Total</th><th className="pb-4">Estado</th></tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id} className="border-b last:border-0">
                  <td className="py-6 font-bold">{o.customerName}</td>
                  <td className="py-6 font-black text-emerald-600">{o.total} Bs.</td>
                  <td className="py-6"><span className="bg-emerald-100 text-emerald-600 text-[9px] font-black px-3 py-1 rounded-full uppercase">Completado</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-gray-900 text-white p-12 rounded-[3.5rem] space-y-8">
           <h3 className="text-3xl font-black italic uppercase">Guía para subir a Vercel</h3>
           <p className="text-gray-400 font-medium">Sigue estos pasos para que tu tienda esté online:</p>
           <ol className="space-y-4 text-sm">
             <li>1. Crea una cuenta en <b>GitHub</b>.</li>
             <li>2. Crea un repositorio y sube todos los archivos de esta carpeta.</li>
             <li>3. En <b>Vercel</b>, importa el repositorio de GitHub.</li>
             <li>4. Dale a <b>"Deploy"</b> y ¡listo! Tu URL será algo como <code className="text-emerald-500">greensport.vercel.app</code>.</li>
           </ol>
        </div>
      )}
    </div>
  );
};

// --- App Principal ---
export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const total = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header cartCount={cart.length} onToggleCart={() => setIsCartOpen(true)} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetailPage onAddToCart={addToCart} />} />
            <Route path="/admin" element={<AdminDashboard orders={orders} />} />
            <Route path="/contact" element={
              <div className="max-w-4xl mx-auto py-24 px-4 text-center space-y-12">
                <h1 className="text-6xl font-black italic uppercase tracking-tighter">Contacto SCZ</h1>
                <div className="bg-white p-12 rounded-[3.5rem] shadow-xl grid md:grid-cols-2 gap-12 text-left">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black uppercase text-emerald-600">Dirección</p>
                      <p className="font-bold">Av. Pargua Calle Los Tiluchis, Santa Cruz de la Sierra.</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-emerald-600">WhatsApp</p>
                      <p className="font-bold">+591 760 98765</p>
                    </div>
                  </div>
                  <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white flex flex-col justify-center">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-4">Directores</p>
                    <p className="font-black text-xl italic uppercase">Carla Rossio Fernandez</p>
                    <p className="font-black text-xl italic uppercase">Edson Gary Hinojosa R.</p>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>
        
        <footer className="bg-gray-900 text-gray-500 py-20 px-4">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
             <Logo className="invert opacity-30" />
             <p className="text-[10px] font-black uppercase tracking-[0.2em]">&copy; 2024 GREEN SPORT BOLIVIA. RENDIMIENTO ELITE.</p>
           </div>
        </footer>

        {isCartOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
            <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 rounded-l-[4rem]">
              <div className="p-10 border-b flex justify-between items-center">
                <h2 className="text-3xl font-black italic uppercase italic">Mi Equipo</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 bg-gray-50 rounded-xl"><X size={20} /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-10 space-y-6">
                {cart.length === 0 ? <p className="text-center py-20 font-black text-gray-300 uppercase tracking-widest text-xs">Carrito Vacío</p> : 
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} className="w-16 h-16 rounded-xl object-cover" alt="" />
                      <div className="flex-1">
                        <p className="font-black text-xs uppercase truncate">{item.name}</p>
                        <p className="font-bold text-emerald-600">{item.price} Bs. x {item.quantity}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="p-10 bg-gray-900 text-white rounded-t-[4rem] space-y-6">
                 <div className="flex justify-between font-black text-2xl uppercase italic"><span>TOTAL</span> <span className="text-emerald-500">{total} Bs.</span></div>
                 <button onClick={() => {
                   setOrders([{ id: '1', customerName: 'Demo SCZ', total: total } as any, ...orders]);
                   setCart([]);
                   setIsCartOpen(false);
                   alert('¡Pedido enviado! Contactando a través de WhatsApp...');
                 }} className="w-full bg-emerald-600 py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">Pagar con QR Simple</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </HashRouter>
  );
}
