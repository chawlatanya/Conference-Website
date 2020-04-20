<template>
  <div>
    <Countdown end="August 22, 2022"></Countdown>
  </div>
</template>
<script>
import Countdown from 'vuejs-countdown'

export default {
  name:'Countdown',
  components: { Countdown }
}
</script>
