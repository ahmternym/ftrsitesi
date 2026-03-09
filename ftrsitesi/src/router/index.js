import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Student from '../views/Student.vue'
import Patient from '../views/Patient.vue'
import PatientDetail from '../views/PatientDetail.vue'
import StudentDetail from '../views/StudentDetail.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/patient',
    name: 'patient',
    component: Patient
  },
  {
    path: '/patient/:id',
    name: 'patientdetail',
    component: PatientDetail,
    props : true
  },
  {
    path: '/student',
    name: 'student',
    component: Student
  },
  {
    path: '/student/:category',
    name: 'studentdetail',
    component: StudentDetail,
    props:true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
