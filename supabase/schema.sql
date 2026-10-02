-- Ejecuta este archivo en el editor SQL de Supabase antes de conectar la app.
create extension if not exists postgis schema extensions;

create table public.trips (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  country_code text not null,
  starts_on date,
  ends_on date,
  created_at timestamptz not null default now()
);

create table public.routes (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid not null references public.trips(id) on delete cascade,
  title text not null,
  path extensions.geography(linestring, 4326),
  distance_m integer,
  duration_minutes integer,
  created_at timestamptz not null default now()
);

create table public.places (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid not null references public.trips(id) on delete cascade,
  name text not null,
  location extensions.geography(point, 4326) not null,
  category text,
  notes text,
  created_at timestamptz not null default now()
);

create index places_location_idx on public.places using gist (location);
create index routes_path_idx on public.routes using gist (path);

alter table public.trips enable row level security;
alter table public.routes enable row level security;
alter table public.places enable row level security;

create policy "Owners manage their trips" on public.trips for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "Owners manage routes in their trips" on public.routes for all using (exists (select 1 from public.trips where id = trip_id and owner_id = auth.uid())) with check (exists (select 1 from public.trips where id = trip_id and owner_id = auth.uid()));
create policy "Owners manage places in their trips" on public.places for all using (exists (select 1 from public.trips where id = trip_id and owner_id = auth.uid())) with check (exists (select 1 from public.trips where id = trip_id and owner_id = auth.uid()));
