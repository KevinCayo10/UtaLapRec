const products = [
  {
    // source: https://tunotebook.com.ar/gamer/alienware-m15-r7-240hz-core-i7-12700h-32gb-512gb-rtx-3070ti/
    id: 'alienware-m15-r7-240hz-core-i7-12700h-16gb-512gb-rtx-3070ti',
    name: `Alienware M15 R7 
    15.6″ 240hz 
    Core i7 12700H 
    16GB / 512GB 
    RTX 3070Ti`,
    category: 'gamer',
    brand: 'Alienware',
    stock: 10,
    price: 1_275_890,
    priceCurrency: 'ARS',
    enabled: false,
    images: [
      '01-600x600.jpg',
      '02-600x600.jpg',
      '03-600x600.jpg',
      '04-600x600.jpg',
      '05-600x600.jpg',
      '06-600x600.jpg',
      '07-600x600.jpg',
      '08-600x600.jpg',
      '09-600x600.jpg'
    ],
    banner: 'banner-alienware-m15-r7.jpg',
    description: 'Obtén la ventaja que necesitas con la tecnología de refrigeración Alienware Cryo-tech™, que incorpora ventiladores con una nueva configuración y más del doble de aspas en un diseño un 37,5 % más fino que el de la generación anterior. El diseño con doble ventilador, que da prioridad al rendimiento, absorbe aire frío por las rejillas superior e inferior y expulsa el aire caliente por los lados izquierdo y derecho y la parte trasera. De este modo, se garantiza una experiencia de juego excepcional.',
    features: {
      cpu: {
        title: 'Procesador',
        text: `Intel Core i7 12700H
            4.7 GHz Performance 6-Core
            3.5 GHz Efficiency 8-Core
            Nucleos: 14
            Subprocesos: 20`
      },
      ram: {
        title: 'Memoria',
        text: `Capacidad: 32GB
            Tipo: DDR5
            Expandible: 64GB`
      },
      screen: {
        title: 'Pantalla',
        text: `Pulgadas: 15.6″
            Resolución: QHD 2560×1440
            Tecnología: WVA G-Sync
            Hz: 240Hz`
      },
      gpu: {
        title: 'Gráficos',
        text: `NVIDIA GeForce RTX 3070 Ti
            Memoria de Video: 8 GB GDDR6
            Switch MUX`
      },
      storage: {
        title: 'Almacenamiento',
        text: `Capacidad: 512 GB
            Tipo: SSD
            Tecnología: PCIe 4.0 NVMe`
      },
      connectivity: {
        title: 'Conectividad',
        text: `WiFi 6 802.11AX
            Bluetooth: Si
            Ethernet: Si 2500 Mbit/s`
      },
      os: {
        title: 'Sistema Operativo',
        text: 'Windows 11'
      },
      ports: {
        title: 'Puertos',
        text: `– 3 x USB Type-A 3.2 Gen 1
            – Type-C port (Thunderbolt™ 4, USB 3.2 Gen 2, DP 1.4,PD)
            – HDMI 2.1
            – RJ-45 Killer E3100 2.5Gbps
            – Headset jack`
      },
      other: {
        title: 'Otras características',
        text: `Webcam 720p
            Teclado Retroiluminado RGB
            AlienFX Lighting
            Cryo-tech`
      },
      model: {
        title: 'Modelo',
        text: `Marca: Alienware
            Linea: m15 R7
            Modelo: AWM15R7-7730BLK-PUS`
      },
      dimensions: {
        title: 'Dimensiones y peso',
        text: `35.6 x 27,2 x 2,39 cm
            Peso: 2,42 kg
            Chasis: Plástico`
      },
      usage: {
        title: 'Uso recomendado',
        text: 'Diseño, arquitectura, edición de fotografía, Render, Multimedia, internet, Gaming'
      }
    }
  },
  {
    // source: https://tunotebook.com.ar/gamer/msi-pulse-gl76-17-3-144hz-i7-12th-gen-16gb-512gb-rtx-3070-8gb/
    id: 'msi-pulse-gl76-17-3-144hz-i7-12th-gen-16gb-512gb-rtx-3070-8gb',
    name: `MSI Pulse GL76 
    17.3″ 144hz 
    i7 12th Gen 
    16GB / 512GB 
    RTX 3070 8GB`,
    category: 'gamer',
    brand: 'Alienware',
    stock: 1,
    price: 989_890,
    priceCurrency: 'ARS',
    enabled: true,
    images: [
      '01-600x600.jpg',
      '02-600x600.jpg',
      '03-600x600.jpg',
      '04-600x600.jpg',
      '05-600x600.jpg',
      '06-600x600.jpg',
      '07-600x600.jpg'
    ],
    banner: 'banner-pulse-GL76.jpg',
    description: 'El más adaptable al cambio es el que sobrevive y evoluciona. Elige el espíritu del dragón y evoluciona con los últimos portátiles GL76 Gaming de MSI equipados con procesadores Intel® Core ™ i7 de 12va generación y las últimas tarjetas gráficas GeForce RTX diseñadas para jugadores con estilo. Su pantalla IPS de 144HZ con velocidad y claridad sin precedentes te ofrece las imágenes más vibrantes para que nunca pierdas el ritmo.',
    features: {
      cpu: {
        title: 'Procesador',
        text: `Intel® Core i7 12700H
            Velocidad: 2,30 GHz – 4,60 GHz
            Nucleos: 14 (Performance 6, Efficient 8)
            Subprocesos: 20`
      },
      ram: {
        title: 'Memoria',
        text: `Capacidad: 16GB
            Tipo: DDR4
            Ampliable: 64GB`
      },
      screen: {
        title: 'Pantalla',
        text: `Pulgadas: 17.3"
            Resolución: Full HD
            Tecnología: IPS
            Hz: 144hz`
      },
      gpu: {
        title: 'Gráficos',
        text: `NVIDIA GeForce RTX 3070
            Memoria de Video: 8 GB GDDR6`
      },
      storage: {
        title: 'Almacenamiento',
        text: `Capacidad: 512 GB
            Tipo: SSD
            Tecnología: PCIe 4.0 NVMe
            Slot Adicional NVMe`
      },
      connectivity: {
        title: 'Conectividad',
        text: `Intel Wi-Fi 6 AX201
            Bluetooth 5.2
            Ethernet: Si`
      },
      os: {
        title: 'Sistema Operativo',
        text: `Windows 11
            Versión: Home 64 bits`
      },
      ports: {
        title: 'Puertos',
        text: `2 x USB 3.2 Gen1
            USB 2.0
            USB 3.2 Gen1
            HDMI (4K @ 60Hz)
            Headphone/Microphone`
      },
      other: {
        title: 'Otras características',
        text: `Teclado Retroiluminado RGB
            Webcam 720p
            Nahimic 3 / Hi-Res Audio
            Cooler Boost 5`
      },
      model: {
        title: 'Modelo',
        text: `Marca: MSI
            Linea: GL Series
            Modelo: 12UGK-256`
      },
      dimensions: {
        title: 'Dimensiones y peso',
        text: `39,82 x 27,33 x 2,41 cm
            Peso: 2,79 kg
            Chasis: Plástico`
      },
      usage: {
        title: 'Uso recomendado',
        text: 'Gaming, Modelado 3D, Renders, Arquitectura, Animación, Edición video'
      }
    }
  },
  {
    // source: https://tunotebook.com.ar/gamer/lenovo-ideapad-gaming-3-120hz-ryzen-5-8gb-256gb-rtx-3050ti/
    id: 'lenovo-ideapad-gaming-3-120hz-ryzen-5-8gb-256gb-rtx-3050ti',
    name: `Lenovo IdeaPad Gaming 3 
    15.6″ 120hz 
    Ryzen 5 
    8GB / 256GB 
    RTX 3050Ti`,
    category: 'gamer',
    brand: 'Lenovo',
    stock: 5,
    price: 449_890,
    priceCurrency: 'ARS',
    enabled: true,
    images: [
      '01-600x600.jpg',
      '02-600x600.jpg',
      '03-600x600.jpg',
      '04-600x600.jpg',
      '05-600x600.jpg',
      '06-600x600.jpg',
      '07-600x600.jpg'
    ],
    banner: 'banner-idepad-gaming-3-ryzen.jpg',
    description: 'La Lenovo IdeaPad Gaming 3 mejora tu juego y nivela el campo de juego. Diseñado con la última generación de procesadores AMD Ryzen 5 y gráficos NVIDIA® GeForce® RTX, memoria DDR4 y opciones de almacenamiento PCIe SSD, este portátil para juegos proyecta una confianza silenciosa y serena con visuales suaves y cristalinas y un juego sin interrupciones. La IdeaPad Gaming 3 también se mantiene fresca, con un sistema térmico de alto rendimiento rediseñado que te permite jugar sin preocupaciones. Disfruta de la nítida pantalla FHD de 1080p para jugar sin problemas, y de la rapidísima GPU NVIDIA® GeForce RTX™ 3050 Ti para potenciar los juegos más populares de hoy, incluidos los títulos modernos.',
    features: {
      cpu: {
        title: 'Procesador',
        text: `AMD Ryzen 5 5600H
            Velocidad: 3,30 GHz – 4,20 GHz
            Nucleos: 6
            Subprocesos: 12`
      },
      ram: {
        title: 'Memoria',
        text: `Capacidad: 8GB
            Tipo: DDR4
            Expandible: 64GB`
      },
      screen: {
        title: 'Pantalla',
        text: `Pulgadas: 15.6"
            Resolución: FULL HD
            Tecnología: IPS
            Hz: 120`
      },
      gpu: {
        title: 'Gráficos',
        text: `NVIDIA GeForce RTX 3050 Ti
            Memoria de Video: 4GB GDDR6`
      },
      storage: {
        title: 'Almacenamiento',
        text: `Capacidad: 256 GB
            Tipo: SSD
            Tecnología: PCIe 3.0 NVMe
            Slot M.2 Adicional`
      },
      connectivity: {
        title: 'Conectividad',
        text: `WiFi 6 ( 802.11 ax)
            Bluetooth®
            Ethernet: Si`
      },
      os: {
        title: 'Sistema Operativo',
        text: `Windows 11
            Versión: Home 64 Bits`
      },
      ports: {
        title: 'Puertos',
        text: `USB-C® 3.2 Gen 1
            2x USB 3.2 Gen 1
            HDMI 2.0
            RJ-45
            Headphone / microphone`
      },
      other: {
        title: 'Otras características',
        text: `Teclado Retroiluminado
            Webcam 720p
            Pad Numérico
            Nahimic Audio`
      },
      model: {
        title: 'Modelo',
        text: `Marca: Lenovo
            Linea: IdeaPad Gaming 3
            Modelo: 82K201XCUS`
      },
      dimensions: {
        title: 'Dimensiones y peso',
        text: `35,96 x 25,19 x 2,41 cm
            Peso: 2,25 kg
            Chasis: Plástico`
      },
      usage: {
        title: 'Uso recomendado',
        text: 'Ofimática, Multimedia, Internet, Gaming, Diseño, Programación'
      }
    }
  },
  {
    // source: https://tunotebook.com.ar/notebooks/asus-vivobook-pro-14-oled-core-i5-11300h-8gb-256gb/
    id: 'asus-vivobook-pro-14-oled-core-i5-11300h-8gb-256gb',
    name: `Asus Vivobook Pro 
    14 Oled 
    Core i5 11300H 
    8GB / 256GB`,
    category: 'notebooks',
    brand: 'Asus',
    stock: 12,
    price: 284_890,
    priceCurrency: 'ARS',
    enabled: true,
    images: [
      '01-600x600.jpg',
      '02-600x600.jpg',
      '03-600x600.jpg',
      '04-600x600.jpg',
      '05-600x600.jpg',
      '06-600x600.jpg',
      '07-600x600.jpg'
    ],
    banner: 'banner-vivobook.jpg',
    description: '',
    features: {
      cpu: {
        title: 'Procesador',
        text: `Intel® Core i5 11300H
        Velocidad: 3,10 GHz – 4,40 GHz
        Nucleos: 4
        Subprocesos: 8`
      },
      ram: {
        title: 'Memoria',
        text: `Capacidad: 8GB
        Tipo: DDR4`
      },
      screen: {
        title: 'Pantalla',
        text: `Pulgadas: 14″
        Resolución: WQXGA+ 2880×1800
        Tecnología: OLED 100% DCI-P3
        Hz: 90`
      },
      gpu: {
        title: 'Gráficos',
        text: 'Intel Iris Xe Graphics'
      },
      storage: {
        title: 'Almacenamiento',
        text: `Capacidad: 256 GB
        Tipo: SSD
        Tecnología: PCIe 3.0 nVme`
      },
      connectivity: {
        title: 'Conectividad',
        text: `WiFi 6 802.11ax
        Bluetooth 5.0
        Ethernet: No`
      },
      os: {
        title: 'Sistema Operativo',
        text: `Windows 11
            Versión: Home 64 Bits`
      },
      ports: {
        title: 'Puertos',
        text: `2x USB 2.0 Type-A
        USB 3.2 Gen 1 Type-A
        Thunderbolt™ 4 DP/PD
        HDMI
        3.5mm Combo Audio Jack`
      },
      other: {
        title: 'Otras características',
        text: `Webcam 720p
        Lector de Tarjetas
        Teclado Retroiluminado`
      },
      model: {
        title: 'Modelo',
        text: `Marca: Asus
        Linea: VivoBook 14 PRO
        Modelo: K3400PA-WH55`
      },
      dimensions: {
        title: 'Dimensiones y peso',
        text: `31.8 x 22.9 x 1.9 cm
        Peso: 1,40 kg
        Chasis: Aluminio y plástico`
      },
      usage: {
        title: 'Uso recomendado',
        text: 'Ofimática, Multimedia, Internet, Diseño, Programación, Fotografía'
      }
    }
  },
  {
    // source: https://tunotebook.com.ar/notebooks/asus-zenbook-flip-2en1-ryzen-7-5700u-8gb-256gb-geforce-mx450/
    id: 'asus-zenbook-flip-2en1-ryzen-7-5700u-8gb-256gb-geforce-mx450',
    name: `Asus ZenBook Flip 2en1 
    15.6″ 
    Ryzen 7 5700U 
    8GB / 256GB 
    GeForce MX450`,
    category: 'notebooks',
    brand: 'Asus',
    stock: 9,
    price: 389_890,
    priceCurrency: 'ARS',
    enabled: true,
    images: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg',
      '07.webp',
      '08.jpg'
    ],
    banner: 'banner-zenbook-flip.jpg',
    description: 'Da rienda suelta a tu creatividad. La serie ASUS Zenbook te da las herramientas para ser más creativo. Zenbook te permite maximizar tu potencial creativo con una combinación única de rendimiento, velocidad, elegancia y precisión. Un versátil e innovador convertible 2 en 1 con una pantalla de 360 grados que permite utilizarlo como un portátil fino y ligero, una práctica tableta o en cualquier posición intermedia.',
    features: {
      cpu: {
        title: 'Procesador',
        text: `AMD® Ryzen 7 5700U
        Velocidad: 1,80 GHz – 4,30 GHz
        Nucleos: 8
        Subprocesos: 16`
      },
      ram: {
        title: 'Memoria',
        text: `Capacidad: 8GB
        Tipo: LPDDR4X`
      },
      screen: {
        title: 'Pantalla',
        text: `Pulgadas: 15.6″
        Resolución: Full HD
        Tecnología: IPS Táctil
        Hz: 60`
      },
      gpu: {
        title: 'Gráficos',
        text: `NVIDIA® GeForce® MX450
        Memoria: 2GB GDDR6`
      },
      storage: {
        title: 'Almacenamiento',
        text: `Capacidad: 256 Gb
        Tipo: SSD
        Tecnología: PCIe 3.0 nVme`
      },
      connectivity: {
        title: 'Conectividad',
        text: `Dual-band Wi-Fi 5 (802.11ac)
        Bluetooth™ 5
        Ethernet: No`
      },
      os: {
        title: 'Sistema Operativo',
        text: `Windows 11
            Versión: Home 64 Bits`
      },
      ports: {
        title: 'Puertos',
        text: `USB-A 2.0
        USB-A 3.2 Gen 1
        USB-C 3.2 Gen 1
        HDMI 1
        Conector de Áudio Combo 3,5 mm`
      },
      other: {
        title: 'Otras características',
        text: `Sistema 2en1 
        (tablet + notebook)
        Webcam 720p
        Teclado Retroiluminado
        Lector de Tarjetas`
      },
      model: {
        title: 'Modelo',
        text: `Marca: Asus
        Linea: ZenBook Flip 15
        Modelo: Q508UG-212.R7TBL`
      },
      dimensions: {
        title: 'Dimensiones y peso',
        text: `35.78 x 23.0 x 1.99 cm
        Peso: 1,99 kg
        Chasis: Aluminio/Plástico`
      },
      usage: {
        title: 'Uso recomendado',
        text: 'Programación, edición de fotos, diseño, arquitectura, CAD, Multimedia'
      }
    }
  },
  {
    // source: https://tunotebook.com.ar/notebooks/lenovo-ideapad-3-14-ryzen-5-8gb-256-gb-ssd/
    id: 'lenovo-ideapad-3-14-ryzen-5-8gb-256-gb-ssd',
    name: `Lenovo IdeaPad 3 
    14″ 
    Ryzen 5 
    8GB / 256GB SSD`,
    category: 'notebooks',
    brand: 'Asus',
    stock: 0,
    price: 279_890,
    priceCurrency: 'ARS',
    enabled: true,
    images: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg',
      '07.jpg',
      '08.jpg'
    ],
    banner: '',
    description: '',
    features: {
      cpu: {
        title: 'Procesador',
        text: `AMD® Ryzen 5 5500U
        Velocidad: 2,10 GHz – 4,0 GHz
        Nucleos: 6
        Subprocesos: 12`
      },
      ram: {
        title: 'Memoria',
        text: `Capacidad: 8GB
        Tipo: DDR4
        Expandible: 12GB / 20GB`
      },
      screen: {
        title: 'Pantalla',
        text: `Pulgadas: 14″
        Resolución: FULL HD
        Tecnología: IPS
        Hz: 60`
      },
      gpu: {
        title: 'Gráficos',
        text: 'AMD Radeon RX Vega 7'
      },
      storage: {
        title: 'Almacenamiento',
        text: `Capacidad: 256 GB
        Tipo: SSD
        Tecnología: PCIe NVMe`
      },
      connectivity: {
        title: 'Conectividad',
        text: `WiFi: 2×2 802.11AC
        Bluetooth®
        Ethernet: No`
      },
      os: {
        title: 'Sistema Operativo',
        text: `Windows 11
            Versión: Home 64 Bits`
      },
      ports: {
        title: 'Puertos',
        text: `USB 2.0
        USB 3.2
        USB-C 3.2
        HDMI
        Headphone/Mic Jack`
      },
      other: {
        title: 'Otras características',
        text: `Webcam 720p
        Teclado Retroiluminado
        Lector tarjetas SD`
      },
      model: {
        title: 'Modelo',
        text: `Marca: Lenovo
        Linea: IdeaPad 3
        Modelo: 82KT00GVUS`
      },
      dimensions: {
        title: 'Dimensiones y peso',
        text: `32,4 x 21,5 x 1,9 cm
        Peso: 1,45 kg
        Chasis: Plástico`
      },
      usage: {
        title: 'Uso recomendado',
        text: 'Ofimática, Multimedia, Internet, edición básica'
      }
    }
  },
  {
    // source: https://tunotebook.com.ar/kindle/new-kindle-paperwhite-6-8-16gb-resistente-al-agua-11va-gen-negro/
    id: 'new-kindle-paperwhite-6-8-16gb-resistente-al-agua-11va-gen-negro',
    name: `New Kindle Paperwhite 6.8″ 16GB 
    Resistente al Agua 
    11va Gen 
    Negro`,
    category: 'gadgets',
    brand: 'Kindle',
    stock: 2,
    price: 81_890,
    priceCurrency: 'ARS',
    enabled: true,
    images: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg'
    ],
    banner: 'banner.jpg',
    description: `
    Sumérgete por completo en los libros donde y cuando quieras
El Kindle Paperwhite es fino, ligero y fácil de transportar, para que puedas disfrutar de tus libros favoritos en cualquier momento. Gracias a nuestra pantalla Paperwhite sin reflejos de 300 ppp, ahora con un 10 % más de luz con el brillo máximo, podrás leer bajo cualquier luz. Además, ahora una sola carga por USB-C dura hasta 10 semanas.
Zambúllete en la lectura
El Kindle Paperwhite es resistente al agua, por lo que podrás usarlo con tranquilidad en más lugares todavía, estés en la playa o en la bañera. Gracias a la certificación IPX8, el Kindle Paperwhite soporta una inmersión accidental en agua dulce a una profundidad de hasta 2 metros durante un máximo de 60 minutos y, en agua salada, hasta 0,25 metros un máximo de 3 minutos.
Mucho más que un libro
Ahora puedes regular el tono de la pantalla de tu Kindle Paperwhite y elegir desde una luz blanca hasta una cálida luz ámbar, o programar cuándo cambia de un tono a otro para disfrutar de una lectura personalizada. También puedes ajustar el tamaño y el grosor de la fuente según prefieras.
`
  }
]

const DELAY = 200

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, DELAY)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id))
    }, DELAY)
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === category))
    }, DELAY)
  })
}
