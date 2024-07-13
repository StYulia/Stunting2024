<script setup lang="ts">
import { ref } from 'vue';
import { useSupabaseClient } from '#imports';
import { useRouter } from 'vue-router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const supabase = useSupabaseClient();
const router = useRouter();

const email = ref('');
const password = ref('');

async function submit() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
      console.error('Error signing in:', error.message);
    } else {
      console.log('Signed in successfully:', data);
      router.push('/admin/dashboard');
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader class="flex items-center">
      <CardTitle>Sign In</CardTitle>
      <CardDescription>Don't have an account? <nuxt-link to="signup" class="text-blue-500">Sign Up</nuxt-link></CardDescription>
    </CardHeader>
    <form @submit.prevent="submit">
      <CardContent>
        <div class="grid items-center w-full gap-4">
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
        <Button type="submit">Sign In</Button>
      </CardFooter>
    </form>
  </Card>
</template>
