<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'

const dummyData = {
  restaurant: {
    id: 3,
    name: 'Abel Blanda',
    tel: '1-554-475-7456 x210',
    address: '4510 Guiseppe Lights',
    opening_hours: '08:00',
    description:
      'Quibusdam aliquid perferendis quam. Aspernatur sit dolor aliquid unde iure. Qui voluptatibus aperiam autem fugit corrupti dolore. Nostrum ipsa est quas voluptatibus quia debitis veniam. Libero harum assumenda in impedit. Aliquid consequatur voluptatibus quo tenetur nesciunt enim suscipit voluptatibus.\n \rVitae eos magni nihil. Facilis laborum et labore consequuntur dolores quis aut rem porro. Enim suscipit cumque dolorem odio sint alias. Molestias excepturi esse maxime magnam eius aut non soluta.\n \rEum commodi ea itaque aut quam. Nemo nobis aliquid quis dolorem. Aspernatur aut non consequatur ad perferendis maiores sunt eveniet.',
    image: 'https://loremflickr.com/320/240/food,dessert,restaurant/?random=3',
    CategoryId: 4
  }
}

// ...
export default {
  components: {
    AdminRestaurantForm
  },
  data () {
    return {
      restaurant: {
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
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    handleAfterSubmit (formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    },
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id:', restaurantId)
      const { restaurant } = dummyData

      this.restaurant = {
        ...this.restaurant,
        name: restaurant.name,
        categoryId: restaurant.CategoryId,
        tel: restaurant.tel,
        address: restaurant.address,
        description: restaurant.description,
        image: restaurant.image,
        openingHours: restaurant.opening_hours
      }
    }
  }
}
</script>
