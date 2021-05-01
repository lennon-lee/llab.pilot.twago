<template>
  <div class="footer">
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
        <div class="nav-right-group">
          <div class="nav-right-group-title">Product</div>
          <div class="nav-right-group-link">Enterprise</div>
          <div class="nav-right-group-link">Security</div>
          <div class="nav-right-group-link">Pricing</div>
          <div class="nav-right-group-link">Demo</div>
        </div>
        <div class="nav-right-group">
          <div class="nav-right-group-title">Company</div>
          <div class="nav-right-group-link">About us</div>
          <div class="nav-right-group-link">Blog</div>
          <div class="nav-right-group-link">News</div>
          <div class="nav-right-group-link">Careers</div>
        </div>
        <div class="nav-right-group">
          <div class="nav-right-group-title">Resources</div>
          <div class="nav-right-group-link">Help Center</div>
          <div class="nav-right-group-link">API</div>
        </div>        
      </div>
    </div> 

    <div class="bottom">
      <div class="company">
        <div class="company-about">Status</div>
        <div class="company-about">Privacy & Terms</div>
        <div class="company-about">Contact us</div>
      </div>
      <div class="sns-icon">
        <div class="sns-icon-link">
          <fa :icon="['fab', 'facebook-square']" />
        </div>
        <div class="sns-icon-link">
          <fa :icon="['fab', 'linkedin']" />
        </div>
        <div class="sns-icon-link">
          <fa :icon="['fab', 'twitter']" />
        </div>
        <div class="sns-icon-link">
          <fa :icon="['fab', 'youtube']" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped src="@/assets/styles/Footer.css">
</style>
