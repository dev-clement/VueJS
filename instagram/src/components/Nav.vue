<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { InstagramOutlined } from '@ant-design/icons-vue'
import Container from './Container.vue'
import AuthModal from './AuthModal.vue'
import { ref } from 'vue'

const router = useRouter()
const username = ref('')
const isAuthenticated = ref(true)

const onSearch = () => {
  if (username.value) {
    router.push(`/profile/${username.value}`)
    username.value = ''
  }
}
</script>

<template>
  <a-config-provider>
    <a-layout-header style="background: #001529; padding: 0">
      <Container>
        <a-row style="height: 64px">
          <a-col :span="8" class="logo-col">
            <div class="logo-group">
              <InstagramOutlined :style="{ marginRight: '8px' }" />
              Instagram
            </div>

            <a-input-search
              v-model:value="username"
              placeholder="Username..."
              style="width: 200px; margin-left: 20px"
              @search="onSearch"
            />
          </a-col>

          <a-col :span="16" class="menu-and-buttons-col">
            <a-menu theme="dark" mode="horizontal" :default-selected-keys="['1']">
              <a-menu-item key="1">
                <router-link to="/home">Home</router-link>
              </a-menu-item>
              <a-menu-item key="2">
                <router-link to="/profile">Profile</router-link>
              </a-menu-item>
              <a-menu-item key="3">
                <router-link to="/settings">Settings</router-link>
              </a-menu-item>
            </a-menu>

            <div class="right-buttons" v-if="!isAuthenticated">
              <AuthModal :isLogin="false" />
              <AuthModal :isLogin="true" />
            </div>
            <div class="right-buttons" v-else>
              <a-button type="primary">Profile</a-button>
              <a-button type="primary">Logout</a-button>
            </div>
          </a-col>
        </a-row>
      </Container>
    </a-layout-header>
  </a-config-provider>
</template>

<style scoped>
.logo-col {
  color: white;
  height: 64px;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  background-color: #001529;
  display: flex;
  align-items: center;
}

/* Ensure the logo text and icon are together */
.logo-group {
  display: flex;
  align-items: center;
}

/* 2. Menu and Buttons Column Styles (span 16) */
.menu-and-buttons-col {
  height: 64px;
  /* Make this column a flex container */
  display: flex;
  align-items: center; /* Vertically center the menu and buttons */
  justify-content: flex-end; /* Push the menu and buttons to the right edge */
}

.menu {
  line-height: 64px;
  width: 100%;
}

/* Ant Design menu is naturally a flex item */
.ant-menu {
  /* Pushes the menu items to the left and the buttons to the far right */
  margin-right: auto;
}

/* This targets the buttons container */
.right-buttons {
  /* Optional: Ensure buttons are tightly aligned */
  display: flex;
  align-items: center;
}

.right-buttons button {
  margin-left: 10px;
}
</style>
