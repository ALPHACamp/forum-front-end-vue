<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})"
            >
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$3.cGoUF1lkEfQ2Oi57VpC.xVU3/8NS6yJzBQ0VJKV9AeW0e1trmmS',
      image: 'https://i.imgur.com/JtQJRMZ.png',
      isAdmin: true,
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-23T01:15:48.000Z'
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm',
      image: 'https://i.imgur.com/XooCt5K.png',
      isAdmin: false,
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-23T01:16:31.000Z'
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$0Izt5W6Q4iphLq1ORgsKQu9jbEFdRD3.UaX/HQQg0M4Hp8yWV.XuS',
      image: 'https://i.imgur.com/1T9ddHb.png',
      isAdmin: false,
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-23T01:16:52.000Z'
    }
  ]
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
  components: {
    AdminNav
  },
  data () {
    return {
      users: [],
      currentUser: dummyUser.currentUser
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      this.users = dummyData.users
    },
    toggleUserRole ({ userId, isAdmin }) {
      this.users = this.users.map(user => {
        if (user.id !== userId) {
          return user
        }

        return {
          ...user,
          isAdmin: !isAdmin
        }
      })
    }
  }
}
</script>
