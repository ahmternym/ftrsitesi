<template>
  <div class="not-found-wrapper">
    <div class="not-found-card">
      
      <div class="not-found-icon">
        <i class="bi bi-heart-pulse"></i>
        <div class="error-number">404</div>
      </div>

      <h1 class="not-found-title">Hoppala! Rotayı Kaybettik.</h1>
      <p class="not-found-text">
        Aradığınız sayfa şu an muayenede veya yerinde değil. 
        Endişelenmeyin, sağlığınız yerinde! Aşağıdaki butona basarak güvenli bölgeye dönebilirsiniz.
      </p>

      <div class="action-area">
        <router-link to="/" class="home-btn">
          <i class="bi bi-house-door-fill me-2"></i> Anasayfaya Dön
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>

.not-found-wrapper {
  background-color: #f3f4f6;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.not-found-card {
  background-color: #ffffff;
  max-width: 550px;
  width: 100%;
  padding: 50px 30px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  text-align: center;
  border-top: 8px solid #11998e;
}


.not-found-icon {
  font-size: 5rem;
  color: #11998e;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.error-number {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  padding: 5px 15px;
  border-radius: 50px;
  position: absolute;
  bottom: 0;
  right: -20px;
  box-shadow: 0 4px 10px rgba(17, 153, 142, 0.3);
}


.not-found-title {
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 1.8rem;
}

.not-found-text {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 35px;
}

.home-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 30px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(17, 153, 142, 0.2);
}

.home-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(17, 153, 142, 0.3);
  color: white;
}
</style>