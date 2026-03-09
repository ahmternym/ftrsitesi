<template>
  <div class="page-wrapper">
    
    <div class="quiz-container">
      <router-link to="/student" class="back-button">
        &#8592; Geri Dön
      </router-link>

      <div v-for="(question, index) in questions" :key="question.id" class="question-card">
        
        <h5 class="question-title">
          <span class="question-number">{{ index + 1 }}</span>
          {{ question.question }}
        </h5>

        <div class="options-group">
          <button class="option-btn" @click="checkAnswer(question, question.a)">
            <span class="option-letter">A</span> {{ question.a }}
          </button>
          
          <button class="option-btn" @click="checkAnswer(question, question.b)">
            <span class="option-letter">B</span> {{ question.b }}
          </button>
          
          <button class="option-btn" @click="checkAnswer(question, question.c)">
            <span class="option-letter">C</span> {{ question.c }}
          </button>
          
          <button class="option-btn" @click="checkAnswer(question, question.d)">
            <span class="option-letter">D</span> {{ question.d }}
          </button>
        </div>

        <div class="option-check mt-3" v-if="question.userAnswer">
          <p class="text-success fw-bold m-0" v-if="question.userAnswer === question.correctanswer">
            Doğru bildiniz!
          </p>
          <p class="text-danger fw-bold m-0" v-else>
            Yanlış cevap.
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
    props: ["category"],
    data() {
        return {
            questions: []
        }
    },
    mounted() {
        
        fetch("http://localhost:3000/questions?category=" + this.category)
            .then(res => res.json())
            .then(data => {
                this.questions = data;
            })
            .catch(err => console.log("Hata:", err));
    },
    methods: {
        
        checkAnswer(question, answer) {
            question.userAnswer = answer;
        }
    }
}
</script>

<style scoped>

.page-wrapper {
  padding-top: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.quiz-container {
  max-width: 800px;
  margin: 0 auto 40px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.back-button {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 25px;
  background-color: #ffffff;
  color: #11998e;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.question-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  border-top: 5px solid #11998e;
}

.question-title {
  font-size: 1.15rem;
  color: #2c3e50;
  margin-bottom: 25px;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-weight: 600;
}

.question-number {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}


.options-group {
  display: flex;
  flex-direction: column; 
  gap: 12px;
}

.option-btn {
  width: 100%;
  text-align: left;
  background-color: #f8f9fa;
  border: 2px solid #e9ecef;
  padding: 15px 20px;
  border-radius: 10px;
  color: #495057;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.option-letter {
  font-weight: bold;
  color: #11998e;
  margin-right: 15px;
  background-color: rgba(17, 153, 142, 0.1);
  padding: 5px 12px;
  border-radius: 6px;
}


.option-check {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  padding: 15px 20px;
  border-radius: 10px;
  text-align: center;
}
</style>