<script setup lang="ts">
import Cards from './components/Cards.vue';
import { ref, computed } from 'vue';
import {GENDER, type Invitee} from './types'

const name = ref("")
const gender = ref(GENDER.MALE)
const invitees = ref<Invitee[]>([])

const addInvitee = (): void => {
  if (name.value) {
    invitees.value.push({
      id: Math.floor(Math.random() * 1000000)
      , name: name.value
      , gender: gender.value
    })
    name.value = ''
    gender.value = GENDER.MALE
  }
}

interface Computed {
  female: number;
  male: number;
}

type CountPeoplesType = Computed

const count = computed<CountPeoplesType>(() => {
  return invitees.value.reduce((countObj, invitee) => {
    if (invitee.gender === GENDER.MALE) {
      return {
        ...countObj,
        male: countObj.male + 1
      }
    }
    return {
      ...countObj,
      female: countObj.female + 1
    }
  }, {male: 0, female: 0})
})

</script>

<template>
<main>
  <div>
    <h1>People invited to my party !</h1>
    <div class="input-container">
      <input 
        type="text" 
        placeholder="Name..."
        v-model="name"
        @keypress.enter="addInvitee"
      />
      <select @keypress.enter="addInvitee" v-model="gender">
        <option :value="GENDER.MALE">Male</option>
        <option :value="GENDER.FEMALE">Female</option>
      </select>
    </div>
    <div class="cards-container">
      <Cards 
        v-for="invitee in invitees" 
        :key="invitee.id" 
        :invitee="invitee" 
      />
    </div>
    <div>
      <p>Females - {{ count.female }}</p>
      <p>Males - {{ count.male }}</p>
    </div>
  </div>
</main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
}

input, select {
  width: 100%;
  padding: 5px;
  margin-bottom: 2px;
}
</style>
