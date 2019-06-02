<template>
  <div>
    <admin-nav/>
    <form class="my-4" @submit.stop.prevent="handleCreate">
      <div class="form-row">
        <div class="col-auto">
          <input type="text" class="form-control" placeholder="新增餐廳類別..." v-model="newCategoryName">
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary">新增</button>
        </div>
      </div>
    </form>
    <table class="table" v-show="!isLoading">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="400">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">{{category.id}}</th>
          <td class="position-relative">
            <input
              v-show="category.isEditing"
              type="text"
              class="form-control"
              v-model="category.name"
              @keyup.enter="handleSave({ categoryId: category.id, name: category.name })"
            >
            <div v-show="!category.isEditing" class="category-name">{{ category.name }}</div>

            <span class="cancel" v-show="category.isEditing" @click="handleCancel(category.id)">✕</span>
          </td>
          <td>
            <button
              v-show="!category.isEditing"
              type="button"
              @click="toggleIsEditing(category.id)"
              class="btn btn-link mr-2"
            >Edit</button>
            <button
              v-show="category.isEditing"
              type="button"
              @click.stop.prevent="handleSave({ categoryId: category.id, name: category.name })"
              class="btn btn-link mr-2"
            >Save</button>
            <button
              type="button"
              @click="handleDelete(category.id)"
              class="btn btn-link mr-2"
            >Delete</button>
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

export default {
  name: 'AdminCategories',
  components: {
    AdminNav
  },
  data() {
    return {
      newCategoryName: '',
      categories: [],
      isLoading: true
    }
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) return category

        return {
          ...category,
          nameCache: category.name,
          isEditing: !category.isEditing
        }
      })
    },
    handleCreate() {
      if (!this.newCategoryName) {
        Toast.fire({
          type: 'warning',
          title: '請先填寫餐廳類別'
        })
        return
      }
      this.createCategory(this.newCategoryName)
    },
    handleDelete(categoryId) {
      console.log('categoryId', categoryId)
      this.removeCategory(categoryId)
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) {
          return category
        }
        return {
          ...category,
          name: category.nameCache
        }
      })
      this.toggleIsEditing(categoryId)
    },
    handleSave({ categoryId, name }) {
      if (!name) {
        Toast.fire({
          type: 'warning',
          title: '請先填寫餐廳類別'
        })
        return
      }
      this.updateCategory({ categoryId, name })
    },
    async fetchCategories() {
      try {
        const {
          data: { categories },
          statusText
        } = await adminAPI.categories.get()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.categories = categories.map(category => ({
          ...category,
          isEditing: false
        }))
        this.isLoading = false
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },
    async createCategory(name) {
      try {
        const {
          data: { status, category },
          statusText
        } = await adminAPI.categories.new({
          name
        })

        if (statusText !== 'OK' || status !== 'success') {
          throw new Error(statusText)
        }

        this.categories.push({
          ...category,
          isEditing: false
        })

        this.newCategoryName = ''
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法新增餐廳類別，請稍後再試'
        })
      }
    },
    async updateCategory({ categoryId, name }) {
      try {
        const { data, statusText } = await adminAPI.categories.update({
          categoryId,
          name
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.toggleIsEditing(categoryId)
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法更新餐廳類別，請稍後再試'
        })
      }
    },
    async removeCategory(categoryId) {
      try {
        const { data, statusText } = await adminAPI.categories.remove({
          categoryId
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.categories = this.categories.filter(
          category => category.id !== categoryId
        )
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法刪除該餐廳類別，請稍後再試'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}
.btn-link {
  width: 62px;
}
.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  font-family: monospace;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
}
</style>
