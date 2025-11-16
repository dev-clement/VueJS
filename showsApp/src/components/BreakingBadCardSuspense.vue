<script setup>
import BreakingBadCard from './BreakingBadCard.vue';

</script>

<template>
    <Suspense>
      <template #default>
        <BreakingBadCard />
      </template>
      <template #fallback>
        <div class="cards">
          <n-spin size="large"></n-spin>
        </div>
      </template>
    </Suspense>
</template>

<style scoped>
.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    height: 700px
}
</style>