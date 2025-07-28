<script setup lang="ts">
const name: string = ref("Anton"),
  version: number = ref(3),
  defultInput: string = ref(null),
  vmodel: string = ref('Test Text')

const user = ref({
  firstName: "Anton",
  lastName: "Izotov",
});

const customer = reactive({
  company: "TestCompamy",
  ouner: "TestOuner",
  people: 10,
});

const emit = defineEmits(['isEmit']);

// const dublVersion = computed<number>(() => {
//     return customer.people * 2
// })

// The Same
const dublVersion = computed<number>(() => customer.people * 2);

watch([dublVersion, customer, vmodel], (newValue, oldValue) => {
  console.log("newValue dublVersion", newValue[0]);
  console.log("oldValue dublVersion", oldValue[0]);
  console.log("oldValue people", newValue[1]);
  console.log("newValue people", oldValue[1]);
  console.log('new vmodel', newValue[2]);
});

function onClick(val) {

 console.log(defultInput.value.value);
    
  console.log("object", user.value);

  customer.people = customer.people * 2;

  name.value = 43;

  console.log(typeof name.value);

  console.log(isRef(name));

  console.log(isRef(name.value));

  console.log("customer", customer);

  user.value.firstName = "Petro";
  console.log("user", user.value.firstName);

  emit('isEmit',true);

//   context.emit('changePeople', customer.people)
}
</script>

<template>
  <div>
    <span> IS NAME{{ name }} </span>
    <span class="bg-red-700 ml-4"> {{ version }} </span>
    <p class="bg-green-300">{{ user.firstName }}</p>
    <div>Dubl version: {{ dublVersion }}</div>

    <input type="text" placeholder='defult Email' ref="defultInput"/>
<br/>
    <input v-model="vmodel" type="text" placeholder="name" />

    <uiLabel for="email">Email</uiLabel>
    <uiInput id="email" type="email" placeholder="Email" />
    <uiButton class="ml-4" @click="onClick('test')">Click me</uiButton>
  </div>
</template>

<style lang="css" scoped></style>
