<template>
    <!-- this is website website -->
    <main>
    <img src="https://img.freepik.com/free-vector/neon-coming-soon-background_23-2148880698.jpg"  alt="Coming Soon...">
    <div class="text">
        <h1>
            Esoteric creatives website and club is coming soon
        </h1>
        <router-link to="/"><button>Back to Store</button></router-link>
    </div>
    </main>
</template>

<style >
Main {
    min-height: 100vh;
    background-color:cadetblue ;
}

img{
    justify-content: center;
    align-items: center;
    position:relative;
    top: 50%;
    margin: 100px;
}

div{
    text-align: center;
    font-size: 30px;
}
 
button{
    border-radius: 4px;
    padding: 5px;
    border: 4px solid white;
    background-color: black;
    color: rgb(221, 5, 221);
    font-size: 20px;
}

button:hover{
    border-radius: 4px;
    padding: 5px;
    border: 4px solid rgb(221, 5, 221);
    background-color: black;
    color: rgb(0, 138, 243);
    font-size: 25px;
}
</style>