# 🔴 GUIDA REDUX - Come Usare lo State Globale

## 📦 Cos'è Redux?

Redux è uno **stato globale** condiviso da tutti i componenti.

**Analogia**: È come una scatola con i dati dell'utente. Tutti i componenti possono:

- **Leggere** dalla scatola (useAppSelector)
- **Modificare** la scatola (useAppDispatch)

---

## 🎯 Setup già fatto per voi

✅ Store configurato in `src/store/index.ts`  
✅ UserSlice pronto in `src/store/userSlice.ts`  
✅ Provider Redux in `src/main.tsx`

**Non dovete configurare nulla!** Basta usarlo.

---

## 📖 I 2 Hook Fondamentali

### 1️⃣ `useAppSelector` - LEGGERE i dati

```typescript
import { useAppSelector } from "../store";

function MyComponent() {
  // Leggi i dati utente dallo store
  const user = useAppSelector((state) => state.user.data);
  const loading = useAppSelector((state) => state.user.loading);
  const error = useAppSelector((state) => state.user.error);

  return <div>{user?.name}</div>;
}
```

### 2️⃣ `useAppDispatch` - MODIFICARE/CARICARE i dati

```typescript
import { useAppDispatch } from "../store";
import { fetchCurrentUser } from "../store/userSlice";

function MyComponent() {
  const dispatch = useAppDispatch();

  // Carica l'utente (fa la chiamata API automaticamente)
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return <div>Caricamento...</div>;
}
```

---

## ⚡ Esempio Completo - ProfilePage

```typescript
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchCurrentUser } from "../store/userSlice";

function ProfilePage() {
  // 1. Ottieni dispatch e state
  const dispatch = useAppDispatch();
  const { data: user, loading, error } = useAppSelector((state) => state.user);

  // 2. Carica i dati quando il componente monta
  useEffect(() => {
    dispatch(fetchCurrentUser()); // Chiama API automaticamente
  }, []);

  // 3. Gestisci loading
  if (loading) return <div>Caricamento...</div>;

  // 4. Gestisci errori
  if (error) return <div>Errore: {error}</div>;

  // 5. Gestisci nessun dato
  if (!user) return null;

  // 6. Mostra i dati
  return (
    <div>
      <h1>
        {user.name} {user.surname}
      </h1>
      <p>{user.title}</p>
    </div>
  );
}

export default ProfilePage;
```

---

## 🧩 Esempio - Navbar (legge solo i dati)

```typescript
import { useAppSelector } from "../store";

function Navbar() {
  // Legge solo - non serve dispatch
  const user = useAppSelector((state) => state.user.data);

  return (
    <nav>
      {user && (
        <>
          <img src={user.image} alt={user.name} />
          <span>{user.name}</span>
        </>
      )}
    </nav>
  );
}

export default Navbar;
```

---

## 🧩 Esempio - ProfileHeaderCard (legge solo i dati)

```typescript
import { useAppSelector } from "../store";

function ProfileHeaderCard() {
  const user = useAppSelector((state) => state.user.data);

  if (!user) return null;

  return (
    <div className="card">
      <img src={user.image} alt={user.name} />
      <h2>
        {user.name} {user.surname}
      </h2>
      <p>{user.title}</p>
      <p>{user.area}</p>
    </div>
  );
}

export default ProfileHeaderCard;
```

---

## 🧩 Esempio - ProfileAbout (legge solo i dati)

```typescript
import { useAppSelector } from "../store";

function ProfileAbout() {
  const user = useAppSelector((state) => state.user.data);

  if (!user?.bio) return null;

  return (
    <div className="card mt-3">
      <h3>Informazioni</h3>
      <p>{user.bio}</p>
    </div>
  );
}

export default ProfileAbout;
```

---

## 📝 Regole Semplici

### ✅ Quando usare `useAppSelector`

- Devi **leggere** i dati utente
- In TUTTI i componenti che mostrano dati

### ✅ Quando usare `useAppDispatch`

- Devi **caricare/aggiornare** i dati
- Di solito solo in ProfilePage o App.tsx

### ❌ Cosa NON fare

```typescript
// ❌ Non importare useSelector standard
import { useSelector } from "react-redux"; // SBAGLIATO

// ✅ Usa sempre i typed hooks
import { useAppSelector } from "../store"; // GIUSTO
```

---

## 🔄 Flusso Completo per D1

```
1. App.tsx o ProfilePage
   ↓
   dispatch(fetchCurrentUser())  → Carica utente da API
   ↓
   Store Redux salva i dati
   ↓
2. Navbar, ProfileHeaderCard, ProfileAbout
   ↓
   useAppSelector(state => state.user.data)  → Leggono i dati
```

**Risultato**:

- ✅ 1 sola chiamata API
- ✅ Tutti i componenti sincronizzati
- ✅ Nessuna duplicazione

---

## 🎯 Checklist per ogni componente

### Componente che CARICA i dati (es. ProfilePage)

```typescript
import { useAppDispatch, useAppSelector } from "../store";
import { fetchCurrentUser } from "../store/userSlice";

// Nel componente:
const dispatch = useAppDispatch();
const { data, loading, error } = useAppSelector((state) => state.user);

useEffect(() => {
  dispatch(fetchCurrentUser());
}, []);
```

### Componente che LEGGE i dati (es. Navbar, Cards)

```typescript
import { useAppSelector } from "../store";

// Nel componente:
const user = useAppSelector((state) => state.user.data);
```

---

## 💡 Domande Frequenti

**Q: Dove chiamo `fetchCurrentUser()`?**  
A: Una volta sola in ProfilePage (o App.tsx)

**Q: Gli altri componenti devono chiamarlo anche loro?**  
A: NO! Usano solo `useAppSelector` per leggere

**Q: Come fanno gli altri componenti ad avere i dati?**  
A: Redux condivide automaticamente lo stato tra tutti i componenti

**Q: Devo importare l'API?**  
A: NO! Redux chiama l'API automaticamente quando fai `dispatch(fetchCurrentUser())`

---
