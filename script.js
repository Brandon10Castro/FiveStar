/**
 * TCALZA – script.js v3
 * ========================
 * - Catálogo dinámico generado desde array de productos
 * - Filtros por categoría
 * - Paginación "Cargar más"
 * - Carrito con localStorage
 * - Burger menu (clase .open en .mobile-nav)
 * - Scroll spy para nav activo
 */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     1. LISTA DE PRODUCTOS
     Para agregar un producto nuevo, solo añade
     un objeto a este array.
     ========================================= */
  const PRODUCTS = [

    { id:"gh-14",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref41.1.webp","img/ref41.2.webp","img/ref41.webp"] },
    { id:"g-h17",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref42.1.webp","img/ref42.2.webp","img/ref42.webp"] },
    { id:"g-d015",  name:"Dama", cat:"Dama", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref43.1.webp","img/ref43.2.webp","img/ref43.webp"] },
    { id:"starh03",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref44.1.webp","img/ref44.2.webp","img/ref44.webp"] },
    { id:"starh03",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref45.1.webp","img/ref45.2.webp","img/ref45.webp"] },
    { id:"star04",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref46.1.webp","img/46.2.webp","img/ref46.webp"] },
    { id:"starh04",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref47.1.webp","img/ref47.2.webp","img/ref47.webp"] },
    { id:"starh04",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref48.1.webp","img/ref48.2.webp","img/ref48.webp"] },
    { id:"starh04",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref49.1.webp","img/ref49.2.webp","img/ref49.webp"] },
    { id:"g-d14",  name:"Dama", cat:"Dama", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref50.1.webp","img/ref50.2.webp","img/ref50.webp"] },
    { id:"g-h14",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref51.1.webp","img/ref51.2.webp","img/ref51.webp"] },
    { id:"g-d15",  name:"Dama", cat:"Dama", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref52.1.webp","img/ref52.2.webp","img/ref52.webp"] },
    { id:"g-d17",  name:"Dama", cat:"Dama", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref53.1.webp","img/ref53.2.webp","img/ref53.webp"] },
    { id:"g-d15",  name:"Dama", cat:"Dama", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref54.1.webp","img/ref54.2.webp","img/ref54.webp"] },
    { id:"g-h15",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref55.1.webp","img/ref55.2.webp","img/ref55.webp"] },
    { id:"h-h17",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref56.1.webp","img/ref56.2.webp","img/ref56.webp"] },
    { id:"g-h17",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref57.1.webp","img/ref57.2.webp","img/ref57.webp"] },
    { id:"g-h17",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref58.1.webp","img/ref58.2.webp","img/ref58.webp"] },
    { id:"g-h16",  name:"Caballero", cat:"Caballero", badge:"Nueva Coleccion", label:"MODELO SPORT", images:["img/ref59.1.webp","img/ref59.2.webp","img/ref59.webp"] },
    { id:"starh04",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref7.1.webp","img/ref7.2.webp","img/ref7.webp"] },
    { id:"stard04",  name:"Dama",      cat:"Dama",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref8.webp","img/ref8.1.webp","img/ref8.2.webp"] },
    { id:"stard04",  name:"Dama",      cat:"Dama",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref9.1.webp","img/ref9.2.webp","img/ref9.webp"] },
    { id:"starh04",  name:"Dama",      cat:"Dama",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref10.1.webp","img/ref10.2.webp","img/ref10.webp"] },
    { id:"sport-e",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref11.webp","img/ref11.1.webp","img/ref11.2.webp"] },
    { id:"starh04",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref12.1.webp","img/ref12.2.webp","img/ref12.webp"] },
    { id:"fived030",  name:"Dama",      cat:"Dama",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref13.1.webp","img/ref13.2.webp","img/ref13.webp"] },
    { id:"fiveh030",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref14.1.webp","img/ref14.2.webp","img/ref14.webp"] },
    { id:"fiveh025",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref15.1.webp","img/ref15.2.webp","img/ref15.webp"] },
    { id:"stard02",  name:"Dama",      cat:"Dama",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref16.1.webp","img/ref16.2.webp","img/ref16.webp"] },

    { id:"fiveh032",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref17.1.webp","img/ref17.2.webp","img/ref17.webp"] },
    { id:"fiveh028",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref18.1.webp","img/ref18.2.webp","img/ref18.webp"] },
    { id:"stard01",  name:"Dama",      cat:"Dama",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref19.1.webp","img/ref19.2.webp","img/ref19.webp"] },
    { id:"gd02",  name:"Dama",      cat:"Dama",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref20.1.webp","img/ref20.2.webp","img/ref20.webp"] },
    { id:"gd09",  name:"Dama",      cat:"Dama",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref21.1.webp","img/ref21.2.webp","img/ref21.webp"] },
    { id:"gd011",  name:"Dama",      cat:"Dama",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref22.1.webp","img/ref22.2.webp","img/ref22.webp"] },
    { id:"fiveh039",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref23.1.webp","img/ref23.2.webp","img/ref23.webp"] },
    { id:"urban-h",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref24.1.webp","img/ref24.2.webp","img/ref24.webp"] },
    { id:"fiveh034",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref25.1.webp","img/ref25.2.webp","img/ref25.webp"] },
    { id:"fiveh039",  name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref26.1.webp","img/ref26.2.webp","img/ref26.webp"] },

    { id:"fived036",name:"Caballero",cat:"Caballero",badge:"Últimas unidades", label:"MODELO SPORT",images:["img/ref27.1.webp","img/ref27.2.webp","img/ref27.webp"] },
    { id:"fiveh036",name:"Caballero",cat:"Caballero",badge:"Últimas unidades", label:"MODELO SPORT",images:["img/ref28.1.webp","img/ref28.2.webp","img/ref28.webp"] },
    { id:"fived033",name:"Dama",     cat:"Dama",     badge:"Últimas unidades", label:"MODELO SPORT",images:["img/ref29.1.webp","img/ref29.2.webp","img/ref29.webp"] },
    { id:"fived038",name:"Caballero",cat:"Caballero",badge:"Últimas unidades", label:"MODELO SPORT",images:["img/ref30.1.webp","img/ref30.2.webp","img/ref30.webp"] },
    { id:"fived033",name:"Caballero",cat:"Caballero",badge:"Últimas unidades", label:"MODELO SPORT",images:["img/ref31.1.webp","img/ref31.2.webp","img/ref31.webp"] },
    { id:"fived038",name:"Caballero",cat:"Caballero",badge:"Últimas unidades", label:"MODELO SPORT",images:["img/ref32.1.webp","img/ref32.2.webp","img/ref32.webp"] },
    { id:"fiveh038",name:"Caballero",cat:"Caballero",badge:"Últimas unidades", label:"MODELO SPORT",images:["img/ref33.1.webp","img/ref33.2.webp","img/ref33.webp"] },
    { id:"fived038",name:"Caballero",cat:"Caballero",badge:"Últimas unidades", label:"MODELO SPORT",images:["img/ref34.1.webp","img/ref34.2.webp","img/ref34.webp"] },
    { id:"fived032",name:"Caballero",cat:"Caballero",badge:"Últimas unidades", label:"MODELO SPORT",images:["img/ref35.1.webp","img/ref35.2.webp","img/ref35.webp"] },
    { id:"fived036",name:"Caballero",cat:"Caballero",badge:"Últimas unidades", label:"MODELO SPORT",images:["img/ref36.1.webp","img/ref36.2.webp","img/ref36.webp"] },

    { id:"fived037",   name:"Dama",      cat:"Dama",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref37.1.webp","img/ref37.2.webp","img/ref37.webp"] },
    { id:"fiveh033",   name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref38.1.webp","img/ref38.2.webp","img/ref38.webp"] },
    { id:"fiveh031",   name:"Caballero",      cat:"Caballero",      badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref39.1.webp","img/ref39.2.webp","img/ref39.webp"] },
    { id:"fived031",   name:"Caballero", cat:"Caballero", badge:"Últimas unidades", label:"MODELO SPORT", images:["img/ref40.1.webp","img/ref40.2.webp","img/ref40.webp"] },
    
    
  ];

  /* =========================================
     NUEVA COLECCIÓN — máx 6 productos destacados
     Puedes usar los mismos IDs del catálogo o
     crear IDs únicos para estos modelos especiales.
     ========================================= */
  const NUEVA_COLECCION = [
    { id:"gh016", name:"Sport Caballero",    cat:"Caballero",  badge:"new",  label:"NUEVA COLECCIÓN", images:["img/teniref1.1.webp", "img/teniref1.2.webp", "img/teniref1.webp"] },
    { id:"gh016", name:"Sport Caballero",   cat:"Caballero",  badge:"new",  label:"NUEVA COLECCIÓN", images:["img/teniref2.1.webp","img/teniref2.2png.webp"] },
    { id:"nc-3", name:"Sport Caballero",    cat:"Caballero",badge:"new",  label:"NUEVA COLECCIÓN", images:["img/teniref3.1.webp","img/teniref3.2.webp","img/teniref3.webp"] },
    { id:"nc-4", name:"Sport Caballero",     cat:"Caballero",  badge:"new",  label:"NUEVA COLECCIÓN", images:["img/teniref4.1.webp","img/teniref4.2.webp","img/teniref4.webp"] },
    { id:"gh013", name:"Sport Caballero",   cat:"Caballero",  badge:"new", label:"NUEVA COLECCIÓN", images:["img/teniref5.1.webp","img/teniref5.2.webp","img/teniref5.webp"] },
    { id:"nc-6", name:"Sport Caballero",   cat:"Caballero",  badge:"new",  label:"NUEVA COLECCIÓN", images:["img/teniref6.1.webp","img/teniref6.2.webp","img/teniref6.webp"] },
  ];

  // Cuántos productos mostrar inicialmente y al cargar más
  const PAGE_SIZE = 8;

  /* =========================================
     2. ESTADO
     ========================================= */
  const STORAGE_KEY    = "tcalza_cart_v1";
  const WHATSAPP_PHONE = "573028175140";

  let cart          = loadCart();
  let activeFilter  = "all";
  let visibleCount  = PAGE_SIZE;
  let rotationTimers = [];

  /* =========================================
     3. ELEMENTOS DOM
     ========================================= */
  const catalogGrid   = document.getElementById("catalogGrid");
  const nuevaColGrid  = document.getElementById("nuevaColGrid");
  const loadMoreBtn   = document.getElementById("loadMoreBtn");
  const loadLessBtn   = document.getElementById("loadLessBtn");
  const filterBtns    = document.querySelectorAll(".filter-btn");
  const cartBadge     = document.getElementById("cartBadge");
  const openCartBtn   = document.getElementById("openCart");
  const closeCartBtn  = document.getElementById("closeCart");
  const cartDrawer    = document.getElementById("cartDrawer");
  const cartOverlay   = document.getElementById("cartOverlay");
  const cartItemsEl   = document.getElementById("cartItems");
  const cartEmptyEl   = document.getElementById("cartEmpty");
  const cartTotalEl   = document.getElementById("cartTotalItems");
  const cartBuyBtn    = document.getElementById("cartBuy");
  const cartClearBtn  = document.getElementById("cartClear");
  const heroBuy       = document.getElementById("heroBuy");
  const burger        = document.getElementById("burger");
  const mobileNav     = document.getElementById("mobileNav");

  /* =========================================
     4. HELPERS
     ========================================= */
  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const p   = raw ? JSON.parse(raw) : {};
      return p && typeof p === "object" ? p : {};
    } catch { return {}; }
  }
  function saveCart()   { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
  function totalItems() { return Object.values(cart).reduce((a, i) => a + i.qty, 0); }
  function fmt(v)       { return (Number(v)||0).toLocaleString("es-CO"); }
  function waUrl(msg)   { return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`; }

  function filteredProducts() {
    return activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.cat === activeFilter);
  }

  /* =========================================
     5. RENDER CATÁLOGO
     ========================================= */
  function badgeHTML(badge) {
    if (!badge) return "";
    const map = { new:"badge-new", hot:"badge-hot", sale:"badge-sale", kids:"badge-kids" };
    const labels = { new:"NUEVO", hot:"🔥 TOP", sale:"OFERTA", kids:"KIDS" };
    const cls  = map[badge] || "badge-new";
    const text = labels[badge] || badge.toUpperCase();
    return `<span class="card-badge ${cls}">${text}</span>`;
  }

  function buildCard(product) {
    const inCart = cart[product.id]?.qty || 0;
    const img    = product.images[0] || "assets/hero.jpg";

    const article = document.createElement("article");
    article.className = "card";
    article.dataset.id     = product.id;
    article.dataset.name   = product.name;
    
    article.dataset.images = JSON.stringify(product.images);

    article.innerHTML = `
      ${badgeHTML(product.badge)}
      <div class="card-media">
        <img src="${img}" alt="Tenis ${product.name} – ${product.label} – Ref ${product.id.toUpperCase()} – FiveStar Colombia" loading="lazy" decoding="async">
      </div>
      <div class="card-body">
        <p class="card-label">${product.label}</p>
        <p class="card-name">${product.name}</p>
        <p class="card-ref">Ref: <strong>${product.id.toUpperCase()}</strong></p>
        <div class="qty" role="group" aria-label="Cantidad ${product.name}">
          <button class="qty-btn"      type="button" data-action="dec"    aria-label="Quitar uno">−</button>
          <span   class="qty-val"      data-qty>${inCart}</span>
          <button class="qty-btn plus" type="button" data-action="inc"    aria-label="Agregar uno">+1</button>
          <button class="qty-btn doc"  type="button" data-action="inc12"  aria-label="Agregar docena">+12</button>
        </div>
        <button class="btn btn-ghost btn-sm open-cart" type="button">Ver carrito</button>
      </div>
    `;

    // Eventos de la card
    article.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      if (btn.classList.contains("open-cart")) { openCart(); return; }
      const action = btn.dataset.action;
      if (action === "inc")   addItem(product);
      if (action === "inc12") addItems(product, 12);
      if (action === "dec")   removeItem(product.id);
    });

    return article;
  }

  function clearRotations() {
    rotationTimers.forEach(t => clearInterval(t));
    rotationTimers = [];
  }

  function startRotations() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.querySelectorAll(".card[data-images]").forEach(card => {
      const images = JSON.parse(card.dataset.images || "[]");
      const imgEl  = card.querySelector(".card-media img");
      if (images.length < 2 || !imgEl) return;

      let idx = 0;
      const tick = () => {
        idx = (idx + 1) % images.length;
        imgEl.style.opacity = "0";
        setTimeout(() => { imgEl.src = images[idx]; imgEl.style.opacity = "1"; }, 250);
      };
      let timer = setInterval(tick, 2400);
      rotationTimers.push(timer);

      card.addEventListener("mouseenter", () => clearInterval(timer));
      card.addEventListener("mouseleave", () => { timer = setInterval(tick, 2400); rotationTimers.push(timer); });
    });
  }

  function renderCatalog() {
    clearRotations();
    catalogGrid.innerHTML = "";

    const list = filteredProducts();
    const slice = list.slice(0, visibleCount);

    if (slice.length === 0) {
      catalogGrid.innerHTML = `<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:40px 0">No hay productos en esta categoría.</p>`;
      loadMoreBtn.classList.remove("visible");
      return;
    }

    slice.forEach(p => catalogGrid.appendChild(buildCard(p)));

    // Mostrar u ocultar botones
    if (visibleCount < list.length) {
      loadMoreBtn.classList.add("visible");
    } else {
      loadMoreBtn.classList.remove("visible");
    }

    if (visibleCount > PAGE_SIZE) {
      loadLessBtn.classList.add("visible");
    } else {
      loadLessBtn.classList.remove("visible");
    }

    startRotations();
  }

  /* =========================================
     6. FILTROS
     ========================================= */
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      visibleCount = PAGE_SIZE;
      renderCatalog();
    });
  });

  loadMoreBtn?.addEventListener("click", () => {
    visibleCount += PAGE_SIZE;
    renderCatalog();
    loadMoreBtn.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  loadLessBtn?.addEventListener("click", () => {
    visibleCount = PAGE_SIZE;
    renderCatalog();
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* =========================================
     7. CARRITO
     ========================================= */
  function addItem(product) {
    if (!cart[product.id]) {
      cart[product.id] = { id: product.id, name: product.name, cat: product.cat, label: product.label, qty: 1, img: product.images[0] || "" };
    } else {
      cart[product.id].qty++;
    }
    refreshUI();
  }

  function addItems(product, qty) {
    if (!cart[product.id]) {
      cart[product.id] = { id: product.id, name: product.name, cat: product.cat, label: product.label, qty, img: product.images[0] || "" };
    } else {
      cart[product.id].qty += qty;
    }
    refreshUI();
  }

  function removeItem(id) {
    if (!cart[id]) return;
    cart[id].qty--;
    if (cart[id].qty <= 0) delete cart[id];
    refreshUI();
  }

  function incCartItem(id) { if (cart[id]) { cart[id].qty++; refreshUI(); } }
  function decCartItem(id) { removeItem(id); }

  function openCart() {
    cartDrawer.classList.add("open");
    cartDrawer.setAttribute("aria-hidden", "false");
    cartOverlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    cartDrawer.classList.remove("open");
    cartDrawer.setAttribute("aria-hidden", "true");
    cartOverlay.classList.remove("visible");
    document.body.style.overflow = "";
  }

  function renderCartItems() {
    cartItemsEl.querySelectorAll(".cart-item").forEach(n => n.remove());
    const items = Object.values(cart);

    if (!items.length) {
      cartEmptyEl.style.display = "block";
      cartTotalEl.textContent = "0";
      return;
    }
    cartEmptyEl.style.display = "none";

    items.forEach(item => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.dataset.id = item.id;
      row.innerHTML = `
        <div class="cart-thumb">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
        </div>
        <div>
          <div class="cart-item-title">${item.name}</div>
          
          <div class="cart-item-controls">
            <button class="qty-btn" type="button" data-action="dec" aria-label="Quitar">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn plus" type="button" data-action="inc" aria-label="Agregar">+</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });

    cartTotalEl.textContent = String(totalItems());
  }

  function syncBadge() {
    const t = totalItems();
    cartBadge.textContent = String(t);
    cartBadge.classList.remove("bump");
    void cartBadge.offsetWidth;
    cartBadge.classList.add("bump");
    setTimeout(() => cartBadge.classList.remove("bump"), 300);
    openCartBtn?.setAttribute("aria-label", `Abrir carrito (${t} producto${t !== 1 ? "s" : ""})`);
  }

  function syncCardQtys() {
    document.querySelectorAll(".card[data-id]").forEach(card => {
      const qtyEl = card.querySelector("[data-qty]");
      if (qtyEl) qtyEl.textContent = cart[card.dataset.id]?.qty ?? "0";
    });
  }

  function refreshUI() {
    saveCart();
    syncBadge();
    syncCardQtys();
    renderCartItems();
  }

  /* =========================================
     8. EVENTOS CARRITO
     ========================================= */
  openCartBtn?.addEventListener("click", openCart);
  closeCartBtn?.addEventListener("click", closeCart);
  cartOverlay?.addEventListener("click", closeCart);

  cartItemsEl?.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const row = e.target.closest(".cart-item");
    if (!row) return;
    const id = row.dataset.id;
    if (btn.dataset.action === "inc") incCartItem(id);
    if (btn.dataset.action === "dec") decCartItem(id);
  });

  cartBuyBtn?.addEventListener("click", () => {
    const items = Object.values(cart);
    const msg = items.length
      ? ["Hola FiveStar, quiero comprar:", "", ...items.map(i => `  • ${i.name} | ${i.label} | Ref: ${i.id.toUpperCase()} (x${i.qty})`), "", "¿Me confirmas disponibilidad, tallas y envío? ¡Gracias!"].join("\n")
      : "Hola FiveStar, quiero información de sus modelos y precios.";
    window.open(waUrl(msg), "_blank", "noopener");
  });

  cartClearBtn?.addEventListener("click", () => { cart = {}; refreshUI(); });

  /* Ofertas → WhatsApp */
  document.querySelectorAll(".buy-whatsapp").forEach(btn => {
    btn.addEventListener("click", () => {
      window.open(waUrl(btn.dataset.msg || "Hola FiveStar, quiero información."), "_blank", "noopener");
    });
  });

  /* Hero buy → WhatsApp */
  heroBuy?.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(waUrl("Hola FiveStar, quiero información sobre la promoción de tenis. ¿Me compartes modelos y tallas?"), "_blank", "noopener");
  });

  /* =========================================
     9. BURGER MENU
     ========================================= */
  function openMenu()  {
    mobileNav.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    mobileNav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }

  burger?.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileNav.classList.contains("open") ? closeMenu() : openMenu();
  });

  mobileNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  document.addEventListener("click", (e) => {
    if (mobileNav && burger && !mobileNav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeCart(); closeMenu(); }
  });

  /* =========================================
     10. SCROLL SPY
     ========================================= */
  const sections  = document.querySelectorAll("section[id], footer[id]");
  const dnavLinks = document.querySelectorAll(".dnav-link");

  if (sections.length && dnavLinks.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dnavLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(s => spy.observe(s));
  }

  /* =========================================
     11. NUEVA COLECCIÓN
     ========================================= */
  function renderNuevaColeccion() {
    if (!nuevaColGrid) return;
    nuevaColGrid.innerHTML = "";

    NUEVA_COLECCION.forEach(product => {
      const img  = product.images[0] || "assets/hero.jpg";
      const inCart = cart[product.id]?.qty || 0;

      const article = document.createElement("article");
      article.className = "card nueva-card";
      article.dataset.id     = product.id;
      article.dataset.name   = product.name;
      article.dataset.images = JSON.stringify(product.images);

      article.innerHTML = `
        <div class="nc-ribbon">NUEVA COLECCIÓN</div>
        ${badgeHTML(product.badge)}
        <div class="card-media">
          <img src="${img}" alt="Tenis ${product.name} – Nueva Colección FiveStar – Ref ${product.id.toUpperCase()} – Colombia" loading="lazy" decoding="async">
        </div>
        <div class="card-body">
          <p class="card-label">${product.label}</p>
          <p class="card-name">${product.name}</p>
          
          <div class="qty" role="group" aria-label="Cantidad ${product.name}">
            <button class="qty-btn"      type="button" data-action="dec"   aria-label="Quitar uno">−</button>
            <span   class="qty-val"      data-qty>${inCart}</span>
            <button class="qty-btn plus" type="button" data-action="inc"   aria-label="Agregar uno">+1</button>
            <button class="qty-btn doc"  type="button" data-action="inc12" aria-label="Agregar docena">+12</button>
          </div>
          <button class="btn btn-ghost btn-sm open-cart" type="button">Ver carrito</button>
        </div>
      `;

      article.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        if (btn.classList.contains("open-cart")) { openCart(); return; }
        if (btn.dataset.action === "inc")   addItem(product);
        if (btn.dataset.action === "inc12") addItems(product, 12);
        if (btn.dataset.action === "dec")   removeItem(product.id);
      });

      nuevaColGrid.appendChild(article);
    });

    // Iniciar rotación de imágenes para estas cards
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nuevaColGrid.querySelectorAll(".nueva-card[data-images]").forEach(card => {
        const images = JSON.parse(card.dataset.images || "[]");
        const imgEl  = card.querySelector(".card-media img");
        if (images.length < 2 || !imgEl) return;
        let idx = 0;
        const tick = () => {
          idx = (idx + 1) % images.length;
          imgEl.style.opacity = "0";
          setTimeout(() => { imgEl.src = images[idx]; imgEl.style.opacity = "1"; }, 250);
        };
        let timer = setInterval(tick, 2400);
        card.addEventListener("mouseenter", () => clearInterval(timer));
        card.addEventListener("mouseleave", () => { timer = setInterval(tick, 2400); });
      });
    }
  }

  /* =========================================
     12. INIT
     ========================================= */
  renderNuevaColeccion();
  renderCatalog();
  refreshUI();
});