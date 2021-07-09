<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="container py-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-2 mb-5">
        <div class="col" v-for="(product, index) in products" :key="index">
          <div class="card h-100 custom-card">
            <div class="card-img" :style="{backgroundImage: 'url(' +  product.imageUrl + ')'}">
            </div>
            <div class="card-body">
              <h5 class="card-title mb-3 text-center fw-bold">{{ product.title }}</h5>
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center" v-if="product.origin_price != product.price">
                  <p class="card-text mb-0 me-2 text-danger fw-bold h5">{{ product.price }} 元</p>
                  <p class="card-text mb-0"><del>{{ product.origin_price }} 元</del></p>
                </div>
                <p class="card-text mb-0 h5" v-else>{{ product.origin_price }} 元</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 bg-white">
        <h3 class="mb-4 text-center fw-bold">表單測試</h3>
        <Form class="row g-3" ref="form" v-slot="{ errors }" @submit="createOrder">
          <div class="col-md-6">
            <label for="name" class="form-label">
              <span class="text-danger fw-bold">*</span>
              姓名
            </label>
            <Field id="name" name="姓名" type="text" class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名" rules="required" v-model="form.user.name"></Field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="col-md-6">
            <label for="tel" class="form-label">
              <span class="text-danger fw-bold">*</span>
              電話
            </label>
            <Field id="tel" name="電話" type="tel" class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話" :rules="isPhone" v-model="form.user.tel"></Field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>
          <div class="col-12">
            <label for="email" class="form-label">
              <span class="text-danger fw-bold">*</span>
              電子郵件
            </label>
            <Field id="email" name="電子郵件" type="email" class="form-control"
            :class="{ 'is-invalid': errors['電子郵件'] }"
              placeholder="請輸入電子郵件" rules="email|required" v-model="form.user.email"></Field>
            <error-message name="電子郵件" class="invalid-feedback"></error-message>
          </div>
          <div class="col-12">
            <label for="address" class="form-label">
              <span class="text-danger fw-bold">*</span>
              地址
            </label>
            <Field id="address" name="地址" type="text" class="form-control"
              :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required"
              v-model="form.user.address"></Field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>
          <div class="col-12 mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea class="form-control" id="message" rows="3" placeholder="請輸入留言"
            v-model="form.message"></textarea>
          </div>
          <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary"
            :disabled="Object.keys(errors).length !== 0">送出訂單</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      products: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          } else {
            alert('出錯了');
          }
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    createOrder() {
      alert('建立訂單成功');
      this.$refs.form.resetForm();
    },
    toggleLoading(val) {
      this.isLoading = val;
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
