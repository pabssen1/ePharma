<template>
  <div class="box" style="max-width:100%;max-height:50%;">
    <div class="container">
      <div class="glass">
        <div class="cap-left"></div>
        <div class="cap-right"></div>
        <div class="fill">
          <div class="bubble-1"></div>
          <div class="bubble-2"></div>
          <div class="bubble-3"></div>
          <div class="bubble-4"></div>
          <div class="bubble-5"></div>
          <div class="bubble-6"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.box {
  position: relative;
  background: none;
  width: 600px;
  height: 400px;
  display: block;
  margin: auto;
  margin-top: 5%;
}

.glass {
  position: absolute;
  height: 50%;
  width: 15%;
  background: #b5f0e8;
  opacity: 0.7;
  top: 20%;
  left: 40%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  z-index: 2;
}

.cap-left {
  position: absolute;
  width: 50%;
  height: 15%;
  top: -15%;
  background: #b9661c;
}
.cap-right {
  position: absolute;
  width: 50%;
  height: 15%;
  top: -15%;
  right: 0%;
  background: #9a501d;
}

.fill {
  position: absolute;
  height: 90%;
  width: 80%;
  background: #da0000;
  opacity: 0.8;
  bottom: 5%;
  left: 10%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  animation: slime 1.5s infinite;
  z-index: 1;
}

.bubble-1 {
  position: absolute;
  height: 10%;
  width: 35%;
  top: 10%;
  left: 15%;
  border-radius: 50%;
  background: #bf0303;
}

.bubble-2 {
  position: absolute;
  height: 8%;
  width: 33%;
  top: 25%;
  right: 15%;
  border-radius: 50%;
  background: #bf0303;
}

.bubble-3 {
  position: absolute;
  height: 10%;
  width: 35%;
  top: 40%;
  left: 15%;
  border-radius: 50%;
  background: #bf0303;
}

.bubble-4 {
  position: absolute;
  height: 8%;
  width: 33%;
  top: 55%;
  right: 15%;
  border-radius: 50%;
  background: #bf0303;
}

.bubble-5 {
  position: absolute;
  height: 8%;
  width: 33%;
  top: 75%;
  left: 15%;
  border-radius: 50%;
  background: #bf0303;
}

@keyframes slime {
  0% {
    height: 0%;
  }
  10% {
    height: 10%;
  }
  15% {
    height: 15%;
  }
  20% {
    height: 20%;
  }
  25% {
    height: 25%;
  }
  30% {
    height: 30%;
  }
  35% {
    height: 35%;
  }
  40% {
    height: 40%;
  }
  45% {
    height: 45%;
  }
  50% {
    height: 50%;
  }
  55% {
    height: 55%;
  }
  60% {
    height: 60%;
  }
  65% {
    height: 65%;
  }
  70% {
    height: 70%;
  }
  75% {
    height: 75%;
  }
  80% {
    height: 80%;
  }
  85% {
    height: 85%;
  }
  90% {
    height: 90%;
  }
  95% {
    height: 92%;
  }
  100% {
    height: 93%;
  }
}
</style>
