<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'

const dummyData = {
  restaurant: {
    id: 2,
    name: 'Kaci Koelpin',
    tel: '083-343-7765',
    address: '22769 Johnson Squares',
    opening_hours: '08:00',
    description:
      'Sequi facere sit iusto molestiae dolores quibusdam dolores. Labore deleniti beatae id. Qui quidem quibusdam fugiat qui harum odit voluptas. Beatae asperiores exercitationem quia commodi. Provident magnam sed expedita quibusdam labore aliquid hic.',
    image:
      'https://loremflickr.com/320/240/restaurant,food/?random=22.957592747300982',
    CategoryId: null
  }
}

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: '',
        categoryId: ''
      }
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('restaurantId', restaurantId)
      const { restaurant } = dummyData
      const {
        id,
        name,
        tel,
        address,
        opening_hours: openingHours,
        description,
        image,
        CategoryId: categoryId
      } = restaurant
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        tel,
        address,
        openingHours,
        description,
        image,
        categoryId
      }
    },
    handleAfterSubmit (formData) {
      // TODO: 透過 API 把 formData 的資料網後端伺服器送
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>
