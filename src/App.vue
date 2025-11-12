<template>
  <form class="form-inline">
    <div class="form-group">
      <label>基础伤害量</label>
      <input v-model="baseDamage" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>暴击</label>
      <input v-model="criticalHit" type="checkbox" class="form-control" />
    </div>
    <div v-if="criticalHit" class="form-group">
      <label>暴击倍率</label>
      <!-- <input v-model="criticalHitMultiplier" type="text" class="form-control" /> -->
      <select v-model="criticalHitMultiplier" class="form-control">
        <option value="1.5">
          1.5
        </option>
        <option value="2">
          2
        </option>
        <option value="2.5">
          2.5
        </option>
      </select>
    </div>
  </form>
  <div>{{ finalDamage }}</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const baseDamage = ref(70);
// const damageDealtAmplifications = ref([]);

const criticalHit = ref(false);
const criticalHitMultiplier = ref(2);
const finalDamage = computed(() => {
  let damage = baseDamage.value;
  if (criticalHit.value) {
    damage *= Number(criticalHitMultiplier.value);
  }
  return damage;
});
</script>

<style scoped>
</style>
