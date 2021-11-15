<template>
  <div>
    <v-container>
      <div class="d-flex align-center mt-7">
        <v-avatar size="110" class="mr-5">
          <img src="@/assets/img/brian-hughes.jpg" />
        </v-avatar>
        <div>
          <h1 class="font-weight-bold text-4xl">Welcome back, Brian!</h1>
          <div class="d-flex align-center mt-3">
            <v-icon class="mr-3" size="24">mdi-bell</v-icon>
            <p class="caption ma-0">You have 2 new messages and 15 new tasks</p>
          </div>
        </div>
      </div>
    </v-container>
    <div class="accent mt-6">
      <v-container class="px-md-7">
        <v-row class="my-2">
          <v-col cols="4" md="3">
            <v-card>
              <div class="pa-4">
                <h1 class="font-weight-medium">Summary</h1>
                <div class="text-center">
                  <div class="blue--text my-2">
                    <div class="display-4 font-weight-bold">21</div>
                    <p>Due Task</p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="4" md="3">
            <v-card>
              <div class="pa-4">
                <h1 class="font-weight-medium">Overdue</h1>
                <div class="text-center">
                  <div class="red--text my-2">
                    <div class="display-4 font-weight-bold">21</div>
                    <p>Tasks</p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="4" md="3">
            <v-card>
              <div class="pa-4">
                <h1 class="font-weight-medium">Issues</h1>
                <div class="text-center">
                  <div class="green--text my-2">
                    <div class="display-4 font-weight-bold">21</div>
                    <p>Open</p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="4" md="3">
            <v-card>
              <div class="pa-4">
                <h1 class="font-weight-medium">Features</h1>
                <div class="text-center">
                  <div class="orange--text my-2">
                    <div class="display-4 font-weight-bold">21</div>
                    <p>Proposals</p>
                  </div>
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
