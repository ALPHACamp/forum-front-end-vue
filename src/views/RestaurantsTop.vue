<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link :to="{name: 'restaurant', params: {id: restaurant.id }}">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoritedUsers.length }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{name: 'restaurant', params: {id: restaurant.id }}"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="removeFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'

const dummyData = {
  restaurants: [
    {
      id: 2,
      name: 'Mrs. Mckenzie Johnston',
      tel: '567-714-6131 x621',
      address: '61371 Rosalinda Knoll',
      opening_hours: '08:00',
      description: 'Quia pariatur perferendis architecto tenetur omnis',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=2',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 23,
      name: 'Leanne Murazik',
      tel: '1-412-219-0461',
      address: '80448 Heloise Loop',
      opening_hours: '08:00',
      description: 'ipsam impedit est',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=23',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 24,
      name: 'Chaz Gleason',
      tel: '940.203.6740',
      address: '5770 Viva Track',
      opening_hours: '08:00',
      description: 'Nemo quia voluptas odit ratione.\nSed explicabo seq',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=24',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 25,
      name: 'Rosalyn Green',
      tel: '003.368.3779 x611',
      address: '7599 Brakus View',
      opening_hours: '08:00',
      description: 'Quia et delectus fugiat et inventore ipsam magnam ',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=25',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 22,
      name: 'Misael Nolan',
      tel: '(157) 990-8861',
      address: '785 Konopelski Island',
      opening_hours: '08:00',
      description: 'nostrum animi saepe',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=22',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 27,
      name: 'Hudson White',
      tel: '(729) 693-8082',
      address: '529 Kendrick Groves',
      opening_hours: '08:00',
      description: 'Dolores enim a autem voluptatem facilis. Temporibu',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=27',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 28,
      name: 'Ceasar Waelchi',
      tel: '329.936.4168 x38762',
      address: '001 Emelie Ridges',
      opening_hours: '08:00',
      description: 'Explicabo deserunt excepturi. Ad modi et omnis qui',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=28',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 29,
      name: 'Victoria Conroy',
      tel: '(640) 978-3154',
      address: '0146 Rodriguez Fort',
      opening_hours: '08:00',
      description: 'dolor',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=29',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 30,
      name: 'Mrs. Lucienne Kihn',
      tel: '084.007.7672 x359',
      address: '600 Cormier Island',
      opening_hours: '08:00',
      description: 'Laboriosam eligendi fugiat temporibus ratione nesc',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=30',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 31,
      name: 'Scarlett Crist',
      tel: '688-448-4096 x80427',
      address: '347 Hodkiewicz Drive',
      opening_hours: '08:00',
      description: 'Cumque aspernatur enim. Itaque illum et recusandae',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=31',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
}
export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs
  },
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchTopRestaurants()
  },
  methods: {
    fetchTopRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    addFavorite (restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id !== restaurantId) {
          return restaurant
        }

        return {
          ...restaurant,
          isFavorited: true
        }
      })
    },
    removeFavorite (restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id !== restaurantId) {
          return restaurant
        }

        return {
          ...restaurant,
          isFavorited: false
        }
      })
    }
  }
}
</script>
