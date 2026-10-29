// Recommendations shown in the "Recomendaciones" section.
//
// Only add an entry after the person has explicitly agreed to publish
// their name, text and (optionally) photo.
//
// Shape of each entry:
// {
//   name: "Nombre Apellido",
//   role: "Puesto de la persona",                // e.g. "Líder de Governance"
//   company: "Empresa donde trabajamos juntos",  // e.g. "Santander Tecnología"
//   text: "Texto de la recomendación (entre 150 y 450 caracteres, 2 a 5 renglones).",
//   photo: "/assets/recomendaciones/nombre-apellido.webp", // optional (square, ~400x400 webp)
//   linkedin: "https://www.linkedin.com/in/...",            // optional
// }
//
// Add the photo files under public/assets/recomendaciones/.
const recommendations = [];

// The carousel is designed for up to this many entries.
export const MAX_RECOMMENDATIONS = 12;

// Generic examples (Lorem ipsum, 200-450 characters like a real one) shown ONLY while `recommendations` is empty, so visitors
// (and the people asked to recommend) see what the cards will look like.
// As soon as there is one real recommendation, these disappear.
export const EXAMPLE_RECOMMENDATIONS = [
  { name: "Juan Pérez", role: "Líder de proyecto", company: "Empresa X", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in." },
  { name: "María Gómez", role: "Analista Sr.", company: "Empresa Y", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non." },
  { name: "Carlos López", role: "Desarrollador", company: "Empresa Z", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est." },
  { name: "Ana Martínez", role: "Líder técnico", company: "Empresa X", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut." },
  { name: "Pedro Sánchez", role: "Analista funcional", company: "Empresa Y", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat." },
  { name: "Laura Díaz", role: "Project manager", company: "Empresa Z", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt." },
  { name: "Diego Romero", role: "Arquitecto", company: "Empresa X", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint." },
  { name: "Sofía Torres", role: "QA", company: "Empresa Y", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis." },
  { name: "Martín Ruiz", role: "Gerente de área", company: "Empresa Z", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est." },
];

export default recommendations;
