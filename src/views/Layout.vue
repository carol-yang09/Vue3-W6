<template>
  <div class="position-relative">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
         data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
         aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-link">首頁</router-link>
            <router-link to="/about" class="nav-link">關於我們</router-link>
            <router-link to="/products" class="nav-link">產品列表</router-link>
            <router-link to="/admin/productsmanage" class="nav-link">進入後台</router-link>
          </div>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>
