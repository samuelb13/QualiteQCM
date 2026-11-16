# Révisions Qualité
Site statique (HTML/CSS/JS, aucune installation). La progression est enregistrée dans le navigateur (localStorage).

## Publier sur GitHub Pages
1. Crée un compte sur github.com, puis **New repository** (nom : `revisions-qualite`, public) et **Create**.
2. Clique **uploading an existing file**, glisse-y les 5 fichiers (`index.html`, `style.css`, `app.js`, `data.js`, `exercises.js`) puis **Commit changes**.
3. **Settings → Pages → Source : Deploy from a branch → `main` / `(root)` → Save**.
4. Après ~1 minute : `https://TON-PSEUDO.github.io/revisions-qualite/`.

## Ajouter ou corriger des questions
Dans `data.js`, chaque question est `["énoncé","BONNE réponse","faux 1","faux 2","faux 3","explication"]`. La bonne réponse est toujours en 2e position, le site mélange l’ordre. Modifie le fichier sur GitHub (icône crayon) et commit.
