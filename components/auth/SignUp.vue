<script setup lang="ts">
import { ref } from "vue";
import { useSupabaseClient } from "#imports";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const client = useSupabaseClient();
const username = ref("");
const email = ref("");
const password = ref("");

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
      headers: {
        apikey: process.env.SUPABASE_KEY,
      },
    });
    if (error) {
      console.log("Sign up error:", error);
    } else {
      console.log("Sign up data:", data);
    }
  } catch (error) {
    console.log("Unexpected error:", error);
  }
}
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader class="flex items-center">
      <CardTitle>Sign Up</CardTitle>
      <CardDescription>Already have an account? <nuxt-link to="signin" class="text-blue-500">Sign In</nuxt-link></CardDescription>
    </CardHeader>
    <form @submit.prevent="signUp">
      <CardContent>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="username">Username</Label>
            <Input v-model="username" type="text" id="username" placeholder="Enter your username" required/>
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="email">Email</Label>
            <Input v-model="email" type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="password">Password</Label>
            <Input v-model="password" type="password" id="password" placeholder="Enter your password" required />
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex justify-between px-6 pb-6">
        <Button variant="outline">
          <a href="/">Cancel</a>
        </Button>
        <Button type="submit">Sign Up</Button>
      </CardFooter>
    </form>
  </Card>
</template>
