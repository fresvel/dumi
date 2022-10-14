## SISTEMA DE CONTROL DE INVENTARIOS

1. [Introducción](#introducción)
2. [Prerequisitos](#prerequisitos)
3. [Instalación](#instalación)
4. [Documentación](#documentación)


### Introducción
El presente proyecto es un sistema de control de inventarios, diseñado para revisar la cantidad de materia prima y producto procesado que está disponible en una fábrica.

La administración del sistema se realiza desde una interfaz web, en donde se tienen las siguientes funciones:

    1. Gestión de Pedidos
    2. Egreso de Bodega
    3. Registro de Producción
    4. Ventas
    5. Gestión de Usuarios
#### 1. Gestión de Pedidos
En la gestión de pedidos el usuario puede: crear un pedido, ingresar un pedido (verificando el estado y actualizando los datos del inventario) y cancelar un pedido. 

#### 2. Egreso de Bodega
El usuario actualiza el inventario de bodega en función de los recursos de materia prima utilizados.

#### 3. Registro de Producción
Se registra en el sistema la cantidad de productos elaborados.

#### 4. Ventas
Las ventas detallan los pedidos realizados por los clientes de la fábrica, las mismas determinan la forma y estado del pago. El sistema permite dos funciones principales: 
    1. El usuario ingresa solicitudes de venta actualizando el inventario de productos, el estado de la entrega(Ejecutado, Pendiente) el saldo y abono. Todas las ventas del local se ingresan con un id de cliente predefinido.
    2. El cliente genera pedidos por medio del chatbot, la plataforma web o la aplicación movil; el estado de la entrega es pendiente hasta la entrega del producto teniendo la factibilidad de actualizar los datos desde la plataforma del usuario y notificando al cliente. Se puede alterar la cantidad de productos en función de las necesidades y la situación de venta.

#### 5. Gestión de Usuarios.
Un administrador del sistema puede crear tres tipos de usuarios: 
    1. Administrador.- Tiene acceso total a las funciones del soistema, gestión de usuarios.
    2. Usuario.- Administrar el sistema de ventas, gestión de pedidos de materia prima y registro de producción.
    3. Cliente.- Solo puede acceder a las plataformas para ejecutar pedidos.

### Prerequisitos
El sistema es implementado en Rocky Linux 8, y utiliza las siguientes herramientas principales:
1. Servidor Web Express
2. Whatsappweb-js
3. Mariadb

#### NodeJs
Para utilizar ExpressJs se requiere de la inslación de NodeJs. La instalación de ésta herramienta, se realiza con el siguiente comando (para la versión 16).

curl -sL https://rpm.nodesource.com/setup_16.x | bash

Las versiondes disponibles de NodeJs se encuentran en el siguiente [repositorio](https://github.com/nodesource/distributions/tree/master/rpm)

#### Whatsappweb-js
La documentación de Whatsappweb-js se encuentran en el siguiente [enlace] (https://wwebjs.dev/guide/#installation)

La ejecución de Whatsappweb en sistemas sin interfaz gráfica requiere de los siguientes prerequisitos:

sudo dnf install ca-certificates wget xdg-utils

Los siguientes complementos requieren de una instalación manual
gconf-service 
libgbm-dev 
libasound2
libatk1.0-0 
libc6 
libcairo2 
libcups2 
libdbus-1-3 
libexpat1 
libfontconfig1 
libgcc1 
libgconf-2-4 
libgdk-pixbuf2.0-0
libglib2.0-0 
libgtk-3-0 
libnspr4 
libpango-1.0-0 
libpangocairo-1.0-0 
libstdc++6 
libx11-6 
libx11-xcb1 
libxcb1 
libxcomposite1 
libxcursor1 
libxdamage1 
libxext6 
libxfixes3 
libxi6 
libxrandr2 
libxrender1 
libxss1 
libxtst6 
fonts-liberation 
libappindicator1 
libnss3 
lsb-release 


### Instalación

1. Express NodeJs

2. Mariadb

3. Whatsapp-web.js

$ npm i whatsapp-web.js

$ npm i qrcode-terminal




### Documentación