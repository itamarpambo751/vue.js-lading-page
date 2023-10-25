<script>
import img from '../assets/img/original-cfe8f3f4cb0ab1d339f744476e72cb4d.png'
defineProps({
    type: {
        required: true,
        type: String
    }
})
</script>

<template>
    <center class="figure">
        <h2>Temos um leque de serviços muito variados</h2>
        <figure>
            <div class="images-collection">
                <div>
                    <img src="./../assets/img/original-cfe8f3f4cb0ab1d339f744476e72cb4d.png" alt="some-image">
                </div>
                <div>
                    <img src="./../assets/img/original-cfe8f3f4cb0ab1d339f744476e72cb4d.png" alt="some-image">
                </div>
                <div>
                    <img src="./../assets/img/original-cfe8f3f4cb0ab1d339f744476e72cb4d.png" alt="some-image">
                </div>
            </div>
            <figcaption>
                <h2>Desde os nossos serviços capilares...</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates debitis facere minus amet, necessitatibus voluptatibus maiores explicabo sint ipsum, sunt laborum deserunt odio odit quaerat, enim quos illum maxime!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati deleniti quo alias ab, modi natus atque commodi suscipit rem eligendi provident magni facilis recusandae consequatur velit architecto repellendus molestiae!
                </p>
            </figcaption>
        </figure>
    </center>
</template>

<style scoped>
center.figure > h2 {
    margin-bottom: 4rem;
}
center.figure figure {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
center.figure figure div.images-collection {
    display: flex;
}
center.figure figure div.images-collection div {
    border: 1px solid #eee;
    background-color: var(--text);
    width: 300px;
    height: 300px;
    box-shadow: 0 6px 20px 10px rgba(0, 0, 0, .03);
}
center.figure figure div.images-collection div:not(:first-child) {
    margin-left: -180px;
}
center.figure figure div.images-collection div:nth-child(2) {
    margin-top: 80px;
}
center.figure figure div.images-collection div:nth-child(3) {
    margin-top: 160px;
}
center.figure figure figcaption {
    text-align: start; 
}   
</style>