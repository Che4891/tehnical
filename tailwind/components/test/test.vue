<script setup lang="ts">

import {useUsersStore} from "~/stores/users.store";

const name: Ref<string> = ref("Anton");
const  version: Ref<number> = ref(3);
const defaultInput: Ref<HTMLInputElement | null> = ref(null);
const vModel: Ref<string> = ref('Test Text')
const user = ref({firstName: "Anton", lastName: "Izotov",});
const testProvide = inject('testProv')
const store = useUsersStore()
const customer = reactive({
  company: "TestCompany",
  owner: "TestOwner",
  people: 10,
});
const mySlides = [
  { image: "https://armyinform.com.ua/wp-content/uploads/2025/06/photo_5411500725734864674_y.jpg", name: "Slide 1" },
  { image: "https://nmcpto.poltava.ua/wp-content/uploads/2023/10/taktychna-medytsyna.jpg", name: "Slide 2" },
  { image: "https://armyinform.com.ua/wp-content/uploads/2022/06/photo1655614952-1.jpeg", name: "Slide 3" },
  { image: "https://images.unian.net/photos/2025_08/1754135373-3454.jpg?r=878772", name: "Slide 4" }
];
const emit = defineEmits(['isEmit']);

// const dublVersion = computed<number>(() => {
//     return customer.people * 2
// })

// The Same
const dublVersion = computed<number>(() => customer.people * 2);

const error = ref <null | unknown>(null)

console.log(error.value)

onErrorCaptured(
    e => {
      console.log('test', e);
      error.value = e
      return
    }

)

watch([dublVersion, customer, vModel], (newValue, oldValue) => {
  console.log("newValue dublVersion", newValue[0]);
  console.log("oldValue dublVersion", oldValue[0]);
  console.log("oldValue people", newValue[1]);
  console.log("newValue people", oldValue[1]);
  console.log('new vmodel', newValue[2]);
});

function onClick(val: string) {

  console.log(val);

 console.log(defaultInput.value?.value);

  console.log("object", user.value);

  customer.people = customer.people * 2;


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
    <br/>
    <span> IS provide {{ testProvide }} </span>
    <br/>
    <span class="bg-red-700 ml-4"> {{ version }} </span>
    <p class="bg-green-300">{{ user.firstName }}</p>
    <div>Duble version: {{ dublVersion }}</div>

    <div v-if="error" class="text-red-700">
        SHOW ERRORS
    </div>

    <suspense v-else>
      <div v-for="user in store.isUserName">User name in test array {{user}} </div>
    </suspense>

    <input type="text" placeholder='default Email' ref="defaultInput"/>
<br/>
    <input v-model="vModel" type="text" placeholder="name" />

    <uiLabel for="email">Email</uiLabel>
    <uiInput id="email" type="email" placeholder="Email" />
    <uiButton class="ml-4" @click="onClick('test')">Click me</uiButton>
  </div>

  <div>
    TEST SWIPER TS

    <uiSwiper :slides="mySlides"
              :slides-per-view="1"
              :space-between="100"
              :pagination="true"
              :loop="true">

    </uiSwiper>
  </div>
  <div>
    TEST EDITOR TIPTAP
    <uiEditor> </uiEditor>
  </div>
  <br>
  <div>
    FILE INPUT

    <uiInput  type="file" accept="image/*"/>
  </div>
</template>

<style lang="css" scoped></style>
