<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">{{ restaurant.categoryName }}</span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
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
    viewCounts: 123,
    createdAt: '2019-11-20T06:25:42.922Z',
    updatedAt: '2020-01-19T02:39:43.017Z',
    CategoryId: null,
    Category: null,
    Comments: [
      {
        id: 2,
        text: 'Ab vel tempore aut excepturi nobis labore velit.',
        UserId: 1,
        RestaurantId: 2,
        createdAt: '2019-11-20T06:25:42.942Z',
        updatedAt: '2019-11-20T06:25:42.942Z',
        User: {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z'
        }
      },
      {
        id: 52,
        text: 'Repellat ad quasi.',
        UserId: 3,
        RestaurantId: 2,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password:
            '$2a$10$8SSanoaxZCd/VEJFxxKShuWVFzU6JyuwvYDD6bP4UheZDbSWibPea',
          isAdmin: false,
          image: null,
          createdAt: '2019-11-20T06:25:42.909Z',
          updatedAt: '2019-11-20T06:25:42.909Z'
        }
      },
      {
        id: 102,
        text:
          'Iusto expedita quo ducimus nihil laborum amet ipsa et excepturi.',
        UserId: 3,
        RestaurantId: 2,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password:
            '$2a$10$8SSanoaxZCd/VEJFxxKShuWVFzU6JyuwvYDD6bP4UheZDbSWibPea',
          isAdmin: false,
          image: null,
          createdAt: '2019-11-20T06:25:42.909Z',
          updatedAt: '2019-11-20T06:25:42.909Z'
        }
      },
      {
        id: 151,
        text: 'Cool Restaurant',
        UserId: 2,
        RestaurantId: 2,
        createdAt: '2019-11-20T08:59:36.728Z',
        updatedAt: '2019-11-20T08:59:36.728Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
          isAdmin: false,
          image: null,
          createdAt: '2019-11-20T06:25:42.685Z',
          updatedAt: '2019-11-21T09:55:30.970Z'
        }
      }
    ]
  }
}

export default {
  name: 'RestaurantDashboard',
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      }
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      const { restaurant } = dummyData
      const { id, name, Category, Comments, viewCounts } = restaurant
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        commentsLength: Comments.length,
        viewCounts
      }
    }
  }
}
</script>
