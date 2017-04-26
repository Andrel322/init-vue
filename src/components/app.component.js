import TimeListComponent from './time_list.component';
import TimeJogoComponent from './time_jogo.component';
import TimeZonaComponent from './time-zona.component';

export default {
    components: {
        'time_list': TimeListComponent,
        'time_jogo': TimeJogoComponent,
        'time_zona': TimeZonaComponent,
    },

    template: `
    <div class="container">
         <div class="row">
            <h3>Campeonato Brasileiro - Série A - 2016</h3>
            <a class="btn btn-primary" @click="showTabela">Tabela</a>
            <a class="btn btn-primary" @click="showNovoJogo">Novo jogo</a>
            <a class="btn btn-primary" @click="showZona">Ver Zonas</a>
            <br/><br/>
            <div v-show="view == 'tabela'">
                <time_list></time_list>
            </div>
            <!--<div v-if="view == 'novojogo'">-->
            <div v-if="view == 'novoJogo'">
               <time_jogo></time_jogo>
            </div>
            <div v-if="view == 'zona'">
               <time_zona></time_zona>
            </div>
         </div>
    </div>
    `,

    computed: {
        view(){
            //return store.state.view;
            return this.$store.state.view;
        }
    },
    methods: {
        showTabela(){
            this.$store.commit('show-time-list');
        },
        showNovoJogo(){
            this.$store.commit('show-time-novojogo');
        },
        showZona(){
            this.$store.commit('show-time-zona');
        },
    },
}