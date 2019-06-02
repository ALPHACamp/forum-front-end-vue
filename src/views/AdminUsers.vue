<template>
  <div>
    <admin-nav/>

    <table class="table" v-show="!isLoading">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{user.id}}</th>
          <td>{{user.email}}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              @click="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})"
              type="button"
              class="btn btn-link p-0"
            >{{ user.isAdmin ? 'set as user' : 'set as admin'}}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from '@/api/admin'
import { Toast } from '@/utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav
  },
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    toggleUserRole({ userId, isAdmin }) {
      this.updateUser({
        userId,
        isAdmin: !isAdmin
      })
    },
    async fetchUsers() {
      try {
        const {
          data: { users },
          statusText
        } = await adminAPI.users.get()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.users = users
        this.isLoading = false
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得會員資料，請稍後再試'
        })
      }
    },
    async updateUser({ userId, isAdmin }) {
      try {
        const { data, statusText } = await adminAPI.users.update({
          userId,
          isAdmin: isAdmin.toString()
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          }

          return {
            ...user,
            isAdmin
          }
        })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法更新會員角色，請稍後再試'
        })
      }
    }
  }
}
</script>
