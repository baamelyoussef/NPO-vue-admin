<template>
  <div>
    <v-container>
      <div class="d-flex align-center mt-7">
        <!-- <v-avatar size="110" class="mr-5">
          <img src="@/assets/img/brian-hughes.jpg" />
        </v-avatar> -->
        <div>
          <h1 class="font-weight-bold text-4xl">Welcome back, NP Project!</h1>
          <div class="d-flex align-center mt-3">
            <v-icon class="mr-3" size="24">mdi-bell</v-icon>
            <p class="caption ma-0">You have 2 new messages and 15 new tasks</p>
          </div>
        </div>
      </div>
    </v-container>
    <div class="accent mt-6">
      <v-container class="px-md-7">
        <!-- box -->
        <h3 class="my-2" style="opacity: 0.85">
          DIY (DO IT YOURSELF) Projects Summary
        </h3>
        <v-row>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h5 class="text--text">DIY Projects Allocated</h5>
                <div class="text-center">
                  <div class="blue--text my-2">
                    <div class="display-4 font-weight-bold">21</div>
                    <p>Allocated</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 13</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h5 class="text--text">DIY Projects Submitted</h5>
                <div class="text-center">
                  <div class="red--text my-2">
                    <div class="display-4 font-weight-bold">17</div>
                    <p>Submitted</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 9</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h5 class="text--text">DIY Projects Approved</h5>
                <div class="text-center">
                  <div class="orange--text my-2">
                    <div class="display-4 font-weight-bold">24</div>
                    <p>Approved</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 19</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h5 class="text--text">DIY Projects Rejected</h5>
                <div class="text-center">
                  <div class="green--text my-2">
                    <div class="display-4 font-weight-bold">38</div>
                    <p>Rejected</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 16</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- box -->
        <h3 class="mt-11 mb-2" style="opacity: 0.85">Deep Projects Summary</h3>
        <v-row>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h5 class="text--text">DEEP Projects Allocated</h5>
                <div class="text-center">
                  <div class="blue--text my-2">
                    <div class="display-4 font-weight-bold">11</div>
                    <p>Allocated</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 13</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h5 class="text--text">DEEP Projects Submitted</h5>
                <div class="text-center">
                  <div class="red--text my-2">
                    <div class="display-4 font-weight-bold">22</div>
                    <p>Submitted</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 9</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h5 class="text--text">DEEP Projects Approved</h5>
                <div class="text-center">
                  <div class="orange--text my-2">
                    <div class="display-4 font-weight-bold">14</div>
                    <p>Approved</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 19</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h5 class="text--text">DEEP Projects Rejected</h5>
                <div class="text-center">
                  <div class="green--text my-2">
                    <div class="display-4 font-weight-bold">64</div>
                    <p>Rejected</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 16</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>

        
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
