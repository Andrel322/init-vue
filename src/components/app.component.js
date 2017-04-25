import TimeListComponent from './time_list.component';
import TimeJogoComponent from './time_jogo.component';
import store from '../store';

export default {
    components: {
        'time_list': TimeListComponent,
        'time_jogo': TimeJogoComponent
    },

    template: `
    <div class="container">
         <div class="row">
            <h3>Campeonato Brasileiro - Série A - 2016</h3>
            <div v-show="view == 'tabela'">
                <time_list></time_list>
            </div>
            <!--<div v-if="view == 'novojogo'">-->
            <div v-show="view == 'novoJogo'">
               <time_jogo></time_jogo>
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
        showView(view) {
            this.view = view;
        },
    },
}