
## Guía de Desarrollo de Vistas de la Aplicación: Uniformes Los Morros

### 1\. Resumen del Proyecto

El objetivo es desarrollar las vistas front-end para una aplicación web para la empresa **"Uniformes Los Morros"** (también conocida como Telares los Morros). [cite\_start]Esta empresa se especializa en la fabricación y venta de uniformes, así como en la venta al por mayor de materia prima textil a otras empresas[cite: 62].

[cite\_start]La aplicación servirá como un portal digital moderno para que los clientes exploren productos y gestionen sus cuentas, abordando la necesidad de la empresa de modernizar su infraestructura tecnológica y mejorar la eficiencia[cite: 66, 81].

### 2\. Pila Tecnológica (Frontend)

  * **Librería Principal:** `React`
  * **Framework de Estilos:** `Tailwind CSS`
  * **Componentes de UI:** `Aceternity UI` (para componentes pre-construidos y estéticos)
  * **Animaciones:** `Framer Motion` 

### 3\. Identidad Visual y Branding

La identidad visual debe ser limpia, profesional y confiable. Utiliza la paleta de colores y la tipografía extraídas del logo proporcionado.

  * **Logo:** Utiliza la imagen proporcionada "Uniformes Los Morros".
  * **Paleta de Colores:**
      * **Primario (Verde):** `#28a745` (un verde vibrante y profesional, extraído del logo)
      * **Texto Principal:** `#343a40` (gris oscuro)
      * **Acentos (Amarillo/Dorado):** `#ffc107` (tomado de la camisa en el logo)
      * **Fondo:** `#ffffff` (blanco) o `#f8f9fa` (blanco hueso) para un aspecto limpio.
  * **Tipografía:**
      * **Títulos y Encabezados:** Una fuente en mayúsculas, sans-serif y en negrita (similar a la palabra "UNIFORMES" en el logo). `Montserrat` o `Poppins` de Google Fonts serían excelentes opciones.
      * **Texto del Cuerpo y Párrafos:** Una fuente sans-serif limpia y legible como `Lato` o `Open Sans`.
      * **Fuentes de Acento:** Para elementos caligráficos (como en "Los Morros" del logo), se puede usar una fuente script como `Dancing Script` de forma esporádica para citas o eslóganes.

### 4\. Flujo de la Aplicación y Estructura de Vistas

El flujo inicial para un nuevo usuario será: **Landing Page** ➡️ **Página de Registro** ➡️ **Página de Login**. Un usuario recurrente irá de la **Landing Page** al **Login**.

-----

### **Vista 1: Landing Page (Página de Inicio)**

**Objetivo:** Captar la atención del visitante, comunicar la propuesta de valor de la empresa (calidad, variedad) y dirigir a los usuarios a registrarse o iniciar sesión.

**Estructura y Componentes:**

1.  **Header (Encabezado):**

      * **Layout:** Fijo en la parte superior.
      * **Contenido:**
          * Logo de "Uniformes Los Morros" a la izquierda.
          * Enlaces de navegación en el centro: `Inicio`, `Catálogo`, `Nosotros`, `Contacto`.
          * Botones de `Iniciar Sesión` (bordeado) y `Registrarse` (sólido, color primario) a la derecha.

2.  **Hero Section (Sección Principal):**

      * **Propósito:** Un impacto visual inmediato.
      * **Componente Sugerido (Aceternity UI):** `HeroParallax`.
      * **Contenido:** Mostrar imágenes de alta calidad de diferentes tipos de uniformes (médicos, corporativos, industriales) con un titular llamativo.
          * **Titular:** "Uniformes de Calidad para Profesionales"
          * [cite\_start]**Subtítulo:** "Diseñamos y fabricamos soluciones textiles para tu empresa. Conoce nuestro catálogo de uniformes y materia prima." [cite: 62]
          * **CTA (Llamada a la Acción):** Un botón prominente que diga "Ver Catálogo" o "Registra tu Empresa".

3.  **Product Categories Section (Sección de Categorías de Producto):**

      * **Propósito:** Mostrar la gama de productos que ofrecen.
      * **Componente Sugerido (Aceternity UI):** `EvervaultCard` o `LayoutGrid` para mostrar las categorías de forma atractiva.
      * **Contenido:** Tres o cuatro tarjetas, cada una representando una categoría principal.
          * **Tarjeta 1:** Uniformes Médicos (imagen de batas o scrubs azules, como en el logo).
          * **Tarjeta 2:** Uniformes Corporativos (imagen de camisas y pantalones de vestir, como en el logo).
          * **Tarjeta 3:** Materia Prima Textil (imagen de rollos de tela).
          * **Tarjeta 4:** Uniformes Industriales (imagen de overoles o ropa de seguridad).

4.  **About Us / Why Choose Us Section (Sección "Sobre Nosotros"):**

      * **Propósito:** Generar confianza y destacar los diferenciadores de la empresa.
      * **Componente Sugerido (Aceternity UI):** `StickyScrollReveal`.
      * **Contenido:** Resaltar los beneficios clave mencionados en el documento.
          * **Calidad y Durabilidad:** "Confección experta para el día a día."
          * [cite\_start]**Escalabilidad para Empresas:** "Soluciones para pequeñas y grandes empresas, con capacidad para escalar según tu demanda." [cite: 79]
          * [cite\_start]**Asesoría y Colaboración:** "Colaboramos contigo para optimizar el diseño y la cadena de suministro de tus uniformes." [cite: 18, 19]

5.  **Footer (Pie de Página):**

      * **Layout:** Tres columnas.
      * **Contenido:**
          * **Columna 1:** Logo y una breve descripción. [cite\_start]"Empresa textil dedicada a la venta y fabricación de uniformes."[cite: 62].
          * **Columna 2:** Enlaces rápidos (los mismos que en el header) y enlaces a políticas (Privacidad, Términos y Condiciones).
          * **Columna 3:** Información de contacto y ubicaciones. [cite\_start]Mencionar las sucursales: **Sede Principal en Villa de Cura (Aragua)** y sucursales en **San Juan de los Morros (Guárico)** y **Maracay (Aragua)**.[cite: 60, 61].

-----

### **Vista 2: Página de Login (Inicio de Sesión)**

**Objetivo:** Proporcionar una interfaz simple y segura para que los usuarios existentes accedan a sus cuentas.

**Estructura y Componentes:**

1.  **Layout General:**

      * Un diseño centrado, limpio y sin distracciones.
      * **Componente Sugerido (Aceternity UI):** Usar el componente `Vortex` como un fondo sutil y atractivo para darle un toque moderno.

2.  **Formulario de Login:**

      * **Componente Sugerido (Aceternity UI):** Una tarjeta o `div` con un borde suave en el centro de la página. Usar los componentes `Input` y `Label` para los campos.
      * **Contenido:**
          * Logo de "Uniformes Los Morros" en la parte superior del formulario.
          * Título: "Bienvenido de Nuevo".
          * **Campo 1 (Input):** `Label`: "Correo Electrónico". `Input`: `type="email"`, `placeholder="tu@empresa.com"`.
          * **Campo 2 (Input):** `Label`: "Contraseña". `Input`: `type="password"`, `placeholder="********"`.
          * **Enlace:** Un enlace de "¿Olvidaste tu contraseña?" alineado a la derecha.
          * **Botón de Envío:** Botón a todo lo ancho del formulario con el texto "Iniciar Sesión".
          * **Enlace de Registro:** Debajo del botón, un texto: "¿No tienes una cuenta? \<a href='/register' class='text-primary-green'\>Regístrate aquí\</a\>".

-----

### **Vista 3: Página de Registro**

**Objetivo:** Permitir que nuevos usuarios (tanto individuos como empresas) creen una cuenta de forma sencilla.

**Estructura y Componentes:**

1.  **Layout General:**

      * Similar a la página de login para mantener la consistencia. Centrado y limpio, posiblemente con el mismo fondo `Vortex`.

2.  **Formulario de Registro:**

      * **Componente Sugerido (Aceternity UI):** Similar al del login, usar los componentes `Input` y `Label`.
      * **Contenido:**
          * Logo de "Uniformes Los Morros".
          * Título: "Crea tu Cuenta".
          * Subtítulo: "Accede a nuestro catálogo completo y gestiona tus pedidos."
          * **Campo 1 (Input):** `Label`: "Nombre Completo". `Input`: `type="text"`.
          * **Campo 2 (Input):** `Label`: "Nombre de la Empresa (Opcional)". `Input`: `type="text"`. [cite\_start](Esto es clave para diferenciar clientes B2B [cite: 62]).
          * **Campo 3 (Input):** `Label`: "Correo Electrónico". `Input`: `type="email"`.
          * **Campo 4 (Input):** `Label`: "Crear Contraseña". `Input`: `type="password"`.
          * **Campo 5 (Input):** `Label`: "Confirmar Contraseña". `Input`: `type="password"`.
          * **Checkbox:** Un checkbox para "Acepto los Términos y Condiciones y la Política de Privacidad".
          * **Botón de Envío:** Botón a todo lo ancho con el texto "Crear Cuenta".
          * **Enlace de Login:** Debajo del botón: "Ya tienes una cuenta? \<a href='/login' class='text-primary-green'\>Inicia sesión\</a\>".