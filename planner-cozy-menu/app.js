/**
 * Sabor de Mi Tierra - Planificador de Menú Cozy
 * Regionalizado por defecto en Colombia, Quindío.
 */

// --- DATA DEFINITION: 3 Regional Dishes for Quindío, Colombia ---
const DISHES_DATABASE = [
  {
    id: 'desayuno-arepa-queso-huevo',
    name: 'Arepa de Choclo con Queso y Huevo Perico',
    category: 'desayuno', // 'desayuno' | 'almuerzo' | 'comida'
    difficulty: 'fácil',   // 'fácil' | 'medio' | 'dificil' | 'profesional'
    prepTime: '20 min',
    servingsBase: 1,
    location: 'Colombia, Quindío',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    description: 'Tradicional desayuno cafetero de Salento y Armenia. Masa tierna de maíz dulce, queso campesino fresco derretido y huevos pericos revueltos con tomate y cebolla larga.',
    ingredients: [
      { name: 'Maíz tierno (o harina para arepa de choclo)', quantity: 100, unit: 'g', category: 'Granos y Harinas' },
      { name: 'Queso campesino o cuajada', quantity: 80, unit: 'g', category: 'Lácteos' },
      { name: 'Huevos', quantity: 2, unit: 'unidades', category: 'Huevos' },
      { name: 'Tomate maduro', quantity: 0.5, unit: 'unidad', category: 'Verduras y Hortalizas' },
      { name: 'Cebolla larga (cebollín)', quantity: 0.5, unit: 'tallo', category: 'Verduras y Hortalizas' },
      { name: 'Mantequilla', quantity: 15, unit: 'g', category: 'Lácteos' },
      { name: 'Sal al gusto', quantity: 2, unit: 'g', category: 'Condimentos' }
    ],
    steps: [
      'Mezclar la masa de choclo con una pizca de sal y asar a fuego medio en sartén o tiesto tostador hasta que dore.',
      'Derretir el queso campesino caliente sobre la arepa.',
      'En otra sartén con mantequilla, sofríe el tomate picado y la cebolla larga.',
      'Agrega los huevos batidos con sal y revuelve suavemente hasta obtener la textura cremosa perica perfecta.',
      'Sirve la arepa caliente con el queso fundido y los huevos pericos encima.'
    ]
  },
  {
    id: 'almuerzo-bandeja-paisa-quindiana',
    name: 'Bandeja Paisa Tradicional del Quindío',
    category: 'almuerzo',
    difficulty: 'medio',
    prepTime: '65 min',
    servingsBase: 1,
    location: 'Colombia, Quindío',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'El plato insignia de los arrieros quindianos. Frijoles cargamanto calados con guiso hogao, arroz blanco, carne molida sazonada, chicharrón crujiente, tajada de plátano maduro, huevo frito, arepa blanca y aguacate.',
    ingredients: [
      { name: 'Frijoles cargamanto', quantity: 120, unit: 'g', category: 'Legumbres' },
      { name: 'Arroz blanco', quantity: 80, unit: 'g', category: 'Granos y Harinas' },
      { name: 'Carne molida de res', quantity: 120, unit: 'g', category: 'Carnes' },
      { name: 'Tocino para chicharrón', quantity: 100, unit: 'g', category: 'Carnes' },
      { name: 'Plátano maduro', quantity: 0.5, unit: 'unidad', category: 'Verduras y Hortalizas' },
      { name: 'Huevo', quantity: 1, unit: 'unidad', category: 'Huevos' },
      { name: 'Aguacate', quantity: 0.5, unit: 'unidad', category: 'Verduras y Hortalizas' },
      { name: 'Arepa blanca pequeña', quantity: 1, unit: 'unidad', category: 'Granos y Harinas' },
      { name: 'Tomate maduro', quantity: 1, unit: 'unidad', category: 'Verduras y Hortalizas' },
      { name: 'Cebolla larga', quantity: 1, unit: 'tallo', category: 'Verduras y Hortalizas' },
      { name: 'Aceite vegetal', quantity: 20, unit: 'ml', category: 'Aceites' },
      { name: 'Sal, comino y ajo', quantity: 5, unit: 'g', category: 'Condimentos' }
    ],
    steps: [
      'Remojar frijoles la víspera y cocinar en olla a presión hasta suavizar. Aderezar con un aliño fresco de tomate, cebolla larga y comino (hogao).',
      'Cocinar arroz blanco suelto.',
      'Sazonar la carne molida con ajo y cebolla, y dorarla a la sartén.',
      'Freír el tocino bien tajado a fuego bajo para obtener chicharrón crocante.',
      'Freír tajada de plátano maduro y el huevo con yema blanda.',
      'Servir en una bandeja amplia todos los componentes acompañados de arepa blanca y tajada de aguacate fresco.'
    ]
  },
  {
    id: 'comida-sancocho-trifasico-cafetero',
    name: 'Sancocho Trifásico del Eje Cafetero',
    category: 'comida',
    difficulty: 'dificil',
    prepTime: '75 min',
    servingsBase: 1,
    location: 'Colombia, Quindío',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    description: 'Sopa reconstituyente de las noches andinas en Quindío. Cocinado en leña con tres carnes (pollo de finca, res y cerdo), plátano verde, yuca harinosa, papa criolla, mazorca y cilantrillo de campo.',
    ingredients: [
      { name: 'Pollo / Gallina de finca', quantity: 100, unit: 'g', category: 'Carnes' },
      { name: 'Carne de res (pecho o cadera)', quantity: 80, unit: 'g', category: 'Carnes' },
      { name: 'Carne de cerdo (costilla)', quantity: 80, unit: 'g', category: 'Carnes' },
      { name: 'Plátano verde', quantity: 0.5, unit: 'unidad', category: 'Verduras y Hortalizas' },
      { name: 'Yuca fresca', quantity: 80, unit: 'g', category: 'Verduras y Hortalizas' },
      { name: 'Papa criolla', quantity: 60, unit: 'g', category: 'Verduras y Hortalizas' },
      { name: 'Mazorca de maíz', quantity: 0.5, unit: 'unidad', category: 'Verduras y Hortalizas' },
      { name: 'Cilantro fresco', quantity: 10, unit: 'g', category: 'Hierbas y Verduras' },
      { name: 'Ajo y cebolla larga', quantity: 15, unit: 'g', category: 'Verduras y Hortalizas' },
      { name: 'Color (achiote) y comino', quantity: 3, unit: 'g', category: 'Condimentos' }
    ],
    steps: [
      'En una olla grande hirviendo con agua, ajo, cebolla larga y achiote, agregar primero las carnes de res y cerdo.',
      'Añadir el plátano verde partido en trozos a mano para espesar el caldo.',
      'Incorporar el pollo, la mazorca y la yuca a los 20 minutos de hervor.',
      'Al final, agregar las papas criollas y cocinar hasta que estén tiernas y el caldo adquiera consistencia espesa y aroma profundo.',
      'Servir caliente espolvoreado con abundante cilantro picado y acompañado de aguacate y arroz.'
    ]
  }
];

// --- APP STATE MANAGEMENT ---
const state = {
  currentView: 'builder', // 'builder' | 'summary'
  planMode: 'diario',      // 'diario' | 'semanal' | 'mensual'
  servings: 2,
  location: {
    country: 'Colombia',
    city: 'Quindío'
  },
  filters: {
    category: 'all',
    difficulty: 'all',
    selectedIngredients: new Set(),
    ingredientSearchQuery: ''
  },
  userMenu: {}
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  loadStoredPreferences();
  initLucideIcons();
  setupEventListeners();
  renderIngredientChips();
  renderCatalogDishes();
  renderPlannerCanvas();
  updateHeaderBadge();
  checkCookieBanner();
});

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// --- LOCAL STORAGE HELPERS ---
function loadStoredPreferences() {
  try {
    const savedMenu = localStorage.getItem('cozy_user_menu');
    if (savedMenu) state.userMenu = JSON.parse(savedMenu);

    const savedServings = localStorage.getItem('cozy_servings');
    if (savedServings) state.servings = parseInt(savedServings, 10) || 2;

    const savedMode = localStorage.getItem('cozy_plan_mode');
    if (savedMode) state.planMode = savedMode;

    const savedLoc = localStorage.getItem('cozy_location');
    if (savedLoc) state.location = JSON.parse(savedLoc);
  } catch (e) {
    console.error('Error cargando preferencias de localStorage', e);
  }
}

function saveStateToStorage() {
  try {
    localStorage.setItem('cozy_user_menu', JSON.stringify(state.userMenu));
    localStorage.setItem('cozy_servings', state.servings);
    localStorage.setItem('cozy_plan_mode', state.planMode);
    localStorage.setItem('cozy_location', JSON.stringify(state.location));
  } catch (e) {
    console.error('Error guardando en localStorage', e);
  }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Navigation Tabs
  document.getElementById('nav-tab-builder').addEventListener('click', () => switchView('builder'));
  document.getElementById('nav-tab-summary').addEventListener('click', () => switchView('summary'));
  document.getElementById('btn-back-to-builder').addEventListener('click', () => switchView('builder'));
  document.getElementById('btn-go-to-summary').addEventListener('click', () => switchView('summary'));

  // Plan Mode Switches (Diario, Semanal, Mensual)
  document.querySelectorAll('.mode-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.mode-tab').forEach(b => {
        b.classList.remove('active', 'bg-cozy-terracotta', 'text-white');
        b.classList.add('text-cozy-muted');
      });
      e.currentTarget.classList.add('active');
      state.planMode = e.currentTarget.dataset.mode;
      saveStateToStorage();
      renderPlannerCanvas();
    });
  });

  // Servings Counter
  document.getElementById('btn-servings-minus').addEventListener('click', () => {
    if (state.servings > 1) {
      state.servings--;
      updateServingsDisplay();
    }
  });

  document.getElementById('btn-servings-plus').addEventListener('click', () => {
    if (state.servings < 20) {
      state.servings++;
      updateServingsDisplay();
    }
  });

  // Clear Menu
  document.getElementById('btn-clear-menu').addEventListener('click', () => {
    if (confirm('¿Deseas borrar todos los platos asignados a tu menú?')) {
      state.userMenu = {};
      saveStateToStorage();
      renderPlannerCanvas();
      renderCatalogDishes();
      updateHeaderBadge();
    }
  });

  // Filters: Category
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      state.filters.category = e.currentTarget.dataset.cat;
      renderCatalogDishes();
    });
  });

  // Filters: Difficulty
  document.querySelectorAll('.diff-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.diff-filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      state.filters.difficulty = e.currentTarget.dataset.diff;
      renderCatalogDishes();
    });
  });

  // Ingredient Search Input Handler
  const searchInput = document.getElementById('input-search-ingredient');
  const clearSearchBtn = document.getElementById('btn-clear-ingredient-search');

  searchInput.addEventListener('input', (e) => {
    state.filters.ingredientSearchQuery = e.target.value.trim().toLowerCase();
    if (state.filters.ingredientSearchQuery.length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    renderIngredientChips();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.filters.ingredientSearchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderIngredientChips();
  });

  // Reset Filters Button
  document.getElementById('btn-reset-filters').addEventListener('click', () => {
    state.filters.category = 'all';
    state.filters.difficulty = 'all';
    state.filters.selectedIngredients.clear();
    state.filters.ingredientSearchQuery = '';
    
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');

    document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.cat-filter-btn[data-cat="all"]').classList.add('active');
    
    document.querySelectorAll('.diff-filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.diff-filter-btn[data-diff="all"]').classList.add('active');

    renderIngredientChips();
    renderCatalogDishes();
  });

  // Modals Close handlers
  document.getElementById('btn-close-recipe-modal').addEventListener('click', closeRecipeModal);
  document.getElementById('recipe-modal').addEventListener('click', (e) => {
    if (e.target.id === 'recipe-modal') closeRecipeModal();
  });

  document.getElementById('btn-change-location').addEventListener('click', openLocationModal);
  document.getElementById('btn-close-location-modal').addEventListener('click', closeLocationModal);
  document.getElementById('btn-save-location').addEventListener('click', () => {
    state.location.country = document.getElementById('select-country').value;
    state.location.city = document.getElementById('select-city').value;
    document.getElementById('current-location-text').innerText = `${state.location.country} • ${state.location.city}`;
    saveStateToStorage();
    closeLocationModal();
  });

  // Legal Modals
  document.getElementById('btn-open-terms').addEventListener('click', () => openLegalModal('terms'));
  document.getElementById('btn-open-privacy').addEventListener('click', () => openLegalModal('privacy'));
  document.getElementById('btn-close-legal-modal').addEventListener('click', closeLegalModal);

  // Cookie Consent Banner
  document.getElementById('btn-accept-cookies').addEventListener('click', () => {
    localStorage.setItem('cozy_cookie_consent', 'accepted');
    document.getElementById('cookie-banner').classList.add('hidden');
  });
  document.getElementById('btn-decline-cookies').addEventListener('click', () => {
    localStorage.setItem('cozy_cookie_consent', 'declined');
    document.getElementById('cookie-banner').classList.add('hidden');
  });

  // Print button
  document.getElementById('btn-print-summary').addEventListener('click', () => {
    window.print();
  });
}

function updateServingsDisplay() {
  document.getElementById('servings-count').innerText = state.servings;
  saveStateToStorage();
  if (state.currentView === 'summary') {
    renderSummaryView();
  }
}

function switchView(viewName) {
  state.currentView = viewName;
  const viewBuilder = document.getElementById('view-builder');
  const viewSummary = document.getElementById('view-summary');
  const navBuilder = document.getElementById('nav-tab-builder');
  const navSummary = document.getElementById('nav-tab-summary');

  if (viewName === 'summary') {
    viewBuilder.classList.add('hidden');
    viewSummary.classList.remove('hidden');
    
    navBuilder.classList.remove('active');
    navSummary.classList.add('active');

    renderSummaryView();
  } else {
    viewSummary.classList.add('hidden');
    viewBuilder.classList.remove('hidden');

    navSummary.classList.remove('active');
    navBuilder.classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- INGREDIENT FILTERS (WITH SEARCH BAR & TOP-PINNED SELECTED INGREDIENTS) ---
function getAllUniqueIngredients() {
  const ingSet = new Set();
  DISHES_DATABASE.forEach(dish => {
    dish.ingredients.forEach(i => ingSet.add(i.name));
  });
  return Array.from(ingSet).sort();
}

function renderIngredientChips() {
  const container = document.getElementById('ingredients-chips-container');
  container.innerHTML = '';

  const allIngredients = getAllUniqueIngredients();
  const query = state.filters.ingredientSearchQuery;

  // Separate selected vs unselected
  const selectedIngs = [];
  const unselectedIngs = [];

  allIngredients.forEach(ingName => {
    const isSelected = state.filters.selectedIngredients.has(ingName);
    const matchesQuery = query === '' || ingName.toLowerCase().includes(query);

    if (isSelected) {
      selectedIngs.push(ingName);
    } else if (matchesQuery) {
      unselectedIngs.push(ingName);
    }
  });

  // Render Selected Ingredients Section (TOP PINNED)
  if (selectedIngs.length > 0) {
    const selectedGroup = document.createElement('div');
    selectedGroup.className = 'w-full pb-2 border-b border-cozy-border flex flex-wrap gap-1.5 items-center';
    
    const labelSpan = document.createElement('span');
    labelSpan.className = 'w-full text-[10px] font-bold text-cozy-terracotta uppercase tracking-wider mb-1 block';
    labelSpan.innerText = '✓ Ingredientes Seleccionados:';
    selectedGroup.appendChild(labelSpan);

    selectedIngs.forEach(ingName => {
      const chip = createIngredientChip(ingName, true);
      selectedGroup.appendChild(chip);
    });

    container.appendChild(selectedGroup);
  }

  // Render Unselected Available Ingredients Section
  const availableGroup = document.createElement('div');
  availableGroup.className = 'w-full flex flex-wrap gap-1.5 items-center pt-1';

  if (selectedIngs.length > 0) {
    const availLabel = document.createElement('span');
    availLabel.className = 'w-full text-[10px] font-bold text-cozy-muted uppercase tracking-wider mb-1 block';
    availLabel.innerText = query ? `Resultados para "${query}":` : 'Más ingredientes disponibles:';
    availableGroup.appendChild(availLabel);
  }

  if (unselectedIngs.length === 0 && selectedIngs.length === 0) {
    availableGroup.innerHTML = `
      <p class="text-xs text-cozy-muted italic py-2 w-full text-center">No se encontraron ingredientes para "${query}"</p>
    `;
  } else {
    unselectedIngs.forEach(ingName => {
      const chip = createIngredientChip(ingName, false);
      availableGroup.appendChild(chip);
    });
  }

  container.appendChild(availableGroup);

  // Update counter
  const countSpan = document.getElementById('active-ingredients-count');
  const count = state.filters.selectedIngredients.size;
  countSpan.innerText = `${count} seleccionado${count !== 1 ? 's' : ''}`;

  // Reset button visibility check
  const resetBtn = document.getElementById('btn-reset-filters');
  if (count > 0 || state.filters.category !== 'all' || state.filters.difficulty !== 'all' || query !== '') {
    resetBtn.classList.remove('hidden');
  } else {
    resetBtn.classList.add('hidden');
  }

  initLucideIcons();
}

function createIngredientChip(ingName, isSelected) {
  const chip = document.createElement('button');
  chip.className = `px-2.5 py-1 rounded-xl text-xs font-semibold border transition-all duration-150 flex items-center gap-1 ${
    isSelected 
      ? 'bg-cozy-terracotta text-white border-cozy-terracottaDark shadow-sm hover:bg-cozy-terracottaDark' 
      : 'bg-white text-cozy-warmText border-cozy-border hover:border-cozy-terracotta'
  }`;
  
  chip.innerHTML = `
    <span>${ingName}</span>
    ${isSelected ? '<i data-lucide="x" class="w-3 h-3 ml-0.5"></i>' : '<i data-lucide="plus" class="w-3 h-3 ml-0.5 opacity-60"></i>'}
  `;

  chip.addEventListener('click', () => {
    if (isSelected) {
      state.filters.selectedIngredients.delete(ingName);
    } else {
      state.filters.selectedIngredients.add(ingName);
    }
    renderIngredientChips();
    renderCatalogDishes();
  });

  return chip;
}

// --- FILTERING LOGIC ---
function getFilteredDishes() {
  return DISHES_DATABASE.filter(dish => {
    // 1. Category filter
    if (state.filters.category !== 'all' && dish.category !== state.filters.category) {
      return false;
    }

    // 2. Difficulty filter
    if (state.filters.difficulty !== 'all' && dish.difficulty !== state.filters.difficulty) {
      return false;
    }

    // 3. Gradual Ingredient Filtering (Must contain ALL selected ingredients)
    if (state.filters.selectedIngredients.size > 0) {
      const dishIngredientNames = dish.ingredients.map(i => i.name.toLowerCase());
      for (let reqIng of state.filters.selectedIngredients) {
        const matches = dishIngredientNames.some(name => name.includes(reqIng.toLowerCase()));
        if (!matches) return false;
      }
    }

    return true;
  });
}

// --- RENDER CATALOG DISHES ---
function renderCatalogDishes() {
  const container = document.getElementById('dishes-catalog-container');
  container.innerHTML = '';

  const filtered = getFilteredDishes();
  document.getElementById('dishes-count').innerText = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center bg-cozy-cream rounded-2xl border border-dashed border-cozy-border">
        <i data-lucide="search-x" class="w-8 h-8 text-cozy-muted mx-auto mb-2"></i>
        <p class="text-sm font-semibold text-cozy-warmText">No hay platos con esos filtros</p>
        <p class="text-xs text-cozy-muted mt-1">Prueba quitando algún ingrediente o cambiando la dificultad.</p>
      </div>
    `;
    initLucideIcons();
    return;
  }

  filtered.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'bg-cozy-card hover:bg-cozy-cardHover border border-cozy-border rounded-2xl p-4 transition-all duration-200 shadow-sm flex flex-col justify-between gap-3 group';
    
    // Difficulty Badge Color
    let diffBadgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-300';
    if (dish.difficulty === 'medio') diffBadgeClass = 'bg-amber-100 text-amber-800 border-amber-300';
    if (dish.difficulty === 'dificil') diffBadgeClass = 'bg-orange-100 text-orange-800 border-orange-300';
    if (dish.difficulty === 'profesional') diffBadgeClass = 'bg-purple-100 text-purple-800 border-purple-300';

    card.innerHTML = `
      <div class="flex items-start gap-3 cursor-pointer" onclick="openRecipeModal('${dish.id}')">
        <img src="${dish.image}" alt="${dish.name}" class="w-20 h-20 rounded-xl object-cover shrink-0 border border-cozy-border shadow-xs group-hover:scale-105 transition-transform duration-300">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-1 flex-wrap">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-cozy-terracotta text-white">${dish.category}</span>
            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase border ${diffBadgeClass}">${dish.difficulty}</span>
            <span class="text-[11px] text-cozy-muted flex items-center gap-0.5 ml-auto">
              <i data-lucide="clock" class="w-3 h-3"></i> ${dish.prepTime}
            </span>
          </div>
          <h4 class="font-title text-base font-bold text-cozy-warmText truncate group-hover:text-cozy-terracotta transition">${dish.name}</h4>
          <p class="text-xs text-cozy-muted line-clamp-2 mt-0.5">${dish.description}</p>
        </div>
      </div>

      <!-- Quick Placement Selector -->
      <div class="pt-2 border-t border-cozy-border/60 flex items-center justify-between gap-2">
        <span class="text-[11px] font-semibold text-cozy-muted">Colocar en menú:</span>
        <div class="flex items-center gap-1">
          <button onclick="addDishToAnySlot('${dish.id}', 'desayuno')" class="px-2.5 py-1 bg-white hover:bg-cozy-terracotta hover:text-white border border-cozy-border rounded-lg text-xs font-semibold transition flex items-center gap-1" title="Agregar a Desayuno">
            <i data-lucide="sun" class="w-3 h-3"></i> Desayuno
          </button>
          <button onclick="addDishToAnySlot('${dish.id}', 'almuerzo')" class="px-2.5 py-1 bg-white hover:bg-cozy-terracotta hover:text-white border border-cozy-border rounded-lg text-xs font-semibold transition flex items-center gap-1" title="Agregar a Almuerzo">
            <i data-lucide="utensils" class="w-3 h-3"></i> Almuerzo
          </button>
          <button onclick="addDishToAnySlot('${dish.id}', 'comida')" class="px-2.5 py-1 bg-white hover:bg-cozy-terracotta hover:text-white border border-cozy-border rounded-lg text-xs font-semibold transition flex items-center gap-1" title="Agregar a Comida/Cena">
            <i data-lucide="moon" class="w-3 h-3"></i> Cena
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  initLucideIcons();
}

// --- RENDER PLANNER CANVAS ---
function getSlotsForMode() {
  if (state.planMode === 'diario') {
    return [
      { id: 'day-1', label: 'Día Único' }
    ];
  } else if (state.planMode === 'semanal') {
    return [
      { id: 'day-1', label: 'Lunes' },
      { id: 'day-2', label: 'Martes' },
      { id: 'day-3', label: 'Miércoles' },
      { id: 'day-4', label: 'Jueves' },
      { id: 'day-5', label: 'Viernes' },
      { id: 'day-6', label: 'Sábado' },
      { id: 'day-7', label: 'Domingo' }
    ];
  } else {
    // mensual
    return [
      { id: 'sem-1', label: 'Semana 1' },
      { id: 'sem-2', label: 'Semana 2' },
      { id: 'sem-3', label: 'Semana 3' },
      { id: 'sem-4', label: 'Semana 4' }
    ];
  }
}

function renderPlannerCanvas() {
  const container = document.getElementById('menu-planner-schedule');
  container.innerHTML = '';

  const slots = getSlotsForMode();
  const mealTypes = [
    { key: 'desayuno', label: 'Desayuno', icon: 'sun', color: 'text-amber-500' },
    { key: 'almuerzo', label: 'Almuerzo', icon: 'utensils', color: 'text-orange-500' },
    { key: 'comida', label: 'Comida / Cena', icon: 'moon', color: 'text-indigo-500' }
  ];

  // Update Status Banner
  const modeLabels = { diario: 'Plan Diario', semanal: 'Plan Semanal (7 días)', mensual: 'Plan Mensual (4 semanas)' };
  document.getElementById('planner-status-text').innerText = `${modeLabels[state.planMode]} activo`;

  slots.forEach(slot => {
    const dayBox = document.createElement('div');
    dayBox.className = 'bg-cozy-cream border border-cozy-border rounded-2xl p-4 space-y-3';
    
    dayBox.innerHTML = `
      <div class="flex items-center justify-between border-b border-cozy-border/70 pb-2">
        <h3 class="font-title text-base font-bold text-cozy-warmText flex items-center gap-2">
          <i data-lucide="calendar" class="w-4 h-4 text-cozy-terracotta"></i>
          ${slot.label}
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        ${mealTypes.map(meal => {
          const slotKey = `${slot.id}-${meal.key}`;
          const assignedDishId = state.userMenu[slotKey];
          const assignedDish = DISHES_DATABASE.find(d => d.id === assignedDishId);

          return `
            <div class="bg-white border border-cozy-border rounded-xl p-3 flex flex-col justify-between space-y-2 min-h-[110px] relative hover:border-cozy-terracotta/50 transition">
              <div class="flex items-center justify-between text-xs font-semibold text-cozy-muted">
                <span class="flex items-center gap-1.5 ${meal.color}">
                  <i data-lucide="${meal.icon}" class="w-3.5 h-3.5"></i>
                  ${meal.label}
                </span>
                ${assignedDish ? `
                  <button onclick="removeDishFromSlot('${slotKey}')" class="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition" title="Quitar este plato">
                    <i data-lucide="x" class="w-3.5 h-3.5"></i>
                  </button>
                ` : ''}
              </div>

              ${assignedDish ? `
                <div class="flex items-center gap-2 cursor-pointer group" onclick="openRecipeModal('${assignedDish.id}')">
                  <img src="${assignedDish.image}" alt="${assignedDish.name}" class="w-12 h-12 rounded-lg object-cover shrink-0 border border-cozy-border">
                  <div class="min-w-0 flex-1">
                    <h5 class="font-title text-xs font-bold text-cozy-warmText truncate group-hover:text-cozy-terracotta transition">${assignedDish.name}</h5>
                    <p class="text-[10px] text-cozy-muted">${assignedDish.prepTime} &bull; ${assignedDish.difficulty}</p>
                  </div>
                </div>
              ` : `
                <div class="flex flex-col items-center justify-center py-3 border border-dashed border-cozy-border rounded-lg bg-cozy-cream/50 text-center">
                  <span class="text-[11px] text-cozy-muted font-medium mb-1.5">Sin plato asignado</span>
                  <select onchange="assignDishFromSelect('${slotKey}', this.value)" class="w-full bg-white border border-cozy-border text-[11px] rounded-lg px-2 py-1 text-cozy-warmText focus:outline-none focus:border-cozy-terracotta">
                    <option value="">+ Seleccionar plato</option>
                    ${DISHES_DATABASE.map(d => `<option value="${d.id}">${d.name} (${d.category})</option>`).join('')}
                  </select>
                </div>
              `}
            </div>
          `;
        }).join('')}
      </div>
    `;

    container.appendChild(dayBox);
  });

  initLucideIcons();
  updateHeaderBadge();
}

// --- SLOT MANAGEMENT HELPERS ---
function addDishToAnySlot(dishId, mealCategory) {
  const slots = getSlotsForMode();
  let assigned = false;

  // Find first empty slot for this meal category
  for (let slot of slots) {
    const slotKey = `${slot.id}-${mealCategory}`;
    if (!state.userMenu[slotKey]) {
      state.userMenu[slotKey] = dishId;
      assigned = true;
      break;
    }
  }

  // If no empty slot, assign to first slot anyway
  if (!assigned) {
    const firstSlotKey = `${slots[0].id}-${mealCategory}`;
    state.userMenu[firstSlotKey] = dishId;
  }

  saveStateToStorage();
  renderPlannerCanvas();
}

function assignDishFromSelect(slotKey, dishId) {
  if (!dishId) return;
  state.userMenu[slotKey] = dishId;
  saveStateToStorage();
  renderPlannerCanvas();
}

function removeDishFromSlot(slotKey) {
  delete state.userMenu[slotKey];
  saveStateToStorage();
  renderPlannerCanvas();
}

function updateHeaderBadge() {
  const count = Object.keys(state.userMenu).length;
  const badge = document.getElementById('badge-menu-count');
  badge.innerText = count;
  if (count > 0) {
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

// --- RECIPE MODAL POPUP ---
let currentViewingDishId = null;

function openRecipeModal(dishId) {
  const dish = DISHES_DATABASE.find(d => d.id === dishId);
  if (!dish) return;

  currentViewingDishId = dishId;

  document.getElementById('modal-recipe-banner').style.backgroundImage = `url('${dish.image}')`;
  document.getElementById('modal-recipe-category').innerText = dish.category;
  document.getElementById('modal-recipe-difficulty').innerText = dish.difficulty;
  document.getElementById('modal-recipe-title').innerText = dish.name;
  document.getElementById('modal-recipe-time').innerText = dish.prepTime;
  document.getElementById('modal-recipe-servings').innerText = `${dish.servingsBase} persona`;
  document.getElementById('modal-recipe-origin').innerText = dish.location;
  document.getElementById('modal-recipe-desc').innerText = dish.description;

  // Ingredients List
  const ingList = document.getElementById('modal-recipe-ingredients');
  ingList.innerHTML = dish.ingredients.map(ing => `
    <li class="flex items-center gap-2 p-2 bg-white rounded-xl border border-cozy-border">
      <i data-lucide="circle-dot" class="w-3.5 h-3.5 text-cozy-terracotta shrink-0"></i>
      <span class="font-semibold">${ing.name}:</span>
      <span class="text-cozy-muted ml-auto">${ing.quantity} ${ing.unit}</span>
    </li>
  `).join('');

  // Steps
  const stepsList = document.getElementById('modal-recipe-steps');
  stepsList.innerHTML = dish.steps.map(step => `
    <li class="p-2.5 bg-white rounded-xl border border-cozy-border text-cozy-warmText leading-relaxed">
      ${step}
    </li>
  `).join('');

  // Modal Add button action
  const addBtn = document.getElementById('btn-modal-add-to-menu');
  addBtn.onclick = () => {
    addDishToAnySlot(dish.id, dish.category);
    closeRecipeModal();
  };

  const modal = document.getElementById('recipe-modal');
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.add('open'), 10);
  initLucideIcons();
}

function closeRecipeModal() {
  const modal = document.getElementById('recipe-modal');
  modal.classList.remove('open');
  setTimeout(() => modal.classList.add('hidden'), 250);
}

// --- LOCATION MODAL ---
function openLocationModal() {
  const modal = document.getElementById('location-modal');
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.add('open'), 10);
}

function closeLocationModal() {
  const modal = document.getElementById('location-modal');
  modal.classList.remove('open');
  setTimeout(() => modal.classList.add('hidden'), 250);
}

// --- RENDER SUMMARY VIEW (SHOPPING LIST & FINAL PLANNER) ---
function renderSummaryView() {
  document.getElementById('summary-servings-text').innerText = `${state.servings} persona${state.servings > 1 ? 's' : ''}`;
  document.getElementById('summary-location-text').innerText = `${state.location.country}, ${state.location.city}`;

  const assignedSlotKeys = Object.keys(state.userMenu);
  
  // 1. CONSOLIDATED SHOPPING LIST CALCULATIONS
  const ingredientsAggregated = {};

  assignedSlotKeys.forEach(slotKey => {
    const dishId = state.userMenu[slotKey];
    const dish = DISHES_DATABASE.find(d => d.id === dishId);
    if (!dish) return;

    dish.ingredients.forEach(ing => {
      const key = ing.name.toLowerCase();
      const scaledQuantity = ing.quantity * state.servings;

      if (!ingredientsAggregated[key]) {
        ingredientsAggregated[key] = {
          name: ing.name,
          category: ing.category || 'Otros',
          unit: ing.unit,
          totalQuantity: scaledQuantity
        };
      } else {
        ingredientsAggregated[key].totalQuantity += scaledQuantity;
      }
    });
  });

  const shoppingContainer = document.getElementById('shopping-list-container');
  shoppingContainer.innerHTML = '';

  const totalItems = Object.keys(ingredientsAggregated).length;
  document.getElementById('shopping-list-item-count').innerText = `${totalItems} ingrediente${totalItems !== 1 ? 's' : ''}`;

  if (totalItems === 0) {
    shoppingContainer.innerHTML = `
      <div class="p-6 text-center bg-cozy-cream rounded-2xl border border-dashed border-cozy-border">
        <i data-lucide="shopping-bag" class="w-8 h-8 text-cozy-muted mx-auto mb-2"></i>
        <p class="text-sm font-semibold text-cozy-warmText">No has agregado platos a tu menú aún</p>
        <p class="text-xs text-cozy-muted mt-1">Vuelve a "Armar Menú" y selecciona tus platos favoritos.</p>
      </div>
    `;
  } else {
    // Group ingredients by category
    const grouped = {};
    Object.values(ingredientsAggregated).forEach(item => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });

    Object.keys(grouped).forEach(catName => {
      const catBox = document.createElement('div');
      catBox.className = 'bg-cozy-cream rounded-2xl p-3 border border-cozy-border space-y-2';
      catBox.innerHTML = `
        <h4 class="font-title text-xs font-bold uppercase text-cozy-terracotta tracking-wider flex items-center gap-1.5">
          <i data-lucide="tag" class="w-3.5 h-3.5"></i> ${catName}
        </h4>
        <div class="space-y-1.5">
          ${grouped[catName].map(ing => `
            <div class="flex items-center justify-between p-2 bg-white rounded-xl border border-cozy-border text-xs">
              <label class="flex items-center gap-2 font-medium cursor-pointer">
                <input type="checkbox" class="rounded text-cozy-terracotta focus:ring-cozy-terracotta w-4 h-4">
                <span>${ing.name}</span>
              </label>
              <span class="font-bold text-cozy-warmText bg-cozy-cream px-2 py-0.5 rounded-lg border border-cozy-border">
                ${Number.isInteger(ing.totalQuantity) ? ing.totalQuantity : ing.totalQuantity.toFixed(1)} ${ing.unit}
              </span>
            </div>
          `).join('')}
        </div>
      `;
      shoppingContainer.appendChild(catBox);
    });
  }

  // 2. CONSOLIDATED SUMMARY PLANNER BREAKDOWN
  const summaryPlannerContainer = document.getElementById('summary-planner-container');
  summaryPlannerContainer.innerHTML = '';

  const slots = getSlotsForMode();

  slots.forEach(slot => {
    const slotCard = document.createElement('div');
    slotCard.className = 'bg-cozy-cream rounded-2xl p-4 border border-cozy-border space-y-3';

    const meals = ['desayuno', 'almuerzo', 'comida'];
    const mealLabels = { desayuno: 'Desayuno 🌅', almuerzo: 'Almuerzo ☀️', comida: 'Cena 🌙' };

    slotCard.innerHTML = `
      <h4 class="font-title text-base font-bold text-cozy-warmText border-b border-cozy-border pb-1.5 flex items-center justify-between">
        <span>${slot.label}</span>
      </h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        ${meals.map(mKey => {
          const sKey = `${slot.id}-${mKey}`;
          const dishId = state.userMenu[sKey];
          const dish = DISHES_DATABASE.find(d => d.id === dishId);

          return `
            <div class="bg-white rounded-xl p-3 border border-cozy-border flex flex-col justify-between space-y-2">
              <span class="text-xs font-bold text-cozy-muted uppercase tracking-wider">${mealLabels[mKey]}</span>
              ${dish ? `
                <div class="cursor-pointer group flex items-center gap-2" onclick="openRecipeModal('${dish.id}')">
                  <img src="${dish.image}" alt="${dish.name}" class="w-10 h-10 rounded-lg object-cover shrink-0 border border-cozy-border">
                  <div class="min-w-0">
                    <h5 class="font-title text-xs font-bold text-cozy-warmText truncate group-hover:text-cozy-terracotta transition">${dish.name}</h5>
                    <span class="text-[10px] text-cozy-terracotta underline font-semibold">Ver receta completa &rarr;</span>
                  </div>
                </div>
              ` : `
                <p class="text-xs text-cozy-muted italic py-1">Sin plato configurado</p>
              `}
            </div>
          `;
        }).join('')}
      </div>
    `;

    summaryPlannerContainer.appendChild(slotCard);
  });

  initLucideIcons();
}

// --- LEGAL MODALS & COOKIE BANNER ---
function checkCookieBanner() {
  const consent = localStorage.getItem('cozy_cookie_consent');
  if (!consent) {
    document.getElementById('cookie-banner').classList.remove('hidden');
  }
}

function openLegalModal(type) {
  const modal = document.getElementById('legal-modal');
  const title = document.getElementById('legal-modal-title');
  const body = document.getElementById('legal-modal-body');

  if (type === 'terms') {
    title.innerText = 'Términos y Condiciones de Uso';
    body.innerHTML = `
      <p>Bienvenido a <strong>Sabor de Mi Tierra</strong>. Al utilizar nuestra aplicación de planificación gastronómica cozy, aceptas las siguientes condiciones:</p>
      <p><strong>1. Uso de la aplicación:</strong> La herramienta está diseñada para la planificación personal de menús y cálculo estimado de ingredientes de compras.</p>
      <p><strong>2. Recetas e ingredientes:</strong> Las proporciones de recetas provienen de la tradición gastronómica regional de Colombia, Quindío. Las cantidades son estimaciones orientativas.</p>
      <p><strong>3. Privacidad y Datos:</strong> Todos los datos de menús y preferencias guardados permanecen exclusivamente en el almacenamiento local de tu propio navegador (localStorage).</p>
    `;
  } else {
    title.innerText = 'Política de Privacidad';
    body.innerHTML = `
      <p>En <strong>Sabor de Mi Tierra</strong> respetamos profundamente tu privacidad y autonomía digital:</p>
      <p><strong>1. Cero recolección de datos personales:</strong> No solicitamos registro, correo electrónico ni datos de pago para utilizar el planificador de menú.</p>
      <p><strong>2. Almacenamiento Local (Local Storage):</strong> Guardamos tu menú actual y el número de comensales localmente en tu dispositivo mediante cookies/localStorage para que no pierdas tu avance al cerrar la página.</p>
      <p><strong>3. Control Total:</strong> Puedes borrar tu plan en cualquier momento haciendo clic en el botón "Vaciar Plan".</p>
    `;
  }

  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.add('open'), 10);
}

function closeLegalModal() {
  const modal = document.getElementById('legal-modal');
  modal.classList.remove('open');
  setTimeout(() => modal.classList.add('hidden'), 250);
}
