<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <p>[{{ restaurant.categoryName }}]</p>
    </div>

    <hr>

    <ul>
      <li>有 {{ restaurant.commentsLength }} 筆評論</li>
      <li>有 {{ restaurant.favoritedUsersLength }} 人收藏這家餐廳</li>
    </ul>

    <a
      href="#"
      @click="$router.back()"
    >回上一頁</a>
  </div>
</template>

<script>
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
    createdAt: '2019-06-22T09:00:43.000Z',
    updatedAt: '2019-06-22T09:00:43.000Z',
    CategoryId: 4,
    Category: {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    FavoritedUsers: [
      {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$3.cGoUF1lkEfQ2Oi57VpC.xVU3/8NS6yJzBQ0VJKV9AeW0e1trmmS',
        image: 'https://i.imgur.com/JtQJRMZ.png',
        isAdmin: true,
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-23T01:15:48.000Z',
        Favorite: {
          UserId: 1,
          RestaurantId: 3,
          createdAt: '2019-06-24T15:03:35.000Z',
          updatedAt: '2019-06-24T15:03:35.000Z'
        }
      }
    ],
    LikedUsers: [],
    Comments: [
      {
        id: 10,
        text: 'Nisi quam dolorem debitis deserunt esse praesentium et.',
        UserId: 1,
        RestaurantId: 3,
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-22T09:00:43.000Z',
        User: {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password:
            '$2a$10$3.cGoUF1lkEfQ2Oi57VpC.xVU3/8NS6yJzBQ0VJKV9AeW0e1trmmS',
          image: 'https://i.imgur.com/JtQJRMZ.png',
          isAdmin: true,
          createdAt: '2019-06-22T09:00:43.000Z',
          updatedAt: '2019-06-23T01:15:48.000Z'
        }
      }
    ]
  },
  isFavorited: true,
  isLiked: false
}

export default {
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        favoritedUsersLength: 0,
        likedUsersLength: 0
      }
    }
  },
  mounted () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      const { restaurant } = dummyData

      this.restaurant = {
        ...this.restaurant,
        id: restaurant.id,
        name: restaurant.name,
        categoryName: restaurant.Category.name,
        commentsLength: restaurant.Comments.length,
        favoritedUsersLength: restaurant.FavoritedUsers.length,
        likedUsersLength: restaurant.LikedUsers.length
      }
    }
  }
}
</script>
