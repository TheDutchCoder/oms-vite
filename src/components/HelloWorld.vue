<template>
  <div>
    <div>Toggle is {{ state.matches('active') ? 'active' : 'inactive' }}</div>
    <button @click="send('TOGGLE')">Toggle</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useMachine } from '@xstate/vue'
import { Machine } from 'xstate'

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        TOGGLE: 'active',
      }
    },
    active: {
      on: {
        TOGGLE: 'inactive',
      }
    },
  },
})

export default defineComponent({
  name: 'HelloWorld',

  props: {
    msg: {
      type: String,
      required: true
    }
  },

  setup: () => {
    const count = ref(20)
    const { state, send } = useMachine(toggleMachine)

    return {
      count,
      state,
      send,
    }
  }
})
</script>
