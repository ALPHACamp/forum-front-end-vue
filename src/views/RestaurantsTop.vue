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
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
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
            <span
              class="badge badge-secondary"
            >收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
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
      id: 50,
      name: 'Jolie Hackett',
      tel: '542.600.9620',
      address: '2439 Tiffany Heights',
      opening_hours: '08:00',
      description: 'magni ut voluptas',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=27.32287991372693',
      viewCounts: 8,
      createdAt: '2019-11-20T06:25:42.934Z',
      updatedAt: '2020-01-21T12:34:18.056Z',
      CategoryId: null,
      FavoritedUsers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
          isAdmin: false,
          image: null,
          createdAt: '2019-11-20T06:25:42.685Z',
          updatedAt: '2019-11-21T09:55:30.970Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 50,
            createdAt: '2019-12-08T15:59:49.568Z',
            updatedAt: '2019-12-08T15:59:49.568Z'
          }
        },
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 50,
            createdAt: '2020-01-07T12:08:19.169Z',
            updatedAt: '2020-01-07T12:08:19.169Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 2
    },
    {
      id: 14,
      name: 'Rahul Kilback',
      tel: '1-573-027-3190',
      address: '13538 Lula Roads',
      opening_hours: '08:00',
      description: 'Ut ea repellat cumque illo sint. Possimus a magni ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=66.19683181847653',
      viewCounts: 77,
      createdAt: '2019-11-20T06:25:42.925Z',
      updatedAt: '2020-02-16T05:36:07.120Z',
      CategoryId: 7,
      FavoritedUsers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
          isAdmin: false,
          image: null,
          createdAt: '2019-11-20T06:25:42.685Z',
          updatedAt: '2019-11-21T09:55:30.970Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 14,
            createdAt: '2020-01-12T14:58:04.174Z',
            updatedAt: '2020-01-12T14:58:04.174Z'
          }
        },
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 14,
            createdAt: '2020-01-05T02:53:33.366Z',
            updatedAt: '2020-01-05T02:53:33.366Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 2
    },
    {
      id: 1,
      name: '123',
      tel: '02-8888-0000',
      address: '01313 ketlch deive',
      opening_hours: '08:00',
      description: 'dsfsafdsadfasasdfasdf',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335',
      viewCounts: 15,
      createdAt: '2019-11-20T06:25:42.921Z',
      updatedAt: '2020-02-22T05:38:51.269Z',
      CategoryId: null,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 1,
            createdAt: '2020-01-06T13:45:36.866Z',
            updatedAt: '2020-01-06T13:45:36.866Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 6,
      name: 'Liliane Dibbert',
      tel: '1-827-478-9971 x690',
      address: '2762 Devon Run',
      opening_hours: '08:00',
      description: 'facilis',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=98.6709769179636',
      viewCounts: 22,
      createdAt: '2019-11-20T06:25:42.923Z',
      updatedAt: '2020-01-08T14:12:46.473Z',
      CategoryId: 7,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 6,
            createdAt: '2019-11-23T13:53:40.181Z',
            updatedAt: '2019-11-23T13:53:40.181Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 99,
      name: 'cool',
      tel: '457291867',
      address: '26 Bluegrass Street',
      opening_hours: '13:02',
      description: 'coolcoolcool',
      image: 'https://i.imgur.com/OC8nekt.png',
      viewCounts: null,
      createdAt: '2019-12-09T02:50:06.794Z',
      updatedAt: '2019-12-09T02:50:06.794Z',
      CategoryId: null,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 99,
            createdAt: '2019-12-09T12:20:05.184Z',
            updatedAt: '2019-12-09T12:20:05.184Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 7,
      name: 'Kari Sporer',
      tel: '584-434-6976',
      address: '941 Jakubowski Stream',
      opening_hours: '08:00',
      description: 'sunt dolorem voluptate',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=80.77439621389972',
      viewCounts: 1,
      createdAt: '2019-11-20T06:25:42.923Z',
      updatedAt: '2019-11-23T14:30:22.808Z',
      CategoryId: null,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 7,
            createdAt: '2019-11-23T13:54:18.486Z',
            updatedAt: '2019-11-23T13:54:18.486Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 26,
      name: 'Dayna Roberts',
      tel: '759-389-2695',
      address: '9850 Kaia Circle',
      opening_hours: '08:00',
      description: 'ipsum',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=3.7178880115385837',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.928Z',
      updatedAt: '2019-11-20T06:25:42.928Z',
      CategoryId: null,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 26,
            createdAt: '2020-01-06T14:38:15.351Z',
            updatedAt: '2020-01-06T14:38:15.351Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 5,
      name: 'Abagail Dietrich',
      tel: '638.352.6637 x5805',
      address: '011 Glenna Camp',
      opening_hours: '08:00',
      description: 'Cumque quasi nihil. Dicta accusantium officiis ass',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=60.98596097768254',
      viewCounts: 37,
      createdAt: '2019-11-20T06:25:42.923Z',
      updatedAt: '2019-11-23T14:18:04.644Z',
      CategoryId: null,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 5,
            createdAt: '2019-11-23T14:09:32.441Z',
            updatedAt: '2019-11-23T14:09:32.441Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 39,
      name: 'Kirk Rosenbaum',
      tel: '(819) 758-2128 x85915',
      address: '707 Conroy Trace',
      opening_hours: '08:00',
      description: 'Ratione rem aut qui et soluta sint qui officiis.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=93.61331373873116',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.931Z',
      updatedAt: '2019-11-20T06:25:42.931Z',
      CategoryId: null,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 25,
      name: 'Webster Dietrich',
      tel: '1-653-478-8294 x018',
      address: '229 Predovic Lodge',
      opening_hours: '08:00',
      description: 'Qui consequuntur est quo.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=37.893799230224204',
      viewCounts: 17,
      createdAt: '2019-11-20T06:25:42.928Z',
      updatedAt: '2020-01-18T11:44:28.915Z',
      CategoryId: null,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
}

export default {
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
      this.restaurants = this.restaurants
        .map(restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount + 1,
            isFavorited: true
          }
        })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
    },
    deleteFavorite (restaurantId) {
      this.restaurants = this.restaurants
        .map(restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount - 1,
            isFavorited: false
          }
        })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
    }
  }
}
</script>
