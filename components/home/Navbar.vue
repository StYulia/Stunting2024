<script setup lang="ts">
import { Bell, CircleUser, Home, LineChart, Menu, Package, Package2, Search, ShoppingCart, Users } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import logo from '@/assets/img/logo.png'
</script>

<template>
  <div class="hidden border-r bg-muted/40 md:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <a href="/" class="flex items-center gap-2 font-semibold">
          <!-- <Package2 class="h-6 w-6" /> -->
          <img :src="logo" alt="Logo" class="h-6 w-6" />
          <span class="">Sistem Pakar</span>
        </a>
        <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
          <Bell class="h-4 w-4" />
          <span class="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div class="flex-1">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
          <a href="/" class="flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-primary transition-all hover:text-primary">
            <Home class="h-4 w-4" />
            Dashboard
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <ShoppingCart class="h-4 w-4" />
            Orders
            <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"> 6 </Badge>
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg text-muted-foreground px-3 py-2 transition-all hover:text-primary">
            <Package class="h-4 w-4" />
            Products
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <Users class="h-4 w-4" />
            Customers
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <LineChart class="h-4 w-4" />
            Analytics
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
