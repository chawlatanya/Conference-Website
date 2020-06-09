<template>
  <div>
    <Countdown end="November 19, 2020"></Countdown>
  </div>
</template>
<script>
import Countdown from 'vuejs-countdown'

export default {
  name: 'CountDown',
  components: { Countdown }
}
</script>
