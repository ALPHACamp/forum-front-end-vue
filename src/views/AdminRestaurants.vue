<template>
  <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNav />

    <a
      href="#"
      class="btn btn-primary mb-4"
    >New Restaurant</a>

    <!-- 後台餐廳列表 AdminRestaurantsTable -->
    <AdminRestaurantsTable :initial-restaurants="restaurants" />
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import AdminRestaurantsTable from './../components/AdminRestaurantsTable'

const dummyData = {
  restaurants: [
    {
      id: 2,
      name: 'Mrs. Mckenzie Johnston',
      tel: '567-714-6131 x621',
      address: '61371 Rosalinda Knoll',
      opening_hours: '08:00',
      description:
        'Quia pariatur perferendis architecto tenetur omnis pariatur tempore.',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=2',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-22T09:00:43.000Z'
      }
    },
    {
      id: 3,
      name: 'Abel Blanda',
      tel: '1-554-475-7456 x210',
      address: '4510 Guiseppe Lights',
      opening_hours: '08:00',
      description:
        'Quibusdam aliquid perferendis quam. Aspernatur sit dolor aliquid unde iure. Qui voluptatibus aperiam autem fugit corrupti dolore. Nostrum ipsa est quas voluptatibus quia debitis veniam. Libero harum assumenda in impedit. Aliquid consequatur voluptatibus quo tenetur nesciunt enim suscipit voluptatibus.\n \rVitae eos magni nihil. Facilis laborum et labore consequuntur dolores quis aut rem porro. Enim suscipit cumque dolorem odio sint alias. Molestias excepturi esse maxime magnam eius aut non soluta.\n \rEum commodi ea itaque aut quam. Nemo nobis aliquid quis dolorem. Aspernatur aut non consequatur ad perferendis maiores sunt eveniet.',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=3',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-22T09:00:43.000Z'
      }
    },
    {
      id: 4,
      name: 'Davon Langosh DDS',
      tel: '(884) 775-2408',
      address: '91733 Hayden Field',
      opening_hours: '08:00',
      description:
        'Quo molestiae repellendus dolorem eos nulla.\nOdio ipsum quisquam ea qui vel dolores.',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=4',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-22T09:00:43.000Z'
      }
    },
    {
      id: 5,
      name: 'Dimitri Kuvalis',
      tel: '(683) 051-4164 x64803',
      address: '137 Torphy Shore',
      opening_hours: '08:00',
      description: 'Repellendus iusto aut aut nemo.',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=5',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-22T09:00:43.000Z'
      }
    },
    {
      id: 6,
      name: 'Nona Schuppe',
      tel: '443.433.1239 x6607',
      address: '874 Jayda Plain',
      opening_hours: '08:00',
      description: 'dolorum est dolor',
      image:
        'https://loremflickr.com/320/240/food,dessert,restaurant/?random=6',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-22T09:00:43.000Z'
      }
    }
  ]
}

export default {
  name: 'AdminRestaurants',
  components: {
    AdminNav,
    AdminRestaurantsTable
  },
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    }
  }
}
</script>
