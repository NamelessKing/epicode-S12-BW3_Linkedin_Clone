# 🎯 COME AGGIUNGERE NUOVE FEATURE - Tutorial Passo-Passo

Segui questi step MENTRE crei i file. Esempio: aggiungeremo **POSTS** per D2.

Lo stesso processo vale per Esperienze, Commenti, ecc. (cambia solo il nome!)

---

## 📋 Panoramica: 3 Passaggi

```
STEP 1: Creare il Tipo (post.ts)
   ↓
STEP 2: Creare lo Slice (postsSlice.ts)
   ↓
STEP 3: Aggiornare Store + API
   ↓
FINITO! Usa nei componenti
```

---

# ⚙️ STEP 1: Crea il Tipo TypeScript

**Azione:** Crea nuovo file `src/types/post.ts`

**Copia esattamente questo:**

```typescript
export interface Post {
  _id: string;
  userId: string;
  content: string;
  image?: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
```

**Fatto!** ✅ Il tipo è creato. Ora Redux sa come è strutturato un Post.

---

# 🏪 STEP 2: Crea lo Slice Redux

**Azione:** Crea nuovo file `src/store/postsSlice.ts`

**Copia esattamente questo:**

```typescript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Post } from "../types/post";
import { fetchAllPosts } from "../api/profileApi";

// ===== STATE =====
interface PostsState {
  data: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
};

// ===== THUNK ASYNC =====
export const fetchPosts = createAsyncThunk("posts/fetchAll", async () => {
  const response = await fetchAllPosts();
  return response;
});

// ===== SLICE =====
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });
  },
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
```

**Fatto!** ✅ Lo slice è creato. Redux sa come gestire i post.

---

# 🔧 STEP 3A: Registra lo Slice nello Store

**File:** `src/store/index.ts`

**Trova questa parte:**

```typescript
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
```

**Modifica così:**

```typescript
import userReducer from "./userSlice";
import postsReducer from "./postsSlice"; // ← AGGIUNGI QUESTA LINEA

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer, // ← AGGIUNGI QUESTA LINEA
  },
});
```

**Fatto!** ✅ Lo store sa che esiste `state.posts`.

---

# 📡 STEP 3B: Aggiungi le Funzioni API

**File:** `src/api/profileApi.ts`

**Aggiungi in fondo al file:**

```typescript
import type { Post } from "../types/post";

/**
 * Recupera tutti i post
 * Endpoint: GET /posts
 */
export const fetchAllPosts = async (): Promise<Post[]> => {
  return httpClient("/posts");
};

/**
 * Crea un nuovo post
 * Endpoint: POST /posts
 */
export const createPost = async (content: string): Promise<Post> => {
  return httpClient("/posts", "POST", { content });
};

/**
 * Elimina un post
 * Endpoint: DELETE /posts/:postId
 */
export const deletePost = async (postId: string): Promise<void> => {
  return httpClient(`/posts/${postId}`, "DELETE");
};
```

**Fatto!** ✅ Le funzioni API sono pronte.

---

# 🎨 STEP 4: Usa nei Componenti

**Ora puoi usarlo ovunque:**

```typescript
// components/Posts.tsx
import { useAppDispatch, useAppSelector } from "../store";
import { fetchPosts } from "../store/postsSlice";

function PostsList() {
  const dispatch = useAppDispatch();
  const {
    data: posts,
    loading,
    error,
  } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts()); // ← Carica i post
  }, []);

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>Errore: {error}</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <p>{post.content}</p>
          <p>{post.likes} likes</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
```

**Fatto!** ✅ I post si caricano automaticamente.

---

# 🔄 Per D3-D4: Ripeti lo Stesso Processo

## D3 - Experiences

Sostituisci `Post` con `Experience` e ripeti:

1. Crea `src/types/experience.ts`
2. Crea `src/store/experiencesSlice.ts`
3. Registra in `store/index.ts`
4. Aggiungi API in `profileApi.ts`

```typescript
// src/types/experience.ts
export interface Experience {
  _id: string;
  userId: string;
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
```

## D4 - Comments

Stessa cosa con `Comment`:

```typescript
// src/types/comment.ts
export interface Comment {
  _id: string;
  postId: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
```

---

# ✅ Checklist Finale

Per ogni feature (Posts, Experiences, Comments):

- [ ] Creare `src/types/nomeType.ts`
- [ ] Creare `src/store/nomeSlice.ts` (copia il pattern di postsSlice)
- [ ] Aggiungere import in `store/index.ts`
- [ ] Aggiungere reducer in `configureStore`
- [ ] Aggiungere funzioni API in `profileApi.ts`
- [ ] Testare nel componente con `useAppDispatch` e `useAppSelector`

---

# 🐛 Errori Comuni

## ❌ "state.posts is undefined"

**Causa:** Non hai registrato il reducer in `store/index.ts`

**Fix:**

```typescript
configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer, // ← AGGIUNGI!
  },
});
```

## ❌ "fetchAllPosts is not defined"

**Causa:** Non hai aggiunto la funzione in `profileApi.ts`

**Fix:** Aggiungi:

```typescript
export const fetchAllPosts = async (): Promise<Post[]> => {
  return httpClient("/posts");
};
```

## ❌ "Cannot find module '../types/post'"

**Causa:** Non hai creato il file `src/types/post.ts`

**Fix:** Crealo con l'interfaccia Post

---

# 🎯 Riassunto: Pattern Universale

Ogni feature segue questo schema:

```
Crea tipo     → Crea slice    → Registra    → Usa
(type)        (logic)         (store)       (component)
    ↓             ↓                ↓            ↓
post.ts  →  postsSlice.ts   → index.ts   → PostsList.tsx
```

**Lo stesso per tutto!** Posts, Experiences, Comments... stesso pattern, nomi diversi.

---
