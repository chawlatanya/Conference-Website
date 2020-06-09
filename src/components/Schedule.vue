<template>
  <div class=" pl-md-4">
    <div class="d-md-flex flex-md-row">
      <h1 class="heading pt-md-0 pt-3 ">Schedule</h1>
    </div>
    <div class="d-md-flex">
      <div class="card col-md-4">
        <div class="card-body">
          <h5 class="card-title border-bottom">Event Venue</h5>
          <h6 class="card-subtitle mb-2 text-muted mt-4">IGDTUW</h6>
          <p class="card-text mt-md-4">
            Indira Gandhi Delhi Technical University for Women (IGDTUW) has been
            upgraded from Indira Gandhi Institute of Technology in May 2013 vide
            Delhi State Legislature Act 9, 2012, as a non-affiliating teaching
            and research University at Delhi to facilitate and promote studies,
            research, technology, innovation, incubation and extension work in
            emerging areas of professional education among women, with focus on
            engineering, technology, applied sciences, management and its allied
            areas with the objective to achieve excellence in these and related
            fields.
          </p>
          <a href="https://www.igdtuw.ac.in/" class="card-link"
            >Visit Website &rarr;</a
          >
        </div>
      </div>
      <div class="card mt-md-0 mt-4 offset-md-1 col-md-7">
        <div class="card-body">
          <div class="">
            <h5 class="card-title border-bottom">Event Schedule</h5>
            <div class="d-flex justify-content-between">
              <div class="h-40">
                <h4
                  :class="{ 'day-active': isDayOneActive }"
                  class="day"
                  @click="setDayOneActive"
                >
                  Day 1
                </h4>
              </div>
              <div>
                <h4
                  :class="{ 'day-active': !isDayOneActive }"
                  class="day"
                  @click="setDayTwoActive"
                >
                  Day 2
                </h4>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column" v-if="isDayOneActive">
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper headers font-w700">
                Time
              </div>
              <div class="item_wrapper headers ml-3 font-w700">
                Event
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                11:00 AM - 12:00 Noon
              </div>
              <div class="item_wrapper ml-3">
                Testing
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                12:00 Noon - 1:05 PM
              </div>
              <div class="item_wrapper ml-3">
                Inauguration
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                1:10 PM - 1:55 PM
              </div>
              <div class="item_wrapper ml-3">
                Keynote Address - 1
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                1:55 PM – 2:20 PM
              </div>
              <div class="item_wrapper ml-3">
                Lunch Break
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                2:30 PM – 3:30 PM
              </div>
              <div class="item_wrapper ml-3">
                Paper Presentations: Session 1
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                3:35 PM – 4:15 PM
              </div>
              <div class="item_wrapper ml-3">
                Keynote Address - 2
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                4:20 PM - 5:35 PM
              </div>
              <div class="item_wrapper ml-3">
                Paper Presentations: Session 2
              </div>
            </div>
            <div class="d-flex justify-content-around align-items-start">
              <div class="item_wrapper right-border">
                5:40 PM – 7:00 PM
              </div>
              <div class="item_wrapper ml-3">
                Paper Presentations: Session 3
              </div>
            </div>
          </div>
          <div class="d-flex flex-column" v-else>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper headers font-w700">
                Time
              </div>
              <div class="item_wrapper headers ml-3 font-w700">
                Event
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                11:00 AM - 12:00 Noon
              </div>
              <div class="item_wrapper ml-3">
                Keynote Address - 3
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                12:00 Noon - 1:05 PM
              </div>
              <div class="item_wrapper ml-3">
                Keynote Address - 4
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                1:10 PM - 1:55 PM
              </div>
              <div class="item_wrapper ml-3">
                Lunch Break
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                1:55 PM – 2:20 PM
              </div>
              <div class="item_wrapper ml-3">
                Paper Presentations: Session 4
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                2:30 PM – 3:30 PM
              </div>
              <div class="item_wrapper ml-3">
                Paper Presentations: Session 5
              </div>
            </div>
            <div
              class="d-flex justify-content-around align-items-start border-bottom"
            >
              <div class="item_wrapper right-border">
                3:35 PM – 4:15 PM
              </div>
              <div class="item_wrapper ml-3">
                Paper Presentations: Session 6
              </div>
            </div>
            <div class="d-flex justify-content-around align-items-start">
              <div class="item_wrapper right-border">
                5:40 PM – 7:00 PM
              </div>
              <div class="item_wrapper ml-3">
                Paper Presentations: Session 7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Schedule",
  data() {
    return {
      isDayOneActive: true
      // iDayTwoActive: false
    };
  },
  methods: {
    setDayOneActive() {
      this.isDayOneActive = true;
      // this.isDayTwoActive = false
    },
    setDayTwoActive() {
      this.isDayOneActive = false;
      // this.isDayTwoActive = true
    }
  }
};
</script>
<style lang="scss" scoped>
.item_wrapper {
  width: 20rem !important;
  padding: 1rem;
  &.right-border {
    border-right: 1px solid #e6ebf4;
  }
}
@media screen and (max-width: 600px) {
  .item_wrapper {
    height: 4.5rem;
    width: 7rem !important;
    padding: 0rem;
    &.right-border {
      border-right: 1px solid #e6ebf4;
    }
    &.headers {
      height: 2rem !important;
    }
  }
}
.day-active {
  text-decoration: underline;
  text-underline-position: under;
  color: black !important;
  font-weight: 700 !important;
  opacity: 1 !important;
}
.day {
  cursor: pointer !important;
  opacity: 0.7;
  color: #7a7a7a;
}
</style>
