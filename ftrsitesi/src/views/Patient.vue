<template>
  <div class="d-flex">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white position-fixed sidebar shadow">
      <div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none p-2">
        <i class="bi bi-heart-pulse-fill me-2 fs-3"></i>
        <span class="fs-4 fw-bold">Şifa Rehberi</span>
      </div>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto custom-nav">
        <li class="nav-item mb-4">
          <router-link to="/" class="nav-link back-btn fw-bold">
            <i class="bi bi-arrow-left-circle me-2"></i>Anasayfaya Dön
          </router-link> 
        </li>
        <li v-for="sick in content" :key="sick.id" class="mb-1">
          <router-link :to="{name:'patientdetail', params:{id:sick.id}}" class="nav-link text-white sidebar-link">
             {{ sick.title }} 
          </router-link>
        </li>
      </ul>
      <div class="sidebar-footer">
        <small class="opacity-75">Fizyoterapist Eşliğinde İyileşme</small>
      </div>
    </div>

    <div class="flex-grow-1 main-content">
      <div class="welcome-section text-center p-5 mb-4 rounded-4 shadow-sm bg-white border">
        <h1 class="display-5 fw-bold text-primary mb-3">Hoş Geldiniz! ✨</h1>
        <p class="lead text-secondary mx-auto" style="max-width: 700px;">
          Burada bulacağın her bilgi, senin daha hareketli ve ağrısız bir hayata adım atman için hazırlandı. 
          Unutma, iyileşme bir süreçtir ve her küçük adım büyük bir zaferin başlangıcıdır.
        </p>
        <div class="mt-4">
          <span class="badge rounded-pill bg-light text-primary border px-3 py-2 me-2">#HareketHayattır</span>
          <span class="badge rounded-pill bg-light text-primary border px-3 py-2 me-2">#Fizyoterapi</span>
          <span class="badge rounded-pill bg-light text-primary border px-3 py-2">#GüçSende</span>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-7">
          <div class="card h-100 border-0 shadow-sm motivation-card">
            <div class="card-body p-4 d-flex align-items-center">
              <div class="me-4 display-4 text-warning">
                <i class="bi bi-lightning-charge-fill"></i>
              </div>
              <div>
                <h4 class="fw-bold">Günün Motivasyonu</h4>
                <p class="text-muted mb-0 italic">"Vücudun senin tek evindir, ona iyi bak. Egzersiz yapmak ona teşekkür etmektir."</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="card h-100 border-0 shadow-sm tip-card text-white">
            <div class="card-body p-4">
              <h5 class="fw-bold"><i class="bi bi-lightbulb me-2"></i>Küçük Bir İpucu</h5>
              <p class="mb-0 small">Gün içinde oturduğun her 30 dakikada bir 2 dakika ayağa kalkıp omuzlarını geriye doğru yuvarlamayı dene!</p>
            </div>
          </div>
        </div>
      </div>

      <div class="info-area mt-4 p-4 rounded-4 bg-white border shadow-sm">
        <h3 class="fw-bold mb-4 text-dark text-center">Nereden Başlamalıyım?</h3>
        <div class="row text-center">
          <div class="col-md-4">
            <div class="p-3">
              <div class="icon-circle mb-3 mx-auto bg-primary-subtle text-primary">1</div>
              <h6>Rahatsızlığını Tanı</h6>
              <p class="small text-muted">Sol menüden sana uygun olan başlığı seçerek süreci anla.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3">
              <div class="icon-circle mb-3 mx-auto bg-success-subtle text-success">2</div>
              <h6>Belirtileri Kontrol Et</h6>
              <p class="small text-muted">Vücudunun sana verdiği sinyalleri detaylıca incele.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3">
              <div class="icon-circle mb-3 mx-auto bg-info-subtle text-info">3</div>
              <h6>Uzmanına Danış</h6>
              <p class="small text-muted">Egzersizlere başlamadan önce fizyoterapistinle görüş.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-5 text-center opacity-50">
        <p class="small">Seçtiğin rahatsızlığın detayları burada görünecek.</p>
        <i class="bi bi-chevron-double-down display-6"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: []
    }
  },
 mounted() {
  
  fetch("https://69aeee46c8b37f499836fb56.mockapi.io/api/v1/data/1")
    .then(res => res.json())
    .then(data => {
      
      this.content = data.content;
    })
    .catch(err => console.log("Hata oluştu:", err)); 
}
}
</script>

<style scoped>

.sidebar {
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, #2c3e50 0%, #3a7bd5 100%);
  border-right: 1px solid rgba(255,255,255,0.1);
  z-index: 1000;
}

.sidebar-link {
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 0.95rem;
}

.sidebar-link:hover {
  background: rgba(255, 255, 255, 0.1);
  padding-left: 20px;
}

.back-btn {
  background-color: #00d2ff;
  color: #1e3c72 !important;
  text-align: center;
}

.back-btn:hover {
  background-color: white;
  transform: scale(1.02);
}

.sidebar-footer {
  margin-top: auto;
  padding: 10px;
  border-top: 1px solid rgba(255,255,255,0.1);
  text-align: center;
}

/* Ana İçerik Alanı */
.main-content {
  margin-left: 280px;
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 2rem;
}

.welcome-section {
  background: linear-gradient(to right, #ffffff, #f0f7ff);
}

.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.tip-card {
  background: linear-gradient(45deg, #00d2ff, #3a7bd5);
}

.motivation-card {
  border-left: 5px solid #ffc107;
}

/* Scrollbar Özelleştirme (Sidebar için) */
.sidebar::-webkit-scrollbar {
  width: 5px;
}
.sidebar::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.2);
  border-radius: 10px;
}

@media (max-width: 768px) {
  .sidebar { width: 100%; height: auto; position: relative; }
  .main-content { margin-left: 0; }
}
</style>