// Importar imágenes como módulos de Vite
import albahacaImg from '/images/plants/albahaca.png';
import romeroImg from '/images/plants/romero.png';
import mentaImg from '/images/plants/menta.png';
import tomilloImg from '/images/plants/tomillo.png';
import oreganoImg from '/images/plants/oregano.png';
import lavandaImg from '/images/plants/lavanda.png';
import manzanillaImg from '/images/plants/manzanilla.png';
import aloeVeraImg from '/images/plants/aloevera.png';
import calendulaImg from '/images/plants/calendula.png';
import eucaliptoImg from '/images/plants/eucaliptp.png';

export const plantsData = {
  aromaticas: [
    {
      id: 1,
      name: "Albahaca",
      description: "Planta aromática perfecta para cocinar, con hojas fragantes y fácil cuidado.",
      price: 8500,
      image: albahacaImg,
      category: "aromaticas"
    },
    {
      id: 2,
      name: "Romero",
      description: "Hierba aromática perenne con propiedades culinarias y medicinales.",
      price: 9500,
      image: romeroImg,
      category: "aromaticas"
    },
    {
      id: 3,
      name: "Menta",
      description: "Planta refrescante ideal para infusiones y cócteles naturales.",
      price: 7500,
      image: mentaImg,
      category: "aromaticas"
    },
    {
      id: 4,
      name: "Tomillo",
      description: "Hierba aromática con pequeñas hojas y flores, perfecta para condimentar.",
      price: 8800,
      image: tomilloImg,
      category: "aromaticas"
    }
  ],
  medicinales: [
    {
      id: 5,
      name: "Orégano",
      description: "Hierba esencial para la cocina mediterránea con intenso aroma.",
      price: 8200,
      image: oreganoImg,
      category: "medicinales"
    },
    {
      id: 6,
      name: "Lavanda",
      description: "Planta medicinal conocida por sus propiedades relajantes y aroma único.",
      price: 12500,
      image: lavandaImg,
      category: "medicinales"
    },
    {
      id: 7,
      name: "Manzanilla",
      description: "Planta medicinal tradicional, perfecta para infusiones calmantes.",
      price: 11200,
      image: manzanillaImg,
      category: "medicinales"
    },
    {
      id: 8,
      name: "Aloe Vera",
      description: "Suculenta medicinal con propiedades curativas para la piel.",
      price: 15000,
      image: aloeVeraImg,
      category: "medicinales"
    }
  ],
  decorativas: [
    {
      id: 9,
      name: "Caléndula",
      description: "Flor medicinal con propiedades antiinflamatorias y cicatrizantes.",
      price: 9800,
      image: calendulaImg,
      category: "decorativas"
    },
    {
      id: 10,
      name: "Eucalipto",
      description: "Planta medicinal con propiedades expectorantes y refrescantes.",
      price: 16500,
      image: eucaliptoImg,
      category: "decorativas"
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