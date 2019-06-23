<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <!-- 回上一頁 -->
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'

const dummyData = {
  restaurant: {
    id: 1,
    name: 'Judy Runte',
    tel: '(918) 827-1962',
    address: '98138 Elisa Road',
    opening_hours: '08:00',
    description: 'dicta et cupiditate',
    image: 'https://loremflickr.com/320/240/food,dessert,restaurant/?random=1',
    createdAt: '2019-06-22T09:00:43.000Z',
    updatedAt: '2019-06-22T09:00:43.000Z',
    CategoryId: 3,
    Category: {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 3,
        text: 'Quos asperiores in nostrum cupiditate excepturi aspernatur.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-22T09:00:43.000Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm',
          image: 'https://i.imgur.com/XooCt5K.png',
          isAdmin: false,
          createdAt: '2019-06-22T09:00:43.000Z',
          updatedAt: '2019-06-23T01:16:31.000Z'
        }
      }
    ]
  },
  isFavorited: false,
  isLiked: false
}

export default {
  name: 'Restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked
      }

      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment (commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    }
  }
}
</script>
