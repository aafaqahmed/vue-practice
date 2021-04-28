<template>
  <div class="container">
    <div class="container">
      <p v-local-highlight:background.blink="'red'" v-text="'This is some text!'"></p>
      <p v-highlight.delayed="'red'" v-text="'This is some text!'"></p>
    </div>
    <form>
      <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
                type="text"
                id="email"
                class="form-control"
                v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                class="form-control"
                v-model="userData.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
                type="number"
                id="age"
                class="form-control"
                v-model="userData.age">
          </div>

        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
              id="message"
              rows="5"
              class="form-control"
              v-model="message"></textarea>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                  type="checkbox"
                  id="sendmail"
                  value="SendMail"
                  v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input
                  type="checkbox"
                  id="sendInfomail"
                  value="SendInfoMail"
                  v-model="sendMail"> Send Infomail
            </label>
          </div>

        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
                type="radio"
                id="male"
                value="Male"
                v-model="gender"> Male
          </label>
          <label for="female">
            <input
                type="radio"
                id="female"
                value="Female"
                v-model="gender"> Female
          </label>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
              id="priority"
              class="form-control"
              v-model="selectedPriority">
            <option :key="priority.id" v-for="priority in priorities">{{ priority.value }}</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr>
      <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
              class="btn btn-primary"
              @click.prevent="submitted()">Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row justify-content-center" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail:{{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age:{{ userData.age }}</p>
            <p style="white-space: pre">Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li :key="i" v-for="(item,i) in sendMail">{{ item }}</li>
            </ul>
            <p>Gender:{{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './Switch';
export default {
  data() {
    return{
      userData:{
        email:'',
        password:'',
        age:23
      },
      message:'',
      sendMail:[],
      gender: 'Male',
      selectedPriority: 'Medium',
      dataSwitch: 'true',
      isSubmitted: 'false',
      priorities: [
        {
          id: '1',
          value: 'Low'
        },
        {
          id: '2',
          value: 'Medium'
        },
        {
          id: '3',
          value: 'High'
        },
      ]
    }
  },
  methods:{
    submitted(){
      this.isSubmitted = true
    }
  },
  components: {
    appSwitch: Switch,
  },
  directives: {
    'local-highlight':{
      bind(el, binding){
        var delay = 0;
        if(binding.modifiers['delayed']){
          delay = 3000;
        }
        if(binding.modifiers['blink']){
          let mainColor = binding.value;
          let secondColor = 'blue';
          let currentColor = mainColor;
          setTimeout(()=>{
            setInterval(()=>{
              currentColor == secondColor? currentColor = mainColor : currentColor = secondColor;
              if(binding.arg == 'background'){
                el.style.background = currentColor;
              }else{
                el.style.color = currentColor;
              }
            },1000)

          },delay)
        }else{
          setTimeout(()=>{
            if(binding.arg == 'background'){
              el.style.background = binding.value;
            }else{
              el.style.color = binding.value;
            }
          },delay)
        }
      }
    }
  }
}
</script>

<style>

</style>