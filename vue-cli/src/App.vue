<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8">
        <h1>Animations</h1>
        <hr />
        <button class="btn btn-primary" @click="show = !show">
          Show Alert
        </button>
        <hr />
        <select name="" id="" v-model="alertAnimation" class="form-control">
          <option value="fade">fade</option>
          <option value="slide">slide</option>
        </select>
        <br /><br />
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-show="show">This is some info</div>
        </transition>
        <transition :name="alertAnimation" appear>
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__shake"
        >
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">
            This is some info
          </div>
          <div class="alert alert-warning" v-else key="warning">
            This is some warning
          </div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="load = !load">Load</button>
        <br /><br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div
            style="width: 100px; height: 100px; background-color: blue;"
            v-if="load"
          ></div>
        </transition>
      </div>
    </div>
    <hr />
    <div class="row">
      <button
        class="btn btn-primary"
        @click="
          selectedComponent == 'appSuccessAlert'
            ? (selectedComponent = 'appDangerAlert')
            : (selectedComponent = 'appSuccessAlert')
        "
      >
        Change component
      </button>
      <br /><br />
      <transition name="fade" mode="out-in">
        <component :is="selectedComponent"></component>
      </transition>
    </div>
    <hr />
    <div class="row">
      <button class="btn btn-primary" @click="addItem">Add item</button>
      <ul class="list-group">
        <transition-group name='slide'>
          <li
            class="list-group-item"
            v-for="(number, index) in numbers"
            :key="number"
            @click="removeItem(index)"
            style="cursor: pointer"
          >
            {{ number }}
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";

export default {
  data() {
    return {
      show: true,
      load: true,
      alertAnimation: "fade",
      elWith: 100,
      selectedComponent: "appSuccessAlert",
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elWith = 100;
      el.style.width = this.elWith + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elWith + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elWith = 300;
      el.style.width = this.elWith + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elWith - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  }
};
</script>

<style lang="scss">
@import "assets/breakpoints";
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
