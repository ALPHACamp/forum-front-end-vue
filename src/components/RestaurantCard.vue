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
          <router-link
            :to="{ name: 'restaurant-show', params: { id: restaurant.id }}"
          >{{ restaurant.name }}</router-link>
        </p>
        <span class="badge badge-secondary">{{restaurant.Category.name}}</span>
        <p class="card-text text-truncate">{{restaurant.description}}</p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          @click.stop.prevent="removeFavorite(restaurant.id)"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
        >移除最愛</button>
        <button
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
        >加到最愛</button>
        <button
          v-if="restaurant.isLiked"
          @click.stop.prevent="removeLike(restaurant.id)"
          type="button"
          class="btn btn-danger like mr-2"
        >Unlike</button>
        <button
          v-else
          @click.stop.prevent="addLike(restaurant.id)"
          type="button"
          class="btn btn-primary like mr-2"
        >Like</button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "@/api/users";
import { Toast } from "@/utils/helpers";

export default {
  name: "RestaurantCard",
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    };
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        const { data, statusText } = await usersAPI.addFavorite({
          restaurantId
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        };
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法將餐廳加入最愛，請稍後再試"
        });
      }
    },
    async removeFavorite(restaurantId) {
      try {
        const { data, statusText } = await usersAPI.removeFavorite({
          restaurantId
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        };
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法將餐廳從最愛移除，請稍後再試"
        });
      }
    },
    async addLike(restaurantId) {
      try {
        const { data, statusText } = await usersAPI.addLike({ restaurantId });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        };
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法按讚，請稍後再試"
        });
      }
    },
    async removeLike(restaurantId) {
      try {
        const { data, statusText } = await usersAPI.removeLike({
          restaurantId
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        };
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取消按讚，請稍後再試"
        });
      }
    }
  }
};
</script>
<style lang="css" scoped>
.badge.badge-secondary {
  padding: 0;
  margin-bottom: 7px !important;
  color: #bd2333;
  background-color: transparent;
}

.card {
  margin-bottom: 2.1rem !important;
}

.card-body {
  padding: 17.5px !important;
  height: 135px;
}

.card-footer .card-img-top {
  height: 202px;
}
</style>