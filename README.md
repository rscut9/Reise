# Reise

Aplicación de rutas construida con Next.js, TypeScript, MapLibre y preparada para Supabase/PostGIS.

## Arranque

1. Copia `.env.local.example` como `.env.local`.
2. Añade una clave pública de MapTiler en `NEXT_PUBLIC_MAPTILER_KEY`. Restringe su uso a tu dominio desde MapTiler.
3. Crea un proyecto de Supabase, pega su URL y su clave pública en `.env.local`.
4. Ejecuta el contenido de `supabase/schema.sql` en el editor SQL de Supabase.
5. Instala dependencias con `pnpm install` y ejecuta `pnpm dev`.

Sin clave de MapTiler, la aplicación muestra un mapa de demostración de MapLibre para que la interfaz siga siendo visible. Para producción usa siempre tu propia clave de MapTiler.

Las fronteras detalladas de los países proceden de geoBoundaries (CC BY 4.0).
