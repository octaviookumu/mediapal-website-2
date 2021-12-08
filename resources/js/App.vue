<template>
  <div class="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
// import './styles/app.scss'
// import '../../public/css/app.css'
// import "./styles/css/bootstrap.min.css"
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar,
  }
}
</script>