<template>
  <div class="categray">
    <div>
      <header class="category-header wrap van-hairline--bottom">
        <i class="nbicon nbfanhui" @click="goHome"></i>
        <div class="header-search">
          <i class="nbicon nbSearch"></i>
          <router-link class="search-title" to="./product-list?from=category">全场50元起步</router-link>
        </div>
        <i class="iconfont icon-More"></i>
      </header>
      <nav-bar></nav-bar>
      <div ref="searchWrap" class="search-wrap">
        <list-scroll :scroll-data="state.categoryData" class="nav-side-wrapper">
          <ul class="nav-side">
            <li
              v-for="item in state.categoryData"
              :key="item.categoryId"
              :class="{ active: state.currentIndex == item.categoryId }"
              @click="selectMenu(item.categoryId)"
              v-text="item.categoryName"
            ></li>
          </ul>
        </list-scroll>
        <div class="search-content">
          <list-scroll :scroll-data="state.categoryData">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <template v-for="(category, index) in state.categoryData">
                  <div v-if="state.currentIndex == category.categoryId" :key="index" class="swiper-slide">
                    <!-- <img class="category-main-img" :src="category.mainImgUrl" v-if="category.mainImgUrl"/> -->
                    <div
                      v-for="(products, productsIndex) in category.secondLevelCategoryVOS"
                      :key="productsIndex"
                      class="category-list"
                    >
                      <p class="catogory-title">{{ products.categoryName }}</p>
                      <div
                        v-for="(product, productIndex) in products.thirdLevelCategoryVOS"
                        :key="productIndex"
                        class="product-item"
                        @click="selectProduct(product)"
                      >
                        <img src="//s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png" class="product-img" />
                        <p class="product-title" v-text="product.categoryName"></p>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </list-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import navBar from "@/components/NavBar.vue";
import listScroll from "@/components/ListScroll.vue";
import { getCategory } from "@/api/shop";
import { showLoadingToast, closeToast } from "vant";
const router = useRouter();
// composition API 获取 refs 的形式
const searchWrap = ref(null);
const state = reactive({
  categoryData: [],
  currentIndex: 15
});

onMounted(async () => {
  let $screenHeight = document.documentElement.clientHeight;
  console.log("searchWrap.value", searchWrap.value);
  searchWrap.value.style.height = $screenHeight - 100 + "px";
  showLoadingToast("加载中...");
  const { data } = await getCategory();
  closeToast();
  state.categoryData = data;
});

const goHome = () => {
  router.push({ path: "home" });
};

const selectMenu = index => {
  state.currentIndex = index;
};

const selectProduct = item => {
  console.log("item", item.categoryId);
  router.push({ path: "/product-list", query: { categoryId: item.categoryId } });
};
</script>
<style lang="less" scoped>
@import "@/style/mixin";
.categray {
  .category-header {
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    .fj();
    .wh(100%, 50px);
    line-height: 50px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 15px;
    color: #656771;
    z-index: 10000;
    &.active {
      background: @primary;
    }
    .icon-left {
      font-size: 25px;
      font-weight: bold;
    }
    .header-search {
      display: flex;
      width: 80%;
      height: 20px;
      line-height: 20px;
      margin: 10px 0;
      padding: 5px 0;
      color: #232326;
      background: #f7f7f7;
      border-radius: 20px;
      .nbSearch {
        padding: 0 10px 0 20px;
        font-size: 17px;
      }
      .search-title {
        font-size: 12px;
        color: #666;
        line-height: 21px;
      }
    }
    .icon-More {
      font-size: 20px;
    }
  }
}
.search-wrap {
  .fj();
  width: 100%;
  margin-top: 50px;
  background: #f8f8f8;
  .nav-side-wrapper {
    width: 28%;
    height: 100%;
    overflow: hidden;
    .nav-side {
      width: 100%;
      .boxSizing();
      background: #f8f8f8;
      li {
        width: 100%;
        height: 56px;
        text-align: center;
        line-height: 56px;
        font-size: 14px;
        &.active {
          color: @primary;
          background: #fff;
        }
      }
    }
  }
  .search-content {
    width: 72%;
    height: 100%;
    padding: 0 10px;
    background: #fff;
    overflow-y: scroll;
    touch-action: pan-y;
    * {
      touch-action: pan-y;
    }
    .boxSizing();
    .swiper-container {
      width: 100%;
      .swiper-slide {
        width: 100%;
        .category-main-img {
          width: 100%;
        }
        .category-list {
          display: flex;
          flex-wrap: wrap;
          flex-shrink: 0;
          width: 100%;
          .catogory-title {
            width: 100%;
            font-size: 17px;
            font-weight: 500;
            padding: 20px 0;
          }
          .product-item {
            width: 33.3333%;
            margin-bottom: 10px;
            text-align: center;
            font-size: 15px;
            .product-img {
              .wh(30px, 30px);
            }
          }
        }
      }
    }
  }
}
.fade-out-enter-active,
.fade-out-leave-active {
  // transition: opacity 0.5s;
}

.fade-out-enter,
.fade-out-leave-to {
  // opacity: 0;
}
</style>
