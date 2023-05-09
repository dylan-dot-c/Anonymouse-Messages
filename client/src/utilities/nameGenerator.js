const sophisticatedAdjectives = [
    "Elegant",
    "Sophisticated",
    "Refined",
    "Distinguished",
    "Cultured",
    "Polished",
    "Urbane",
    "Graceful",
    "Chic",
    "Stylish",
    "Smart",
    "Suave",
    "Worldly",
    "Cosmopolitan",
    "Exquisite",
    "Opulent",
    "Luxurious",
    "Sumptuous",
    "Lavish",
    "Ornate",
    "Baroque",
    "Grandiose",
    "Majestic",
    "Regal",
    "Imperial"
  ];
  
  const animalNames = [
    "Lion",
    "Tiger",
    "Panther",
    "Leopard",
    "Jaguar",
    "Lynx",
    "Ocelot",
    "Cougar",
    "Cheetah",
    "Bobcat",
    "Fox",
    "Wolf",
    "Coyote",
    "Hyena",
    "Bear",
    "Badger",
    "Raccoon",
    "Otter",
    "Weasel",
    "Skunk",
    "Marten",
    "Ferret",
    "Sable",
    "Wolverine",
    "Platypus"
  ];
  
export default function generateRandomNickname() {
  const randomAdjectiveIndex = Math.floor(Math.random() * sophisticatedAdjectives.length);
  const randomAnimalIndex = Math.floor(Math.random() * animalNames.length);
  const nickname = `${sophisticatedAdjectives[randomAdjectiveIndex]} ${animalNames[randomAnimalIndex]}`;
  return nickname;
}