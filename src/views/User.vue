<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="followings" />

        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <!-- UserFavoritedRestaurantsCard -->
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'

const dummyData = {
  profile: {
    id: 1,
    name: 'root',
    email: 'root@example.com',
    password: '$2a$10$3.cGoUF1lkEfQ2Oi57VpC.xVU3/8NS6yJzBQ0VJKV9AeW0e1trmmS',
    image: 'https://i.imgur.com/JtQJRMZ.png',
    isAdmin: true,
    createdAt: '2019-06-22T09:00:43.000Z',
    updatedAt: '2019-06-23T01:15:48.000Z',
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [
      {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$0Izt5W6Q4iphLq1ORgsKQu9jbEFdRD3.UaX/HQQg0M4Hp8yWV.XuS',
        image: 'https://i.imgur.com/1T9ddHb.png',
        isAdmin: false,
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-23T01:16:52.000Z',
        Followship: {
          followerId: 1,
          followingId: 3,
          createdAt: '2019-06-24T14:21:23.000Z',
          updatedAt: '2019-06-24T14:21:23.000Z'
        }
      },
      {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm',
        image: 'https://i.imgur.com/XooCt5K.png',
        isAdmin: false,
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-23T01:16:31.000Z',
        Followship: {
          followerId: 1,
          followingId: 2,
          createdAt: '2019-06-24T14:21:33.000Z',
          updatedAt: '2019-06-24T14:21:33.000Z'
        }
      }
    ],
    Comments: [
      {
        id: 5,
        text:
          'Aspernatur eligendi tempora perferendis nobis ratione occaecati fuga.',
        UserId: 1,
        RestaurantId: 7,
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-22T09:00:43.000Z',
        Restaurant: {
          id: 7,
          name: 'Jasen Ward',
          tel: '909-961-8157 x325',
          address: "9825 O'Reilly Lodge",
          opening_hours: '08:00',
          description:
            'Cum eum dolor odio. Placeat veniam corrupti assumenda. Ea debitis beatae.',
          image:
            'https://loremflickr.com/320/240/food,dessert,restaurant/?random=7',
          createdAt: '2019-06-22T09:00:43.000Z',
          updatedAt: '2019-06-22T09:00:43.000Z',
          CategoryId: 1
        }
      },
      {
        id: 10,
        text: 'Nisi quam dolorem debitis deserunt esse praesentium et.',
        UserId: 1,
        RestaurantId: 3,
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-22T09:00:43.000Z',
        Restaurant: {
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
          CategoryId: 4
        }
      },
      {
        id: 11,
        text: 'Quos asperiores in nostrum cupiditate excepturi aspernatur.',
        UserId: 1,
        RestaurantId: 1,
        createdAt: '2019-06-23T12:42:45.000Z',
        updatedAt: '2019-06-23T12:42:45.000Z',
        Restaurant: null
      }
    ]
  },
  isFollowed: false,
  followings: [],
  followers: [],
  comments: [],
  favoritedRestaurants: []
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard
  },
  data () {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
      currentUser: dummyUser.currentUser
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      const { profile, isFollowed } = dummyData

      this.user = {
        ...this.user,
        id: profile.id,
        image: profile.image,
        name: profile.name,
        email: profile.email,
        followingsLength: profile.Followings.length,
        followersLength: profile.Followers.length,
        commentsLength: profile.Comments.length,
        favoritedRestaurantsLength: profile.FavoritedRestaurants.length
      }

      this.isFollowed = isFollowed

      this.followings = profile.Followings
      this.followers = profile.Followers
      this.favoritedRestaurants = profile.FavoritedRestaurants
      this.comments = profile.Comments
    }
  }
}

</script>
