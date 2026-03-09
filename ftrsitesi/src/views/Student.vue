<template>
  <div class="d-flex min-vh-100 bg-light">
    
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white position-fixed sidebar shadow">
      <div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none p-2">
        <i class="bi bi-journal-medical me-2 fs-3"></i>
        <span class="fs-4 fw-bold">Öğrenci Portalı</span>
      </div>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto custom-nav">
        <li class="nav-item mb-4">
          <router-link to="/" class="nav-link back-btn fw-bold">
            <i class="bi bi-arrow-left-circle me-2"></i>Anasayfaya Dön
          </router-link> 
        </li>
        
        <li v-for="title in titles" :key="title.id" class="mb-2">
          <router-link :to="{ name: 'studentdetail', params: { category: title.category } }" class="nav-link category-link">
            <i class="bi bi-pen me-2"></i> {{ title.title }}
          </router-link>
        </li> 
      </ul>
    </div>

    <div class="main-content flex-grow-1 p-5">
      
      <div class="welcome-section mb-5">
        <h1 class="display-5 fw-bold text-dark mb-3">Hoş Geldin, Geleceğin Fizyoterapisti!</h1>
        <p class="lead text-muted">
          "Fizyoterapi bir sanattır, anatomi ise senin tuvalin. Her hastada yepyeni bir tablo çizersin." 
          Sınavlarına hazırlanırken ihtiyaç duyacağın temel hap bilgiler aşağıda seni bekliyor. Sol menüden testlere ulaşabilirsin.
        </p>
      </div>

      <div class="row g-4">
        
        <div class="col-md-6 col-lg-4" v-for="info in hapBilgiler" :key="info.id">
          <div class="card h-100 info-card border-0 shadow-sm">
            <div class="card-body">
              <div class="icon-wrapper mb-3">
                <i :class="info.icon"></i>
              </div>
              <h5 class="card-title fw-bold">{{ info.baslik }}</h5>
              <p class="card-text text-secondary">{{ info.icerik }}</p>
            </div>
            <div class="card-footer bg-transparent border-0 pt-0">
              <span class="badge custom-badge">{{ info.etiket }}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            titles: [],
            
            hapBilgiler: [
              {
                id: 1,
                icon: "bi bi-arrows-move",
                baslik: "Konveks - Konkav Kuralı",
                icerik: "Hareket eden eklem yüzeyi konveks ise, kayma (glide) harekete zıt yönde olur. Konkav ise hareketle aynı yöndedir. Mobilizasyonun altın kuralı!",
                etiket: "Manuel Terapi"
              },
              {
                id: 2,
                icon: "bi bi-exclamation-triangle-fill",
                baslik: "Kırmızı Bayraklar (Red Flags)",
                icerik: "Açıklanamayan kilo kaybı, gece terlemeleri, dinlenmekle geçmeyen ağrı ve eyer tarzı anestezi durumu, fıtık değil ciddi bir patoloji belirtisidir.",
                etiket: "Klinik Karar Verme"
              },
              {
                id: 3,
                icon: "bi bi-activity",
                baslik: "Oksijenin Yolculuğu",
                icerik: "KOAH'lı bir hastada solunumu öğretirken 'büzük dudak solunumu' (pursed lip breathing) hava yollarının erken kapanmasını engeller.",
                etiket: "Kardiyopulmoner"
              },
              {
                id: 4,
                icon: "bi bi-person-wheelchair",
                baslik: "Brunnstrom Evreleri",
                icerik: "İnmeli hastada iyileşme gevşeklikle (Evre 1) başlar, spastisitenin zirve yapmasıyla (Evre 3) devam eder ve izole hareketlerin başlamasıyla (Evre 4-5) düzelir.",
                etiket: "Nörolojik FTR"
              },
              {
                id: 5,
                icon: "bi bi-rulers",
                baslik: "Normal Eklem Hareket Açıklığı",
                icerik: "Gonyometrik ölçümlerde omuz fleksiyonu normalde 180°, kalça fleksiyonu diz bükülüyken 120°, diz fleksiyonu ise yaklaşık 135° olmalıdır.",
                etiket: "Ölçüm ve Değerlendirme"
              },
              {
                id: 6,
                icon: "bi bi-bandaid",
                baslik: "Akut Yaralanmada 'PRICE'",
                icerik: "Protection (Koruma), Rest (Dinlenme), Ice (Buz), Compression (Kompresyon) ve Elevation (Yükseğe kaldırma). Ödem kontrolünün ilk 48 saatteki anahtarı.",
                etiket: "Ortopedik FTR"
              }
            ]
        }
    },
    methods: {
        
    },
    mounted() {
    fetch("https://69aeee46c8b37f499836fb56.mockapi.io/api/v1/data/1")
      .then(res => res.json())
      .then(data => {
        this.titles = data.titles;
      })
      .catch(err => console.log("Başlıklar yüklenemedi:", err));
},
}
</script>

<style scoped>

.sidebar {
  width: 280px;
  height: 100vh;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-right: 1px solid rgba(255,255,255,0.1);
  z-index: 1000;
}

.sidebar a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.3s ease;
}

.category-link {
  border-radius: 8px;
  padding: 10px 15px;
}

.category-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  transform: translateX(5px);
}

.back-btn {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px 15px;
}

.back-btn:hover {
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
}


.main-content {
  margin-left: 280px; 
  background-color: #f4f7f6;
}

.welcome-section {
  border-bottom: 2px dashed #d1d9e6;
  padding-bottom: 20px;
}


.info-card {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 4px solid #11998e !important;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(17, 153, 142, 0.15) !important;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(17, 153, 142, 0.1) 0%, rgba(56, 239, 125, 0.1) 100%);
  color: #11998e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.5rem;
}

.custom-badge {
  background-color: #e8f5e9;
  color: #2e7d32;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
}
</style>