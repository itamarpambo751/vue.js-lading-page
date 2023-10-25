<script>
import { RouterLink } from "vue-router"
</script>

<template>
    <header>
        <center>
            <RouterLink to="/">
                <h1>Desy&Lety</h1>
            </RouterLink>
            <nav>
                <RouterLink to="/about">Know us</RouterLink>
                <RouterLink to="/team">Team</RouterLink>
                <RouterLink to="/services">Services</RouterLink>
                <RouterLink to="/contact-us">Contact us</RouterLink>
            </nav>
            <div class="aditionals">
                <form>
                    <input type="text" placeholder="Search">
                </form>
            </div>
        </center>
    </header>
</template>

<style scoped>
    @import url(./Header.css);
</style>