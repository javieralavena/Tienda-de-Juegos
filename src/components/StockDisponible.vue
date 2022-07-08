<template>
    <section>
        <div>
            <h1 class="titulo"> Tienda 32 Bits</h1>
            <h3 class="subtitulo">Lista de juegos</h3>
            <div class="borde">
                <div class="container">
                    <div class="tab">Código</div>
                    <div class="tab">Color</div>
                    <div class="tab">Nombre</div>
                    <div class="tab">Stock</div>
                    <div class="tab">Precio</div>
                    <div class="tab">Acciones</div>
                </div>
                <div class="container" v-for="juego in juegos" :key="juego.index" :style="{ color: juego.color }">
                    <div class="tab_content">{{ juego.codigo }}</div>

                    <div class="tab_content">
                        <select @change="changeColor(juego, $event)">
                            <option v-for="color in colores" :key="color.index" :value="color.value" :selected="juego.color ==color.value">
                                {{ color.color }}
                            </option>
                        </select>
                    </div>

                    <div class="tab_content">{{ juego.nombre }}</div>
                    <div class="tab_content">{{ juego.stock }}</div>
                    <div class="tab_content">${{ Number(juego.precio).toLocaleString('es-CL') }}</div>
                    <div class="tab-boton">
                        <button class="boton" @click="add(juego.codigo)">+</button>
                        <button class="boton" @click="remove(juego.codigo)">-</button>
                    </div>
                </div>
            </div>
            <div class="total">
                Total: {{(totalJuegos)}} juegos
            </div>
        </div>
    </section>

</template>

<script>
import { mapState, mapActions,mapGetters } from 'vuex'
export default {
    name: 'stock-disponible',
    // props: {},
    data: function () {
        return {}
    },
    computed: {
        ...mapState(['juegos', 'colores']),
        ...mapGetters(['totalJuegos'])
    },
    methods: {
        ...mapActions(['cambiarColor','addStock','removeStock']),
        changeColor(juego, event) {
            this.cambiarColor({codigo: juego.codigo, nuevoColor: event.target.value})
        },
        add(codigo){
            this.addStock(codigo)
        },
        remove(codigo){
            this.removeStock(codigo)
        }
        

        // -- UI Modification
        // -- Data fetching
        // -- Data handling and transformations
        // -- Validations and Error handling
        // -- Other functions
        // -- Vuex mappings
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.titulo {
    font-size: 50px;
}

.subtitulo {
    font-size: 30px;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1.5fr;
    width: 100%;
    margin: 0 auto;
    gap: 2px;
}

.tab {
    display: grid;
    font-size: 20px;
    font-weight: bold;
    border: solid 1px grey;
    padding: 5px 0px;
}

.tab_content {
    display: grid;
    font-size: 20px;
    border: solid 1px grey;
    margin-top: 2px;
    padding: 5px 0px;
}
.borde {
    display: grid;
    border: grey solid 1px;
    padding: 2px;
    width: 50%;
    margin: 0 auto;
}
.tab-boton {
    display: grid;
    font-size: 20px;
    border: solid 1px grey;
    margin-top: 2px;
    padding: 5px 0px;
    grid-template-columns: 30px 30px;
    justify-content: center;
}

select {
    font-size: 20px;
}
.boton {
    font-size: 20px;
}

.total{
    margin:30px 0px;
    font-size: 20px;
    font-weight: bold;
}
</style>