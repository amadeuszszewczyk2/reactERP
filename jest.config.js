// Plik: jest.config.js
module.exports = {
  testEnvironment: "jsdom", // Środowisko testowe dla przeglądarki
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // Obsługa importu styli
  },
};
