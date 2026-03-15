<template>
  <div class="page-wrapper">
    <div v-if="!sick" class="loading-box">
      <div class="spinner-medical"></div>
      <p>Hastalık detayları hazırlanıyor...</p>
    </div>

    <div v-else class="sick-detail-card">
      
      <div class="image-header-container">
        <img :src="sick.image" :alt="sick.title" class="sick-illustration">
        <div class="target-badge">{{ sick.target }}</div>
      </div>
      
      <div class="card-body-content">
        <h1 class="disease-title">{{ sick.title }}</h1>
        <div class="brand-line"></div>
        
        <div class="info-layout">
          <div class="info-main">
            <section class="info-block">
              <h3><i class="bi bi-info-circle-fill"></i> Rahatsızlık Nedir?</h3>
              <p>{{ sick.description }}</p>
            </section>

            <section class="info-block">
              <h3><i class="bi bi-search"></i> Nedenleri Nelerdir?</h3>
              <p>{{ sick.causes }}</p>
            </section>
          </div>

          <div class="info-sidebar">
            <section class="info-block symptom-card">
              <h3><i class="bi bi-exclamation-triangle-fill"></i> Belirtiler</h3>
              <p>{{ sick.symptoms }}</p>
            </section>
          </div>
        </div>

        <section class="treatment-highlight">
          <h3><i class="bi bi-heart-pulse-fill"></i> Fizyoterapi ve İyileşme Süreci</h3>
          <p>{{ sick.treatment }}</p>
        </section>

        <div class="page-actions">
          <router-link to="/patient" class="btn-return">
            <span>←</span> Listeye Geri Dön
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      sick: null
    }
  },
  mounted() {
    fetch("https://69aeee46c8b37f499836fb56.mockapi.io/api/v1/data/1")
  .then(res => {
    if (!res.ok) {
      throw new Error("Sunucu hatası");
    }
    return res.json();
  })
  .then(data => {
    const allContent = data.content;
    const foundSick = allContent.find(item => item.id == this.id);

    if (foundSick) {
      this.sick = foundSick;
    } else {
      this.$router.push({ name: 'notfound' });
    }
  })
  .catch(err => {
    console.error("Veri yüklenemedi:", err);
    this.$router.push({ name: 'notfound' });
  });
  }
}
</script>

<style scoped>
.page-wrapper {
  background-color: #f3f4f6;
  min-height: 100vh;
  height: auto;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  overflow-y: visible;
}

.sick-detail-card {
  background: #ffffff;
  width: 100%;
  max-width: 900px;
  border-radius: 25px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  height: fit-content;
  margin-bottom: 40px;
}

.image-header-container {
  position: relative;
  height: 420px;
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #edf2f7;
}

.sick-illustration {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 30px;
}

.target-badge {
  position: absolute;
  top: 25px;
  right: 25px;
  background: #0ea5e9;
  color: white;
  padding: 8px 18px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-body-content {
  padding: 50px;
}

.disease-title {
  font-size: 2.5rem;
  color: #0f172a;
  font-weight: 800;
  margin-bottom: 15px;
}

.brand-line {
  width: 70px;
  height: 6px;
  background: #0ea5e9;
  border-radius: 10px;
  margin-bottom: 40px;
}

.info-layout {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.info-block h3 {
  font-size: 1.3rem;
  color: #1e293b;
  margin-bottom: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
}

.info-block p {
  line-height: 1.8;
  color: #475569;
  font-size: 1.05rem;
}

.symptom-card {
  background: #fffaf5;
  padding: 25px;
  border-radius: 20px;
  border: 1px solid #ffedd5;
}

.treatment-highlight {
  background: #f0f9ff;
  padding: 35px;
  border-radius: 20px;
  border: 1px solid #e0f2fe;
}

.page-actions {
  margin-top: 20px;
}

.btn-return {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #64748b;
  font-weight: 600;
  transition: color 0.2s;
}

.btn-return:hover {
  color: #0ea5e9;
}

.loading-box { text-align: center; padding-top: 150px; width: 100%; }
.spinner-medical {
  border: 4px solid #e2e8f0;
  border-top: 4px solid #0ea5e9;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

/* --- MOBİL UYUM (RESPONSIVE) --- */
@media (max-width: 768px) {
  .page-wrapper {
    padding: 20px 10px;
  }
  
  .image-header-container {
    height: 250px;
  }
  
  .sick-illustration {
    padding: 15px;
  }

  .target-badge {
    top: 15px;
    right: 15px;
    font-size: 0.65rem;
    padding: 6px 14px;
  }

  .card-body-content {
    padding: 25px 20px;
  }
  
  .disease-title {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .brand-line {
    margin-bottom: 25px;
  }
  
  .info-layout {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 25px;
  }
  
  .info-block p {
    font-size: 0.95rem;
  }

  .symptom-card,
  .treatment-highlight {
    padding: 20px;
  }

  .loading-box {
    padding-top: 100px;
  }
}
</style>