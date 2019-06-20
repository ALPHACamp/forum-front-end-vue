<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants'
import NewestComments from './../components/NewestComments'

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: 'Deangelo Farrell',
      tel: '765-686-8198 x6673',
      address: '0834 Princess Square',
      opening_hours: '08:00',
      description:
        'Voluptates veritatis blanditiis ipsam. Tempora molestiae ut qui deserunt debitis sit. Impedit est rem. Blanditiis aliquid atque quo necessitatibus. Veniam sint explicabo. Est velit soluta.',
      image: 'https://i.imgur.com/A8xgiUt.jpg',
      createdAt: '2019-06-07T13:28:51.000Z',
      updatedAt: '2019-06-16T09:50:50.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z'
      }
    },
    {
      id: 29,
      name: 'Mateo Thiel',
      tel: '1-499-062-2223 x4419',
      address: '68023 Wade Canyon',
      opening_hours: '08:00',
      description: 'non',
      image: 'http://lorempixel.com/640/480',
      createdAt: '2019-06-07T13:28:51.000Z',
      updatedAt: '2019-06-07T13:28:51.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z'
      }
    },
    {
      id: 22,
      name: 'Carter Howe',
      tel: '1-295-223-4501 x416',
      address: '839 Claud Stream',
      opening_hours: '08:00',
      description:
        'Veritatis consectetur temporibus quia quo iusto adipisci non nobis. Voluptas sunt quia eveniet provident qui vel. Natus delectus laudantium ratione non ut ratione odio ipsam voluptatem. Aliquam voluptas pariatur voluptatem minima vitae. Rem quia ipsum temporibus sunt. Aliquid repellat dignissimos quia dolorum ut beatae ut voluptatem.\n \rNemo laboriosam error. Repellendus numquam corrupti blanditiis voluptate non. Odit culpa magni.\n \rMagnam ipsum minima reprehenderit facere soluta. Consequatur cupiditate sed et omnis facilis. Et minima molestiae iure delectus recusandae alias quam. A neque nulla. Consequatur consequatur consequuntur dolore voluptas. Quibusdam consequatur amet sint eum quidem error.',
      image: 'http://lorempixel.com/640/480',
      createdAt: '2019-06-07T13:28:51.000Z',
      updatedAt: '2019-06-07T13:28:51.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z'
      }
    },
    {
      id: 48,
      name: 'Leonard Feeney',
      tel: '211.823.3576 x1190',
      address: '6027 Graham Haven',
      opening_hours: '08:00',
      description: 'Qui ut eos itaque eligendi est cum ducimus.',
      image: 'http://lorempixel.com/640/480',
      createdAt: '2019-06-07T13:28:51.000Z',
      updatedAt: '2019-06-07T13:28:51.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z'
      }
    }
  ],
  comments: [
    {
      id: 9,
      text: 'At reiciendis eaque hic excepturi ratione officiis ad ut minus.',
      UserId: 1,
      RestaurantId: 9,
      createdAt: '2019-06-07T13:28:51.000Z',
      updatedAt: '2019-06-07T13:28:51.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$5rnmJYuG0Aj/ESJyGIQy6OdMF2oOf6A25SJCzjqBQ/Vpsk8.it9Z6',
        image: 'https://i.imgur.com/B1Yo7Bx.jpg',
        isAdmin: true,
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-13T13:28:50.000Z'
      },
      Restaurant: {
        id: 9,
        name: 'Sandrine Kilback',
        tel: '817-289-8331',
        address: '7728 Shanahan Well',
        opening_hours: '08:00',
        description:
          'Quis cupiditate ad porro ipsam aut officia. Non quis atque debitis nostrum sunt quia modi repudiandae voluptates. Illum et magni voluptatem dolores et quo.',
        image: 'http://lorempixel.com/640/480',
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z',
        CategoryId: 5
      }
    },
    {
      id: 1,
      text: 'Commodi a totam.',
      UserId: 2,
      RestaurantId: 7,
      createdAt: '2019-06-07T13:28:51.000Z',
      updatedAt: '2019-06-07T13:28:51.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$DglafTUaXY1pvGadE1BwnelW45wUh/tkynO55FLL6eYbPlJNO70Re',
        image: null,
        isAdmin: false,
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z'
      },
      Restaurant: {
        id: 7,
        name: 'Golden Hegmann',
        tel: '1-264-510-1187 x2348',
        address: '059 Brycen Fork',
        opening_hours: '08:00',
        description:
          'Incidunt et molestiae ducimus expedita explicabo id deserunt fugiat ipsum. Adipisci ex maxime tenetur itaque id ex maiores blanditiis dolores. Accusamus repudiandae facilis assumenda nam nihil dolor. Facilis eius tempora facilis rerum ex.',
        image: 'http://lorempixel.com/640/480',
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z',
        CategoryId: 1
      }
    },
    {
      id: 4,
      text: 'Vel culpa maiores debitis aliquid.',
      UserId: 2,
      RestaurantId: 4,
      createdAt: '2019-06-07T13:28:51.000Z',
      updatedAt: '2019-06-07T13:28:51.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$DglafTUaXY1pvGadE1BwnelW45wUh/tkynO55FLL6eYbPlJNO70Re',
        image: null,
        isAdmin: false,
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z'
      },
      Restaurant: {
        id: 4,
        name: 'Trent Hilpert',
        tel: '1-586-417-3823 x35774',
        address: '024 Caleigh Shore',
        opening_hours: '08:00',
        description:
          'Ipsa nulla qui.\nOptio labore voluptatem in quam laborum et.',
        image: 'http://lorempixel.com/640/480',
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z',
        CategoryId: 1
      }
    },
    {
      id: 8,
      text: 'Odio quis tempora minus eligendi ut quibusdam modi.',
      UserId: 2,
      RestaurantId: 6,
      createdAt: '2019-06-07T13:28:51.000Z',
      updatedAt: '2019-06-07T13:28:51.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$DglafTUaXY1pvGadE1BwnelW45wUh/tkynO55FLL6eYbPlJNO70Re',
        image: null,
        isAdmin: false,
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z'
      },
      Restaurant: {
        id: 6,
        name: 'Ken Marks',
        tel: '(851) 408-9395',
        address: '96081 Chris Manors',
        opening_hours: '08:00',
        description:
          'Porro dolor quis est eligendi saepe fugiat quisquam qui. Consequuntur natus ea voluptatem id omnis id maiores. Enim voluptates maiores molestiae deleniti quos dolorum. Magnam quia placeat nemo mollitia consequatur qui ad. Porro saepe magni magnam autem beatae sed sit pariatur.\n \rAtque asperiores dolor iusto. Laborum at natus cupiditate neque. Saepe ut ratione asperiores saepe et ea.\n \rMolestias ipsum soluta aut sit minima sit minima quia. Voluptates ipsa ex ea suscipit reprehenderit odio nihil. Aut quia porro nam quae voluptatum rem.',
        image: 'http://lorempixel.com/640/480',
        createdAt: '2019-06-07T13:28:51.000Z',
        updatedAt: '2019-06-07T13:28:51.000Z',
        CategoryId: 5
      }
    }
  ]
}

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>
