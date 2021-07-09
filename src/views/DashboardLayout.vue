<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/admin/productsmanage" class="navbar-brand">後台</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
         data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
         aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/admin/productsmanage" class="nav-link">產品管理</router-link>
            <router-link to="/admin/ordersmanage" class="nav-link">訂單列表</router-link>
            <router-link to="/" class="nav-link">回到前台</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <router-view/>
</template>
