<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <a href="#">
            {{ restaurant.name }}
          </a>
        </p>
        <span class="badge badge-secondary">{{
          restaurant.Category ? restaurant.Category.name : '未分類'
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant
    }
  }
}
</script>
