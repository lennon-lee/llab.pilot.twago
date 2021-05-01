
<template>
  <div class="nav">
    <div class="nav-logo">
      <div class="nav-logo-mark">
        <fa :icon="['fas', 'dot-circle']" />
      </div>
      <div class="nav-logo-arrow">
        <fa :icon="['fas', 'angle-right']" />
      </div>
      <div class="nav-logo-text">ACME</div>
    </div>
    <div class="nav-right">
      <div class="nav-right-login">Login</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped src="@/assets/styles/Header.css">
</style>
