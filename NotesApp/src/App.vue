<script setup>
  import {ref} from 'vue';

  const showModal = ref(false);
  const newNote = ref("");
  const errorMsg = ref("");
  const notes = ref([]);

  function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }

  const addNote = () => {
    if (newNote.value.trim.length < 10) {
      return errorMsg.value = "A note needs to be at least 10 characters";
    }
    console.log("Succeed !")
    notes.value.push({
      id: Math.floor(Math.random() * 1000000)
      , text: newNote.value
      , date: new Date()
      , backgroundColor: getRandomColor()
    });
    showModal.value = false;
    newNote.value = "";
    errorMsg.value = "";
  }
</script>

<template>
  <main>
    <!-- 
      The v-if directrive is the same as v-show, although where v-if remove the html if directive content is false
      , v-show on the other hand make the content with a display: none in the style !! The use of v-show is being
      interesting in case of SEO when you're promoting the website 
    -->
    <div class="overlay" v-if="showModal"> 
      <div class="modal">
        <!-- 
          We could talk about the state of inputs. By default a HTML being an input, comes with a vue state.
          When the user type, the state change, if we're talking about states, that means we're gonna need to
          store that state the same way as we store the modal in the script tag. The state will be reflecting
          the value amongst the content of the input (here, the textarea.). The concept of the state is a two-way binding
        -->
        <p v-if="errorMsg">{{ errorMsg }}</p>
        <textarea name="notes" id="notes" cols="30" rows="10" v-model.trim="newNote"></textarea>
        <button @click="addNote()">Add notes</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <!--
          Iterating over the notes object (being an array as state), we will be able to use v-for to loop
          over each card and display them beautifully to the user. The v-for directive let you iterates
          over array. But we'll need to add another attribute named :key="" this will be a unique value that
          is going different for all the values, using the :key directive update the html once we remove
          an item in the v-for directive. If you don't add the :key directive, vue will reiterate over
          all the array to remove one element.
        -->
        <div class="card" v-for="note in notes" :key="note.id" :style="{ backgroundColor: note.backgroundColor }">
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
  }

  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 25px;
  }

  header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    border-radius: 100%;
    color: white;
    font-size: 20px;
  }

  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .date {
    font-size: 12.5px;
    font-weight: bold;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 10px, 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 20px;
  }

  .modal .close {
    background-color: darkred;
    margin-top: 7px;
  }

  .modal p {
    color: red;
  }
</style>