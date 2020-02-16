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
      id: 143,
      name: 'testrestaurant',
      tel: '',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2020-01-19T03:04:21.188Z',
      updatedAt: '2020-01-19T03:04:21.188Z',
      CategoryId: 109,
      Category: {
        id: 109,
        name: 'cool',
        createdAt: '2019-12-17T11:36:08.937Z',
        updatedAt: '2019-12-17T11:36:08.937Z'
      }
    },
    {
      id: 142,
      name: 'test1233',
      tel: '',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2020-01-12T11:58:30.114Z',
      updatedAt: '2020-01-12T11:58:30.114Z',
      CategoryId: 7,
      Category: {
        id: 7,
        name: '複合式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 109,
      name: 'asd',
      tel: '083-343-7765',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2020-01-08T14:03:07.273Z',
      updatedAt: '2020-01-08T14:03:07.273Z',
      CategoryId: 109,
      Category: {
        id: 109,
        name: 'cool',
        createdAt: '2019-12-17T11:36:08.937Z',
        updatedAt: '2019-12-17T11:36:08.937Z'
      }
    },
    {
      id: 105,
      name: 'testv',
      tel: '020002222',
      address: 'st.Road',
      opening_hours: '01:00',
      description: '',
      image: 'https://i.imgur.com/7ZpjPIA.jpg',
      viewCounts: null,
      createdAt: '2019-12-29T04:53:35.616Z',
      updatedAt: '2019-12-29T04:53:35.616Z',
      CategoryId: 7,
      Category: {
        id: 7,
        name: '複合式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 104,
      name: '餐廳種子資料都沒category',
      tel: '020002222',
      address: 'st.Road',
      opening_hours: '00:00',
      description: '',
      image: 'https://i.imgur.com/9b88oCl.jpg',
      viewCounts: null,
      createdAt: '2019-12-29T04:12:02.664Z',
      updatedAt: '2019-12-29T04:12:02.664Z',
      CategoryId: 7,
      Category: {
        id: 7,
        name: '複合式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 103,
      name: 'testvvvv',
      tel: '020002222',
      address: 'st.Road',
      opening_hours: '00:00',
      description: '',
      image: 'https://i.imgur.com/nsmu4r6.jpg',
      viewCounts: null,
      createdAt: '2019-12-29T04:10:12.163Z',
      updatedAt: '2019-12-29T04:10:12.163Z',
      CategoryId: 6,
      Category: {
        id: 6,
        name: '美式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
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
      Category: null
    },
    {
      id: 97,
      name: 'DGGSXFG',
      tel: '04534545',
      address: 'XDFGZSDFGZJFZFGAD',
      opening_hours: '12:59',
      description: 'XDFGBSZFDGZZSDFGsdg',
      image: 'https://i.imgur.com/QOX4UzQ.jpg',
      viewCounts: null,
      createdAt: '2019-12-05T09:11:37.628Z',
      updatedAt: '2019-12-05T09:11:37.628Z',
      CategoryId: null,
      Category: null
    },
    {
      id: 96,
      name: 'dfgdfhgdfh xfghfgxh',
      tel: 'xfgxgfbxfb',
      address: 'dzfbdfzbzfbzs',
      opening_hours: '12:59',
      description: 'AFAScsddggrhHFJSGFJFDGsdF',
      image: 'https://i.imgur.com/oOHdiBw.jpg',
      viewCounts: null,
      createdAt: '2019-12-05T09:11:11.111Z',
      updatedAt: '2019-12-05T09:11:11.111Z',
      CategoryId: null,
      Category: null
    },
    {
      id: 95,
      name: 'rghdfhfdh',
      tel: '',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2019-12-05T08:55:54.669Z',
      updatedAt: '2019-12-05T08:55:54.669Z',
      CategoryId: null,
      Category: null
    }
  ],
  comments: [
    {
      id: 199,
      text: null,
      UserId: 1,
      RestaurantId: null,
      createdAt: '2020-01-19T03:40:55.390Z',
      updatedAt: '2020-01-19T03:40:55.390Z',
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
      },
      Restaurant: null
    },
    {
      id: 198,
      text: '123',
      UserId: 1,
      RestaurantId: null,
      createdAt: '2020-01-19T02:53:27.112Z',
      updatedAt: '2020-01-19T02:53:27.112Z',
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
      },
      Restaurant: null
    },
    {
      id: 197,
      text: null,
      UserId: 1,
      RestaurantId: null,
      createdAt: '2020-01-19T02:52:32.773Z',
      updatedAt: '2020-01-19T02:52:32.773Z',
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
      },
      Restaurant: null
    },
    {
      id: 196,
      text: 'try',
      UserId: 1,
      RestaurantId: null,
      createdAt: '2020-01-19T02:45:01.935Z',
      updatedAt: '2020-01-19T02:45:01.935Z',
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
      },
      Restaurant: null
    },
    {
      id: 195,
      text: 'try it',
      UserId: 1,
      RestaurantId: null,
      createdAt: '2020-01-19T02:44:23.467Z',
      updatedAt: '2020-01-19T02:44:23.467Z',
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
      },
      Restaurant: null
    },
    {
      id: 194,
      text: 'try',
      UserId: 1,
      RestaurantId: null,
      createdAt: '2020-01-19T02:41:43.886Z',
      updatedAt: '2020-01-19T02:41:43.886Z',
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
      },
      Restaurant: null
    },
    {
      id: 193,
      text: 'test3test3',
      UserId: 2,
      RestaurantId: 50,
      createdAt: '2020-01-12T13:57:18.580Z',
      updatedAt: '2020-01-12T13:57:18.580Z',
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
      },
      Restaurant: {
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
        CategoryId: null
      }
    },
    {
      id: 192,
      text: 'test',
      UserId: 1,
      RestaurantId: 50,
      createdAt: '2020-01-12T13:52:57.374Z',
      updatedAt: '2020-01-12T13:52:57.374Z',
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
      },
      Restaurant: {
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
        CategoryId: null
      }
    },
    {
      id: 188,
      text: '111',
      UserId: 2,
      RestaurantId: 51,
      createdAt: '2019-12-10T13:56:42.119Z',
      updatedAt: '2019-12-10T13:56:42.119Z',
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
      },
      Restaurant: {
        id: 51,
        name: '發大財0121牛排',
        tel: '12345678',
        address: '高雄市',
        opening_hours: '00:00',
        description: '123',
        image: 'https://i.imgur.com/CaeM9rg.jpg',
        viewCounts: 27,
        createdAt: '2019-11-22T06:50:58.472Z',
        updatedAt: '2020-02-11T03:49:29.072Z',
        CategoryId: 6
      }
    },
    {
      id: 187,
      text: 'test',
      UserId: 2,
      RestaurantId: 51,
      createdAt: '2019-12-10T13:50:29.919Z',
      updatedAt: '2019-12-10T13:50:29.919Z',
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
      },
      Restaurant: {
        id: 51,
        name: '發大財0121牛排',
        tel: '12345678',
        address: '高雄市',
        opening_hours: '00:00',
        description: '123',
        image: 'https://i.imgur.com/CaeM9rg.jpg',
        viewCounts: 27,
        createdAt: '2019-11-22T06:50:58.472Z',
        updatedAt: '2020-02-11T03:49:29.072Z',
        CategoryId: 6
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
      // fetch API...
      const { restaurants, comments } = dummyData
      this.restaurants = restaurants
      this.comments = comments.filter(comment => comment.Restaurant && comment.text)
    }
  }
}
</script>
