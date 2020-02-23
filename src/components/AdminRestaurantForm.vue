<template>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option
          value=""
          selected
          disabled
        >
          --請選擇--
        </option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary"
    >
      送出
    </button>
  </form>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 6,
      name: '美式料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    },
    {
      id: 7,
      name: '複合式料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    },
    {
      id: 109,
      name: 'cool',
      createdAt: '2019-12-17T11:36:08.937Z',
      updatedAt: '2019-12-17T11:36:08.937Z'
    },
    {
      id: 110,
      name: '日式料理',
      createdAt: '2020-01-12T16:58:30.105Z',
      updatedAt: '2020-01-20T12:30:43.772Z'
    }
  ]
}
export default {
  name: 'AdminRestaurantForm',
  data () {
    return {
      categories: [],
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      }
    }
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    fetchCategories () {
      this.categories = dummyData.categories
    }
  }
}
</script>
