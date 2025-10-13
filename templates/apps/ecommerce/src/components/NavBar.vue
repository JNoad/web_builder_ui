<template>
    <nav>
        <ul>
            <li>
                <router-link to="/"><img src="@\assets\logo.svg" alt="Icon Community"></router-link>
            </li>
            <li>
                <RouterLink to="/">home</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">about</RouterLink>
            </li>
            <li>
                <RouterLink to="/services">services</RouterLink>
            </li>
            <li>
                <RouterLink to="/projects">projects</RouterLink>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style  lang="scss">
    nav {
        display: flex;
        align-items: center;
        width: 100%; height: 80px;
        background-color: $colorPri;
        ul {
            img {
                height: 20px;
            }
            width: 80%;
            display: flex;
            
            list-style: none;
            text-transform: capitalize;

            justify-content: space-evenly;
        }
    }
</style>