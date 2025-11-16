<script setup>
import { ref, TransitionGroup } from 'vue';

//const showGreet = ref(false)
const persons = ref([
  'Selena Damo'
  , 'Kevin Johnston'
])
const nameInput = ref('')

const addInvitee = () => {
  persons.value.unshift(nameInput.value)
  nameInput.value = ""
}

const removePerson = index => {
  persons.value.splice(index, 1)
}
</script>

<template>
  <main>
<!--    
    <div class="container">
      <Transition name="fade">
        <h1 v-if="showGreet">Hello World !</h1>
        <h1 v-else>Good Bye World !</h1>
      </Transition>
    </div>
    <button @click="showGreet = !showGreet">Toggle</button>
  -->
    <div class="container">
      <input 
        type="text" 
        placeholder="Add person to invite..."
        v-model="nameInput"
        @keypress.enter="addInvitee"
      />
      <TransitionGroup name="invitees">
        <li 
          v-for="(person, index) in persons" 
          :key="person"
          @click="removePerson(index)"
        >{{ person }}</li>
      </TransitionGroup>
    </div>
  </main>
</template>

<style scoped>
/*.fade-enter-to {
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-leave-from {
  opacity: 1
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 0.5s ease;
}

.container {
  position: relative;
  width: 260px;
}

h1 {
  position: absolute;
}

button {
  position: absolute;
  margin-top: 50px;
}*/

.container {
  max-width: 300px;
  margin: 0 auto;
}

.container input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.13);
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
}

.container ul {
  display: inline;
  list-style: none;
  margin: 0px;
  padding: 0px;
}

.container li {
  list-style: none;
  width: 300px;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
  text-align: center;
  cursor: pointer;
}

/* Transition group */
.invitees-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.invitees-enter-to {
  opacity: 1;
  transform: scale(1);
}

.invitees-enter-active {
  transition: all 0.5s ease;
}

.invitees-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}

.invitees-move {
  transition: all 0.5s ease;
}
</style>
