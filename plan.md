# Plan de Desarrollo - Vistas para Telares Los Morros

## Información del Proyecto

**Empresa:** Telares Los Morros  
**Sector:** Textil - Fabricación y venta de uniformes  
**Objetivo:** Implementación de red de datos bajo entornos cloud  

## Stack Tecnológico

- **Librería Principal:** React
- **Framework de Estilos:** Tailwind CSS  
- **Componentes de UI:** Aceternity UI
- **Animaciones:** Framer Motion

## Paleta de Colores (Basada en el Logo)

- **Verde Principal:** #4CAF50 (Verde del logo)
- **Verde Oscuro:** #2E7D32 (Para textos y elementos destacados)
- **Azul:** #2196F3 (Del uniforme azul en el logo)
- **Naranja:** #FF9800 (De la camisa naranja en el logo)
- **Marrón:** #8D6E63 (Del pantalón marrón en el logo)
- **Blanco:** #FFFFFF
- **Gris Claro:** #F5F5F5
- **Gris Oscuro:** #424242

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   └── Logo.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Sidebar.jsx
│   └── animations/
│       ├── FadeIn.jsx
│       └── SlideIn.jsx
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Dashboard.jsx
├── assets/
│   ├── images/
│   └── icons/
└── styles/
    └── globals.css
```

## Vista 1: Login

### Descripción
Página de inicio de sesión para acceder al sistema de red de datos cloud de Telares Los Morros.

### Características Visuales
- **Layout:** Centrado con diseño responsivo
- **Elementos:**
  - Logo de "Los Morros" prominente
  - Formulario de login con campos email/usuario y contraseña
  - Botón de "Iniciar Sesión" con animación hover
  - Enlace a registro
  - Opción "Recordar sesión"
  - Enlace "¿Olvidaste tu contraseña?"

### Componentes a Desarrollar
- `LoginForm.jsx` - Formulario principal
- `LoginButton.jsx` - Botón animado con Framer Motion
- `LoginBackground.jsx` - Fondo con elementos textiles sutiles

### Animaciones
- Fade in del formulario al cargar
- Hover effects en botones
- Transición suave en inputs al hacer focus

## Vista 2: Registro

### Descripción
Página de registro para nuevos usuarios del sistema cloud.

### Características Visuales
- **Layout:** Similar al login pero con más campos
- **Elementos:**
  - Logo de "Los Morros"
  - Formulario de registro con:
    - Nombre completo
    - Email
    - Teléfono
    - Sucursal (Villa de Cura, San Juan de los Morros, Maracay)
    - Cargo/Rol
    - Contraseña
    - Confirmar contraseña
  - Botón de "Registrarse"
  - Enlace para volver al login

### Componentes a Desarrollar
- `RegisterForm.jsx` - Formulario de registro
- `BranchSelector.jsx` - Selector de sucursal
- `RoleSelector.jsx` - Selector de rol/cargo
- `PasswordStrength.jsx` - Indicador de fortaleza de contraseña

### Animaciones
- Slide in de campos del formulario
- Validación en tiempo real con micro-animaciones
- Progress indicator para completar registro

## Vista 3: Dashboard - Red de Datos Cloud

### Descripción
Panel principal que muestra la red de datos bajo entorno cloud, visualizando la información de las 3 sucursales y el estado del sistema.

### Características Visuales
- **Layout:** Dashboard moderno con sidebar y área principal
- **Elementos:**
  - Header con logo, nombre de usuario y notificaciones
  - Sidebar con navegación
  - Área principal dividida en secciones:
    - Resumen de sucursales (3 cards)
    - Gráfico de red cloud en tiempo real
    - Métricas de almacenamiento
    - Estado de conexiones
    - Actividad reciente

### Secciones del Dashboard

#### Header
- Logo "Los Morros"
- Breadcrumb de navegación
- Perfil de usuario
- Notificaciones

#### Sidebar
- Dashboard (activo)
- Inventario
- Sucursales
- Reportes
- Configuración

#### Área Principal
1. **Cards de Sucursales:**
   - Villa de Cura (Sede Principal)
   - San Juan de los Morros
   - Maracay
   - Cada card muestra: estado de conexión, usuarios activos, almacenamiento usado

2. **Visualización de Red Cloud:**
   - Diagrama interactivo de la red
   - Nodos representando cada sucursal
   - Conexiones en tiempo real
   - Estado de servidores cloud

3. **Métricas de Sistema:**
   - Almacenamiento total vs usado
   - Ancho de banda
   - Tiempo de actividad
   - Respaldos recientes

### Componentes a Desarrollar
- `DashboardLayout.jsx` - Layout principal
- `BranchCard.jsx` - Card de información de sucursal
- `CloudNetworkDiagram.jsx` - Diagrama de red interactivo
- `MetricsPanel.jsx` - Panel de métricas
- `ActivityFeed.jsx` - Feed de actividad reciente
- `StorageIndicator.jsx` - Indicador de almacenamiento
- `ConnectionStatus.jsx` - Estado de conexiones

### Animaciones
- Fade in escalonado de elementos al cargar
- Animaciones de datos en tiempo real
- Hover effects en cards y botones
- Transiciones suaves entre secciones
- Pulso en indicadores de estado activo

## Configuración Inicial

### 1. Instalación de Dependencias
```bash
npm install react react-dom
npm install tailwindcss @tailwindcss/forms @tailwindcss/typography
npm install framer-motion
npm install lucide-react # Para iconos
npm install @headlessui/react # Para componentes accesibles
```

### 2. Configuración de Tailwind
- Configurar colores personalizados basados en el logo
- Definir clases utilitarias para el tema de Telares Los Morros

### 3. Estructura de Aceternity UI
- Implementar componentes base de Aceternity UI
- Personalizar con la paleta de colores del proyecto

## Cronograma de Desarrollo

### Fase 1: Configuración y Componentes Base (2-3 días)
- Configuración del proyecto
- Componentes UI base
- Sistema de colores y tipografía

### Fase 2: Vista de Login (1-2 días)
- Desarrollo del formulario de login
- Implementación de animaciones
- Responsive design

### Fase 3: Vista de Registro (1-2 días)
- Formulario de registro
- Validaciones visuales
- Animaciones de transición

### Fase 4: Dashboard Cloud (3-4 días)
- Layout del dashboard
- Componentes de visualización
- Diagrama de red interactivo
- Métricas y estados

### Fase 5: Integración y Pulido (1-2 días)
- Navegación entre vistas
- Ajustes finales de diseño
- Optimización de animaciones

## Consideraciones Técnicas

### Responsividad
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Adaptación especial para tablets en orientación landscape

### Accesibilidad
- Contraste adecuado según WCAG 2.1
- Navegación por teclado
- Screen reader friendly
- Focus indicators claros

### Performance
- Lazy loading de componentes pesados
- Optimización de animaciones
- Compresión de imágenes
- Code splitting por rutas

## Notas Importantes

1. **Sin Funcionalidad:** Este plan se enfoca únicamente en las vistas estáticas sin lógica de negocio
2. **Datos Mock:** Se utilizarán datos simulados para mostrar la información
3. **Branding:** Mantener consistencia con la identidad visual de "Los Morros"
4. **Escalabilidad:** Estructura preparada para futuras funcionalidades
5. **Documentación:** Cada componente debe estar documentado para facilitar futuro desarrollo

## Entregables

1. **Código Fuente:** Componentes React organizados y documentados
2. **Documentación:** README con instrucciones de instalación y uso
3. **Assets:** Imágenes, iconos y recursos gráficos optimizados
4. **Demo:** Aplicación funcional con las tres vistas navegables
5. **Guía de Estilo:** Documentación de componentes y patrones de diseño
