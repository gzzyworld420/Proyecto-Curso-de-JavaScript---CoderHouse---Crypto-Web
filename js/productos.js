const products = [
  // Ape
  {id: 1, title: 'ApeXplorer',image:'/img/navBarImg.png', price: 500,category: 'Ape', imgBanner: '/img/navBarImg.png',description: 'Un mono explorador curioso en la selva. El primero de la colección de monos exploradores.'},
  {id: 2, title: 'CosmicApe',image:'/img/ape-2.png', price: 800,category: 'Ape',description: 'Un mono que ha viajado más allá de las estrellas. Perfecto para tu colección galáctica.'},
  {id: 3, title: 'JungleApe',image:'/img/ape-3.png', price: 630,category: 'Ape',description: 'Un mono en la jungla profunda, lleno de aventuras salvajes'},
  {id: 4, title: 'UrbanApe',image:'/img/ape-4.avif', price: 1360,category: 'Ape',description: 'Un mono urbano adaptado a la vida en la ciudad. Modernidad y aventura combinadas.'},
  {id: 5, title: 'CyberApe',image:'/img/ape-4.jpeg', price: 1420,category: 'Ape',description: 'Un mono con implantes cibernéticos. Futurismo y naturaleza en uno.'},
  // Metaverse
  {id: 6, title: 'MetaMonarch',image:'/img/metaverseKing-1.avif', price: 320,category: 'Metaverse', description: 'El rey del metaverso, poderoso y sabio. Una pieza esencial para tu colección digital.'},
  {id: 7, title: 'VirtualSovereign',image:'/img/metaverseKing-2.avif', price: 150,category: 'Metaverse', description: 'Un soberano virtual que gobierna con justicia en el metaverso.'},
  {id: 8, title: 'KingdomMeta',image:'/img/metaverseKing-3.jpeg', price: 3400,category: 'Metaverse', description: 'Un rey cuyo reino abarca el metaverso. Poder y misterio en una pieza.'},
  {id: 9, title: 'RulerOfRealms',image:'/img/metaverseKing-4.jpeg', price: 2200,category: 'Metaverse', description: 'Un gobernante de múltiples reinos digitales. Visión y liderazgo en el metaverso.'},
  {id: 10, title: 'MetaMajesty',image:'/img/metaverseKing-5.webp', price: 950,category: 'Metaverse', description: 'Majestad del metaverso, imponente y sabia. Añade nobleza a tu colección.'},
  // Godness
  {id: 11, title: 'DivineEssence',image:'/img/godness-1.png', price: 560,category: 'Godness', description: 'Una diosa poderosa y sabia. La primera de su colección divina.'},
  {id: 12, title: 'EtherealDeity',image:'/img/godness-2.jpeg', price: 90,category: 'Godness', description: 'Una deidad etérea, llena de gracia y magia celestial.'},
  {id: 13, title: 'SacredSeraph',image:'/img/godness-3.jpeg', price: 4200,category: 'Godness', description: 'Un serafín sagrado, una diosa celestial de increíble poder.'},
  {id: 14, title: 'CelestialGoddess',image:'/img/godness-4.jpeg', price: 5500,category: 'Godness', description: 'Una diosa brillante y majestuosa. Poder divino para tu colección.'},
  {id: 15, title: 'MythicDivinity',image:'/img/godness-5.webp', price: 180,category: 'Godness', description: 'Una divinidad mítica, envuelta en leyendas y misterios.'},
  // Mocaverse
  {id: 16, title: 'MocaVoyager',image:'/img/mocaverse-1.png', price: 920,category: 'Mocaverse', description: 'Un intrépido viajero del mocaverso. Aventurero y curioso.'},
  {id: 17, title: 'CosmoMoca',image:'/img/mocaverse-2.png', price: 710,category: 'Mocaverse', description: 'Un viajero del mocaverso explorando el cosmos. Aventuras estelares.'},
  {id: 18, title: 'MocaRealm',image:'/img/mocaverse-3.webp', price: 4530,category: 'Mocaverse', description: 'Un viajero explorando los reinos del mocaverso. Espíritu aventurero.'},
  {id: 19, title: 'StellarMoca',image:'/img/mocaverse-4.webp', price: 1820,category: 'Mocaverse', description: 'Un viajero del mocaverso en una misión estelar. Añade aventura cósmica.'},
  {id: 20, title: 'MocaOdyssey',image:'/img/mocaverse-5.avif', price: 490,category: 'Mocaverse', description: 'La odisea de un viajero del mocaverso. Exploración y aventura digital.'},
];