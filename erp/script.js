// Variables globales
let ventas = [];
let totalGeneral = 0;
let historial = [];

let agregadosDelDia = {}; // guarda lo agregado por producto
let eliminadosDelDia = {};

let recetas = {

    // 🥢 ENTRADAS
    "Langostinos tempuras": {
        "Langostino": 35
    },

    "Guiozas": {
        "Masa gyoza": 4,
        "Pollo": 60
    },

    "Nigiris": {
        "Arroz sushi": 100,
        "Salmon": 30,
        "Atun": 15,
        "Tilapia": 15,
        "Langostino": 30
    },

    "Egg Rolls": {
        "Egg roll": 4
    },

    "Cevi Amazonico": {
        "Masa gyoza": 4,
        "Camaron": 30,
        "Mayonesa japonesa": 10,
        "Salsa de tomate": 10,
        "Cilantro": 5,
        "Mango": 20
    },

    "Aborrajados": {
        "Queso": 60,
        "Bocadillo": 60
    },

    // 🍣 SUSHI
    "Colombia roll": {
        "Arroz sushi": 120,
        "Alga nori": 1,
        "Palmito de cangrejo": 45,
        "Salmon": 80
    },

    "Acevichado": {
        "Arroz sushi": 120,
        "Alga nori": 1,
        "Langostino": 60,
        "Salmon": 70,
        "Cebolla": 20,
        "Cilantro": 10,
        "Limon": 20
    },

    "Buddha roll": {
        "Arroz sushi": 120,
        "Alga nori": 1,
        "Palmito de cangrejo": 30,
        "Langostino": 60,
        "Maiz": 15,
        "Cebolla": 15,
        "Cilantro": 10,
        "Tilapia": 20,
        "Mango": 15,
        "Limon": 100,
        "Mayonesa japonesa": 30
    },

    "Philadelfia": {
        "Arroz sushi": 120,
        "Alga nori": 1,
        "Salmon": 90
    },

    "California": {
        "Arroz sushi": 120,
        "Alga nori": 1,
        "Palmito de cangrejo": 45,
        "Masago": 50
    },

    "Majiña acevichado": {
        "Arroz sushi": 120,
        "Alga nori": 1,
        "Langostino": 75,
        "Cebollin": 30,
        "Mango": 75,
        "Cebolla": 30,
        "Limon": 100,
        "Pimenton": 30
    },

    "Black tiger": {
        "Arroz sushi": 120,
        "Alga nori": 1,
        "Salmon": 70,
        "Palmito de cangrejo": 60
    },

    "Tiger eyes": {
        "Arroz sushi": 120,
        "Alga nori": 1,
        "Tilapia": 30,
        "Salmon": 30,
        "Palmito de cangrejo": 30
    },

    "Tentation roll": {
        "Arroz sushi": 120,
        "Alga nori": 1,
        "Mango": 70,
        "Atun": 60,
        "Salmon": 60
    },

    "Kurashi": {
        "Arroz sushi": 120,
        "Alga nori": 1,
        "Salmon": 40,
        "Palmito de cangrejo": 15
    },

    // 🥗 CEVICHES
    "Ceviche colombiano": {
        "Camaron": 240,
        "Salsa de tomate": 60,
        "Limon": 200,
        "Cebolla": 100,
        "Maiz": 80,
        "Mango": 100,
        "Cilantro": 50
    },

    "Ceviche de la casa": {
        "Camaron": 100,
        "Tilapia": 60,
        "Salmon": 60,
        "Limon": 200,
        "Cebolla": 100,
        "Maiz": 80,
        "Mango": 50,
        "Cilantro": 50,
        "Salsa de tomate": 70,
        "Mayonesa japonesa": 35
    },

    "Ceviche peruano": {
        "Camaron": 100,
        "Tilapia": 60,
        "Palmito de cangrejo": 60,
        "Limon": 200,
        "Cebolla": 100,
        "Maiz": 80,
        "Cilantro": 50
    },

    "Ceviantojo": {
        "Camaron": 100,
        "Tilapia": 60,
        "Palmito de cangrejo": 60,
        "Limon": 200,
        "Cebolla": 100,
        "Maiz": 80,
        "Mango": 50,
        "Cilantro": 50,
        "Salsa de tomate": 70,
        "Mayonesa japonesa": 35
    },

    // 🥩 CARNES
    "Baby beef": {
        "Baby beef": 1,
        "Papas fritas": 150
    },

    "Churrasco": {
        "Churrasco": 1,
        "Papas fritas": 150
    },

    "Punta de anca": {
        "Punta de anca": 1,
        "Papas fritas": 150
    },

    "Big chorizo": {
        "Big chorizo": 1,
        "Papas fritas": 150
    },

    "Ribeye": {
        "Ribeye": 1,
        "Papas fritas": 150
    },

    // 🍛 ARROCES Y WOK
    "Arroz de maricos": {
        "Arroz": 150,
        "Mariscos": 150,
        "Zanahoria": 30,
        "Pimenton": 30,
        "Cebolla": 30,
        "Zucchini": 30
    },

    "Arroz ranchero": {
        "Arroz": 150,
        "Pollo": 50,
        "Cerdo": 50,
        "Lomo": 50,
        "Zanahoria": 30,
        "Pimenton": 30,
        "Cebolla": 30
    },

    "Lomo salteado": {
        "Lomo": 300,
        "Cebolla": 100,
        "Papas fritas": 150
    },

    "Yakisoba de lomo": {
        "Pasta": 150,
        "Lomo": 150,
        "Zanahoria": 30,
        "Pimenton": 30,
        "Cebolla": 30,
        "Zucchini": 30
    },

    "Yakisoba de cerdo": {
        "Pasta": 150,
        "Cerdo": 150,
        "Zanahoria": 30,
        "Pimenton": 30,
        "Cebolla": 30,
        "Zucchini": 30
    },

    "Yakisoba de pollo": {
        "Pasta": 150,
        "Pollo": 150,
        "Zanahoria": 30,
        "Pimenton": 30,
        "Cebolla": 30,
        "Zucchini": 30
    },

    "Yakisoba de mariscos": {
        "Pasta": 150,
        "Mariscos": 150,
        "Zanahoria": 30,
        "Pimenton": 30,
        "Cebolla": 30,
        "Zucchini": 30
    },

    // 🥤 BEBIDAS
    "Coca-cola": { "Coca-cola": 1 },
    "Cuatro": { "Cuatro": 1 },
    "Agua manantial": { "Agua": 1 },
    "Jugos naturales": { "Pulpa": 1 },
    "Cerveza Corona": { "Corona": 1 },
    "Club Colombia": { "Club Colombia": 1 },
    "Stella": { "Stella": 1 },

    "Sodas": {
        "Sirope sodas": 50,
        "Poppings pearls": 25
    },

    "Limonada de coco": {
        "Sirope coco": 50,
        "Leche": 200
    },

    "Limonada de hierva buena": {
        "Sirope hierbabuena": 20
    },

    "Limonada de cereza": {
        "Sirope cereza": 50,
        "Leche": 200
    }
};

// Definir unidades por producto
let unidades = {
    // Proteínas
    "Langostino": "g",
    "Salmon": "g",
    "Atun": "g",
    "Camaron": "g",
    "Tilapia": "g",
    "Lomo": "g",
    "Cerdo": "g",
    "Pollo": "g",
    "Mariscos": "g",

    // Carnes
    "Baby beef": "u",
    "Churrasco": "u",
    "Big chorizo": "u",
    "Punta de anca": "u",
    "Ribeye": "u",

    // Bases
    "Arroz sushi": "g",
    "Arroz": "g",
    "Pasta": "g",

    // Vegetales
    "Cebolla": "g",
    "Cebollin": "g",
    "Cilantro": "g",
    "Pimenton": "g",
    "Zanahoria": "g",
    "Zucchini": "g",
    "Mango": "g",
    "Maiz": "g",
    "Limon": "g",

    // Otros
    "Palmito de cangrejo": "g",
    "Queso": "g",
    "Bocadillo": "g",
    "Masago": "g",
    "Mayonesa": "g",
    "Mayonesa japonesa": "g",
    "Salsa de tomate": "g",
    "Poppings pearls": "g",
    "Papas fritas": "g",

    // Masas
    "Masa gyoza": "u",
    "Egg roll": "u",
    "Alga nori": "u",

    // Bebidas
    "Coca-cola": "u",
    "Cuatro": "u",
    "Agua": "u",
    "Pulpa": "u",
    "Corona": "u",
    "Club Colombia": "u",
    "Stella": "u",

    // Líquidos
    "Sirope sodas": "ml",
    "Sirope coco": "ml",
    "Sirope hierbabuena": "ml",
    "Sirope cereza": "ml",
    "Leche": "ml"
};

// Mostrar inventario con columna de unidad
let inventario = {
    // 🐟 PROTEÍNAS (gramos)
    "Langostino": 1000,
    "Salmon": 2000,
    "Atun": 500,
    "Camaron": 2000,
    "Tilapia": 1000,
    "Lomo": 2000,
    "Cerdo": 2000,
    "Pollo": 2000,
    "Mariscos": 1500,

    // 🥩 CARNES (unidades)
    "Baby beef": 10,
    "Churrasco": 10,
    "Big chorizo": 10,
    "Punta de anca": 10,
    "Ribeye": 10,

    // 🍚 BASES (gramos)
    "Arroz sushi": 10000,
    "Arroz": 4000,
    "Pasta": 3000,

    // 🥬 VEGETALES (gramos)
    "Cebolla": 1000,
    "Cebollin": 200,
    "Cilantro": 200,
    "Pimenton": 800,
    "Zanahoria": 1000,
    "Zucchini": 2000,
    "Mango": 1000,
    "Maiz": 500,
    "Limon": 3000,

    // 🧂 OTROS (gramos)
    "Palmito de cangrejo": 2000,
    "Queso": 100,
    "Bocadillo": 100,
    "Masago": 500,
    "Mayonesa": 2000,
    "Mayonesa japonesa": 1500,
    "Salsa de tomate": 2000,
    "Poppings pearls": 3000,
    "Papas fritas": 3000,

    // 🍞 / MASAS (unidades)
    "Masa gyoza": 200,
    "Egg roll": 150,
    "Alga nori": 600,

    // 🥤 BEBIDAS (unidades)
    "Coca-cola": 75,
    "Cuatro": 25,
    "Agua": 50,
    "Pulpa": 30,
    "Corona": 30,
    "Club Colombia": 30,
    "Stella": 30,

    // 🧃 LÍQUIDOS (ml)
    "Sirope sodas": 2000,
    "Sirope coco": 1000,
    "Sirope hierbabuena": 1000,
    "Sirope cereza": 1000,
    "Leche": 2000
};
// 🔥 CARGAR INVENTARIO GUARDADO
let inventarioGuardado = localStorage.getItem("inventario");

if (inventarioGuardado) {
    inventario = JSON.parse(inventarioGuardado);
}

// Precios de productos
let precios = {
    // Entradas
    "Langostinos tempuras": 19000,
    "Guiozas": 20000,
    "Nigiris": 18000,
    "Egg Rolls": 15000,
    "Cevi Amazonico": 20000,
    "Aborrajados": 15000,

    // Platos fuertes
    "Colombia roll": 28000,
    "Acevichado": 38000,
    "Buddha roll": 42000,
    "Philadelfia": 28000,
    "California": 28000,
    "Majiña acevichado": 35000,
    "Black tiger": 42000,
    "Tiger eyes": 40000,
    "Tentation roll": 42000,
    "Kurashi": 35000,
    "Ceviche colombiano": 40000,
    "Ceviche de la casa": 42000,
    "Ceviche peruano": 39000,
    "Ceviantojo": 43000,
    "Baby beef": 54000,
    "Churrasco": 54000,
    "Punta de anca": 54000,
    "Big chorizo": 45000,
    "Ribeye": 45000,
    "Arroz de maricos": 40000,
    "Arroz ranchero": 40000,
    "Lomo salteado": 42000,
    "Yakisoba de lomo": 42000,
    "Yakisoba de cerdo": 38000,
    "Yakisoba de pollo": 38000,
    "Yakisoba de mariscos": 40000,

    // Bebidas
    "Coca-cola": 8000,
    "Cuatro": 6000,
    "Agua manantial": 6000,
    "Jugos naturales": 12000,
    "Cerveza Corona": 10000,
    "Club Colombia": 10000,
    "Stella": 14000,
    "Sodas": 16000,
    "Limonada de coco": 14000,
    "Limonada de hierva buena": 12000,
    "Limonada de cereza": 12000
};
function ajustarInventario(producto, cantidad, operacion = "restar") {
    if(!recetas[producto]) return true;

    let receta = recetas[producto];

    // Validar stock
    for(let ingrediente in receta) {
        let totalNecesario = receta[ingrediente] * cantidad;

        if(operacion === "restar") {
            if(!inventario[ingrediente] || inventario[ingrediente] < totalNecesario) {
                alert(`No hay suficiente ${ingrediente}`);
                return false;
            }
        }
    }

    // Aplicar cambios
    for(let ingrediente in receta) {
        let total = receta[ingrediente] * cantidad;

        if(operacion === "restar") {
            inventario[ingrediente] -= total;
        } else {
            inventario[ingrediente] += total;
        }
    }
localStorage.setItem("inventario", JSON.stringify(inventario));
    return true;
}

// Registrar venta
function registrarVenta() {
    let producto = document.getElementById("producto").value;
    let cantidad = parseInt(document.getElementById("cantidad").value, 10);

    if(cantidad <= 0) return alert("Cantidad debe ser mayor a 0");

    // ✅ AQUI VA ESTO
    if(!ajustarInventario(producto, cantidad, "restar")) return;

    let precio = precios[producto];
    let total = cantidad * precio;

    ventas.push({producto, cantidad, precio, total});
    totalGeneral += total;

    // Restar stock

    mostrarVentas();
    calcularTotales();
}

// Mostrar ventas
function mostrarVentas() {
    let tabla = document.getElementById("tablaVentas");
    tabla.innerHTML = "";

    ventas.forEach((v, index) => {
        tabla.innerHTML += `<tr>
            <td>${v.producto}</td>
            <td>
                <input type="number" min="1" value="${v.cantidad}" 
                       onchange="actualizarCantidad(${index}, this.value)">
            </td>
            <td>$${v.precio}</td>
            <td>$${v.total}</td>
            <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
        </tr>`;
    });
}

// Actualizar cantidad en venta
function actualizarCantidad(index, nuevaCantidad) {
    nuevaCantidad = parseInt(nuevaCantidad, 10);
    if(nuevaCantidad <= 0) return alert("Cantidad debe ser mayor a 0");

    let producto = ventas[index];
    producto.cantidad = nuevaCantidad;
    producto.total = producto.cantidad * producto.precio;

    totalGeneral = ventas.reduce((sum, v) => sum + v.total, 0);

    mostrarVentas();
    calcularTotales();
}

// Eliminar producto de la venta
function eliminarProducto(index) {
    ventas.splice(index, 1);
    totalGeneral = ventas.reduce((sum, v) => sum + v.total, 0);
    mostrarVentas();
    calcularTotales();
}

// Calcular totales
function calcularTotales() {
    let subtotal = totalGeneral;
    let iva = subtotal * 0.19;
    let propina = document.getElementById("propinaCheck").checked ? subtotal * 0.10 : 0;
    let totalFinal = subtotal + iva + propina;

    document.getElementById("totalGeneral").textContent = `$${subtotal}`;
    document.getElementById("subtotal").textContent = `$${subtotal}`;
    document.getElementById("iva").textContent = `$${iva}`;
    document.getElementById("propina").textContent = `$${propina}`;
    document.getElementById("totalFinal").textContent = `$${totalFinal}`;
}

// Nueva factura
function nuevaFactura() {
    if(ventas.length > 0) {
        historial.push({
            productos: [...ventas],
            subtotal: totalGeneral,
            iva: totalGeneral * 0.19,
            propina: document.getElementById("propinaCheck").checked ? totalGeneral * 0.10 : 0,
            totalFinal: totalGeneral + (totalGeneral * 0.19) + (document.getElementById("propinaCheck").checked ? totalGeneral * 0.10 : 0)
        });
        actualizarHistorial();
    }

    ventas = [];
    totalGeneral = 0;
    document.getElementById("tablaVentas").innerHTML = "";
    document.getElementById("totalGeneral").textContent = "$0";
    document.getElementById("subtotal").textContent = "$0";
    document.getElementById("iva").textContent = "$0";
    document.getElementById("propina").textContent = "$0";
    document.getElementById("totalFinal").textContent = "$0";
    document.getElementById("propinaCheck").checked = false;
}

// Actualizar historial
function actualizarHistorial() {
    let tbody = document.getElementById("historialFacturas");
    tbody.innerHTML = "";

    historial.forEach((factura, index) => {
        let productosStr = factura.productos.map(p => `${p.producto} x${p.cantidad}`).join(", ");
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${productosStr}</td>
            <td>$${factura.subtotal}</td>
            <td>$${factura.iva}</td>
            <td>$${factura.propina}</td>
            <td>$${factura.totalFinal}</td>
            <td>
                <button class="btn-imprimir" data-index="${index}">Imprimir</button>
                <button class="btn-editar" data-index="${index}">Editar</button>
                <button class="btn-eliminar" data-index="${index}">Eliminar</button>
            </td>
        `;
        tbody.appendChild(fila);
    });

    document.querySelectorAll(".btn-imprimir").forEach(btn => {
        btn.addEventListener("click", () => imprimirFacturaHistorial(btn.getAttribute("data-index")));
    });
    document.querySelectorAll(".btn-eliminar").forEach(btn => {
    btn.addEventListener("click", () => {
        let index = btn.getAttribute("data-index");
        if(confirm("¿Seguro que quieres eliminar esta factura?")) {

            // 🔄 Devolver ingredientes al inventario
            let factura = historial[index];
            factura.productos.forEach(v => {
                ajustarInventario(v.producto, v.cantidad, "sumar");
            });

            // Eliminar la factura del historial
            historial.splice(index, 1);
            actualizarHistorial();
        }
    });
});
    document.querySelectorAll(".btn-editar").forEach(btn => {
        btn.addEventListener("click", () => editarFactura(btn.getAttribute("data-index")));
    });
}

// Editar factura
function editarFactura(index) {
    let factura = historial[index];
    if(!factura) return alert("Factura no encontrada.");

    ventas = [...factura.productos];
    totalGeneral = factura.subtotal;

    mostrarSeccion('facturacion');
    mostrarVentas();
    calcularTotales();

    historial.splice(index, 1);
    actualizarHistorial();
}

// Imprimir factura del historial
function imprimirFacturaHistorial(index) {
    let factura = historial[index];
    if(!factura) return alert("Factura no encontrada.");

    let contenido = "<h2>Factura</h2><table border='1'><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Total</th></tr>";
    factura.productos.forEach(v => {
        contenido += `<tr><td>${v.producto}</td><td>${v.cantidad}</td><td>$${v.precio}</td><td>$${v.total}</td></tr>`;
    });
    contenido += `</table>
        <p>Subtotal: $${factura.subtotal}</p>
        <p>IVA (19%): $${factura.iva}</p>
        <p>Propina: $${factura.propina}</p>
        <h3>Total Final: $${factura.totalFinal}</h3>`;

    let ventana = window.open("", "Imprimir factura", "width=600,height=600");
    ventana.document.write(contenido);
    ventana.document.close();
    ventana.print();
}

// Imprimir factura actual
function imprimirFactura() {
    if(ventas.length === 0){ alert("No hay ventas para imprimir."); return; }

    let contenido = "<h2>Factura</h2><table border='1'><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Total</th></tr>";
    ventas.forEach(v => {
        contenido += `<tr><td>${v.producto}</td><td>${v.cantidad}</td><td>$${v.precio}</td><td>$${v.total}</td></tr>`;
    });

    let subtotal = totalGeneral;
    let iva = subtotal * 0.19;
    let propina = document.getElementById("propinaCheck").checked ? subtotal * 0.10 : 0;
    let totalFinal = subtotal + iva + propina;

    contenido += `</table>
        <p>Subtotal: $${subtotal}</p>
        <p>IVA (19%): $${iva}</p>
        <p>Propina: $${propina}</p>
        <h3>Total Final: $${totalFinal}</h3>`;

    let ventana = window.open("", "Imprimir factura", "width=600,height=600");
    ventana.document.write(contenido);
    ventana.document.close();
    ventana.print();
}

// Mostrar sección
function mostrarSeccion(seccion) {
    // Lista de todas las secciones
    const secciones = ["facturacion", "historial", "inventario", "resumenDia"];

    // Ocultar todas
    secciones.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Mostrar solo la seleccionada
    document.getElementById(seccion).style.display = "block";

    // Opcional: si quieres cargar datos al abrir sección
    if (seccion === "inventario") mostrarInventario();
    if (seccion === "resumenDia") mostrarResumenDia();
}

// Mostrar inventario con columna de unidad
function mostrarInventario() {
    let tbody = document.getElementById("tablaInventario");
    tbody.innerHTML = "";

    for (let producto in inventario) {
        tbody.innerHTML += `
            <tr>
                <td>${producto}</td>
                <td>${inventario[producto]}</td>
                <td>${unidades[producto] || ""}</td>
                <td>
                    <input type="number" min="1" id="add-${producto}" placeholder="Cantidad">
                    <button onclick="agregarStock('${producto}')">Agregar</button>
                    <button onclick="eliminarStock('${producto}')">Eliminar</button>
                </td>
            </tr>
        `;
    }
}

// Agregar stock
function agregarStock(nombre) {
    let input = document.getElementById(`add-${nombre}`);
    let cantidad = parseInt(input.value, 10);
    if(!cantidad || cantidad <= 0) return alert("Ingresa una cantidad válida.");
    
    if(!inventario[nombre]) inventario[nombre] = 0;
    inventario[nombre] += cantidad;
localStorage.setItem("inventario", JSON.stringify(inventario));
    // Registrar agregado del día
    if(!agregadosDelDia[nombre]) agregadosDelDia[nombre] = 0;
    agregadosDelDia[nombre] += cantidad;

    input.value = "";
    mostrarInventario();
    alert(`Se agregaron ${cantidad} a ${nombre}`);
    
    // Actualizar resumen diario automáticamente
    mostrarResumenDia();
}

// Eliminar stock
function eliminarStock(nombre) {
    let input = document.getElementById(`add-${nombre}`);
    let cantidad = parseInt(input.value, 10);
    if(!cantidad || cantidad <= 0) return alert("Ingresa una cantidad válida.");

    if(!inventario[nombre] || inventario[nombre] < cantidad) {
        return alert(`No puedes eliminar más de lo que hay en inventario. Stock actual: ${inventario[nombre]}`);
    }

    inventario[nombre] -= cantidad;
    // ✅ Registrar eliminado del día
if(!eliminadosDelDia[nombre]) eliminadosDelDia[nombre] = 0;
eliminadosDelDia[nombre] += cantidad;
    localStorage.setItem("inventario", JSON.stringify(inventario));
    input.value = "";
    mostrarInventario();
    alert(`Se eliminaron ${cantidad} de ${nombre}`);
}
let inventarioInicial = JSON.parse(JSON.stringify(inventario)); // copia profunda

function mostrarResumenDia() {
    let tbody = document.getElementById("tablaResumen");
    tbody.innerHTML = "";

    for (let producto in inventario) {
        let inicial = inventarioInicial[producto] || 0;
        let final = inventario[producto];

        let agregadoBruto = agregadosDelDia[producto] || 0;
        let eliminado = eliminadosDelDia[producto] || 0;

        let agregado = agregadoBruto - eliminado;
        let vendido = inicial + agregado - final;

        tbody.innerHTML += `
        <tr>
            <td>${producto}</td>
            <td>${inicial}</td>
            <td>${vendido}</td>
            <td>${agregado}</td>
            <td>${final}</td>
            <td>${unidades[producto] || ""}</td>
        </tr>`;
    }
}
// Función para actualizar el resumen diario
function actualizarResumen() {
    let tablaResumen = document.getElementById("tablaResumen");
    tablaResumen.innerHTML = ""; // limpiar tabla

    // Recorremos todos los productos del inventario
    for (let producto in inventario) {
        let inicial = inventarioInicial[producto] || 0;            // Stock inicial
        let vendido = ventasDelDia[producto] || 0;                 // Cantidad vendida
        let agregado = productosAgregados[producto] || 0;          // Cantidad agregada al inventario
        let final = inicial + agregado - vendido;                  // Stock final

        // Crear fila en la tabla resumen
        let fila = `<tr>
            <td>${producto}</td>
            <td>${inicial}</td>
            <td>${vendido}</td>
            <td>${agregado}</td>
            <td>${final}</td>
            <td>${unidad[producto]}</td>
        </tr>`;
        tablaResumen.innerHTML += fila;
    }
}
function filtrarInventario() {
    let filtro = document.getElementById("buscadorInventario").value.toLowerCase();
    let filas = document.querySelectorAll("#tablaInventario tr");

    filas.forEach(fila => {
        let producto = fila.children[0].textContent.toLowerCase();

        if(producto.includes(filtro)) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
}
function filtrarResumen() {
    let input = document.getElementById("buscadorResumen");
    let filtro = input.value.toLowerCase().trim();

    let filas = document.querySelectorAll("#tablaResumen tr");

    filas.forEach(fila => {
        let texto = fila.textContent.toLowerCase();

        if (texto.includes(filtro)) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
}

// Evento checkbox propina
document.getElementById("propinaCheck").addEventListener("change", calcularTotales);