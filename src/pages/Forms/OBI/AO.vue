<template lang="">
    <div>
     <template>
         <v-stepper
                v-model="e6"
                vertical
            >
                <v-stepper-step
                :complete="e6 > 1"
                step="1"
                >
                Step 1
                </v-stepper-step>

                <v-stepper-content step="1">
                <v-card
                    color="white"
                    class="mb-12"
                    height="auto"
                >
                    <v-form v-model="valid">
                        <v-container>
                        <v-row>
                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="firstname"
                                outlined
                                label="Name of the Organization"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="lastname"
                                outlined
                                label="Legal Name"
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="email"
                                outlined
                                label="Year of Establishment"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="email"
                                outlined
                                label="Rged Address with state and pin code"
                                required
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="firstname"
                                outlined
                                label="HO Address"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="lastname"
                                outlined
                                label="Website"
                            ></v-text-field>
                            </v-col>
                            

                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-select
                                :items="items"
                                label="Registered Legal Entity"
                                outlined
                            ></v-select>
                            </v-col>

                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="email"
                                outlined
                                label="PAN Number"
                                required
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="firstname"
                                outlined
                                label="Registration Certificate Number"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="lastname"
                                outlined
                                label="80G Address"
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="email"
                                outlined
                                label="12A Number"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="3"
                            >
                            <v-text-field
                                v-model="email"
                                outlined
                                label="FCRA Number (if applicable)"
                                required
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-form>
                </v-card>
                <v-btn
                    color="primary"
                    @click="e6 = 2"
                >
                    Continue
                </v-btn>
                </v-stepper-content>

                <v-stepper-step
                :complete="e6 > 2"
                step="2"
                >
                Step 2
                </v-stepper-step>

                <v-stepper-content step="2">
                <v-card
                    color="grey lighten-1"
                    class="mb-12"
                    height="200px"
                ></v-card>
                <v-btn
                    text
                    color="primary"
                    @click="e6 = e6-1"
                >
                    Previous
                </v-btn>
                <v-btn
                    color="primary"
                    @click="e6 = 3"
                >
                    Continue
                </v-btn>
                </v-stepper-content>

                <v-stepper-step
                :complete="e6 > 3"
                step="3"
                >
                Step 3
                </v-stepper-step>

                <v-stepper-content step="3">
                <v-card
                    color="grey lighten-1"
                    class="mb-12"
                    height="200px"
                ></v-card>
                <v-btn
                    text
                    color="primary"
                    @click="e6 = e6-1"
                >
                    Previous
                </v-btn>
                <v-btn
                    color="primary"
                    @click="e6 = 4"
                >
                    Continue
                </v-btn>
                </v-stepper-content>

                <v-stepper-step step="4">
                    Step 4
                </v-stepper-step>
                <v-stepper-content step="4">
                <v-card
                    color="grey lighten-1"
                    class="mb-12"
                    height="200px"
                ></v-card>
                <v-btn
                    text
                    color="primary"
                    @click="e6 = e6-1"
                >
                    Previous
                </v-btn>
                </v-stepper-content>
            </v-stepper>
</template>   
    </div>
</template>
<script>
export default {
    name:'AO',
    data () {
      return {
        e6: 1,
        items: ['Section 8 or 25 Company', 'Trust', 'Society'],
      }
    },
}
</script>
<style lang="">
    
</style>