// API Configuration
export const API_BASE_URL = "https://striveschool-api.herokuapp.com/api";

// Bearer Tokens per persona
export const BEARER_TOKENS = {
  tanjin:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmViY2QzMjJmNTAwMTUxMDc2YzMiLCJpYXQiOjE3NjUyNzczNzIsImV4cCI6MTc2NjQ4Njk3Mn0.gkf18HzzZFjL0SQzSD6XG_AaguEkMiSNED1EjIHACMs",
  fabio: "", // TODO: Aggiungere token di Fabio
  andrea: "", // TODO: Aggiungere token
  matteo: "", // TODO: Aggiungere token
  rossella: "", // TODO: Aggiungere token
};

// Token attivo (cambiare in base a chi sta lavorando)
export const ACTIVE_TOKEN = BEARER_TOKENS.tanjin;
