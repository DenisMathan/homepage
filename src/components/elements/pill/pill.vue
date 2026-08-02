<template>
    <div class="pill">{{ name }}</div>
</template>

<script>
export default {
  name: 'Pill',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  min-width: 6rem;
  flex-shrink: 0;
  height: 1.5rem;
  padding: 0.1rem 0.2rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 255, 188, 0.35);
  background: rgba(0, 255, 188, 0.08);
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
}

.pill:hover {
  transform: translateY(-1px);
  background: rgba(0, 255, 188, 0.16);
}

.pill-ghost {
  background: transparent;
}
</style>

