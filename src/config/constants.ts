// API Configuration
export const API_BASE_URL = "https://striveschool-api.herokuapp.com/api";

// Bearer Tokens per persona
export const BEARER_TOKENS = {
  tanjin:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmViY2QzMjJmNTAwMTUxMDc2YzMiLCJpYXQiOjE3NjUyNzczNzIsImV4cCI6MTc2NjQ4Njk3Mn0.gkf18HzzZFjL0SQzSD6XG_AaguEkMiSNED1EjIHACMs",
  fabio: 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZTA5NWQzMjJmNTAwMTUxMDc2YjAiLCJpYXQiOjE3NjUyNjk2NTMsImV4cCI6MTc2NjQ3OTI1M30.UCscNj48J2uy4TsKqAh3HGMkEJxhrjsD4HvNdxlMixc", // TODO: Aggiungere token di Fabio
  andrea: 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZWM3NGQzMjJmNTAwMTUxMDc2YmMiLCJpYXQiOjE3NjUyNzI2OTIsImV4cCI6MTc2NjQ4MjI5Mn0.0_k1YbD5s15uwfyQ1EaaUbasP1U7DX4-t5pF5m5F3Fw'", // TODO: Aggiungere token
  matteo: 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZWMyYWQzMjJmNTAwMTUxMDc2YmIiLCJpYXQiOjE3NjUyNzI2MTgsImV4cCI6MTc2NjQ4MjIxOH0.PYrrt_AhpVChXPflvWJzUhMvSLklQR8oSb_kk6YhJiA", // TODO: Aggiungere token
  rossella:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZWM5MmQzMjJmNTAwMTUxMDc2YmQiLCJpYXQiOjE3NjUyNzI3MjIsImV4cCI6MTc2NjQ4MjMyMn0.vWHAJjdzIEvGFOp9KjcsS8-4bHPGkypGSgr1k5NYWfA", // TODO: Aggiungere token
};

// Token attivo (cambiare in base a chi sta lavorando)
export const ACTIVE_TOKEN = BEARER_TOKENS.tanjin;
