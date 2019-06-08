<template>
  <div>
    <h2 class="my-4">所有評論</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          @click.stop.prevent="removeComment(comment.id)"
          type="button"
          class="btn btn-danger float-right"
        >Delete</button>
        <h3>
          <router-link
            :to="{ name: 'user-show', params: { id: comment.User.id } }"
          >{{ comment.User.name }}</router-link>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">{{comment.createdAt | fromNow }}</footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "@/utils/helpers";
import { fromNowFilter } from "@/utils/mixin";
import commentsAPI from "@/api/comments";

export default {
  name: "RestaurantComments",
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {
    async removeComment(commentId) {
      try {
        const { data, statusText } = await commentsAPI.remove({
          commentId
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        this.$emit("after-remove-comment", {
          commentId
        });

        Toast.fire({
          type: "success",
          title: "移除評論成功"
        });
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法移除評論，請稍後再試"
        });
      }
    }
  }
};
</script>
<style lang="css" scoped>
h2.my-4 {
  margin-bottom: 1.1rem !important;
  font-size: 18px;
}
h3 {
  margin-bottom: 3px;
  line-height: 1.3;
}
.swal2-icon.swal2-success [class^="swal2-success-line"] {
  background-color: #bd2333 !important;
}
.swal2-popup.swal2-toast .swal2-success,
.swal2-icon.swal2-success .swal2-success-ring {
  border-color: rgba(189, 35, 51, 0.3) !important;
}
button.btn,
.text-right button.btn {
  margin: 0 !important;
}
</style>
