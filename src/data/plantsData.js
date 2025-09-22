export const plantsData = {
  aromaticas: [
    {
      id: 1,
      name: "Albahaca",
      description: "Planta aromática perfecta para cocinar, con hojas fragantes y fácil cuidado.",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=300&fit=crop",
      category: "aromaticas"
    },
    {
      id: 2,
      name: "Romero",
      description: "Hierba aromática perenne con propiedades culinarias y medicinales.",
      price: 18.50,
      image: "https://images.unsplash.com/photo-1635776062043-223faf322554?w=300&h=300&fit=crop",
      category: "aromaticas"
    },
    {
      id: 3,
      name: "Menta",
      description: "Planta refrescante ideal para infusiones y cócteles naturales.",
      price: 12.75,
      image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300&h=300&fit=crop",
      category: "aromaticas"
    },
    {
      id: 4,
      name: "Tomillo",
      description: "Hierba aromática con pequeñas hojas y flores, perfecta para condimentar.",
      price: 16.25,
      image: "https://images.unsplash.com/photo-1593714388091-8f3fa55c3e4c?w=300&h=300&fit=crop",
      category: "aromaticas"
    },
    {
      id: 5,
      name: "Orégano",
      description: "Hierba esencial para la cocina mediterránea con intenso aroma.",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1594376047017-c7dbb64651af?w=300&h=300&fit=crop",
      category: "aromaticas"
    }
  ],
  medicinales: [
    {
      id: 6,
      name: "Lavanda",
      description: "Planta medicinal conocida por sus propiedades relajantes y aroma único.",
      price: 22.50,
      image: "https://images.unsplash.com/photo-1595147389795-37094173bfd8?w=300&h=300&fit=crop",
      category: "medicinales"
    },
    {
      id: 7,
      name: "Manzanilla",
      description: "Planta medicinal tradicional, perfecta para infusiones calmantes.",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1609901039458-df4e0825616c?w=300&h=300&fit=crop",
      category: "medicinales"
    },
    {
      id: 8,
      name: "Aloe Vera",
      description: "Suculenta medicinal con propiedades curativas para la piel.",
      price: 25.00,
      image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=300&h=300&fit=crop",
      category: "medicinales"
    },
    {
      id: 9,
      name: "Caléndula",
      description: "Flor medicinal con propiedades antiinflamatorias y cicatrizantes.",
      price: 17.75,
      image: "https://images.unsplash.com/photo-1597848212624-e6ec2d73d0dc?w=300&h=300&fit=crop",
      category: "medicinales"
    },
    {
      id: 10,
      name: "Eucalipto",
      description: "Planta medicinal con propiedades expectorantes y refrescantes.",
      price: 28.90,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
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