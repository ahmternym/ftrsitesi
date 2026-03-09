<template>
  <div class="split-container">
    
    <router-link to="/patient" class="split-half left-half">
        <h1>HASTA</h1>
    </router-link>
    
    <router-link to="/student" class="split-half right-half">
        <h1>ÖĞRENCİ</h1>
    </router-link> 
      
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.split-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden; 
    background-color: #1a1a1a; 
}
a {
  text-decoration: none;
}
.split-half {
    flex: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    cursor: pointer;
    position: relative;
}

.split-half h1 {
    font-size: 4rem;
    color: white;
    letter-spacing: 4px;
    font-weight: 700;
    text-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: transform 0.4s ease;
    z-index: 10; 
}
.left-half {
    background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
}
.right-half {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
}
.split-half:hover {
    flex: 1.1; 
}
.split-half:hover h1 {
    transform: scale(1.05); 
}
@media (max-width: 768px) {
    .split-container {
        flex-direction: column;
    }
    .split-half h1 {
        font-size: 2.5rem;
    }
    .split-half:active {
        flex: 1.1;
    }
}
</style>