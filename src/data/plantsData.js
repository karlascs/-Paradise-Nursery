export const plantsData = {
  aromaticas: [
    {
      id: 1,
      name: "Albahaca",
      description: "Planta aromática perfecta para cocinar, con hojas fragantes y fácil cuidado.",
      price: 15.99,
      image: "/images/plants/albahaca.png",
      category: "aromaticas"
    },
    {
      id: 2,
      name: "Romero",
      description: "Hierba aromática perenne con propiedades culinarias y medicinales.",
      price: 18.50,
      image: "/images/plants/romero.png",
      category: "aromaticas"
    },
    {
      id: 3,
      name: "Menta",
      description: "Planta refrescante ideal para infusiones y cócteles naturales.",
      price: 12.75,
      image: "/images/plants/menta.png",
      category: "aromaticas"
    },
    {
      id: 4,
      name: "Tomillo",
      description: "Hierba aromática con pequeñas hojas y flores, perfecta para condimentar.",
      price: 16.25,
      image: "/images/plants/tomillo.png",
      category: "aromaticas"
    },
    {
      id: 5,
      name: "Orégano",
      description: "Hierba esencial para la cocina mediterránea con intenso aroma.",
      price: 14.99,
      image: "/images/plants/oregano.png",
      category: "aromaticas"
    }
  ],
  medicinales: [
    {
      id: 6,
      name: "Lavanda",
      description: "Planta medicinal conocida por sus propiedades relajantes y aroma único.",
      price: 22.50,
      image: "/images/plants/lavanda.png",
      category: "medicinales"
    },
    {
      id: 7,
      name: "Manzanilla",
      description: "Planta medicinal tradicional, perfecta para infusiones calmantes.",
      price: 19.99,
      image: "/images/plants/manzanilla.png",
      category: "medicinales"
    },
    {
      id: 8,
      name: "Aloe Vera",
      description: "Suculenta medicinal con propiedades curativas para la piel.",
      price: 25.00,
      image: "/images/plants/aloevera.png",
      category: "medicinales"
    },
    {
      id: 9,
      name: "Caléndula",
      description: "Flor medicinal con propiedades antiinflamatorias y cicatrizantes.",
      price: 17.75,
      image: "/images/plants/calendula.png",
      category: "medicinales"
    },
    {
      id: 10,
      name: "Eucalipto",
      description: "Planta medicinal con propiedades expectorantes y refrescantes.",
      price: 28.90,
      image: "/images/plants/eucaliptp.png",
      category: "medicinales"
    }
  ]
};

export const getAllPlants = () => {
  return [...plantsData.aromaticas, ...plantsData.medicinales];
};

export const getPlantById = (id) => {
  const allPlants = getAllPlants();
  return allPlants.find(plant => plant.id === parseInt(id));
};

export const getPlantsByCategory = (category) => {
  return plantsData[category] || [];
};