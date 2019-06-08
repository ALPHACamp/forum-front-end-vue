<template>
  <form>
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea class="form-control" v-model="text" rows="3"></textarea>
    </div>
    <div class="text-right">
      <button type="button" class="btn btn-primary mr-0" @click="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import commentsAPI from "@/api/comments";
import { Toast } from "@/utils/helpers";

export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!this.text) {
        Toast.fire({
          type: "warning",
          title: "您尚未填寫任何評論"
        });
        return;
      }

      this.createComment();
    },
    async createComment() {
      try {
        const { data, statusText } = await commentsAPI.new({
          restaurantId: this.restaurantId,
          text: this.text
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        });

        this.text = "";
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法新增評論，請稍後再試"
        });
      }
    }
  }
};
</script>
<style scoped>
.form-group {
  margin: 21px 0 8px;
}
label {
  font-size: 15px !important;
}
</style>