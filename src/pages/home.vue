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
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h1 class="font-weight-medium">Summary</h1>
                <div class="text-center">
                  <div class="blue--text my-2">
                    <div class="display-4 font-weight-bold">21</div>
                    <p>Due Task</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 13</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h1 class="font-weight-medium">Overdue</h1>
                <div class="text-center">
                  <div class="red--text my-2">
                    <div class="display-4 font-weight-bold">17</div>
                    <p>Tasks</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 9</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h1 class="font-weight-medium">Issues</h1>
                <div class="text-center">
                  <div class="orange--text my-2">
                    <div class="display-4 font-weight-bold">24</div>
                    <p>Open</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 19</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card>
              <div class="pa-4">
                <h1 class="font-weight-medium">Features</h1>
                <div class="text-center">
                  <div class="green--text my-2">
                    <div class="display-4 font-weight-bold">38</div>
                    <p>Proposals</p>
                  </div>
                  <div style="opacity: 0.7">Completed: <b> 16</b></div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-card class="mt-5">
          <div class="pa-4">
            <h1 class="font-weight-medium">Github Issues Summary</h1>
            <v-row>
              <v-col cols="12" md="6">
                <h5 class="text--text mt-4">Description</h5>
                <v-card-text class="px-0 pb-0 pt-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti, deserunt. Esse accusantium perspiciatis quos
                    accusamus beatae maxime ducimus fugiat in tempora magnam
                    nesciunt quia ad alias, officiis maiores iusto commodi est
                    illum doloremque ab obcaecati numquam sunt deserunt
                    voluptatem.
                  </p>
                  <p>
                    Cupiditate ipsa dolorem odio aut error tenetur est quia
                    reprehenderit sint perspiciatis alias libero dolore optio
                    dolores veritatis veniam distinctio quae consequuntur
                    laudantium deleniti sed, vero tempore facilis sapiente.
                    Reprehenderit nobis autem, distinctio dolorem molestias
                    repellat placeat aut ipsa ab at nemo voluptatem illum nihil
                    enim unde consequuntur rem consectetur possimus quas. Fugit
                    quis recusandae iste quos qui ullam explicabo sint, omnis
                    aut fugiat totam aspernatur quaerat ipsam laborum quidem! Ea
                    deserunt id asperiores sunt eum nulla eius mollitia
                    excepturi iusto atque.
                  </p>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6">
                <h5 class="text--text mt-4 mb-3">Overview</h5>
                <v-row>
                  <v-col cols="6">
                    <v-card flat class="deep-purple lighten-5">
                      <div class="pa-4">
                        <div class="text-center">
                          <div class="deep-purple--text my-2 mt-4">
                            <div class="display-3 font-weight-bold">214</div>
                            <p>New Issues</p>
                          </div>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card flat class="teal lighten-5">
                      <div class="pa-4">
                        <div class="text-center">
                          <div class="teal--text my-2 mt-4">
                            <div class="display-3 font-weight-bold">75</div>
                            <p>Closed</p>
                          </div>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="3">
                    <v-card flat class="blue-grey lighten-5">
                      <div class="pa-4">
                        <div class="text-center">
                          <div class="blue-grey--text my-2 mt-4">
                            <div class="display-2 font-weight-bold">3</div>
                            <p class="caption">Closed</p>
                          </div>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="3">
                    <v-card flat class="blue-grey lighten-5">
                      <div class="pa-4">
                        <div class="text-center">
                          <div class="blue-grey--text my-2 mt-4">
                            <div class="display-2 font-weight-bold">4</div>
                            <p class="caption">Won't Fix</p>
                          </div>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="3">
                    <v-card flat class="blue-grey lighten-5">
                      <div class="pa-4">
                        <div class="text-center">
                          <div class="blue-grey--text my-2 mt-4">
                            <div class="display-2 font-weight-bold">8</div>
                            <p class="caption">Re-opened</p>
                          </div>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="3">
                    <v-card flat class="blue-grey lighten-5">
                      <div class="pa-4">
                        <div class="text-center">
                          <div class="blue-grey--text my-2 mt-4">
                            <div class="display-2 font-weight-bold">6</div>
                            <p class="caption">Needs Triage</p>
                          </div>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
