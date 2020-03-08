<template>
  <div class="container py-5">
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          >
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            :disabled="isProcessing"
            @click.stop.prevent="createCategory"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <Spinner v-if="isLoading" />
    <table
      v-else
      class="table"
    >
      <thead class="thead-dark">
        <tr>
          <th
            scope="col"
            width="60"
          >
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th
            scope="col"
            width="210"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="category in categories"
          :key="category.id"
        >
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div
              v-show="!category.isEditing"
              class="category-name"
            >
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            >
            <span
              v-show="category.isEditing"
              class="cancel"
              @click.stop.prevent="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  name: 'AdminCategories',
  components: {
    AdminNav,
    Spinner
  },
  data () {
    return {
      categories: [],
      newCategoryName: '',
      isProcessing: false,
      isLoading: true
    }
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories () {
      try {
        this.isLoading = true
        const { data } = await adminAPI.categories.get()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.categories = data.categories.map(category => ({
          ...category,
          isEditing: false,
          nameCached: ''
        }))
        this.isLoading = false
      } catch (error) {
        console.error(error.message)
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },
    async createCategory () {
      try {
        this.isProcessing = true

        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
          isEditing: false
        })

        this.isProcessing = false
        this.newCategoryName = ''
      } catch (error) {
        console.error(error.message)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳類別，請稍後再試'
        })
      }
    },
    async deleteCategory (categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({ categoryId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.categories = this.categories.filter(
          category => category.id !== categoryId
        )

        Toast.fire({
          icon: 'success',
          title: '成功刪除該餐廳類別'
        })
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法刪除該餐廳類別，請稍後再試'
        })
      }
    },
    async updateCategory ({ categoryId, name }) {
      try {
        const { data } = await adminAPI.categories.update({
          categoryId,
          name
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.toggleIsEditing(categoryId)
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳類別，請稍後再試'
        })
      }
    },
    toggleIsEditing (categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name
          }
        }

        return category
      })
    },
    handleCancel (categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,

            // 把原本的餐廳類別名稱還回去
            name: category.nameCached
          }
        }

        return category
      })

      this.toggleIsEditing(categoryId)
    }
  }
}
</script>

<style scoped>
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
